import React, { useState, useEffect } from 'react';
import { apis } from '../shared/api';
import styled from 'styled-components';
import { Text, Input, Button, Image } from '../elem';
import Template from '../components/Template';
import { __editArticle } from '../modules/article';
import { useDispatch, useSelector } from 'react-redux';
import Auth from '../util/Auth';
import { imageCreators } from '../modules/image';

import AWS from 'aws-sdk';

const ArticleEdit = ({ match, history }) => {
	const preview = useSelector((state) => state.image.preview);
	const [contents, setContents] = useState({
		title: '',
		content: '',
		imageUrl: '',
	});

	const dispatch = useDispatch();

	const {
		params: { id },
	} = match;

	AWS.config.update({
		region: 'ap-northeast-2',
		credentials: new AWS.CognitoIdentityCredentials({
			IdentityPoolId: 'ap-northeast-2:1341881f-0e47-4578-a076-7cf301309b84',
		}),
	});

	const fileInput = React.useRef();

	const filePreview = () => {
		const reader = new FileReader();
		const file = fileInput.current.files[0];

		reader.readAsDataURL(file);
		reader.onloadend = () => {
			dispatch(imageCreators.setPreview(reader.result));
		};
	};

	const selectFile = () => {
		const date = new Date();
		const file = fileInput.current.files[0];

		if (!file) {
			window.alert('이미지를 업로드해주세요');
			return;
		}

		const upload = new AWS.S3.ManagedUpload({
			params: {
				Bucket: 'todayrecipe',
				Key: file.name + date.getTime() + '.jpg',
				Body: file,
			},
		});

		const promise = upload.promise();

		promise
			.then((data) => {
				dispatch(imageCreators.imageUpload(data.Location));
				const content = {
					...contents,
					imageUrl: data.Location,
				};
				dispatch(__editArticle(id, content));
			})
			.catch((err) => {
				window.alert('이미지 업로드에 문제가 있어요!', err);
			});
	};

	useEffect(() => {
		const fetchArticle = async () => {
			try {
				const {
					data: { title, content, imageUrl },
				} = await apis.article(id);
				setContents({ title, content, imageUrl });
			} catch (e) {
				console.log(`아티클 불러오기 오류 : ${e}`);
			}
		};
		fetchArticle();
	}, [id]);

	return (
		<React.Fragment>
			<Auth history={history} />
			<Template>
				<Container>
					<Box>
						<Grid>
							<Text fs='20px' mg='10px 0 10px 0' fw='600'>
								제목
							</Text>
							<Input
								hei='50px;'
								_value={contents.title}
								label='오늘의 레시피 제목을 작성해주세요!'
								_onChange={(e) => {
									setContents({ ...contents, title: e.target.value });
								}}
							/>
						</Grid>
						<Grid>
							<Text fs='28px' mg='30px 0 10px 0' fw='600'>
								레시피
							</Text>
							<Input
								_value={contents.content}
								multiLine
								label='선정하신 요리의 레시피를 작성해주세요!'
								_onChange={(e) => {
									setContents({ ...contents, content: e.target.value });
								}}
							/>
						</Grid>
						<Grid
							style={{
								borderTop: '1px solid #ddd',
								marginTop: '50px',
								paddingTop: '30px',
							}}
						>
							<Text fs='20px' mg='0 0 10px 0' fw='600'>
								이미지 업로드
							</Text>
							<label style={{}} htmlFor='fileUpload'>
								<Image
									shape='rectangle'
									src={preview ? preview : contents.imageUrl}
								/>
							</label>
							<input
								style={{ display: 'none' }}
								type='file'
								ref={fileInput}
								onChange={filePreview}
								id='fileUpload'
							/>
						</Grid>
						<BtnBox>
							<Button
								primary
								large
								_onClick={() => {
									history.goBack();
								}}
							>
								이전으로
							</Button>
							<Button
								primary
								large
								_onClick={() => {
									const result = window.confirm('정말 이 레시피를 수정할까요?');
									if (result) {
										selectFile();
									}
								}}
							>
								수정완료
							</Button>
						</BtnBox>
					</Box>
				</Container>
			</Template>
		</React.Fragment>
	);
};

const Box = styled.div`
	width: 70vw;
	background-color: #fff;
	padding: 60px;
	box-sizing: border-box;
	border-radius: 10px;
	overflow: auto;
`;

const Grid = styled.div`
	width: 100%;
	display: block;
`;

const BtnBox = styled.div`
	display: block;
	text-align: center;
	margin-top: 5%;
`;

const Container = styled.div`
	margin-top: 50px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default ArticleEdit;

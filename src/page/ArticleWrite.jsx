import React from 'react';

import styled from 'styled-components';
import { Text, Input, Button } from '../elem';

import { useDispatch, useSelector } from 'react-redux';
import { articleActions } from '../modules/article';
import { imageCreators } from '../modules/image';
import Image from '../elem/Image';

import Template from '../components/Template';
import AWS from 'aws-sdk';

const ArticleWrite = (props) => {
	const dispatch = useDispatch();

	const [title, setTitle] = React.useState('');
	const [content, setContent] = React.useState('');

	const contents = {
		title: title,
		content: content,
	};

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

	const preview = useSelector((state) => state.image.preview);

	const selectFile = () => {
		const date = new Date();
		const file = fileInput.current.files[0];

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
				dispatch(articleActions.addArticleDB(content));
			})
			.catch((err) => {
				window.alert('이미지 업로드에 문제가 있어요!', err);
			});
	};

	return (
		<React.Fragment>
			<Template>
				<Container>
					<Box>
						<Text fs='20px' mg='0 0 10px 0' fw='600'>
							이미지 업로드
						</Text>
						<label style={{}} htmlFor='fileUpload'>
							<Image
								shape='rectangle'
								src={
									preview
										? preview
										: 'https://todayrecipe.s3.ap-northeast-2.amazonaws.com/defaultImage.png'
								}
							/>
						</label>
						<input
							style={{ display: 'none' }}
							type='file'
							ref={fileInput}
							onChange={filePreview}
							id='fileUpload'
						/>
						<Grid>
							<Text fs='28px' fw='600' mg='20px 0 10px 0'>
								제목
							</Text>
							<Input
								label='오늘의 레시피 제목을 작성해주세요!'
								_onChange={(e) => {
									setTitle(e.target.value);
								}}
							/>
						</Grid>
						<Grid>
							<Text fs='28px' mg='30px 0 10px 0' fw='600'>
								레시피
							</Text>
							<Input
								multiLine
								label='선정하신 요리의 레시피를 작성해주세요!'
								_onChange={(e) => {
									setContent(e.target.value);
								}}
							/>
						</Grid>
						<BtnBox>
							<Button primary large _onClick={selectFile}>
								작성완료
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
	height: 90vh;
	background-color: #fff;
	padding: 60px;
	box-sizing: border-box;
	box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.25);
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
	height: calc(100vh - 150px);
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
`;

export default ArticleWrite;

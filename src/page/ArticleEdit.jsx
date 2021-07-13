import React, { useState, useEffect } from 'react';
import { apis } from '../shared/api';
import styled from 'styled-components';
import { Text, Input, Button } from '../elem';
import Template from '../components/Template';
import { __editArticle } from '../modules/article';
import { useDispatch } from 'react-redux';

const ArticleEdit = ({ match, history }) => {
	const [contents, setContents] = useState({ title: '', content: '' });
	const dispatch = useDispatch();

	const {
		params: { id },
	} = match;

	useEffect(() => {
		const fetchArticle = async () => {
			try {
				const {
					data: { title, content },
				} = await apis.article(id);
				setContents({ title, content });
			} catch (e) {
				console.log(`아티클 불러오기 오류 : ${e}`);
			}
		};
		fetchArticle();
	}, [id]);

	return (
		<React.Fragment>
			<Template>
				<Container>
					<Box>
						<Grid>
							<Text size='28px' bold>
								제목
							</Text>
							<Input
								_value={contents.title}
								label='오늘의 레시피 제목을 작성해주세요!'
								_onChange={(e) => {
									setContents({ ...contents, title: e.target.value });
								}}
							/>
						</Grid>
						<Grid>
							<Text size='28px' margin='30px 0 0 0' bold>
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
										dispatch(__editArticle(id, contents));
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
	height: 80vh;
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
	width: 100%;
	height: calc(100vh - 150px);
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
`;

export default ArticleEdit;

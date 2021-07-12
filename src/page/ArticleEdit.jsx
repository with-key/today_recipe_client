import React, { useState, useEffect } from 'react';

import { apis } from '../shared/api';

import styled from 'styled-components';
import { Text, Input, Button } from '../elem';

import Template from '../components/Template';

const ArticleEdit = ({ match, history }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');

	const {
		params: { id },
	} = match;

	useEffect(() => {
		const fetchArticle = async () => {
			try {
				const { data } = await apis.article(id);
				setTitle(data.title);
				setContent(data.content);
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
								_value={title}
								label='오늘의 레시피 제목을 작성해주세요!'
								_onChange={(e) => {
									setTitle(e.target.value);
								}}
							/>
						</Grid>
						<Grid>
							<Text size='28px' margin='30px 0 0 0' bold>
								레시피
							</Text>
							<Input
								_value={content}
								multiLine
								label='선정하신 요리의 레시피를 작성해주세요!'
								_onChange={(e) => {
									setContent(e.target.value);
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
							<Button primary large>
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

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Flex, Text, Button } from '../elem';
import styled from 'styled-components';
import Template from '../components/Template';
import List from '../components/List';
import { __loadAarticles, __loadAarticleGetId } from '../modules/article';
import CommentForm from '../components/CommentForm';

const Article = ({ history, match }) => {
	const article = useSelector((store) => store.article.article);
	const dispatch = useDispatch();
	const {
		params: { id },
	} = match;

	useEffect(() => {
		dispatch(__loadAarticles());
		dispatch(__loadAarticleGetId(id));
	}, [id]);

	if (!article) {
		return <div>로딩중..</div>;
	}

	return (
		<Template>
			<Container>
				<Contents>
					<Title>
						<Flex between>
							<Text fs='40px' mg='20px 0' fw='600'>
								{article.title}
							</Text>
							<Button
								large
								primary
								_onClick={() => {
									history.push('/');
								}}
							>
								목록으로
							</Button>
						</Flex>
						<Flex gap='10px'>
							<Text color='#333' fs='16px'>
								조회 {article.views}
							</Text>
							<Text color='#333' fs='16px'>
								댓글 {article.commentCnt}
							</Text>
							<Text color='#333' fs='16px'>
								좋아요 {article.isLikeCnt}
							</Text>
						</Flex>
					</Title>
					<Main>
						<Info>
							<Flex between>
								<Text fs='18px' fw='500' color='#333'>
									{article.user.userId}
								</Text>
								<Text fs='18px' fw='500' color='gray'>
									{article.createdAt}
								</Text>
							</Flex>
						</Info>
						<Desc>
							<Text fs='16px' color='#333' lh='150%'>
								{article.content}
							</Text>
						</Desc>
						<Flex right mg='20px 0'>
							<Button primary>좋아요 {article.isLikeCnt}</Button>
						</Flex>
					</Main>
					<Comments>
						<Main>
							<Info>
								<Flex between>
									<Text fs='18px' fw='500' color='#333'>
										{article.user.userId}
									</Text>
									<Text fs='18px' fw='500' color='gray'>
										{article.createdAt}
									</Text>
								</Flex>
							</Info>
							<Desc>
								<Text fs='16px' color='#333' lh='150%'>
									{article.content}
								</Text>
							</Desc>
						</Main>
					</Comments>
				</Contents>
				<CommentForm />
				<List history={history} />
			</Container>
		</Template>
	);
};

const Desc = styled.div`
	width: 100%;
	padding: 48px;
	min-height: 300px;
`;

const Info = styled.div`
	margin: 20px 0;
`;

const Title = styled.div`
	border-bottom: 1px solid #ddd;
	padding-bottom: 24px;
`;

const Main = styled.main``;

const Container = styled.article`
	width: 70%;
	margin-top: 100px;
`;

const Contents = styled.div`
	background-color: #fff;
	border-radius: 10px;
	padding: 32px;
	width: 100%;
	min-height: 300px;
`;

const Comments = styled.div`
	margin-left: auto;
	padding: 24px 0 48px 0px;
	width: 95%;
	min-height: 300px;
	border-top: 2px solid #ddd;
`;
export default Article;

import React, { useEffect } from 'react';
import styled from 'styled-components';

// redux & api
import { useDispatch, useSelector } from 'react-redux';
import { __getComments } from '../modules/comment';
import {
	__loadAarticles,
	__loadAarticleGetId,
	__delArticle,
} from '../modules/article';

// compo
import Template from '../components/Template';
import List from '../components/List';
import Comments from '../components/Comments';
import CommentForm from '../components/CommentForm';

// elem
import { Flex, Text, Button } from '../elem';

const Article = ({ history, match }) => {
	// 1개의 페이지
	const article = useSelector((store) => store.article.article);
	const comments = useSelector((store) => store.comment.comments);
	const dispatch = useDispatch();

	const {
		params: { id },
	} = match;
	console.log(id);

	useEffect(() => {
		dispatch(__loadAarticles());
		dispatch(__loadAarticleGetId(id));
		dispatch(__getComments(id));
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
							<Flex gap='10px'>
								<Button
									large
									primary
									_onClick={() => {
										history.push(`/article/${id}/edit`);
									}}
								>
									수정
								</Button>
								<Button
									large
									primary
									_onClick={() => {
										const result =
											window.confirm('정말 이 레시피를 삭제할까요?');
										if (result) {
											dispatch(__delArticle(id));
										}
									}}
								>
									삭제
								</Button>
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
						</Flex>
						<Flex gap='10px'>
							<Text color='#333' fs='16px'>
								조회 10
								{/* {article.views} */}
							</Text>
							<Text color='#333' fs='16px'>
								댓글 10
								{/* {article.commentCnt} */}
							</Text>
							<Text color='#333' fs='16px'>
								좋아요 10
								{/* {article.isLikeCnt} */}
							</Text>
						</Flex>
					</Title>
					<Main>
						<Info>
							<Flex between>
								<Text fs='18px' fw='500' color='#333'>
									{article.username}
								</Text>
								<Text fs='18px' fw='500' color='gray'>
									{article.createdAt}
								</Text>
							</Flex>
						</Info>
						<Desc>
							<Flex center mg='20px 0'>
								<img src={article.imageUrl} alt='img'></img>
							</Flex>
							<Text fs='16px' color='#333' lh='150%'>
								{article.content}
							</Text>
						</Desc>
						<Flex right mg='10px 0'>
							<Button primary>좋아요 {article.isLikeCnt}</Button>
						</Flex>
					</Main>
					{comments.map((comment) => (
						<Comments comment={comment} key={comment.id} id={id} />
					))}
				</Contents>
				<CommentForm id={id} />
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

export default Article;

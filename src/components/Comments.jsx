import React from 'react';
import styled from 'styled-components';
import { Flex, Text, Button } from '../elem';
import { __delComment } from '../modules/comment';
import { useDispatch, useSelector } from 'react-redux';

const Comments = ({ comment, id }) => {
	const dispatch = useDispatch();
	// const user = useSelector((store) => console.log(store));
	return (
		<Container>
			<Main>
				<Info>
					<Flex between>
						<Text fs='18px' fw='500' color='#333'>
							{comment.commentAuthor}
						</Text>
						<Flex>
							<Text fs='18px' fw='500' color='gray'>
								{comment.createdAt}
							</Text>
						</Flex>
					</Flex>
				</Info>
				<Desc>
					<Text fs='16px' color='#333' lh='150%'>
						{comment.content}
					</Text>
				</Desc>
				<Flex right gap='10px' mg='10px 0'>
					<Button
						small
						_onClick={() => {
							console.log('연결');
						}}
					>
						수정
					</Button>
					<Button
						small
						_onClick={() => {
							const result = window.confirm('댓글을 정말 삭제할까요?');
							if (result) {
								dispatch(__delComment(id, comment.id));
							}
						}}
					>
						삭제
					</Button>
				</Flex>
			</Main>
		</Container>
	);
};

const Container = styled.div`
	margin-left: auto;
	padding: 0px 0 24px 0px;
	width: 95%;
	border-top: 2px solid #ddd;
`;
const Main = styled.main``;
const Info = styled.div`
	margin: 20px 0;
`;
const Desc = styled.div`
	width: 100%;
	padding: 0 48px;
	min-height: 50px;
`;

export default Comments;

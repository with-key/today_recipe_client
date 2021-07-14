import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex, Text, Button } from '../elem';
import { __delComment, __editComment } from '../modules/comment';
import { useDispatch, useSelector } from 'react-redux';

const Comments = ({ comment, id }) => {
	const dispatch = useDispatch();
	const [editMode, setEditMode] = useState(false);
	const [newContent, setNewContent] = useState(comment.content);
	const username = useSelector((store) => store.user.user);
	const isLogin = useSelector((store) => store.user.is_login);

	if (editMode) {
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
					<div>
						<CommentInput
							value={newContent}
							onChange={(e) => {
								setNewContent(e.target.value);
							}}
						/>
					</div>
					<Flex right gap='10px' mg='10px 0'>
						<Button
							small
							_onClick={() => {
								setEditMode(!editMode);
							}}
						>
							취소
						</Button>
						<Button
							small
							_onClick={() => {
								dispatch(
									__editComment(id, comment.id, newContent, setEditMode),
								);
							}}
						>
							완료
						</Button>
					</Flex>
				</Main>
			</Container>
		);
	}
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
				{isLogin && username.id === comment.commentAuthor ? (
					<Flex right gap='10px' mg='10px 0'>
						<Button
							small
							_onClick={() => {
								setEditMode(!editMode);
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
				) : (
					''
				)}
			</Main>
		</Container>
	);
};

const CommentInput = styled.textarea`
	width: 100%;
	height: 100px;
	resize: none;
	font-size: 16px;
	line-height: 150%;
	padding: 12px;
	border-radius: 8px;
	border: 1px solid #ddd;
	outline: none;
	&:focus {
		border: 3px solid #ff6b6b;
	}
`;

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

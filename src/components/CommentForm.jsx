import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button, Flex } from '../elem';
import { __addComment } from '../modules/comment';

const CommentForm = () => {
	const dispatch = useDispatch();
	const [text, setText] = useState();

	return (
		<Container
			onSubmit={(e) => {
				e.preventDefault();
				dispatch(__addComment(text));
			}}
		>
			<CommentInput
				onChange={(e) => {
					setText(e.target.value);
				}}
			></CommentInput>
			<Flex right mg='24px 0'>
				<Button large primary type='submit'>
					댓글 전송
				</Button>
			</Flex>
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

const Container = styled.form`
	margin: 32px 0;
	width: 100%;
	border-radius: 10px;
	background-color: #fff;
	padding: 32px;
`;

export default CommentForm;

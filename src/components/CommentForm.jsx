import React from 'react';
import styled from 'styled-components';
import { Button, Flex } from '../elem';

const CommentForm = () => {
	return (
		<Container>
			<CommentInput></CommentInput>
			<Flex right mg='24px 0'>
				<Button large primary>
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

const Container = styled.div`
	margin: 32px 0;
	width: 100%;
	border-radius: 10px;
	background-color: #fff;
	padding: 32px;
`;

export default CommentForm;

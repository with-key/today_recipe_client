import React from 'react';
import styled from 'styled-components';
import { Flex, Text, Button } from '../elem';

const Comments = ({ comment }) => {
	console.log(comment);
	return (
		<Container>
			<Main>
				<Info>
					<Flex between>
						<Text fs='18px' fw='500' color='#333'>
							{comment.userName}
						</Text>
						<Flex>
							<Text fs='18px' fw='500' color='gray'>
								2020-01-01 12:00
							</Text>
						</Flex>
					</Flex>
				</Info>
				<Desc>
					<Text fs='16px' color='#333' lh='150%'>
						{comment.text}
					</Text>
				</Desc>
				<Flex right gap='10px' mg='10px 0'>
					<Button small>수정</Button>
					<Button small>삭제</Button>
				</Flex>
			</Main>
		</Container>
	);
};

const Container = styled.div`
	margin-left: auto;
	padding: 24px 0 48px 0px;
	width: 95%;
	border-top: 2px solid #ddd;
`;
const Main = styled.main``;
const Info = styled.div`
	margin: 20px 0;
`;
const Desc = styled.div`
	width: 100%;
	padding: 48px;
	min-height: 100px;
`;

export default Comments;

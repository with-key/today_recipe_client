import React from 'react';
import styled from 'styled-components';

// elem
import { Button, Flex } from '../elem';

const Header = () => {
	return (
		<Container>
			<div>로고</div>
			<Flex gap='10px;'>
				<Button primary>로그인</Button>
				<Button primary>회원가입</Button>
			</Flex>
		</Container>
	);
};

const Container = styled.header`
	padding: 0 24px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid red;
	width: 100%;
	height: 80px;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
`;
export default Header;

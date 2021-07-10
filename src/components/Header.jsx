import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { history } from '../modules/configStore';

import { userCreators } from '../modules/user';
import { useDispatch } from 'react-redux';

// elem
import { Button, Flex } from '../elem';

const Header = () => {
	const dispatch = useDispatch();
	const is_login = useSelector(state => state.user.is_login);

	if(is_login){
		return (
			<Container>
				<div>로고</div>
				<Flex gap='10px;'>
					<Button primary>내 정보</Button>
					<Button primary onClick={() => {
						dispatch(userCreators.logOutDB())
					}}>로그아웃</Button>
				</Flex>
			</Container>
		);
	} 
		return (
			<Container>
				<div>로고</div>
				<Flex gap='10px;'>
					<Button primary onClick={()=>{history.push('/login')}}>로그인</Button>
					<Button primary onClick={()=>{history.push('/signup')}}>회원가입</Button>
				</Flex>
			</Container>
		);
};

const Container = styled.header`
	padding: 0 24px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #fff;
	width: 100%;
	height: 80px;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
`;
export default Header;

import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { userCreators } from '../modules/user';

import { history } from '../modules/configStore';

import styled from 'styled-components';
import { Button, Text, Input } from '../elem/index';
import Template from '../components/Template';

const Login = (props) => {
	const dispatch = useDispatch();
	const [id, setId] = useState('');
	const [pw, setPw] = useState('');

	const login = (e) => {
		e.preventDefault();
		dispatch(userCreators.setLoginDB(id, pw));
	};

	return (
		<Template>
			<Container>
				<Text fs='36px' fw='700' mg='0 0 10px 0'>
					로그인
				</Text>
				<Text fs='14px' fw='400' mg='0 0 36px 0'>
					회원가입을 위해 아래 정보를 입력해 주세요
				</Text>
				<form onSubmit={login}>
					<Input
						placeholder='🔑 아이디'
						_onChange={(e) => setId(e.target.value)}
					/>
					<Input
						type='password'
						placeholder='🔒 비밀번호'
						_onChange={(e) => {
							setPw(e.target.value);
						}}
					/>
					<BtnBox>
						<Button margin primary width='360px' _type='submit'>
							로그인하기
						</Button>
					</BtnBox>
				</form>

				<TextBox>
					<Text mg='0 10px 0 0'>아직 계정이 없으신가요?</Text>
					<Text
						cursor='pointer'
						fw='700'
						color='#ff6b6b'
						onClick={() => {
							history.push('/signup');
						}}
					>
						회원가입하기
					</Text>
				</TextBox>
			</Container>
		</Template>
	);
};

// return (
// 	<React.Fragment>
// 		<Template>
// 			<Container>
// 				<Text fs='36px' fw='700' mg='0 0 10px 0'>
// 					로그인
// 				</Text>
// 				<Text fs='14px' fw='400' mg='0 0 36px 0'>
// 					회원가입을 위해 아래 정보를 입력해 주세요
// 				</Text>
// 				<form onSubmit={loginHandler}>
// 					<Input
// 						placeholder='🔑 아이디'
// 						_onChange={(e) => setId(e.target.value)}
// 					/>
// 					<Input
// 						type='password'
// 						placeholder='🔒 비밀번호'
// 						_onChange={(e) => {
// 							setPw(e.target.value);
// 						}}
// 					/>
// 					<Text cursor='pointer' color='#199BC3' ta='right' mg='20px 0 0 0'>
// 						비밀번호를 분실하셨나요?
// 					</Text>
// 					<BtnBox>
// 						<Button margin primary width='360px' _type='submit'>
// 							로그인하기
// 						</Button>
// 						<Button yellow width='360px'>
// 							카카오로 로그인
// 						</Button>
// 					</BtnBox>
// 				</form>
// 				<TextBox>
// 					<Text mg='0 10px 0 0'>아직 계정이 없으신가요?</Text>
// 					<Text
// 						cursor='pointer'
// 						fw='700'
// 						color='#ff6b6b'
// 						onClick={() => {
// 							history.push('/signup');
// 						}}
// 					>
// 						회원가입하기
// 					</Text>
// 				</TextBox>
// 			</Container>
// 		</Template>
// 	</React.Fragment>
// );

const TextBox = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 30px;
`;

const BtnBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100px;
	margin-top: 50px;
`;

const Container = styled.div`
	margin-top: 50px;
	border-radius: 10px;
	background-color: #fff;
	padding: 50px;
`;

export default Login;

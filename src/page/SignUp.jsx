import React, { useEffect } from 'react';
import styled from 'styled-components';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { userCreators } from '../modules/user';

// compo & elem & shared
import { idCheck, emailCheck } from '../shared/regExp';
import Template from '../components/Template';
import { Text, Button, Input } from '../elem/index';

const SignUp = ({ history }) => {
	const isLogin = useSelector((store) => store.user.is_login);
	const dispatch = useDispatch();
	const [id, setId] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [pw, setPw] = React.useState('');
	const [pwcheck, setPwCheck] = React.useState('');

	const password = React.useRef();
	const passwordCheck = React.useRef();

	useEffect(() => {
		if (isLogin) history.push('/');
	});

	if (pw && pwcheck && pw === pwcheck) {
		password.current.innerText = '✔️';
		passwordCheck.current.innerText = '✔️';
	} else if (pw !== pwcheck) {
		password.current.innerText = '❌';
		passwordCheck.current.innerText = '❌';
	}

	const signUp = () => {
		if (id === '' || email === '' || pw === '' || pwcheck === '') {
			window.alert('아이디,비밀번호,닉네임을 모두 입력해주세요!');
			return;
		}

		if (!idCheck(id)) {
			window.alert('숫자 및 영어만 입력가능합니다.');
			return;
		}

		if (!emailCheck(email)) {
			window.alert('올바른 이메일 형식을 작성해주세요');
			return;
		}

		if (pw !== pwcheck) {
			window.alert('비밀번호와 비밀번호 재확인이 일치하지 않습니다.');
			return;
		}

		dispatch(userCreators.registerDB(id, email, pw, pwcheck));
	};

	return (
		<React.Fragment>
			<Template>
				<Container>
					<Text fs='36px' fw='700' mg='0 0 15px 0'>
						반가워요 🙌
					</Text>
					<Text fs='14px' fw='400' mg='0 0 36px 0'>
						회원가입을 위해 아래 정보를 입력해 주세요
					</Text>
					<InputBox>
						<Input
							placeholder='🔑 아이디'
							_onChange={(e) => {
								setId(e.target.value);
							}}
						/>
						<Text fs='12px' mg='6px 0 0 0'>
							숫자 및 영문으로만 사용가능합니다.
						</Text>
					</InputBox>
					<InputBox>
						<Input
							type='email'
							placeholder='📨 이메일'
							_onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<Text fs='12px' mg='6px 0 0 0'>
							아이디,비밀번호를 찾을시에 필요합니다.
						</Text>
					</InputBox>
					<InputBox>
						<Input
							type='password'
							placeholder='🔒 비밀번호'
							_onChange={(e) => {
								setPw(e.target.value);
							}}
						/>
						<LeftText>
							<Text fs='12px' mg='6px 0 0 0'>
								비밀번호를 입력해주세요.
							</Text>
							<p
								style={{ margin: '6px 0 0 0', fontSize: '12px' }}
								ref={password}
							></p>
						</LeftText>
					</InputBox>
					<InputBox>
						<Input
							type='password'
							placeholder='🔒 비밀번호 확인'
							_onChange={(e) => {
								setPwCheck(e.target.value);
							}}
						/>
						<LeftText>
							<Text fs='12px' mg='6px 0 50px 0'>
								비밀번호를 다시 입력해주세요.
							</Text>
							<p
								style={{ margin: '6px 0 0 0', fontSize: '12px' }}
								ref={passwordCheck}
							></p>
						</LeftText>
					</InputBox>
					<Button width='360px' primary _onClick={signUp}>
						회원가입
					</Button>
					<RightText>
						<Text mg='0 10px 0 0'>이미 계정이 있으신가요?</Text>
						<Text
							cursor='pointer'
							fw='700'
							color='#ff6b6b'
							onClick={() => {
								history.push('/login');
							}}
						>
							로그인하기
						</Text>
					</RightText>
				</Container>
			</Template>
		</React.Fragment>
	);
};

const LeftText = styled.div`
	display: flex;
`;

const RightText = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 30px;
`;

const InputBox = styled.div`
	width: 100%;
`;

const Container = styled.div`
	margin-top: 50px;
	border-radius: 10px;
	background-color: #fff;
	padding: 50px;
`;

export default SignUp;

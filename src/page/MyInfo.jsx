import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import Template from '../components/Template';

import {Text, Button} from '../elem/index';
import {apis} from '../shared/api';
import { history } from '../modules/configStore';

import { useDispatch,useSelector } from 'react-redux';
import { userCreators } from '../modules/user';

const MyInfo = () => {
    const [pw, setPw] = useState('');
    const [pwcheck, setPwcheck] = useState('');

    const [repassword, setRepassword] = useState('');
    const [renewpassword, setRenewpassword] = useState('');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userCreators.userInfoDB());
    },[])
    const users = useSelector((state) => state.user.user);
    if(!users){
        return <></>;
    }


    const password = {password:pw}
    const nowPassword = () => {
        apis
        .userPassword(password)
        .then((res) => {
            setPwcheck(true);
            window.alert("확인되었습니다!");
        }).catch((err) => {
            window.alert("비밀번호를 다시 확인해주세요");
        })
    }

    const newpw = {
        newpassword: repassword,
        renewpassword: renewpassword
    }

    const newPassword = () => {
        if(pwcheck){
            apis
            .userNewPassword(newpw)
            .then((res) => {
                window.alert("비밀번호 변경이 완료되었습니다!")
                history.push('/')
            }).catch((err) => {
                window.alert("비밀번호를 다시 확인해주세요.")
            })
        } else {
            window.alert("현재 비밀번호를 먼저 확인해주세요.")
        }
    }

    return (
        <React.Fragment>
            <Template>
                <Container>
                    <TextBox>
                        <Text color="#ff7776" mg="0 30px 0 0" fs="20px" fw="600">아이디</Text>
                        <Text fs="14px" fw="400">{users.id}</Text>
                    </TextBox>
                    <TextBox>
                        <Text color="#ff7776" mg="0 30px 0 0" fs="20px" fw="600">이메일</Text>
                        <Text fs="14px" fw="400">{users.email}</Text>
                    </TextBox>
                    <TextBox>
                        <NormalInput onChange={(e) => {
                            setPw(e.target.value);
                        }} type="password" placeholder="현재 비밀번호를 입력해주세요."/>
                        <Button primary _onClick={nowPassword}>확인</Button>
                    </TextBox>
                    <SecondInput onChange={(e) => {
                        setRepassword(e.target.value);
                    }}type="password" placeholder="변경할 비밀번호를 입력해주세요"/>
                    <SecondInput onChange={(e) => {
                        setRenewpassword(e.target.value);
                    }}type="password" placeholder="변경할 비밀번호를 재확인해주세요"/>
                    <Button primary width="100%" _onClick={newPassword}>비밀변호 변경</Button>
                </Container>
            </Template>
        </React.Fragment>
    )
}

const NormalInput = styled.input`
	border: 1px solid #c4c4c4;
	border-radius: 4px;
	width: 100%;
	padding: 8px 8px;
	box-sizing: border-box;
	display: block;
    margin-right: 10px;

	&:focus {
		outline: none;
		border: 1px solid #ff7776;
	}
`;

const SecondInput = styled.input`
	border: 1px solid #c4c4c4;
	border-radius: 4px;
	width: 100%;
	padding: 8px 8px;
	box-sizing: border-box;
	display: block;
    margin-right: 10px;
    margin-bottom: 10px;

	&:focus {
		outline: none;
		border: 1px solid #ff7776;
	}
`;

const TextBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const Container = styled.div`
	margin-top: 50px;
	border-radius: 10px;
	background-color: #fff;
	padding: 50px;
`;

export default MyInfo;
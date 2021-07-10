import React from 'react';

import { useDispatch } from 'react-redux';
import { userCreators } from '../modules/user';
import { idCheck,nickCheck } from '../shared/regExp';

const SignUp = (props) => {
    const dispatch = useDispatch();

    const [id,setId] = React.useState('');
    const [nick,setNick] = React.useState('');
    const [pw,setPw] = React.useState('');
    const [pwcheck,setPwCheck] = React.useState('');


    const signUp = () => {
        if(id === '' || nick === '' || pw === '' || pwcheck === ''){
            window.alert("아이디,비밀번호,닉네임을 모두 입력해주세요!");
            return;
        }

        if(!idCheck(id)){
            window.alert("숫자 및 영어만 입력가능합니다.");
            return;
        }

        if(!nickCheck(nick)){
            window.alert("특수문자는 사용 불가능합니다.");
            return;
        }

        if(pw !== pwcheck){
            window.alert("비밀번호와 비밀번호 재확인이 일치하지 않습니다.");
            return;
        }

        dispatch(userCreators.registerDB(id,nick,pw,pwcheck));
    }

    return (
        <React.Fragment>
            <div>
                <div>
                    <label>아이디</label>
                    <input type='text' onChange={(e) => {
                        setId(e.target.value);
                    }}></input>
                </div>
                <div>
                    <label>닉네임</label>
                    <input type='text' onChange={(e) => {
                        setNick(e.target.value);
                    }}></input>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type='password' onChange={(e) => {
                        setPw(e.target.value);
                    }}></input>
                </div>
                <div>
                    <label>비밀번호 재확인</label>
                    <input type='password' onChange={(e) => {
                        setPwCheck(e.target.value);
                    }}></input>
                </div>
                <button onClick={signUp}>회원가입</button>
            </div>
        </React.Fragment>
    )
}

export default SignUp;

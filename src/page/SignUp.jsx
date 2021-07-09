import React from 'react';

import { useDispatch } from 'react-redux';
import { userCreators } from '../modules/user';

const SignUp = (props) => {
    const dispatch = useDispatch();

    const [id,setId] = React.useState('');
    const [nick,setNick] = React.useState('');
    const [pw,setPw] = React.useState('');
    const [pwcheck,setPwCheck] = React.useState('');

    const signUp = () => {
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

import React from 'react';

import { useDispatch } from 'react-redux';
import { userCreators } from '../modules/user';
import {apis} from '../shared/api';

const Login = (props) => {
    apis.login(res=>console.log(res))
    const dispatch = useDispatch();

    const [id,setId] = React.useState("");
    const [pw,setPw] = React.useState("");

    const login = () => {
        dispatch(userCreators.setLoginDB(id,pw));
    }

    return (
        <React.Fragment>
            <div>
                <div>
                    <label>로그인</label>
                    <input type='text' onChange={(e) => {
                        setId(e.target.value);
                    }}></input>
                </div>
                <div>
                    <label>비밀번호</label>
                    <input type='password' onChange={(e) => {
                        setPw(e.target.value);
                    }}></input>
                </div>
                <button onClick={login}>로그인하기</button>
            </div>
        </React.Fragment>
    )
}

export default Login;
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Auth = ({ history }) => {
	const isLogin = useSelector((store) => store.user.is_login);
	useEffect(() => {
		if (!isLogin) {
			history.push('/');
		}
	}, []);

	return <></>;
};

export default Auth;

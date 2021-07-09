import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Home from '../page/Home';
import Login from '../page/Login';
import SignUp from '../page/SignUp';

export default function Router() {
	return (
		<Switch>
			<Route path='/' component={Home} exact />
			{/* 👇 컴포넌트 추가 */}
			<Route path='/login' component={Login} exact />
			<Route path='/signup' component={SignUp} exact />
		</Switch>
	);
}

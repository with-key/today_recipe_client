import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Home from '../page/Home';
import Login from '../page/Login';
import SignUp from '../page/SignUp';

import Article from '../page/Article';

export default function Router() {
	return (
		<>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/article/:id' component={Article} exact />
				<Route path='/login' component={Login} exact />
				<Route path='/signup' component={SignUp} exact />
			</Switch>
		</>
	);
}

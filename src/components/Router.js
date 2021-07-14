import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// components
import Home from '../page/Home';
import Login from '../page/Login';
import SignUp from '../page/SignUp';

import Article from '../page/Article';
import ArticleWrite from '../page/ArticleWrite';
import ArticleEdit from '../page/ArticleEdit';

export default function Router() {
	return (
		<>
			<Switch>
				<Route path='/' component={Home} exact />
				<Route path='/article/:id' component={Article} exact />
				<Route path='/article/:id/edit' component={ArticleEdit} exact />
				<Route path='/login' component={Login} exact />
				<Route path='/signup' component={SignUp} exact />
				<Route path='/add_article' component={ArticleWrite} exact />
				<Redirect from='*' to='/' />
			</Switch>
		</>
	);
}

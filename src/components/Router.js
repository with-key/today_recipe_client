import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Home from '../page/Home';
import Article from '../page/Article';

export default function Router() {
	return (
		<Switch>
			<Route path='/' component={Home} exact />
			<Route path='/article/:id' component={Article} exact />
			{/* <Route path='/' component={Home} exact /> */}
			{/* <Route path='/' component={Home} exact /> */}
		</Switch>
	);
}

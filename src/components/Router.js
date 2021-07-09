import React from 'react';
import { Route, Switch } from 'react-router-dom';

// components
import Home from '../page/Home';

export default function Router() {
	return (
		<Switch>
			<Route path='/' component={Home} exact />
			{/* 👇 컴포넌트 추가 */}
			{/* <Route path='/' component={Home} exact /> */}
			{/* <Route path='/' component={Home} exact /> */}
			{/* <Route path='/' component={Home} exact /> */}
		</Switch>
	);
}

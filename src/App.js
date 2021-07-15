import React, { useEffect } from 'react';
import Router from './components/Router';
import GlobalStyles from './components/GlobalStyles';
import ScrollToTop from './util/ScrollToTop';

import { userCreators } from './modules/user';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(userCreators.loginCheckDB());
	}, []);

	return (
		<>
			<ScrollToTop></ScrollToTop>
			<GlobalStyles />
			<Router />
		</>
	);
}

export default App;

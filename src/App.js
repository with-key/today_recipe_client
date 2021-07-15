import React, { useEffect } from 'react';

// redux
import { userCreators } from './modules/user';
import { useDispatch } from 'react-redux';

// compo & elem & share & util
import Router from './components/Router';
import GlobalStyles from './components/GlobalStyles';
import ScrollToTop from './util/ScrollToTop';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(userCreators.loginCheckDB());
	}, []);

	return (
		<>
			<ScrollToTop />
			<GlobalStyles />
			<Router />
		</>
	);
}

export default App;

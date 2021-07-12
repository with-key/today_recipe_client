import Router from './components/Router';
import GlobalStyles from './components/GlobalStyles';
import ScrollToTop from './util/ScrollToTop';

function App() {
	return (
		<>
			<ScrollToTop></ScrollToTop>
			<GlobalStyles />
			<Router />
		</>
	);
}

export default App;

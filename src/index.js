import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './modules/configStore'; // 위에 애랑 짝이에요.

import { ConnectedRouter } from 'connected-react-router';
import { history } from './modules/configStore'; // 위에 애랑 짝입니다.

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root'),
);

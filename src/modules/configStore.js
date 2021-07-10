import { createStore, combineReducers, applyMiddleware } from 'redux';

// middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// reducers
import user from './user';
import article from './article';
import comment from './comment';

// redux router
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

const history = createBrowserHistory();
const rootReducer = combineReducers({
	comment,
	article,
	user,
	router: connectRouter(history),
});
const middleware = [thunk.withExtraArgument({ history }), logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export { history };
export default store;

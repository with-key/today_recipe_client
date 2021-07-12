import { createStore, combineReducers, applyMiddleware } from 'redux';

// middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// reducers
import user from './user';
import article from './article';
import comment from './comment';
import image from './image';

// redux router
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';

const history = createBrowserHistory();
const rootReducer = combineReducers({
	comment,
	article,
	user,
	image,
	router: connectRouter(history),
});
const middleware = [thunk.withExtraArgument({ history }), logger];
const store = createStore(rootReducer, applyMiddleware(...middleware));

export { history };
export default store;

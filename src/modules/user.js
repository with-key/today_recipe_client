import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { deleteCookie, setCookie } from '../shared/Cookie';
import { apis } from '../shared/api';

// action
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

// action creator
const setLogin = createAction(LOGIN, (user) => ({ user }));
const logOut = createAction(LOGOUT, (user) => ({ user }));

// initialState
const initialState = {
	user: null,
	is_login: false,
};

// Thunk function
const registerDB = (id, email, pw, pwcheck) => {
	return function (dispatch, getState, { history }) {
		apis
			.signup(id, email, pw, pwcheck)
			.then((res) => {
				history.push('/login');
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const setLoginDB = (id, pwd) => {
	return function (dispatch, getState, { history }) {
		apis
			.login(id, pwd)
			.then((res) => {
				setCookie('token', res.data[1].token, 7);
				setCookie('username', res.data[0].username, 7);
				dispatch(setLogin({ id: id }));
				history.replace('/');
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const logOutDB = () => {
	return function (dispatch, getState, { history }) {
		deleteCookie('token');
		deleteCookie('username');
		dispatch(logOut());
		history.replace('/login');
	};
};

// reducer
export default handleActions(
	{
		[LOGIN]: (state, action) =>
			produce(state, (draft) => {
				draft.user = action.payload.user;
				draft.is_login = true;
			}),
		[LOGOUT]: (state, action) =>
			produce(state, (draft) => {
				draft.user = null;
			}),
	},
	initialState,
);

const userCreators = {
	setLoginDB,
	registerDB,
	logOutDB,
};

export { userCreators };

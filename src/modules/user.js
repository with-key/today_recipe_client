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

const registerDB = (id, email, pw, pwcheck) => {
	return function (dispatch, getState, { history }) {
		apis
			.signup(id, email, pw, pwcheck)
			.then(() => {
				dispatch(
					setLogin({id: id}),
				);
				history.push('/');
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

// Thunk function
const setLoginDB = (id, pwd) => {
	return function (dispatch, getState, { history }) {
		apis
		.login(id,pwd)
		.then((res) => {
			setCookie('is_login', 'true', 5);
			console.log(res)
			dispatch(setLogin({id: id,}));
			history.replace('/');
		}).catch(err => {
			console.log(err)
		})
	};
};

const logOutDB = () => {
	return function (dispatch, getState, { history }) {
		apis
		.logout()
		.then(() => {
			deleteCookie('is_login');
			dispatch(logOut());
			history.push('/');
		})
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
				draft.is_login = false;
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

import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { deleteCookie, setCookie } from '../shared/Cookie';
import { apis } from '../shared/api';
import axios from 'axios';

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
				window.alert('이미 존재하는 아이디 또는 이메일입니다.');
				console.log(err);
			});
	};
};

const setLoginDB = (id, pwd) => {
	return function (dispatch, getState, { history }) {
		apis
			.login(id, pwd)
			.then((res) => {
				axios.defaults.headers.common['X-AUTH-TOKEN'] = ` ${res.data[1].token}`;
				setCookie('token', res.data[1].token, 7);
				localStorage.setItem('username', res.data[0].username);
				dispatch(setLogin({ id: id }));
				history.push('/');
				// window.location.reload();
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

const logOutDB = () => {
	return function (dispatch, getState, { history }) {
		deleteCookie('token');
		localStorage.removeItem('username');
		dispatch(logOut());
		history.replace('/login');
	};
};

const loginCheckDB = () => {
	return function(dispatch, getState, {history}){
		const userId = localStorage.getItem('username')
		const tokenCheck = document.cookie;
		if(tokenCheck) {
			dispatch(setLogin({id: userId}))
		} else {
			dispatch(logOut());
		}
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
	loginCheckDB,
};

export { userCreators };

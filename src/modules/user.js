import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { deleteCookie, setCookie } from '../shared/Cookie';
import {apis} from '../shared/api';


// action
const LOGIN = 'LOGIN';
const LOGOUT = "LOGOUT";

// action creator

const setLogin = createAction(LOGIN, (user) => ({user}));
const logOut = createAction(LOGOUT, (user) => ({user}));

// initialState
const initialState = {
	user: null,
	is_login: false,
}

const registerDB = (id,nick,pw,pwcheck) => {
	return function(dispatch, getState, {history}){
		apis
		.signup(id,nick,pw,pwcheck)
		.then(()=> {
			dispatch(setLogin({
				id: id,
				nick: nick,
			}))
			history.push('/');
		}).catch((err) => {
			console.log(err)
		})
	}
}

// Thunk function
const setLoginDB = (id,pwd) => {
	return function (dispatch,getState,{history}){
		dispatch(setLogin())
		history.replace('/')
	}
}

const logOutDB = () => {
	return function (dispatch, getState,{history}){
		dispatch(logOut())
		history.push('/')
	}
}


// reducer
export default handleActions({
	[LOGIN]: (state, action) => produce(state,(draft) => {
		setCookie('result','success',5)
		draft.user = action.payload.user;
		draft.is_login = true;
	}),
	[LOGOUT]: (state,action) => produce(state, (draft) => {
		deleteCookie('result');
		draft.user = null;
		draft.is_login = false;
	}),
}, initialState)

const userCreators = {
	setLoginDB,
	registerDB,
	logOutDB,
}

export { userCreators }

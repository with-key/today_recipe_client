import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { setCookie } from '../shared/Cookie';


// action
const LOGIN = 'LOGIN';

// action creator

const setLogin = createAction(LOGIN, (user) => ({user}));

// initialState
const initialState = {
	user: null,
	is_login: false,
}

const registerDB = (id,pwd,pwdcheck,user_name) => {
	return function(dispatch, getState, {history}){
		dispatch(setLogin({
			user_name: user_name,
			id: id,
		}))
		history.push('/');
	}
}

// Thunk function
const setLoginDB = (id,pwd) => {
	return function (dispatch,getState,{history}){
		dispatch(setLogin())
		history.push('/')
	}
}

// reducer
export default handleActions({
	[LOGIN]: (state, action) => produce(state,(draft) => {
		setCookie('result','success',5)
		draft.user = action.payload.user;
		draft.is_login = true;
	})
}, initialState)

const userCreators = {
	setLoginDB,
	registerDB
}

export { userCreators }

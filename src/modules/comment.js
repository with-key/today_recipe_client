import { createAction, handleActions } from 'redux-actions';
import { apis } from '../shared/api';

// action
const ADD = 'comment/ADD';
const LOAD = 'comment/LOAD';
const DELETE = 'comment/DELETE';

// action creator
const addComment = createAction(ADD, (comment) => ({ comment }));
const getComments = createAction(LOAD, (comment) => ({ comment }));
const delComment = createAction(DELETE, (coId) => ({ coId }));

// initialState
const initialState = {
	comment: null,
	comments: [],
};

// Thunk function
export const __delComment = (id, coId) => (dispatch) => {
	try {
		// console.log('delete ok?');
		apis.delComment(id, coId);
		dispatch(delComment(coId));
	} catch (e) {}
};
export const __addComment =
	(id, content) =>
	async (dispatch, getState, { history }) => {
		try {
			console.log(id, content);
			const { data } = await apis.addComment(id, content);
			console.log(data);
			dispatch(addComment(data));
		} catch (e) {}
	};

export const __getComments =
	(id) =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await apis.comments(id);
			dispatch(getComments(data));
		} catch (e) {
			console.log(`코멘트 불러오기 실패! ${e}`);
		}
	};

// reducer
export default handleActions(
	{
		[ADD]: (state, action) => {
			console.log(action);
			return {
				...state,
				comments: state.comments.concat(action.payload.comment),
			};
		},
		[LOAD]: (state, action) => {
			return {
				...state,
				comments: action.payload.comment,
			};
		},
		[DELETE]: (state, action) => {
			return {
				...state,
				comments: state.comments.filter(
					(comment) => comment.id !== action.payload.coId,
				),
			};
		},
	},
	initialState,
);

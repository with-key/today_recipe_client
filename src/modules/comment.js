import { createAction, handleActions } from 'redux-actions';
import { apis } from '../shared/api';

// action
const ADD = 'comment/ADD';
const LOAD = 'comment/LOAD';

// action creator
const addComment = createAction(ADD, (comment) => ({ comment }));
const getComments = createAction(LOAD, (comment) => ({ comment }));

// initialState
const initialState = {
	comment: null,
	comments: [],
};

// Thunk function
export const __addComment =
	(text) =>
	async (dispatch, getState, { history }) => {
		try {
			const data = await apis.addComment({ text });
			// 작업중
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
			return {
				...state,
			};
		},
		[LOAD]: (state, action) => {
			return {
				...state,
				comments: action.payload.comment,
			};
		},
	},
	initialState,
);

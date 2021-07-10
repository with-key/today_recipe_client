import { createAction, handleActions } from 'redux-actions';
import { apis } from '../shared/api';

// action
const ADD = 'comment/LOAD';

// action creator
const addComment = createAction(ADD, (comment) => ({ comment }));

// initialState
const initialState = {
	comment: null,
};

// Thunk function
export const __addComment =
	() =>
	async (dispatch, getState, { history }) => {
		try {
			dispatch(addComment());
		} catch (e) {}
	};

// reducer
export default handleActions(
	{
		[ADD]: (state, action) => {
			return {
				...state,
			};
		},
	},
	initialState,
);

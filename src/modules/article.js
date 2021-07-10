import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../shared/api';

// action
const LOAD = 'article/LOAD';
const LOAD_ID = 'article/LOAD_Id';
const ADD_ARTICLE = 'ADD_ARTICLE';

// action creator
const loadAarticles = createAction(LOAD, (articles) => ({ articles }));
const loadArticleGetId = createAction(LOAD_ID, (id) => ({ id }));
const addArticle = createAction(ADD_ARTICLE, (content) => ({ content }));

// initialState
const initialState = {
	list: [],
	article: null,
};

// Thunk function
export const __loadAarticles =
	() =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await apis.articles();
			dispatch(loadAarticles(data));
		} catch (e) {
			console.log(`아티클 조회 오류 발생!${e}`);
		}
	};

const addArticleDB = (title = '', contents = '') => {
	return function (dispatch, getState, { history }) {
		apis
			.add(title, contents)
			.then(() => {
				history.push('/');
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const __loadAarticleGetId =
	(id) =>
	async (dispatch, getState, { history }) => {
		try {
			const { data } = await apis.article(id);

			dispatch(loadArticleGetId(data));
		} catch (e) {
			console.log(`개별 아티클 조회 오류 발생!${e}`);
		}
	};

// reducer
export default handleActions(
	{
		[LOAD]: (state, action) => {
			console.log(action);
			return {
				...state,
				list: action.payload.articles,
			};
		},
		[LOAD_ID]: (state, action) => {
			return {
				...state,
				article: action.payload.id,
			};
		},
		[ADD_ARTICLE]: (state, action) => produce(state, (draft) => {}),
	},
	initialState,
);

const articleActions = {
	addArticleDB,
};

export { articleActions };

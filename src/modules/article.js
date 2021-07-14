import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { apis } from '../shared/api';
import { imageCreators } from './image';

// action
const LOAD = 'article/LOAD';
const LOAD_ID = 'article/LOAD_Id';
const ADD_ARTICLE = 'article/ADD_ARTICLE';
const EDIT = 'article/EDIT';
const DELETE = 'article/DELETE';
const SEARCH = 'article/SEARCH';

// action creator
const loadAarticles = createAction(LOAD, (articles) => ({ articles }));
const loadArticleGetId = createAction(LOAD_ID, (id) => ({ id }));
const addArticle = createAction(ADD_ARTICLE, (articles) => ({ articles }));
const editArticle = createAction(EDIT, (id, newArticle) => ({
	id,
	newArticle,
}));

const delArticle = createAction(DELETE, (id) => ({ id }));
const searchArticle = createAction(SEARCH, (articles) => ({articles}));

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
			dispatch(imageCreators.setPreview(null));
		} catch (e) {
			console.log(`아티클 조회 오류 발생!${e}`);
		}
	};

export const addArticleDB = (content) => {
	return function (dispatch, getState, { history }) {
		console.log(content);
		apis
			.add(content)
			.then(() => {
				console.log(content);
				dispatch(addArticle(content));
				history.push('/');
				dispatch(imageCreators.setPreview(null));
			})
			.catch((err) => {
				window.alert('로그인한 회원만 작성할 수 있습니다!');
				console.log(err);
			});
	};
};

export const searchArticleDB = (value) => {
	return function (dispatch, getState, {history}) {
		apis
		.search(value)
		.then((res) => {
			console.log(res);
			dispatch(searchArticle(res.data));
		}).catch((err) => {
			console.log(err);
		})
	}
}

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

export const __editArticle =
	(id, newArticle) =>
	async (dispatch, getState, { history }) => {
		console.log(id, newArticle);
		try {
			await apis.edit(id, newArticle);
			dispatch(editArticle(id, newArticle));
			history.goBack();
		} catch (e) {
			console.log(e);
		}
	};

export const __delArticle =
	(id) =>
	async (dispatch, getState, { history }) => {
		try {
			await apis.del(id);
			history.replace('/');
		} catch (e) {}
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
		[ADD_ARTICLE]: (state, action) =>
			produce(state, (draft) => {
				draft.list.push(action.payload.articles);
			}),
		[EDIT]: (state, action) => {
			return {
				...state,
				// 상태관리할 필요가 없는 것 같다...
			};
		},
		[SEARCH]: (state, action) => produce(state, (draft) => {
			console.log(action)
			draft.list = action.payload.articles
		})
	},
	initialState,
);

const articleActions = {
	addArticleDB,
};

export { articleActions };

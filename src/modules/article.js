import { createAction, handleActions } from "redux-actions";
import produce from 'immer';

import {apis} from '../shared/api';

const ADD_ARTICLE = "ADD_ARTICLE";

const initialState = {
    list: [],
}

const addArticle = createAction(ADD_ARTICLE, (content) => ({content}));

const addArticleDB = (title="",contents="") => {
    return function (dispatch, getState, {history}){
        apis
        .add(title,contents)
        .then(() => {
            history.push('/')
        }).catch((err) => {
            console.log(err)
        })
    }
}

export default handleActions({
    [ADD_ARTICLE]: (state,action) => produce(state, (draft) => {
        
    })
}, initialState)

const articleActions = {
    addArticleDB,
}

export {articleActions}
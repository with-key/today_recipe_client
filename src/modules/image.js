import { createAction,handleActions } from "redux-actions";
import produce from 'immer';
import AWS from 'aws-sdk';


const PREVIEW = 'image/PREVIEW';

const setPreview = createAction(PREVIEW,(image_url) => ({image_url}));

const initialState = {
    preview: null,
}

export default handleActions({
    [PREVIEW] : (state,action) => produce(state, (draft) => {
        console.log(action)
        draft.preview = action.payload.image_url;
    })
}, initialState)

const imageCreators = {
    setPreview,
}

export { imageCreators }
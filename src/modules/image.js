import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const PREVIEW = 'image/PREVIEW';
const UPLOAD = 'image/UPLOAD';

const setPreview = createAction(PREVIEW, (preview) => ({ preview }));
const imageUpload = createAction(UPLOAD, (imageUrl) => ({imageUrl}))

const initialState = {
	imageUrl: null,
    preview: null,
};

export default handleActions(
	{
		[UPLOAD]: (state, action) =>
			produce(state, (draft) => {
				draft.imageUrl = action.payload.imageUrl;
		}),
        [PREVIEW]: (state, action) => 
            produce(state, (draft) => {
                draft.preview = action.payload.preview;
        }),
	},
	initialState,
);

const imageCreators = {
	setPreview,
    imageUpload,
};

export { imageCreators };

import {BookPageStateType} from "types/state";
import produce from "immer";

const initialState = {
	info: undefined,
	loading: false,
	error: false
};

const reducer = (state: BookPageStateType = initialState, action: any): BookPageStateType => {
	return produce(state, draft => {
		switch (action.type) {
			case 'GET_BOOK_REQUEST': {
				draft.loading = true;
				draft.error = false;
				draft.info = undefined;
				break;
			}
			case 'GET_BOOK_SUCCESS': {
				draft.loading = false;
				draft.info = action.data;
				break;
			}

			case 'GET_BOOK_ERROR': {
				draft.loading = false;
				draft.error = true;
				break;
			}
			default:
				return draft;
		}
	})
}


export default reducer;

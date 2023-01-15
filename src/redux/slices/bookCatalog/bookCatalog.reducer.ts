import {BookCatalogStateType} from "types/state";
import produce from "immer";

const initialState = {
	items: [],
	totalItems: 0,
	done: false,
	loading: false,
	updating: false,
	error: false,
	moreAvailable: false,
	filters: {}
};

const reducer = (state: BookCatalogStateType = initialState, action: any): BookCatalogStateType => {
	return produce(state, draft => {
		switch (action.type) {
			case 'GET_BOOKS_REQUEST': {
				draft.loading = true;
				draft.error = false;
				draft.updating = false;
				draft.totalItems = 0;
				draft.items = [];
				break;
			}

			case 'GET_BOOKS_ERROR': {
				draft.loading = false;
				draft.error = true;
				break;
			}

			case 'GET_BOOKS_MORE_REQUEST': {
				draft.loading = false;
				draft.updating = true;
				break;
			}

			case 'GET_BOOKS_SUCCESS': {
				draft.loading = false;
				draft.done = true;
				draft.items = action.data.items;
				draft.totalItems = action.data.totalItems;
				draft.moreAvailable = action.data.moreAvailable;
				break;
			}

			case 'GET_BOOKS_MORE_SUCCESS': {
				draft.loading = false;
				draft.updating = false;
				draft.items = draft.items.concat(action.data.items);
				draft.totalItems = action.data.totalItems;
				draft.moreAvailable = action.data.moreAvailable;
				break;
			}

			case 'GET_BOOKS_MORE_ERROR': {
				draft.error = false;
				draft.updating = false;
				break;
			}

			case 'SAVE_FILTERS': {
				draft.filters = action.data;
				break;
			}

			default:
				return draft;
		}
	})

	return state;
}


export default reducer;

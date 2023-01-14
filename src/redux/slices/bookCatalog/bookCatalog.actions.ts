import {Dispatch} from "redux";
import * as bookApi from '../../../services/api';
import {CERTAIN_FIELDS, GET_BOOKS_SORTING_FIELDS, GetBookResponseType} from "types/api";
import {BookCatalogItemType} from "types/state";
import {AppDispatchType} from "redux/store";

const mapRestBooksToState = (items: GetBookResponseType[]): BookCatalogItemType[] => {
	return items.map(i => {
		return {
			id: i.id,
			category: i.volumeInfo.categories ? i.volumeInfo.categories[0] : undefined,
			authors: i.volumeInfo.authors,
			title: i.volumeInfo.title,
			previewLink: i.volumeInfo.imageLinks?.smallThumbnail
		}
	});
}

export const loadBooks = (query: string, category: string, sorting: GET_BOOKS_SORTING_FIELDS, offset: number, size: number) => {
	return async (dispatch: AppDispatchType) => {
		try {
			const requestType = offset === 0 ? 'GET_BOOKS_REQUEST' : 'GET_BOOKS_MORE_REQUEST';
			dispatch({type: requestType});

			const params = {
				startIndex: offset,
				maxResults: size + 1,
				queryCertainFields: [{
					type: CERTAIN_FIELDS.CATEGORY,
					value: category
				}],
				sorting,
				query
			};
			const response = await bookApi.getBooks(params);

			const successType = offset === 0 ? 'GET_BOOKS_SUCCESS' : 'GET_BOOKS_MORE_SUCCESS';
			let {items, totalItems} = response;

			let moreAvailable = false;

			if (items?.length === size + 1) {
				items = items.slice(0, -1);
				moreAvailable = true;
			}

			const data = {items: mapRestBooksToState(items || []), moreAvailable, totalItems};
			dispatch({type: successType, data});
		} catch (err) {
			dispatch({type: 'GET_BOOKS_ERROR'})
		}
	}
};

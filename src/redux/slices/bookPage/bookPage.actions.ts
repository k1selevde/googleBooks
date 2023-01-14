import {Dispatch} from "redux";
import { GetBookResponseType } from "types/api";
import * as booksApi from "../../../services/api";
import {BookPageStateType} from "types/state";
import {AppDispatchType} from "redux/store";

const mapBookRestDataToState = (raw: GetBookResponseType['volumeInfo'], id: string): BookPageStateType['info'] => {
	const images = raw.imageLinks;
	const previewLink = images?.medium ||  images?.thumbnail || images?.smallThumbnail ;
	return {
		id,
		authors: raw.authors,
		title: raw.title,
		categories: raw.categories,
		description: raw.description,
		previewLink
	};
}

export const loadBookPage = (id: string) => {
	return async (dispatch: AppDispatchType) => {
		try {
			dispatch({type: 'GET_BOOK_REQUEST'});

			const response = await booksApi.getBook(id);
			const {volumeInfo} = response;

			const data = mapBookRestDataToState(volumeInfo, id)
			dispatch({type: 'GET_BOOK_SUCCESS', data})
		} catch (err) {
			dispatch({type: 'GET_BOOK_ERROR'})
		}
	}
};

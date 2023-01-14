import {GetBookResponseType, GetBooksParamsType, GetBooksResponseType} from "types/api";

const BASIC_URL = `https://www.googleapis.com/books/v1`
const VOLUME_URL = `${BASIC_URL}/volumes`;

const joinCertainFields = (fields: GetBooksParamsType['queryCertainFields']) => {
	return fields.map(i => `+${i.type}:${i.value}`).join('');
}

const getQueryString = (params: Record<string, string | number>) => {
	const keys = Object.keys(params);

	if (!keys.length) return '';

	return '?' + keys.map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');
};

export const getBooks = (params: GetBooksParamsType): Promise<GetBooksResponseType> => {
	const {query, queryCertainFields, sorting, startIndex, maxResults} = params;

	const queryParams = {
		q: `${query}${joinCertainFields(queryCertainFields)}`,
		orderBy: sorting,
		startIndex: startIndex,
		maxResults: maxResults,
	};

	const url = `${VOLUME_URL}${getQueryString(queryParams)}`;
	return fetch(url).then(response => response.json());
}

export const getBook = (bookId: string): Promise<GetBookResponseType> => {
	const url = `${VOLUME_URL}/${bookId}`;
	return fetch(url).then(response => response.json());
}

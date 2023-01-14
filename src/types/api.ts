export enum CERTAIN_FIELDS {
	TITLE = 'intitle',
	AUTHOR = 'inauthor',
	PUBLISHER = 'inpublisher',
	CATEGORY = 'subject'
}

export enum GET_BOOKS_SORTING_FIELDS {
	RELEVANCE = 'relevance',
	NEWEST = 'newest'
}

type GetBooksQueryCertainFieldsType = {
	type: CERTAIN_FIELDS,
	value: string
}

export type GetBooksParamsType = {
	query: string
	queryCertainFields: GetBooksQueryCertainFieldsType[],
	startIndex: number,
	maxResults: number,
	sorting: GET_BOOKS_SORTING_FIELDS
}

export type GetBooksResponseType = {
	kind: string,
	items?: GetBookResponseType[],
	totalItems: number
}

export type GetBookResponseType = {
	id: string;
	volumeInfo: {
		title: string,
		authors: string[],
		description: string,
		categories: string[],
		previewLink: string,
		imageLinks: {
			medium?: string;
			thumbnail?: string;
			smallThumbnail?: string;
		}
	}
}


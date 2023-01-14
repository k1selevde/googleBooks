export type BookCatalogItemType = {
	id: string,
	title?: string,
	authors?: string[],
	category?: string,
	previewLink?: string
};

export type BookCatalogStateType = {
	items: BookCatalogItemType[],
	totalItems: number,
	loading: boolean,
	updating: boolean,
	error: boolean,
	moreAvailable: boolean,
	done: boolean
}

export type BookPageStateType = {
	info?: {
		id: string,
		title?: string,
		authors?: string[],
		description?: string,
		categories?: string[],
		previewLink?: string
	},
	loading: boolean,
	error: boolean
}

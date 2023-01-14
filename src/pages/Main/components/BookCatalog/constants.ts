import { GET_BOOKS_SORTING_FIELDS } from "types/api";
import {CategoryOptionType, SortingOptionType} from "./types";

export const сategoryOptions: CategoryOptionType[] = [
	{label: 'Все', value: 'all'},
	{label: 'Искусство', value: 'art'},
	{label: 'Биография', value: 'biography'},
	{label: 'Компьютеры', value: 'computers'},
	{label: 'История', value: 'history'},
	{label: 'Медицина', value: 'medical'},
	{label: 'Поэзия', value: 'poetry'},
];

export const sortingOptions: SortingOptionType[] = [
	{label: 'По релевантности', value: GET_BOOKS_SORTING_FIELDS.RELEVANCE},
	{label: 'По новизне', value: GET_BOOKS_SORTING_FIELDS.NEWEST}
];

import {ISelectOption} from "shared/ui-kit/Select/Select";
import {GET_BOOKS_SORTING_FIELDS} from "types/api";

export type CategoryOptionType = ISelectOption<string>;
export type SortingOptionType = ISelectOption<GET_BOOKS_SORTING_FIELDS>;

export type BookFiltersType = {
	query: string,
	sorting: SortingOptionType['value'],
	category: CategoryOptionType['value']
}

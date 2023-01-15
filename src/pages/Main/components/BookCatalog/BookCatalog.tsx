import React, {useState} from 'react';
import BookCard from '../../../../components/BookCard/BookCard';
import Catalog from '../../../../components/Catalog/Catalog';
import Filters from "components/Filters/Filters";
import DividerLine from "shared/ui-kit/DividerLine/DividerLine";
import Loader from "shared/ui-kit/Loader/Loader";
import {useAppDispatch, useAppSelector} from "redux/hooks";
import styles from './BookCatalog.module.scss';
import Field from "shared/ui-kit/Field/Field";
import Input from "shared/ui-kit/Input/Input";
import Select from "shared/ui-kit/Select/Select";
import {loadBooks} from "redux/slices/bookCatalog/bookCatalog.actions";
import {BOOKS_PER_PAGE} from "pages/Main/constants";
import {sortingOptions, сategoryOptions} from "./constants";
import {CategoryOptionType, SortingOptionType} from "pages/Main/components/BookCatalog/types";
import Error from "components/Error/Error";
import {BookCatalogItemType} from "types/state";
import useEventListener from "../../../../shared/hooks/useEventListener";

const BookCatalog = () => {
	const {
		loading,
		error,
		items,
		moreAvailable,
		updating,
		totalItems,
		filters: stateFilters,
		done
	} = useAppSelector(state => state.bookCatalog);

	const dispatch = useAppDispatch();

	const [query, setQuery] = useState<string>(stateFilters.query || '');
	const [category, setCategory] = useState<CategoryOptionType['value']>(stateFilters.category || сategoryOptions[0].value);
	const [sorting, setSorting] = useState<SortingOptionType['value']>(stateFilters.sorting || sortingOptions[0].value);

	const getFiltersHash = () => `${query}-${category}-${sorting}`;
	const [filtersHash, setFiltersHash] = useState<string>(getFiltersHash());

	const getBooks = (offset: number) => () => {
		setFiltersHash(getFiltersHash());
		loadBooks(query, category, sorting, offset, BOOKS_PER_PAGE)(dispatch);
	}

	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			getBooks(0)();
		}
	};

	useEventListener('keypress', handleKeyPress);

	const queryField = (<Field label={'Название книги'}>
		<Input onChange={(value) => setQuery(value)} name={'query'} value={query} />
	</Field>)

	const categoryField = (
		<Field label={'Категория'}>
			<Select
				name={'category'}
				options={сategoryOptions}
				selectedOption={category}
				onSelect={value => setCategory(value)}
			/>
		</Field>
	);

	const sortingField = (
		<Field label={'Сортировать по:'}>
			<Select
				name={'sorting'}
				options={sortingOptions}
				selectedOption={sorting}
				onSelect={value => setSorting(value)}
			/>
		</Field>
	)

	const filtersBlock = <Filters fields={[queryField, categoryField, sortingField]} onSearch={getBooks(0)}/>;
	const separator = <DividerLine/>;

	const renderCard = (item: BookCatalogItemType) => <BookCard {...item} />;

	const renderCards = () => {
		if (error) return <div className={styles.error}><Error/></div>;

		if (loading) return <Loader/>;

		if (done && !items.length) return <div className={styles.empty}>Ничего не найдено. Попробуйте изменить запрос</div>

		const offset = getFiltersHash() === filtersHash ? items.length : 0;
		const props = {
			items: items.map(renderCard),
			totalItems,
			onShowMore: getBooks(offset),
			withShowMore: moreAvailable,
			updating
		}
		return <Catalog {...props} />;
	}

	return (
		<div className={styles.wrapper}>
			{filtersBlock}
			{separator}
			{renderCards()}
		</div>
	)
};

export default BookCatalog;

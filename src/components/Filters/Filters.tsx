import React, {ReactNode} from 'react';
import Button from "shared/ui-kit/Button/Button";
import styles from 'components/Filters/Filters.module.scss';

interface IProps {
	fields: ReactNode[];
	onSearch: () => void
}
const Filters = (props: IProps) => {
	const {fields, onSearch} = props;

	const fieldsBlock = (
		<div className={styles.fieldsWrapper}>
			{fields}
		</div>
	)

	const searchButton = (
		<Button
			styleType='primary'
			onClick={onSearch}
			customButtonCN={styles.searchButton}
		>
			Найти книгу
		</Button>
	)

	return (
		<div className={styles.wrapper}>
			{fieldsBlock}
			{searchButton}
		</div>
	);
};

export default Filters;

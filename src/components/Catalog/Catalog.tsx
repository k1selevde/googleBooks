import React, {ReactNode} from 'react';
import Button from "../../shared/ui-kit/Button/Button";
import styles from './Catalog.module.scss';
import Loader from "shared/ui-kit/Loader/Loader";

interface IProps {
	items: ReactNode[],
	totalItems: number,
	onShowMore: () => void;
	withShowMore: boolean;
	updating?: boolean;
}
const Catalog = (props: IProps) => {
	const {items, totalItems, onShowMore, withShowMore, updating} = props;

	const totalBlock = !!totalItems && (
		<h4 className={styles.total}>
			Найдено {totalItems} результатов
		</h4>)

	const list = (
		<div className={styles.list}>
			{items}
		</div>
	)

	const renderShowMore = () => {
		if (updating) return <Loader />;
		if (!withShowMore) return;

		return <Button onClick={onShowMore} styleType={'secondary'} customButtonCN={styles.showMore}>Показать еще</Button>;
	}

	return (
		<div className={styles.wrapper}>
			{totalBlock}
			{list}
			{renderShowMore()}
		</div>
	);
};

export default Catalog;

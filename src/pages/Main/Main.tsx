import React from 'react';
import styles from './Main.module.scss'
import useDocumentTitle from "../../shared/hooks/useDocumentTitle";
import Img from '../../shared/ui-kit/Img/Img';
import bannerImage from '../../assets/images/banner.jpg'
import BookCatalog from "pages/Main/components/BookCatalog/BookCatalog";

const Main = () => {
	useDocumentTitle('Главная страница')

	const banner = <Img src={bannerImage} alt={'banner'}/>

	const title = (
		<div className={styles.title}>
			<h3>Быстрый поиск книг</h3>
		</div>
	)

	const bookCollection = <BookCatalog />;

	return (
		<div className={styles.wrapper}>
			{banner}
			<div className="content">
				{title}
				{bookCollection}
			</div>
		</div>
	);
};

export default Main;

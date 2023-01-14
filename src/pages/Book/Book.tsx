import React, {useEffect} from 'react';
import useDocumentTitle from "../../shared/hooks/useDocumentTitle";
import BackLink from "../../shared/ui-kit/BackLink/BackLink";
import Info from './components/Info/Info';
import {useNavigate, useParams} from "react-router";
import {loadBookPage} from "redux/slices/bookPage/bookPage.actions";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import Img from 'shared/ui-kit/Img/Img';
import cn from "classnames";
import styles from './Book.module.scss';
import defaultBook from '../../assets/images/defaultBookCover.jpeg';
import Error from "components/Error/Error";
import Loader from "shared/ui-kit/Loader/Loader";

const Book = () => {
	useDocumentTitle('Страница книги')
	const navigate = useNavigate();
	const {id} = useParams();

	const dispatch = useAppDispatch()

	const {info, error, loading} = useAppSelector(state => state.bookPage);

	useEffect(() => {
		id && loadBookPage(id)(dispatch);
	}, [id]);

	const backCrumb = <BackLink onClick={() => navigate(-1)} text={'Вернуться к поиску'}/>;

	const preview = (
		<div className={styles.previewWrapper}>
			<Img src={info?.previewLink} alt={'previewBook'} fallback={defaultBook} width={480}/>
		</div>
	);

	const renderInfo = () => {
		if (info) {
			const {authors, categories, description, title} = info;
			const infoProps = {authors, tags: categories, description, title};

			return <Info {...infoProps} />;
		}
	}

	const renderMainBlock = () => {
		if (error) return <div className={styles.error}><Error/></div>;

		if (loading) return <Loader />

		return (
			<div className={styles.mainBlock}>
				{preview}
				{renderInfo()}
			</div>
		)
	}

	const wrapperCN = cn('content' , styles.wrapper);

	return (
		<div className={wrapperCN}>
			<div className={styles.crumb}>
				{backCrumb}
			</div>
			{renderMainBlock()}
		</div>
	);
};

export default Book;

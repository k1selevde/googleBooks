import React from 'react';
import Img from '../../shared/ui-kit/Img/Img';
import styles from './BookCard.module.scss';
import {BookCatalogItemType} from "types/state";
import { Link } from "react-router-dom";
import Tag from 'shared/ui-kit/Tag/Tag';
import defaultBookCover from '../../assets/images/defaultBookCover.jpeg';

type Props = BookCatalogItemType

const BookCard = (props: Props) => {
	const {id, previewLink, category, authors, title} = props;

	const preview = (
		<div className={styles.previewBlock}>
			<Img
				src={previewLink}
				alt={'book preview'}
				height={184}
				width={120}
				fallback={defaultBookCover}
			/>
		</div>
	)

	const tag = category && (
		<div className={styles.tag}>
			<Tag text={category} />
		</div>
	)

	const caption = !!title && <h3 className={styles.caption}>{title}</h3>;

	const authorsList = !!authors && <div className={styles.authors}>{authors.join(',')}</div>

	return (
		<Link to={`/book/${id}`} title={`Подробнее о "${title}"`} className={styles.link}>
			<div key={id} className={styles.wrapper}>
				{preview}
				<div className={styles.info}>
					{tag}
					{caption}
					{authorsList}
				</div>
			</div>
		</Link>
	);
};

export default BookCard;

import React from 'react';
import styles from './Info.module.scss';
import DividerLine from "shared/ui-kit/DividerLine/DividerLine";
import Tag from "shared/ui-kit/Tag/Tag";
import {removeTags} from "shared/utils";


interface IProps {
	tags?: string[]
	title?: string
	authors?: string[]
	description?: string
}
const Info = (props: IProps) => {
	const tags = !!props.tags && (
		<div className={styles.tags}>
			{props.tags.map(i => <Tag text={i} />)}
		</div>
	)

	const title = !!props.title && (
		<h2 className={styles.title}>
			{props.title}
		</h2>
	)

	const authors = !!props.authors && (
		<p className={styles.authors}>
			{props.authors.join(', ')}
		</p>
	)

	const separator = <DividerLine />

	const description = !!props.description && (
		<div className={styles.description}>
			<h3 className={styles.descriptionTitle}>Описание</h3>
			<p className={styles.descriptionText}>{removeTags(props.description)}</p>
		</div>
	)

	return (
		<div className={styles.wrapper}>
			{tags}
			{title}
			{authors}
			{separator}
			{description}
		</div>
	);
};

export default Info;

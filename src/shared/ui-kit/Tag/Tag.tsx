import React from 'react';
import styles from './Tag.module.scss'

interface IProps {
	text: string;
}

const Tag = ({text}: IProps) => (
		<div className={styles.wrapper}>#{text}</div>
);

export default Tag;

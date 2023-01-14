import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as NotFoundIcon} from '../../assets/images/notFound.svg';
import styles from './NotFound.module.scss';

const NotFound = () => {
	return (
		<div className={styles.wrapper}>
			<Link to={'/'} className={styles.link}>Перейти на главную</Link>
			<NotFoundIcon />
		</div>
	);
};

export default NotFound;

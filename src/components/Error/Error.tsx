import React from 'react';
import {ReactComponent as BugIcon} from '../../assets/images/fixingBug.svg';
import styles from './Error.module.scss';

const Error = () => {
	return (
		<div className={styles.wrapper}>
			<p>Что-то пошло не так. Попробуйте перезагрузить страницу.</p>
			<div>
				<BugIcon />
			</div>
		</div>
	);
};

export default Error;

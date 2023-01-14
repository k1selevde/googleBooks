import React from 'react';
import {ReactComponent as LeftArrow} from '../../../assets/images/left-arrow.svg';
import styles from './BackLink.module.scss'
interface IProps {
	text: string;
	onClick: () => void;
}

const BackLink = ({text, onClick}: IProps) => {
	return (
		<div onClick={onClick} className={styles.wrapper}>
			<p><LeftArrow /></p>
			<p>{text}</p>
		</div>
	);
};

export default BackLink;

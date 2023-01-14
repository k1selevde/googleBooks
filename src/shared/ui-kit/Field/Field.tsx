import React, {ReactNode} from 'react';
import styles from "./Field.module.scss";

interface IProps {
	label: string,
	children: ReactNode | undefined
}

const Field = (props: IProps) => {
	const {children, label} = props;

	return (
		<div className={styles.wrapper}>
			<p className={styles.label}>{label}</p>
			{children}
		</div>
	);
};

export default Field;

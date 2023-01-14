import React, { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	styleType: 'primary' | 'secondary';
	customButtonCN?: string;
}

const Button: FC<IProps> = ({ children, styleType, customButtonCN, ...props }) => {
	const buttonCN = cn({
		[styles.button]: true,
		[styles[styleType] || '']: Boolean(styleType),
		[customButtonCN || '']: Boolean(customButtonCN),
	});

	return (
		<button className={buttonCN} {...props}>
			{children}
		</button>
	);
};

export default Button;

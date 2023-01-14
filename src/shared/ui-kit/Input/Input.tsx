import styles from './Input.module.scss';
import {ChangeEvent, HTMLProps} from 'react';

interface IProps extends Omit<HTMLProps<HTMLInputElement>, 'onChange' | 'name'> {
	onChange: (value: string, name: string) => void;
	name: string;
	disabled?: boolean;
}

const Input = ({ onChange, ...props }: IProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.value, props.name);
	};

	return (
		<input className={styles.input} {...props} onChange={handleChange} disabled={props.disabled} />
	);
};

export default Input;

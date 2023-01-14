import styles from './Select.module.scss';

export interface ISelectOption<T> {
	value: T;
	label: string;
}

interface IProps<T> {
	name: string;
	options: ISelectOption<T>[];
	selectedOption: T;
	onSelect: (value: T, name: string) => void;
	disabled?: boolean;
}

const Select = <T extends number | string>(props: IProps<T>) => {
	const handleChange = (e: any) => {
		props.onSelect(e.target.value, props.name);
	};

	const renderOptions = () => {
		return props.options.map((option) => (
			<option key={option.value} value={option.value}>
				{option.label}
			</option>
		));
	};

	return (
		<select
			defaultValue={props.selectedOption}
			onChange={handleChange}
			className={styles.select}
			disabled={props.disabled}
		>
			{renderOptions()}
		</select>
	);
};

export default Select;

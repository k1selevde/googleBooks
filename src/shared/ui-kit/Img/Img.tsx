import React, {SyntheticEvent} from 'react';

interface IProps {
	src?: string
	fallback?: string
	alt?: string
	width?: string | number
	height?: string | number
}

const defaultAlt = 'image';

const Img = (props: IProps) => {
	const {src, alt, fallback, height, width} = props;
	const handleError = ({currentTarget}: SyntheticEvent<HTMLImageElement>) => {
		if (fallback && currentTarget) {
			currentTarget.src = fallback;
		}
	}

	const imgProps = {
		src: src || fallback,
		alt: alt || defaultAlt,
		...(width && {width}),
		...(height && {height}),
		onError: handleError
	};

	return <img {...imgProps} />;
};

export default Img;

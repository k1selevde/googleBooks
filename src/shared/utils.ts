export const removeTags = (text: string) => {
	return text.replace( /(<([^>]+)>)/ig, '');
}

import { ConfigSourceType, FilterConfType } from '../types';

export const applyFilterOnText = (
	inputText: string,
	filterConf: FilterConfType
): string => {
	let modifiedText = inputText;

	let j = true;
	while (j == true) {
		const index = modifiedText.search(filterConf.from);
		if (index !== -1) {
			if (
				typeof filterConf.from === 'string' &&
				filterConf.from !== filterConf.to
			) {
				modifiedText = modifiedText.replace(filterConf.from, filterConf.to);
			}
			if (filterConf.from instanceof RegExp) {
				let replaceIndex = 0;
				// Hardcoded changes!
				if (
					filterConf.source === ConfigSourceType.Standard &&
					filterConf.name === 'ndash'
				) {
					replaceIndex = 1;
				}
				modifiedText =
					modifiedText.substr(0, index) +
					filterConf.to +
					modifiedText.substr(index + replaceIndex + 1);
			}
		} else {
			j = false;
		}
	}

	return modifiedText;
};

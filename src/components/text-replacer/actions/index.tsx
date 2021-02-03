import { FilterConfType } from '../types';

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
				const replaceIndex = filterConf.replaceIndex ?? 0;
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

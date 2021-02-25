import { ITextReplacerState } from '../context/interfaces';
import {
	STANDARD_REPLACER_NAME_NBSP,
	STANDARD_REPLACER_NAME_NDASH,
} from '../replacers-config';
import { ReplacerConfigSourceType, ReplacerConfigType } from '../types';

export const applyReplacerOnText = (
	inputText: string,
	filterConf: ReplacerConfigType
): string => {
	let modifiedText = inputText;

	let j = true;
	while (j === true) {
		let index = modifiedText.search(filterConf.from);
		if (index !== -1) {
			if (
				typeof filterConf.from === 'string' &&
				filterConf.from !== filterConf.to
			) {
				modifiedText = modifiedText.replace(filterConf.from, filterConf.to);
			}
			if (filterConf.from instanceof RegExp) {
				let appendFixIndex = 0;
				let prependFixIndex = 0;
				// Hardcoded changes!
				if (filterConf.source === ReplacerConfigSourceType.Standard) {
					switch (filterConf.name) {
						case STANDARD_REPLACER_NAME_NDASH:
							appendFixIndex = 1;
							break;
						case STANDARD_REPLACER_NAME_NBSP:
							appendFixIndex = 2;
							break;
					}
				}
				modifiedText =
					modifiedText.substr(0, index + appendFixIndex) +
					filterConf.to +
					modifiedText.substr(index + appendFixIndex + prependFixIndex + 1);
			}
		} else {
			j = false;
		}
	}

	return modifiedText;
};

export const applyReplacersOnText = ({
	userInputText,
	standardReplacers,
	customReplacers,
}: ITextReplacerState) => {
	let modifiedText = userInputText;
	const filtersConf = [...standardReplacers, ...customReplacers];

	filtersConf.forEach(filterConf => {
		if (filterConf.active) {
			modifiedText = applyReplacerOnText(modifiedText, filterConf);
		}
	});

	return modifiedText;
};

export const copyTextToClipboard = (text: string): boolean => {
	if (text !== '') {
		navigator.clipboard.writeText(text);

		return true;
	}

	return false;
};

export const normalizeConfigName = (name: string): string =>
	name.toLowerCase().replace(' ', '_');

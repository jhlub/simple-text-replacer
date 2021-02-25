import { ReplacerConfigSourceType, ReplacerConfigType } from '../types';

export const STANDARD_REPLACER_NAME_NBSP = 'nbsp';
export const STANDARD_REPLACER_NAME_NDASH = 'ndash';

export const standardReplacersConfig: ReplacerConfigType[] = [
	{
		id: 1,
		name: STANDARD_REPLACER_NAME_NBSP,
		description: 'Add &nbsp;',
		source: ReplacerConfigSourceType.Standard,
		from: /(\s(\w)\s)/,
		to: '&nbsp;',
		active: true,
	},
	{
		id: 2,
		name: STANDARD_REPLACER_NAME_NDASH,
		description: 'Add &ndash;',
		source: ReplacerConfigSourceType.Standard,
		from: /(\s(-)\s)/,
		to: '&ndash;',
		active: true,
	},
];

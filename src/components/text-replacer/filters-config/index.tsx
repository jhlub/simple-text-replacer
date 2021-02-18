import { ConfigSourceType, FilterConfType } from '../types';

export const standardFilters: FilterConfType[] = [
	{
		id: 1,
		name: 'nbsp',
		description: 'Add &nbsp;',
		source: ConfigSourceType.Standard,
		from: /(\s(\w)\s)/,
		to: '&nbsp;',
		active: true,
	},
	{
		id: 2,
		name: 'ndash',
		description: 'Add &ndash;',
		source: ConfigSourceType.Standard,
		from: /(\s(-)\s)/,
		to: ' &ndash; ',
		active: true,
	},
];

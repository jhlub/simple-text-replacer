export enum ConfigSourceType {
	Standard,
	Custom,
}

export type FilterConfType = {
	id: number;
	name: string;
	description: string;
	source: ConfigSourceType;
	from: RegExp | string;
	to: string;
	active: boolean;
	replaceIndex?: number;
};

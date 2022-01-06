export enum ReplacerConfigSourceType {
	// eslint-disable-next-line no-unused-vars
	Standard,
	// eslint-disable-next-line no-unused-vars
	Custom,
}

export type ReplacerConfigType = {
	id: number;
	name: string;
	description: string;
	source: ReplacerConfigSourceType;
	from: RegExp | string;
	to: string;
	active: boolean;
};

export enum ReplacerConfigSourceType {
	Standard,
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

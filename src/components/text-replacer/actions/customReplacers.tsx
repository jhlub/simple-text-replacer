import { FilterConfType } from '../types';

export type CustomReplacersAction = {
	type: string;
	id?: number;
	fieldName?: keyof FilterConfType;
	fieldValue?: string | number | boolean;
};

import { ConfigSourceType, FilterConfType } from '../types';

export const getReplacerFieldValue = (
	replacerId: number,
	fieldName: keyof FilterConfType,
	replacers: FilterConfType[]
): RegExp | string | boolean | number | undefined => {
	let value = undefined;
	for (let i = 0; i < replacers.length; i++) {
		if (replacers[i].id === replacerId) {
			value = replacers[i][fieldName];
			break;
		}
	}

	return value;
};

export const getConfigActiveField = (
	confName: string,
	filtersConf: FilterConfType[]
): boolean => {
	return filtersConf.some(el => {
		if (el.name === confName) {
			return el.active;
		}
	});
};

// TODO! Mutate!
export const setConfigActiveField = (
	confName: string,
	filtersConf: FilterConfType[],
	activeValue: boolean
) => {
	for (let i = 0; i < filtersConf.length; i++) {
		if (filtersConf[i].name === confName) {
			filtersConf[i].active = activeValue;
			break;
		}
	}
};

export const setConfigFromField = (
	confName: string,
	filtersConf: FilterConfType[],
	fieldValue: string
) => {
	for (let i = 0; i < filtersConf.length; i++) {
		if (filtersConf[i].name === confName) {
			filtersConf[i].from = fieldValue;
			break;
		}
	}
};

export const setConfigToField = (
	confName: string,
	filtersConf: FilterConfType[],
	fieldValue: string
) => {
	for (let i = 0; i < filtersConf.length; i++) {
		if (filtersConf[i].name === confName) {
			filtersConf[i].to = fieldValue;
			break;
		}
	}
};

export const createNewCustomFilterConfig = (
	confName: string,
	confDescription: string,
	filtersConf: FilterConfType[]
): FilterConfType => {
	let maxId = 0;
	filtersConf.forEach(el => {
		if (el.id > maxId) {
			maxId = el.id;
		}
	});

	const newCfg: FilterConfType = {
		id: maxId + 1,
		name: confName,
		description: confDescription,
		source: ConfigSourceType.Custom,
		from: /()/,
		to: '',
		active: true,
	};

	return newCfg;
};

// TODO! Mutate!
export const removeFilterConfig = (
	confName: string,
	filtersConf: FilterConfType[]
) => {
	for (let i = 0; i < filtersConf.length; i++) {
		if (filtersConf[i].name === confName) {
			filtersConf.splice(i, 1);
			break;
		}
	}
};

export const normalizeConfigName = (name: string): string =>
	name.toLowerCase().replace(' ', '_');

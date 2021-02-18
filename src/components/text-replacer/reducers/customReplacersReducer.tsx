import _ from 'lodash';

import {
	CUSTOM_REPLACER_CHANGE_ACTIVE,
	CUSTOM_REPLACER_REMOVE,
	CUSTOM_REPLACER_CREATE,
	CUSTOM_REPLACER_CHANGE_DATA,
} from '../actions/types';
import { ConfigSourceType, FilterConfType } from '../types/index';
import { CustomReplacersAction } from '../actions/customReplacers';
import { normalizeConfigName } from '../utils';

export const customReplacersReducer = (
	state: FilterConfType[],
	action: CustomReplacersAction
) => {
	switch (action.type) {
		case CUSTOM_REPLACER_CHANGE_ACTIVE:
			const stateWithChangedActive = state.map(replacer => {
				if (action.id === replacer.id) {
					console.log(replacer);
					return {
						...replacer,
						active: !replacer.active,
					};
				}

				return replacer;
			});

			return stateWithChangedActive;

		case CUSTOM_REPLACER_REMOVE:
			return state.filter(el => {
				return el.id !== action.id;
			});

		// TODO! Change name to codeName and description to name?
		// TODO!  Return bool on create? Like true/false?
		case CUSTOM_REPLACER_CREATE:
			const newId = (_.maxBy(state, 'id')?.id ?? 0) + 1;
			const customReplacerDescription = `Custom #${newId}`;
			const customReplacerName = normalizeConfigName(customReplacerDescription);

			const newItem = {
				id: newId,
				name: customReplacerName,
				description: customReplacerDescription,
				from: '',
				to: '',
				source: ConfigSourceType.Custom,
				active: false,
			};

			return [...state, newItem];

		case CUSTOM_REPLACER_CHANGE_DATA:
			if (action.fieldName === undefined || action.fieldValue === undefined) {
				return state;
			}

			const { fieldName, fieldValue } = action;

			if (
				['active', 'name', 'description', 'from', 'to'].indexOf(fieldName) ===
				-1
			) {
				throw new Error(`You cannot change field ${fieldName}!`);
			}
			const stateWithChangedData = state.map(replacer => {
				if (action.id === replacer.id) {
					return {
						...replacer,
						[fieldName]: fieldValue,
					};
				}

				return replacer;
			});

			return stateWithChangedData;

		default:
			throw new Error();
	}
};

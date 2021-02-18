import { STANDARD_REPLACER_CHANGE_ACTIVE } from '../actions/types';
import { FilterConfType } from '../types/index';
import { StandardReplacersAction } from '../actions/standardReplacers';

export const standardReplacersReducer = (
	state: FilterConfType[],
	action: StandardReplacersAction
) => {
	switch (action.type) {
		case STANDARD_REPLACER_CHANGE_ACTIVE:
			const modifiedReplacers = state.map(replacer => {
				if (action.id === replacer.id) {
					console.log(replacer);
					return {
						...replacer,
						active: !replacer.active,
					};
				}

				return replacer;
			});

			return modifiedReplacers;

		default:
			throw new Error();
	}
};

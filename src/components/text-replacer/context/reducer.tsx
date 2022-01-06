import _ from 'lodash';

import {
	STANDARD_REPLACER_CHANGE_ACTIVE,
	CUSTOM_REPLACER_CHANGE_ACTIVE,
	CUSTOM_REPLACER_REMOVE,
	CUSTOM_REPLACER_CREATE,
	CUSTOM_REPLACER_CHANGE_DATA,
	AUTO_PROCESS_TEXT_CHANGE_ACTIVE,
	AUTO_COPY_TEXT_CHANGE_ACTIVE,
	USER_INPUT_TEXT_CHANGE,
	PROCESS_TEXT,
	SET_SHOW_COPY_TO_CLIPBOARD_ALERT,
} from './types';
import {
	ITextReplacerState,
	ITextReplacerAction,
	ICustomReplacerChangeData,
	IPayloadUserInputText,
	IPayloadShowCopyToClipboardAlert,
	IPayloadStandardReplacerChangeActive,
	IPayloadCustomReplacerChangeActive,
	IPayloadCustomReplacerToRemove,
} from './interfaces';
import { applyReplacersOnText, normalizeConfigName } from '../utils';
import { ReplacerConfigSourceType } from '../types';

export function textReplacerReducer(
	state: ITextReplacerState,
	action: ITextReplacerAction
): ITextReplacerState {
	switch (action.type) {
		case AUTO_PROCESS_TEXT_CHANGE_ACTIVE:
			return { ...state, autoProcessText: !state.autoProcessText };

		case AUTO_COPY_TEXT_CHANGE_ACTIVE:
			return { ...state, autoCopyText: !state.autoCopyText };

		case USER_INPUT_TEXT_CHANGE: {
			const { userInputText } = action.payload as IPayloadUserInputText;
			return { ...state, userInputText };
		}
		case STANDARD_REPLACER_CHANGE_ACTIVE: {
			const { id: payloadStandardReplacersChangeActiveId } =
				action.payload as IPayloadStandardReplacerChangeActive;
			const standardReplacersWithChangedActive = state.standardReplacers.map(
				(replacer) => {
					if (payloadStandardReplacersChangeActiveId === replacer.id) {
						return {
							...replacer,
							active: !replacer.active,
						};
					}

					return replacer;
				}
			);

			return {
				...state,
				standardReplacers: standardReplacersWithChangedActive,
			};
		}
		case CUSTOM_REPLACER_CHANGE_ACTIVE: {
			const { id: payloadCustomReplacerChangeActiveId } =
				action.payload as IPayloadCustomReplacerChangeActive;
			const customReplacersWithChangedActive = state.customReplacers.map(
				(replacer) => {
					if (payloadCustomReplacerChangeActiveId === replacer.id) {
						return {
							...replacer,
							active: !replacer.active,
						};
					}

					return replacer;
				}
			);

			return { ...state, customReplacers: customReplacersWithChangedActive };
		}
		case CUSTOM_REPLACER_REMOVE: {
			const { id: payloadCustomReplacerToRemoveId } =
				action.payload as IPayloadCustomReplacerToRemove;
			const customReplacersWithoutRemoved = state.customReplacers.filter(
				(el) => {
					return el.id !== payloadCustomReplacerToRemoveId;
				}
			);

			return { ...state, customReplacers: customReplacersWithoutRemoved };
		}
		case CUSTOM_REPLACER_CREATE: {
			const customReplacerNewId =
				(_.maxBy(state.customReplacers, 'id')?.id ?? 0) + 1;
			const customReplacerDescription = `Custom #${customReplacerNewId}`;
			const customReplacerName = normalizeConfigName(customReplacerDescription);

			const customReplacersNew = {
				id: customReplacerNewId,
				name: customReplacerName,
				description: customReplacerDescription,
				from: '',
				to: '',
				source: ReplacerConfigSourceType.Custom,
				active: false,
			};

			return {
				...state,
				customReplacers: [...state.customReplacers, customReplacersNew],
			};
		}
		case CUSTOM_REPLACER_CHANGE_DATA: {
			const {
				id: customReplacerChangeDataFieldId,
				fieldName: customReplacerChangeDataFieldName,
				fieldValue: customReplacerChangeDataFieldValue,
			} = action.payload as ICustomReplacerChangeData;

			if (
				typeof customReplacerChangeDataFieldId !== 'number' ||
				customReplacerChangeDataFieldName === undefined ||
				customReplacerChangeDataFieldValue === undefined
			) {
				return state;
			}

			if (
				['active', 'name', 'description', 'from', 'to'].indexOf(
					customReplacerChangeDataFieldName
				) === -1
			) {
				throw new Error(
					`You cannot change field ${customReplacerChangeDataFieldName}!`
				);
			}
			const customReplacersWithChangedData = state.customReplacers.map(
				(replacer) => {
					if (customReplacerChangeDataFieldId === replacer.id) {
						return {
							...replacer,
							[customReplacerChangeDataFieldName]:
								customReplacerChangeDataFieldValue,
						};
					}

					return replacer;
				}
			);

			return { ...state, customReplacers: customReplacersWithChangedData };
		}
		case PROCESS_TEXT: {
			if (state.userInputText === '') return { ...state, processedText: '' };

			const processedText = applyReplacersOnText(state);

			return {
				...state,
				processedText,
			};
		}
		case SET_SHOW_COPY_TO_CLIPBOARD_ALERT: {
			const { showAlert } = action.payload as IPayloadShowCopyToClipboardAlert;
			return {
				...state,
				showCopyToClipboardAlert: showAlert,
			};
		}
		default: {
			return state;
		}
	}
}

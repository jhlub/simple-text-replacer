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
import { ITextReplacerAction, ICustomReplacerChangeData } from './interfaces';

export function standardReplacerChangeActiveAction(
	id: number
): ITextReplacerAction {
	return {
		type: STANDARD_REPLACER_CHANGE_ACTIVE,
		payload: {
			id,
		},
	};
}

export function autoProcessTextChangeActiveAction(): ITextReplacerAction {
	return {
		type: AUTO_PROCESS_TEXT_CHANGE_ACTIVE,
		payload: {},
	};
}

export function autoCopyTextChangeActiveAction(): ITextReplacerAction {
	return {
		type: AUTO_COPY_TEXT_CHANGE_ACTIVE,
		payload: {},
	};
}

export function userInputTextChangeAction(
	userInputText: string
): ITextReplacerAction {
	return {
		type: USER_INPUT_TEXT_CHANGE,
		payload: {
			userInputText, // TODO! Var could be named userInputTextString
		},
	};
}

export function customReplacerCreateAction(): ITextReplacerAction {
	return {
		type: CUSTOM_REPLACER_CREATE,
		payload: {},
	};
}

export function customReplacerChangeDataAction(
	customReplacerChangeData: ICustomReplacerChangeData
): ITextReplacerAction {
	return {
		type: CUSTOM_REPLACER_CHANGE_DATA,
		payload: customReplacerChangeData,
	};
}

export function customReplacerChangeActiveAction(
	id: number
): ITextReplacerAction {
	return {
		type: CUSTOM_REPLACER_CHANGE_ACTIVE,
		payload: {
			id,
		},
	};
}

export function customReplacerRemoveAction(id: number): ITextReplacerAction {
	return {
		type: CUSTOM_REPLACER_REMOVE,
		payload: {
			id,
		},
	};
}

export function processTextAction(): ITextReplacerAction {
	return {
		type: PROCESS_TEXT,
		payload: {},
	};
}

export function setShowCopyToClipboardAlertAction(
	showAlert: boolean
): ITextReplacerAction {
	return {
		type: SET_SHOW_COPY_TO_CLIPBOARD_ALERT,
		payload: {
			showAlert,
		},
	};
}

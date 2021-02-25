import React from 'react';

import { ReplacerConfigType } from '../types';

export interface IPayloadUserInputText {
	userInputText: string;
}

export interface IPayloadProcessedText {
	processedText: string;
}

export interface IPayloadShowCopyToClipboardAlert {
	showAlert: boolean;
}

export interface IPayloadStandardReplacerChangeActive {
	id: number;
}

export interface IPayloadCustomReplacerChangeActive {
	id: number;
}

export interface IPayloadCustomReplacerToRemove {
	id: number;
}

export interface ITextReplacerState {
	autoProcessText: boolean;
	autoCopyText: boolean;
	showCopyToClipboardAlert: boolean;
	userInputText: string;
	processedText: string;
	standardReplacers: ReplacerConfigType[];
	customReplacers: ReplacerConfigType[];
}

export interface ICustomReplacerChangeData {
	id: number;
	fieldName: keyof ReplacerConfigType;
	fieldValue: string | number | boolean;
}

export interface IPayloadEmpty {}

export interface ITextReplacerAction {
	type: string;
	payload:
		| IPayloadEmpty
		| IPayloadProcessedText
		| IPayloadUserInputText
		| IPayloadShowCopyToClipboardAlert
		| IPayloadStandardReplacerChangeActive
		| IPayloadCustomReplacerChangeActive
		| ICustomReplacerChangeData;
}

export interface ITextReplacerModel {
	state: ITextReplacerState;
	dispatch: React.Dispatch<ITextReplacerAction>;
}

export interface ITextReplacerManagement {
	processText(): void;
	copyProcessedText(): void;
}

// export type ICounterAction =
// 	| { type: 'ADD'; payload: ITodoItem }
// 	| { type: 'DELETE'; payload: string };

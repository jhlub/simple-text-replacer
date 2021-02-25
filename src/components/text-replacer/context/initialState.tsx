import { standardReplacersConfig } from '../replacers-config';
import { ITextReplacerState } from './interfaces';

export const initialTextReplacerState: ITextReplacerState = {
	autoProcessText: false,
	autoCopyText: false,
	showCopyToClipboardAlert: false,
	userInputText: '',
	processedText: '',
	standardReplacers: standardReplacersConfig,
	customReplacers: [],
};

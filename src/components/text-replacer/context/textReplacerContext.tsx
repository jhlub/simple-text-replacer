import React, { createContext, useReducer } from 'react';

import { initialTextReplacerState } from './initialState';

import { textReplacerReducer } from './reducer';
import { ITextReplacerModel, ITextReplacerManagement } from './interfaces';
import { copyTextToClipboard } from '../utils';
import {
	processTextAction,
	setShowCopyToClipboardAlertAction,
} from './actions';

const TextReplacerContext = createContext<
	(ITextReplacerModel & ITextReplacerManagement) | null
>(null);

const TextReplacerProvider: React.FC = ({ children }) => {
	const [textReplacerState, textReplacerDispatch] = useReducer(
		textReplacerReducer,
		initialTextReplacerState
	);

	const processText = () => {
		textReplacerDispatch(processTextAction());
		if (
			textReplacerState.userInputText !== '' &&
			textReplacerState.autoCopyText
		) {
			copyProcessedText();
		}
	};

	const copyProcessedText = () => {
		if (copyTextToClipboard(textReplacerState.processedText)) {
			textReplacerDispatch(setShowCopyToClipboardAlertAction(true));
		}
	};

	return (
		<TextReplacerContext.Provider
			value={{
				state: textReplacerState,
				dispatch: textReplacerDispatch,
				processText,
				copyProcessedText,
			}}
		>
			{children}
		</TextReplacerContext.Provider>
	);
};

export { TextReplacerContext, TextReplacerProvider };

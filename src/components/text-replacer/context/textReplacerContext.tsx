import React, {
	createContext,
	SetStateAction,
	useReducer,
	useState,
} from 'react';
import _ from 'lodash';

import { applyFilterOnText } from '../actions';
import { standardFilters } from '../filters-config';
import { ConfigSourceType, FilterConfType } from '../types';
import { normalizeConfigName } from '../utils';
import { StandardReplacersAction } from '../actions/standardReplacers';
import { standardReplacersReducer } from '../reducers/standardReplacersReducer';
import { CustomReplacersAction } from '../actions/customReplacers';
import { customReplacersReducer } from '../reducers/customReplacersReducer';

export type ContextPropsType = {
	userInputText: string;
	setUserInputText: React.Dispatch<SetStateAction<string>>;
	standardReplacers: FilterConfType[];
	customReplacers: FilterConfType[];
	autoProcessText: boolean;
	setAutoProcessText: React.Dispatch<SetStateAction<boolean>>;
	autoCopyText: boolean;
	setAutoCopyText: React.Dispatch<SetStateAction<boolean>>;
	showCopyAlert: boolean;
	setShowCopyAlert: React.Dispatch<SetStateAction<boolean>>;
	processedText: string;
	processText(): void;
	copyProcessedText(): void;
	getReplacerFieldValue(
		id: number,
		fieldName: keyof FilterConfType,
		replacerType: ConfigSourceType
	): RegExp | string | boolean | number | undefined;
	standardReplacersDispatch: React.Dispatch<StandardReplacersAction>;
	customReplacersDispatch: React.Dispatch<CustomReplacersAction>;
};

const TextReplacerContext = createContext<ContextPropsType | null>(null);

const TextReplacerProvider: React.FC = props => {
	const [userInputText, setUserInputText] = useState<string>('');
	// const [standardReplacers, setStandardReplacers] = useState<FilterConfType[]>(
	// 	standardFilters
	// );

	const [autoProcessText, setAutoProcessText] = useState<boolean>(false);
	const [autoCopyText, setAutoCopyText] = useState<boolean>(false);
	const [showCopyAlert, setShowCopyAlert] = useState<boolean>(false);

	// const [customReplacers, setCustomReplacers] = useState<FilterConfType[]>([]);
	const [processedText, setProcessedText] = useState<string>('');

	// Dispatch for standardReplacers
	// dispatch...
	// type: change_active
	// remember about setStandardReplacers places.

	const [standardReplacers, standardReplacersDispatch] = useReducer(
		standardReplacersReducer,
		standardFilters
	);

	const customReplacersInitial: FilterConfType[] = [];

	const [customReplacers, customReplacersDispatch] = useReducer(
		customReplacersReducer,
		customReplacersInitial
	);

	// TODO! Move it from here
	const applyReplacersOnText = (text: string) => {
		let modifiedText = text;
		const filtersConf = [...standardReplacers, ...customReplacers];

		filtersConf.forEach(filterConf => {
			if (filterConf.active) {
				modifiedText = applyFilterOnText(modifiedText, filterConf); // TODO! Should it mutate?
			}
		});

		return modifiedText;
	};

	const processText = () => {
		const text = applyReplacersOnText(userInputText);
		setProcessedText(text);

		if (autoCopyText) {
			copyProcessedText();
		}
	};

	const copyProcessedText = () => {
		if (processedText !== '') {
			setShowCopyAlert(true);
			navigator.clipboard.writeText(processedText);
		}
	};

	const getReplacerFieldValue = (
		replacerId: number,
		fieldName: keyof FilterConfType,
		replacerType: ConfigSourceType
	): RegExp | string | boolean | number | undefined => {
		let value = undefined;
		const replacers =
			replacerType === ConfigSourceType.Standard
				? standardReplacers
				: customReplacers;

		for (let i = 0; i < replacers.length; i++) {
			if (replacers[i].id === replacerId) {
				value = replacers[i][fieldName];
				break;
			}
		}

		return value;
	};

	return (
		<TextReplacerContext.Provider
			value={{
				userInputText,
				setUserInputText,
				standardReplacers,
				customReplacers,
				autoProcessText,
				setAutoProcessText,
				autoCopyText,
				setAutoCopyText,
				showCopyAlert,
				setShowCopyAlert,
				processedText,
				processText,
				copyProcessedText,
				getReplacerFieldValue: (
					id: number,
					fieldName: keyof FilterConfType,
					replacerType: ConfigSourceType
				): RegExp | string | boolean | number | undefined =>
					getReplacerFieldValue(id, fieldName, replacerType),
				standardReplacersDispatch,
				customReplacersDispatch,
			}}
		>
			{props.children}
		</TextReplacerContext.Provider>
	);
};

export { TextReplacerContext, TextReplacerProvider };

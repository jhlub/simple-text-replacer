import React, { useEffect, useState } from 'react';

import { Alerter } from '../alerter/Alerter';
import { TextInputArea } from './components/TextInputArea';
import { TextOptions } from './components/TextOption';
import { TextProcessedArea } from './components/TextProcessedArea';

import { applyFilterOnText } from './actions';
import { standardFilters } from './filters-config';
import { ConfigSourceType, FilterConfType } from './types';

export const TextReplacer: React.FC = () => {
	const [inputText, setInputText] = useState<string>('');
	const [filtersConf, setFiltersConf] = useState<FilterConfType[]>(
		standardFilters
	);
	const [showAlerter, setShowAlerter] = useState<boolean>(false);
	const [autoProcess, setAutoProcess] = useState<boolean>(false);
	const [autoCopy, setAutoCopy] = useState<boolean>(false);

	const onClickProcessText = (): void => {
		runProcessText();
	};

	const onClickCopyText = (): void => {
		copyText();
	};

	const copyText = () => {
		if (processedText !== '') {
			setShowAlerter(true);
			navigator.clipboard.writeText(processedText);
			// alert('Text copied to clipboard!');
		} else {
			// alert('First process text!');
		}
	};

	const runProcessText = () => {
		setProcessedText(processText());
	};

	const processText = (): string => {
		let processedText = inputText;
		filtersConf.forEach(filterConf => {
			if (filterConf.active) {
				processedText = applyFilterOnText(processedText, filterConf); // TODO! Should it mutate?
				if (autoCopy) {
					copyText();
				}
				console.log(filterConf);
			}
		});

		return processedText;
	};

	const [processedText, setProcessedText] = useState<string>(processText);

	useEffect(() => {
		if (autoProcess) {
			const timerId = setTimeout(() => {
				runProcessText();
			}, 1000);

			return () => {
				clearTimeout(timerId);
			};
		}
	}, [inputText, autoProcess]);

	return (
		<div className="max-w-screen-xl min-h-full p-10 mx-auto grid grid-col-1 gap-y-4">
			<Alerter
				title="Copied!"
				showAlerter={showAlerter}
				setShowAlerter={setShowAlerter}
			/>
			<TextInputArea setInputText={setInputText} />
			<TextOptions
				filtersConf={filtersConf}
				setFiltersConf={setFiltersConf}
				onClickProcessText={onClickProcessText}
				onClickCopyText={onClickCopyText}
				autoProcess={autoProcess}
				setAutoProcess={setAutoProcess}
				autoCopy={autoCopy}
				setAutoCopy={setAutoCopy}
			/>
			<TextProcessedArea processedText={processedText} />
		</div>
	);
};

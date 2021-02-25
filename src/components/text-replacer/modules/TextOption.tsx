import React, { useContext } from 'react';

import { TextReplacerContext } from '../context/TextReplacerContext';
import {
	autoCopyTextChangeActiveAction,
	autoProcessTextChangeActiveAction,
} from '../context/actions';

import { OptionBox } from './elements/OptionBox';
import { OptionBoxCustomContainer } from './elements/OptionBoxCustomContainer';

export const TextOptions: React.FC = () => {
	const {
		state: { standardReplacers, processedText, autoCopyText, autoProcessText },
		dispatch: textReplacerContextDispatch,
		processText,
		copyProcessedText,
	} = useContext(TextReplacerContext)!;

	const renderOptionBoxes = (): JSX.Element[] => {
		const optionBoxes: JSX.Element[] = [];

		standardReplacers.forEach(filterObject => {
			optionBoxes.push(
				<OptionBox key={filterObject.id} filterObject={filterObject} />
			);
		});

		return optionBoxes;
	};

	return (
		<div className="">
			<p className="text-sm italic font-light m-0 p-0">Options:</p>
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="justify-start">
					{renderOptionBoxes()}
					<OptionBoxCustomContainer />
				</div>

				<div className="grid lg:justify-self-end content-start">
					<button className="btn-st1" onClick={() => processText()}>
						Process text
					</button>
					<button
						className="btn-st1 text-xs"
						onClick={() => copyProcessedText()}
					>
						Copy processed text
						<br />
						to clipboard
					</button>
					<div className="option-box-v2">
						<label>
							<p className="checkbox-text">
								Process automatically
								<br />
								after end of typing:
							</p>
							<input
								type="checkbox"
								checked={autoProcessText}
								onChange={() =>
									textReplacerContextDispatch(
										autoProcessTextChangeActiveAction()
									)
								}
							/>
							<div className="checkbox-icon-box"></div>
						</label>
					</div>
					<div className="option-box-v2">
						<label>
							<p className="checkbox-text">
								Copy processed text
								<br />
								to clipboard after process:
							</p>
							<input
								type="checkbox"
								checked={autoCopyText}
								onChange={() =>
									textReplacerContextDispatch(autoCopyTextChangeActiveAction())
								}
							/>
							<div className="checkbox-icon-box"></div>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

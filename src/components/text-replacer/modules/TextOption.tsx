import React, { SetStateAction, useContext } from 'react';

import { OptionBox } from './elements/OptionBox';
import { OptionBoxCustomContainer } from './elements/OptionBoxCustomContainer';
import { TextReplacerContext } from '../context/textReplacerContext';

export const TextOptions: React.FC = () => {
	const {
		standardReplacers,
		autoProcessText,
		setAutoProcessText,
		autoCopyText,
		setAutoCopyText,
		processText,
		copyProcessedText,
	} = useContext(TextReplacerContext)!;

	const renderOptionBoxes = (): JSX.Element[] => {
		const optionBoxes: JSX.Element[] = [];

		standardReplacers.forEach(({ id }) => {
			optionBoxes.push(<OptionBox key={id} filterId={id} />);
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
								onChange={() => setAutoProcessText(!autoProcessText)}
							/>
							<div className="checkbox-icon-box"></div>
						</label>
					</div>
					<div className="option-box-v2">
						<label>
							<p className="checkbox-text">
								Copy to clipboard
								<br />
								after process:
							</p>
							<input
								type="checkbox"
								checked={autoCopyText}
								onChange={() => setAutoCopyText(!autoCopyText)}
							/>
							<div className="checkbox-icon-box"></div>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

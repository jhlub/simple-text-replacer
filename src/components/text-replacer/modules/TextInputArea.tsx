import React, { useEffect, useContext } from 'react';

import { userInputTextChangeAction } from '../context/actions';
import { TextReplacerContext } from '../context/TextReplacerContext';

export const TextInputArea: React.FC = () => {
	const {
		state: { userInputText, autoProcessText },
		dispatch: textReplacerContextDispatch,
		processText,
	} = useContext(TextReplacerContext)!;

	useEffect(() => {
		if (autoProcessText) {
			const timerId = setTimeout(() => {
				processText();
			}, 1000);

			return () => {
				clearTimeout(timerId);
			};
		}
	}, [userInputText, autoProcessText]);

	return (
		<div>
			<label>
				<p className="text-sm italic p-0 m-0">Text area:</p>
				<textarea
					onChange={event => {
						textReplacerContextDispatch(
							userInputTextChangeAction(event.target.value)
						);
					}}
					className="w-full bg-white border border-black rounded p-4"
				></textarea>
			</label>
		</div>
	);
};

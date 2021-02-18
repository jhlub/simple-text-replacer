import React, { useEffect, useContext } from 'react';
import { TextReplacerContext } from '../context/textReplacerContext';

export const TextInputArea: React.FC = () => {
	const {
		userInputText,
		processText,
		autoProcessText,
		setUserInputText,
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
						setUserInputText(event.target.value);
					}}
					className="w-full bg-white border border-black rounded p-4"
				></textarea>
			</label>
		</div>
	);
};

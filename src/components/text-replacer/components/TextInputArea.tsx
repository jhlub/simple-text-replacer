import React from 'react';

type PropsType = {
	setInputText: React.Dispatch<React.SetStateAction<string>>;
};

export const TextInputArea: React.FC<PropsType> = ({ setInputText }) => {
	return (
		<div>
			<label>
				<p className="text-sm italic p-0 m-0">Text area:</p>
				<textarea
					onChange={event => {
						setInputText(event.target.value);
					}}
					className="w-full bg-white border border-black rounded p-4"
				></textarea>
			</label>
		</div>
	);
};

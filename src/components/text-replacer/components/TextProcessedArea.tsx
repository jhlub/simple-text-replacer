import React from 'react';

type PropsType = { processedText: String };

export const TextProcessedArea: React.FC<PropsType> = ({ processedText }) => (
	<div className="border-t-4 border-gray-500 pt-4">
		<p className="text-sm italic font-light m-0 p-0">Processed text:</p>
		<div
			className="bg-gray-300 border border-black w-full rounded p-4"
			style={{ minHeight: '200px' }}
		>
			{processedText}
		</div>
	</div>
);

import React, { useContext } from 'react';

import { customReplacerCreateAction } from '../../context/actions';
import { TextReplacerContext } from '../../context/TextReplacerContext';

import { OptionBoxCustom } from './OptionBoxCustom';

export const OptionBoxCustomContainer: React.FC = () => {
	const {
		state: { customReplacers },
		dispatch: textReplacerContextDispatch,
	} = useContext(TextReplacerContext)!;

	const renderOptionBoxCustom = () => {
		const OptionBoxCustomElements: JSX.Element[] = [];
		for (let i = 0; i < customReplacers.length; i++) {
			OptionBoxCustomElements.push(
				<OptionBoxCustom key={i} filterObject={customReplacers[i]} />
			);
		}

		return (
			<div className="option-box-custom-boxes">{OptionBoxCustomElements}</div>
		);
	};

	return (
		<div className="option-box-custom-container">
			{renderOptionBoxCustom()}
			<button
				className="btn-st1 text-xs"
				onClick={() =>
					textReplacerContextDispatch(customReplacerCreateAction())
				}
			>
				Add custom field
			</button>
		</div>
	);
};

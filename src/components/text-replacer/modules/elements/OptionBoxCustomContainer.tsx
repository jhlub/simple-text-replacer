import React, { SetStateAction, useContext, useEffect, useState } from 'react';
import { CUSTOM_REPLACER_CREATE } from '../../actions/types';
import { TextReplacerContext } from '../../context/textReplacerContext';
import { normalizeConfigName } from '../../utils';

import { OptionBoxCustom } from './OptionBoxCustom';

export const OptionBoxCustomContainer: React.FC = () => {
	const { customReplacers, customReplacersDispatch } = useContext(
		TextReplacerContext
	)!;

	const renderOptionBoxCustom = () => {
		const OptionBoxCustomElements: JSX.Element[] = [];
		for (let i = 0; i < customReplacers.length; i++) {
			OptionBoxCustomElements.push(
				<OptionBoxCustom key={i} replacerId={customReplacers[i].id} />
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
					customReplacersDispatch({ type: CUSTOM_REPLACER_CREATE })
				}
			>
				Add custom field
			</button>
		</div>
	);
};

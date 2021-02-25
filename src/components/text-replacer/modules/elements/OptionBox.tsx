import React, { useContext } from 'react';

import { TextReplacerContext } from '../../context/TextReplacerContext';
import { ReplacerConfigType } from '../../types';
import { standardReplacerChangeActiveAction } from '../../context/actions';

type PropsType = {
	filterObject: ReplacerConfigType;
};

export const OptionBox: React.FC<PropsType> = ({ filterObject }) => {
	const { dispatch: textReplacerContextDispatch } = useContext(
		TextReplacerContext
	)!;

	return (
		<div className="option-box">
			<label>
				<p className="checkbox-text">{filterObject.description}</p>
				<input
					type="checkbox"
					checked={filterObject.active}
					onChange={() =>
						textReplacerContextDispatch(
							standardReplacerChangeActiveAction(filterObject.id)
						)
					}
				/>
				<div className="checkbox-icon-box"></div>
			</label>
		</div>
	);
};

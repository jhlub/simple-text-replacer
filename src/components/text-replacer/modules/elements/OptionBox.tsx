import React, { useContext } from 'react';

import { TextReplacerContext } from '../../context/textReplacerContext';
import { ConfigSourceType } from '../../types';
import { STANDARD_REPLACER_CHANGE_ACTIVE } from '../../actions/types';

type PropsType = {
	filterId: number;
};

export const OptionBox: React.FC<PropsType> = ({ filterId }) => {
	const { getReplacerFieldValue, standardReplacersDispatch } = useContext(
		TextReplacerContext
	)!;

	return (
		<div className="option-box">
			<label>
				<p className="checkbox-text">
					{getReplacerFieldValue(
						filterId,
						'description',
						ConfigSourceType.Standard
					)}
				</p>
				<input
					type="checkbox"
					checked={
						!!getReplacerFieldValue(
							filterId,
							'active',
							ConfigSourceType.Standard
						)
					}
					onChange={
						() =>
							standardReplacersDispatch({
								type: STANDARD_REPLACER_CHANGE_ACTIVE,
								id: filterId,
							})
						// toggleReplacerActive(filterId, ConfigSourceType.Standard)
					}
				/>
				<div className="checkbox-icon-box"></div>
			</label>
		</div>
	);
};

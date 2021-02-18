import React, { createRef, RefObject, useCallback, useContext } from 'react';
import { TextReplacerContext } from '../../context/textReplacerContext';
import { ConfigSourceType } from '../../types';

import {
	CUSTOM_REPLACER_CHANGE_ACTIVE,
	CUSTOM_REPLACER_REMOVE,
	CUSTOM_REPLACER_CHANGE_DATA,
} from '../../actions/types';

type PropsType = {
	replacerId: number;
};

export const OptionBoxCustom: React.FC<PropsType> = ({ replacerId }) => {
	const { getReplacerFieldValue, customReplacersDispatch } = useContext(
		TextReplacerContext
	)!;

	return (
		<div className="option-box option-box-custom">
			<label>
				<p className="checkbox-text">
					{getReplacerFieldValue(
						replacerId,
						'description',
						ConfigSourceType.Custom
					)}
				</p>
				<input
					type="checkbox"
					checked={
						!!getReplacerFieldValue(
							replacerId,
							'active',
							ConfigSourceType.Custom
						)
					}
					onChange={() =>
						customReplacersDispatch({
							type: CUSTOM_REPLACER_CHANGE_ACTIVE,
							id: replacerId,
						})
					}
				/>
				<div className="checkbox-icon-box"></div>
			</label>
			<div
				className="remove-icon"
				onClick={() =>
					customReplacersDispatch({
						type: CUSTOM_REPLACER_REMOVE,
						id: replacerId,
					})
				}
			></div>
			<div className="custom-config-box">
				<div className="custom-config-field">
					<label>
						<p className="custom-config-text">From [string]:</p>
						<input
							className="custom-config-input"
							type="text"
							value={
								getReplacerFieldValue(
									replacerId,
									'from',
									ConfigSourceType.Custom
								) as string
							}
							onChange={e =>
								customReplacersDispatch({
									type: CUSTOM_REPLACER_CHANGE_DATA,
									id: replacerId,
									fieldName: 'from',
									fieldValue: e.target.value,
								})
							}
						/>
					</label>
				</div>
				<div className="custom-config-field">
					<label>
						<p className="custom-config-text">To [string]:</p>
						<input
							className="custom-config-input"
							type="text"
							value={
								getReplacerFieldValue(
									replacerId,
									'to',
									ConfigSourceType.Custom
								) as string
							}
							onChange={e =>
								customReplacersDispatch({
									type: CUSTOM_REPLACER_CHANGE_DATA,
									id: replacerId,
									fieldName: 'to',
									fieldValue: e.target.value,
								})
							}
						/>
					</label>
				</div>
			</div>
		</div>
	);
};

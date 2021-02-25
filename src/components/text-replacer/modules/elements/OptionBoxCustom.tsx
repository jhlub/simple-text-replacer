import React, { useContext } from 'react';

import { TextReplacerContext } from '../../context/TextReplacerContext';
import { ReplacerConfigType } from '../../types';
import {
	customReplacerChangeActiveAction,
	customReplacerChangeDataAction,
	customReplacerRemoveAction,
} from '../../context/actions';

type PropsType = {
	filterObject: ReplacerConfigType;
};

export const OptionBoxCustom: React.FC<PropsType> = ({ filterObject }) => {
	const { dispatch: textReplacerContextDispatch } = useContext(
		TextReplacerContext
	)!;

	return (
		<div className="option-box option-box-custom">
			<label>
				<p className="checkbox-text">{filterObject.description}</p>
				<input
					type="checkbox"
					checked={filterObject.active}
					onChange={() =>
						textReplacerContextDispatch(
							customReplacerChangeActiveAction(filterObject.id)
						)
					}
				/>
				<div className="checkbox-icon-box"></div>
			</label>
			<div
				className="remove-icon"
				onClick={() =>
					textReplacerContextDispatch(
						customReplacerRemoveAction(filterObject.id)
					)
				}
			></div>
			<div className="custom-config-box">
				<div className="custom-config-field">
					<label>
						<p className="custom-config-text">From [string]:</p>
						<input
							className="custom-config-input"
							type="text"
							value={filterObject.from as string}
							onChange={e =>
								textReplacerContextDispatch(
									customReplacerChangeDataAction({
										id: filterObject.id,
										fieldName: 'from',
										fieldValue: e.target.value,
									})
								)
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
							value={filterObject.to as string}
							onChange={e =>
								textReplacerContextDispatch(
									customReplacerChangeDataAction({
										id: filterObject.id,
										fieldName: 'to',
										fieldValue: e.target.value,
									})
								)
							}
						/>
					</label>
				</div>
			</div>
		</div>
	);
};

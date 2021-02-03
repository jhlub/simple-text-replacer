import React, { SetStateAction, useState } from 'react';
import { FilterConfType } from '../../types';

import { OptionBoxCustom } from './OptionBoxCustom';

type PropsType = {
	filtersConf: FilterConfType[];
	setFiltersConf: React.Dispatch<SetStateAction<FilterConfType[]>>;
};

export const OptionBoxCustomContainer: React.FC<PropsType> = ({
	filtersConf,
	setFiltersConf,
}) => {
	const [optionBoxCustomIndex, setOptionBoxCustomIndex] = useState<number>(0);

	const renderOptionBoxCustom = () => {
		const OptionBoxCustomElements: JSX.Element[] = [];
		for (let i = 0; i < optionBoxCustomIndex; i++) {
			OptionBoxCustomElements.push(
				<OptionBoxCustom
					key={i}
					index={i}
					filtersConf={filtersConf}
					setFiltersConf={setFiltersConf}
				/>
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
				onClick={() => setOptionBoxCustomIndex(optionBoxCustomIndex + 1)}
			>
				Add custom field
			</button>
		</div>
	);
};

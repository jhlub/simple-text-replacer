import React, { SetStateAction, useEffect, useState } from 'react';

import { FilterConfType } from '../../types';
import { getConfigActiveField, setConfigActiveField } from '../../utils';

type PropsType = {
	optionTitle: string;
	filterName: string;
	filtersConf: FilterConfType[];
	setFiltersConf: React.Dispatch<SetStateAction<FilterConfType[]>>;
};

export const OptionBox: React.FC<PropsType> = ({
	optionTitle,
	filterName,
	filtersConf,
	setFiltersConf,
}) => {
	const [checked, setChecked] = useState<boolean>(
		getConfigActiveField(filterName, filtersConf)
	);

	useEffect(() => {
		setConfigActiveField(filterName, filtersConf, checked);
		setFiltersConf(filtersConf);
	}, [checked]);

	return (
		<div className="option-box">
			<label>
				<p className="checkbox-text">{optionTitle}</p>
				<input
					type="checkbox"
					checked={checked}
					onChange={() => setChecked(!checked)}
				/>
				<div className="checkbox-icon-box"></div>
			</label>
		</div>
	);
};

import React, {
	createRef,
	RefObject,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { FilterConfType } from '../../types';
import {
	createNewCustomFilterConfig,
	normalizeConfigName,
	removeFilterConfig,
	setConfigActiveField,
	setConfigFromField,
	setConfigToField,
} from '../../utils';

type PropsType = {
	index: number;
	filtersConf: FilterConfType[];
	setFiltersConf: React.Dispatch<SetStateAction<FilterConfType[]>>;
};

export const OptionBoxCustom: React.FC<PropsType> = ({
	index,
	filtersConf,
	setFiltersConf,
}) => {
	const customBoxDescription = `Custom #${index}`;
	const customBoxName = normalizeConfigName(customBoxDescription);

	const optionBoxCustomRef: RefObject<HTMLDivElement> = createRef();
	const [configActive, setConfigActive] = useState<boolean>(true);
	const [configFrom, setConfigFrom] = useState<string>('');
	const [configTo, setConfigTo] = useState<string>('');

	const onClickRemoveElement = () => {
		optionBoxCustomRef.current?.remove();
		removeFilterConfig(customBoxName, filtersConf);
	};

	useEffect(() => {
		const newFilterConf = createNewCustomFilterConfig(
			customBoxName,
			customBoxDescription,
			filtersConf
		);

		filtersConf.push(newFilterConf);

		setFiltersConf(filtersConf);
	}, []);

	useEffect(() => {
		setConfigActiveField(customBoxName, filtersConf, configActive);
		setConfigFromField(customBoxName, filtersConf, configFrom);
		setConfigToField(customBoxName, filtersConf, configTo);
		setFiltersConf(filtersConf);
	}, [configActive, configFrom, configTo]);

	return (
		<div className="option-box option-box-custom" ref={optionBoxCustomRef}>
			<label>
				<p className="checkbox-text">{customBoxDescription}</p>
				<input
					type="checkbox"
					checked={configActive}
					onChange={() => setConfigActive(!configActive)}
				/>
				<div className="checkbox-icon-box"></div>
			</label>
			<div className="remove-icon" onClick={onClickRemoveElement}></div>
			<div className="custom-config-box">
				<div className="custom-config-field">
					<label>
						<p className="custom-config-text">From [string]:</p>
						<input
							className="custom-config-input"
							type="text"
							value={configFrom}
							onChange={e => setConfigFrom(e.target.value)}
						/>
					</label>
				</div>
				<div className="custom-config-field">
					<label>
						<p className="custom-config-text">To [string]:</p>
						<input
							className="custom-config-input"
							type="text"
							value={configTo}
							onChange={e => setConfigTo(e.target.value)}
						/>
					</label>
				</div>
			</div>
		</div>
	);
};

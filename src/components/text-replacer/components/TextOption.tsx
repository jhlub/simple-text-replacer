import React, { SetStateAction } from 'react';

import { OptionBox } from './elements/OptionBox';
import { OptionBoxCustomContainer } from './elements/OptionBoxCustomContainer';

import { FilterConfType } from '../types';

type PropsType = {
	filtersConf: FilterConfType[];
	setFiltersConf: React.Dispatch<SetStateAction<FilterConfType[]>>;
	onClickProcessText(): void;
	onClickCopyText(): void;
	autoProcess: boolean;
	setAutoProcess: React.Dispatch<SetStateAction<boolean>>;
	autoCopy: boolean;
	setAutoCopy: React.Dispatch<SetStateAction<boolean>>;
};

export const TextOptions: React.FC<PropsType> = ({
	filtersConf,
	setFiltersConf,
	onClickProcessText,
	onClickCopyText,
	autoProcess,
	setAutoProcess,
	autoCopy,
	setAutoCopy,
}) => {
	const renderOptionBoxes = (): JSX.Element[] => {
		const optionBoxes: JSX.Element[] = [];

		filtersConf.forEach(({ id, name, description }) => {
			optionBoxes.push(
				<OptionBox
					key={id}
					filterName={name}
					filtersConf={filtersConf}
					setFiltersConf={setFiltersConf}
					optionTitle={description}
				/>
			);
		});

		return optionBoxes;
	};

	return (
		<div className="">
			<p className="text-sm italic font-light m-0 p-0">Options:</p>
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="justify-start">
					{renderOptionBoxes()}
					<OptionBoxCustomContainer
						filtersConf={filtersConf}
						setFiltersConf={setFiltersConf}
					/>
				</div>

				<div className="grid lg:justify-self-end content-start">
					<button className="btn-st1" onClick={onClickProcessText}>
						Process text
					</button>
					<button className="btn-st1 text-xs" onClick={onClickCopyText}>
						Copy processed text
						<br />
						to clipboard
					</button>
					<div className="option-box-v2">
						<label>
							<p className="checkbox-text">
								Process automatically
								<br />
								after end of typing:
							</p>
							<input
								type="checkbox"
								checked={autoProcess}
								onChange={() => setAutoProcess(!autoProcess)}
							/>
							<div className="checkbox-icon-box"></div>
						</label>
					</div>
					<div className="option-box-v2">
						<label>
							<p className="checkbox-text">
								Copy to clipboard
								<br />
								after process:
							</p>
							<input
								type="checkbox"
								checked={autoCopy}
								onChange={() => setAutoCopy(!autoCopy)}
							/>
							<div className="checkbox-icon-box"></div>
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

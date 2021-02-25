import React from 'react';

import { Alerter } from '../alerter/Alerter';
import { TextInputArea } from './modules/TextInputArea';
import { TextOptions } from './modules/TextOption';
import { TextProcessedArea } from './modules/TextProcessedArea';

export const TextReplacer: React.FC = () => {
	return (
		<div className="max-w-screen-xl min-h-full p-10 mx-auto grid grid-col-1 gap-y-4">
			<Alerter title="Copied!" />
			<TextInputArea />
			<TextOptions />
			<TextProcessedArea />
		</div>
	);
};

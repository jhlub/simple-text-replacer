import React from 'react';
import { TextReplacerProvider } from './context/textReplacerContext';
import { TextReplacer } from './TextReplacer';

const TextReplacerComplex: React.FC = () => (
	<TextReplacerProvider>
		<TextReplacer />
	</TextReplacerProvider>
);

export { TextReplacerComplex };

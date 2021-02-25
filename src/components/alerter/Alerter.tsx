import React, { createRef, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { setShowCopyToClipboardAlertAction } from '../text-replacer/context/actions';
import { TextReplacerContext } from '../text-replacer/context/TextReplacerContext';

import { AlerterContent } from './AlerterContent';

type PropsType = {
	title: string;
};

export const Alerter: React.FC<PropsType> = ({ title }) => {
	const {
		state: { showCopyToClipboardAlert },
		dispatch: textReplacerContextDispatch,
	} = useContext(TextReplacerContext)!;
	const alertElement = createRef<HTMLDivElement>();

	useEffect(() => {
		if (alertElement.current?.classList.contains('animation-slide-up')) {
			alertElement.current?.classList.remove('animation-slide-up');
		}

		setTimeout(() => {
			alertElement.current?.classList.add('animation-slide-up');
			setTimeout(() => {
				textReplacerContextDispatch(setShowCopyToClipboardAlertAction(false));
				alertElement.current?.remove();
			}, 50);
		}, 1000);
	}, [showCopyToClipboardAlert]);

	if (!showCopyToClipboardAlert) return null;

	return createPortal(
		<div className="absolute flex justify-center items-start top-0 left-0 w-full h-full z-40">
			<AlerterContent ref={alertElement} title={title} />
		</div>,
		document.body
	);
};

import React, { createRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { AlerterContent } from './AlerterContent';

type PropsType = {
	title: string;
	showAlerter: boolean;
	setShowAlerter: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Alerter: React.FC<PropsType> = ({
	title,
	showAlerter,
	setShowAlerter,
}) => {
	const alertElement = createRef<HTMLDivElement>();

	useEffect(() => {
		console.log('Alert: ' + showAlerter);
		if (alertElement.current?.classList.contains('animation-slide-up')) {
			alertElement.current?.classList.remove('animation-slide-up');
		}

		setTimeout(() => {
			alertElement.current?.classList.add('animation-slide-up');
			setTimeout(() => {
				setShowAlerter(false);
				alertElement.current?.remove();
			}, 50);
		}, 1000);
	}, [showAlerter]);

	if (!showAlerter) return null;

	return createPortal(
		<div className="absolute flex justify-center items-start top-0 left-0 w-full h-full z-40">
			<AlerterContent ref={alertElement} title={title} />
		</div>,
		document.body
	);
};

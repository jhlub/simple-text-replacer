import React, { RefAttributes, RefObject } from 'react';

type PropsType = {
	title: string;
};

export const AlerterContent = React.forwardRef<HTMLDivElement, PropsType>(
	({ title }, ref) => (
		<div
			ref={ref}
			className="relative inline-block top-20 bg-gray-500 py-4 px-8 animation-slide animation-slide-up"
		>
			<p className="text-white font-bold text-2xl">{title}</p>
		</div>
	)
);

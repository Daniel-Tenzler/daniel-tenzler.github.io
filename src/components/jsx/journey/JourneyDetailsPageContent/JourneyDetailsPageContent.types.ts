import type { ReactNode } from 'react';

export interface JourneyDetailsPageContentProps {
	item: {
		title: string;
		date: string;
	};
	children: ReactNode;
}

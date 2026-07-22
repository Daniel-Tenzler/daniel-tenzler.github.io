import type React from 'react';

export interface SectionHeaderProps {
	title: string;
	titleId?: string;
	viewAllHref?: string;
	viewAllLabel?: string;
	as?: React.ElementType;
	children?: React.ReactNode;
}

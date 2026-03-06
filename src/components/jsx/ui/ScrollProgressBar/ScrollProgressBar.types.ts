import type { HTMLAttributes } from 'react';

export interface ScrollProgressBarProps extends HTMLAttributes<HTMLDivElement> {
	[key: string]: unknown; // Allow Astro client directives
}

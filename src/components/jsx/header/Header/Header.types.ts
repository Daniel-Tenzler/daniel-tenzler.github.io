import type { HTMLAttributes } from 'react';

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
	id?: string;
	[key: string]: unknown; // Allow Astro client directives
}

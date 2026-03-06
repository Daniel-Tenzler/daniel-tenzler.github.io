import type { HTMLAttributes } from 'react';

/**
 * Props for the CodeOutput component
 */
export interface CodeOutputProps {
	/** The code content to display */
	code: string;
	/** Programming language for syntax highlighting/display */
	language?: string;
	/** Optional label to override the default language-based label */
	label?: string;
}

/**
 * Props for the CopyButton styled component
 */
export interface CopyButtonProps extends HTMLAttributes<HTMLButtonElement> {
	/** Whether the code has been copied to clipboard */
	$copied?: boolean;
}

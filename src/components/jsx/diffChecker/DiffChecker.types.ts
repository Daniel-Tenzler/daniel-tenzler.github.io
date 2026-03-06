import type React from 'react';

export type DiffMode = 'lines' | 'words' | 'chars';

export interface DiffResult {
	value: string;
	added?: boolean;
	removed?: boolean;
}

export interface ToggleButtonProps {
	$active?: boolean;
}

export interface LineContentProps {
	$as?: React.ElementType;
}

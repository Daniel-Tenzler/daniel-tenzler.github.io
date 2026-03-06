import type React from 'react';

export interface InputOutputProps {
	title: string;
	children?: React.ReactNode;
	inputValue: string;
	inputLabel: string;
	outputValue?: string;
	outputLabel?: string;
	onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onOutputChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	inputReadOnly?: boolean;
	outputReadOnly?: boolean;
	inputPlaceholder?: string;
	outputPlaceholder?: string;
	error?: string;
}

import type React from 'react';

export interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	onCopy?: () => void;
	copied?: boolean;
}

export interface ButtonProps {
	$copied?: boolean;
}

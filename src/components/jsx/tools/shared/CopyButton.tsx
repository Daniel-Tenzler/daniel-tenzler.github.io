import React from 'react';
import { Button } from './CopyButton.styles';

export interface CopyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	onCopy?: () => void;
	copied?: boolean;
}

const CopyButton = ({
	text,
	onCopy,
	copied = false,
	...props
}: CopyButtonProps) => {
	const handleClick = async () => {
		try {
			await navigator.clipboard.writeText(text);
			if (onCopy) onCopy();
		} catch (err) {
			console.error('Failed to copy:', err);
		}
	};

	return (
		<Button onClick={handleClick} $copied={copied} {...props}>
			{copied ? 'Copied!' : 'Copy'}
		</Button>
	);
};

export default CopyButton;

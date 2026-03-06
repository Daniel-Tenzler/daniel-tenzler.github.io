import React from 'react';
import { Button } from './CopyButton.styles';
import type { CopyButtonProps } from './CopyButton.types';

const CopyButton = ({
	text,
	onCopy,
	copied = false,
	...props
}: CopyButtonProps): React.JSX.Element => {
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

export type { CopyButtonProps };
export default CopyButton;

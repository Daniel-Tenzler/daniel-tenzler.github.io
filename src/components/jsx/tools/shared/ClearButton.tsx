import React from 'react';
import { Button } from './ClearButton.styles';

export interface ClearButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClear: () => void;
}

const ClearButton = ({
	onClear,
	...props
}: ClearButtonProps) => {
	return (
		<Button onClick={onClear} {...props}>
			Clear
		</Button>
	);
};

export default ClearButton;

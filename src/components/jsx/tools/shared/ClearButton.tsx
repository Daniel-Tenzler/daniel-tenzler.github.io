import React from 'react';
import { Button } from './ClearButton.styles';
import type { ClearButtonProps } from './ClearButton.types';

const ClearButton = ({ onClear, ...props }: ClearButtonProps) => {
	return (
		<Button onClick={onClear} {...props}>
			Clear
		</Button>
	);
};

export default ClearButton;

import type { ButtonHTMLAttributes } from 'react';

export interface ClearButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClear: () => void;
}

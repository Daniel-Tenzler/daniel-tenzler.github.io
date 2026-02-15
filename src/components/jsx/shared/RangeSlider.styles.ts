import styled from '@emotion/styled';

export const RangeSliderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;
`;

export const SliderHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const SliderLabel = styled.label`
	font-size: 14px;
	font-weight: 500;
	color: var(--color-text-primary);
`;

export const SliderControls = styled.div`
	display: flex;
	gap: 12px;
	align-items: center;
	width: 100%;
`;

export const SliderInput = styled.input`
	flex: 1;
	height: 6px;
	border-radius: 3px;
	background: var(--color-bg-secondary);
	outline: none;
	-webkit-appearance: none;
	appearance: none;

	&::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--color-accent-brand);
		cursor: pointer;
		transition: transform 0.1s;

		&:hover {
			transform: scale(1.2);
		}
	}

	&::-moz-range-thumb {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: var(--color-accent-brand);
		cursor: pointer;
		border: none;
		transition: transform 0.1s;

		&:hover {
			transform: scale(1.2);
		}
	}

	&:focus-visible {
		outline: 2px solid var(--color-accent-brand);
		outline-offset: 2px;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;

		&::-webkit-slider-thumb {
			cursor: not-allowed;
		}

		&::-moz-range-thumb {
			cursor: not-allowed;
		}
	}
`;

export const NumberInput = styled.input`
	width: 80px;
	padding: 6px 10px;
	border: 1px solid var(--color-border-light);
	border-radius: 4px;
	background-color: var(--gray-2a2a2a);
	color: var(--color-text-primary);
	font-family: 'Courier New', monospace;
	font-size: 14px;
	text-align: right;
	transition: border-color 0.2s;

	&:focus {
		outline: none;
		border-color: var(--color-accent-brand);
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	/* Remove number input spinners */
	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type='number'] {
		-moz-appearance: textfield;
	}
`;

export const UnitDisplay = styled.span`
	font-size: 14px;
	color: var(--color-text-muted);
	min-width: 32px;
`;

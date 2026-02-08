import styled from '@emotion/styled';

export const ColorInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	width: 100%;
`;

export const InputRow = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
`;

export const HexInput = styled.input`
	flex: 1;
	padding: 0.5rem 0.75rem;
	border: 1px solid var(--color-border-light);
	border-radius: 4px;
	background-color: var(--gray-2a2a2a);
	color: var(--color-text-primary);
	font-family: 'Courier New', monospace;
	font-size: 0.9rem;
	text-transform: uppercase;
	transition: border-color 0.2s;

	&:focus {
		outline: none;
		border-color: var(--color-accent-brand);
	}

	&::placeholder {
		text-transform: none;
		color: var(--color-text-muted);
	}
`;

export const ColorPickerButton = styled.button`
	width: 40px;
	height: 38px;
	border: 1px solid var(--color-border-light);
	border-radius: 4px;
	background-color: ${(props) => props.$color || '#000000'};
	cursor: pointer;
	padding: 0;
	position: relative;
	overflow: hidden;
	transition:
		transform 0.1s,
		border-color 0.2s;

	&:hover {
		border-color: var(--color-accent-brand);
		transform: scale(1.05);
	}

	&:active {
		transform: scale(0.95);
	}

	& input[type='color'] {
		position: absolute;
		top: -10px;
		left: -10px;
		width: 60px;
		height: 60px;
		opacity: 0;
		cursor: pointer;
	}

	&:focus-visible {
		outline: 2px solid var(--color-accent-brand);
		outline-offset: 2px;
	}
`;

export const OpacitySlider = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

export const SliderLabel = styled.label`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.85rem;
	color: var(--color-text-primary);
`;

export const SliderValue = styled.span`
	font-family: 'Courier New', monospace;
	color: var(--color-text-primary);
`;

export const SliderInput = styled.input`
	width: 100%;
	height: 6px;
	border-radius: 3px;
	background: var(--gray-383838);
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
`;

export const PreviewSwatch = styled.div`
	width: 100%;
	height: 32px;
	border-radius: 4px;
	border: 1px solid var(--color-border-light);
	background-color: ${(props) => props.$backgroundColor};
	transition: background-color 0.1s;
`;

export const Label = styled.label`
	font-size: 0.9rem;
	font-weight: 500;
	color: var(--color-text-primary);
	margin-bottom: 0.25rem;
`;

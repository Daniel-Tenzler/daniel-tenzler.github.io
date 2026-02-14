import styled from '@emotion/styled';

// Base focus-visible style shared across all buttons
const focusVisibleStyle = `
	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}
`;

/**
 * Small button style - used for action buttons, toggles, presets
 * Common in: ColorConverter, BoxShadowGenerator, DiffChecker, etc.
 */
export const BaseSmallButton = styled.button`
	background-color: var(--gray-404040);
	color: var(--color-text-emphasis);
	padding: 0.5em 1em;
	border: 1px solid var(--gray-474747);
	border-radius: 6px;
	font-weight: 500;
	font-size: 13px;
	cursor: pointer;
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease;

	&:hover {
		background-color: var(--gray-474747);
		border-color: var(--color-border-light);
	}

	&:active {
		background-color: var(--gray-383838);
	}

	${focusVisibleStyle}

	@media (max-width: 768px) {
		font-size: 12px;
		padding: 0.4em 0.8em;
	}
`;

/**
 * Medium button style - slight variation of small button
 * Used in: BoxShadowGenerator
 */
export const BaseMediumButton = styled.button`
	background-color: var(--gray-404040);
	color: var(--color-text-emphasis);
	padding: 0.6em 1em;
	border: 1px solid var(--gray-474747);
	border-radius: 6px;
	font-size: 13px;
	font-weight: 500;
	cursor: pointer;
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease;
	width: fit-content;

	&:hover {
		background-color: var(--gray-474747);
		border-color: var(--color-border-light);
	}

	&:active {
		background-color: var(--gray-383838);
	}

	${focusVisibleStyle}

	@media (max-width: 768px) {
		font-size: 12px;
		padding: 0.5em 0.8em;
	}
`;

/**
 * Large primary button style - used for main actions
 * Used in: Pixelizer (ProcessButton)
 */
export const BasePrimaryButton = styled.button`
	color: var(--color-text-muted);
	padding: 0.75em 2em;
	border: none;
	border-radius: 8px;
	background-color: var(--gray-2d2d2d);
	font-weight: 500;
	font-size: 15px;
	cursor: pointer;
	min-width: 140px;
	transition:
		background-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover:not(:disabled) {
		background-color: var(--gray-222939);
		box-shadow: 0 2px 4px #0000001a;
	}

	&:active:not(:disabled) {
		background-color: var(--gray-383838);
		box-shadow: none;
	}

	${focusVisibleStyle}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	@media (max-width: 480px) {
		padding: 0.6em 1.5em;
		font-size: 14px;
		min-width: 120px;
	}
`;

/**
 * Toggle button style - used for toggle switches
 * Used in: DiffChecker, BoxShadowGenerator
 */
export const BaseToggleButton = styled.button`
	background-color: ${(props) =>
		props.$active ? 'var(--gray-474747)' : 'var(--gray-383838)'};
	color: var(--color-text-emphasis);
	padding: 0.6em 1em;
	border: 1px solid var(--gray-474747);
	border-radius: 6px;
	font-size: 13px;
	cursor: pointer;
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease;

	&:hover {
		background-color: var(--gray-474747);
		border-color: var(--color-border-light);
	}

	&:active {
		background-color: var(--gray-404040);
	}

	${focusVisibleStyle}

	@media (max-width: 768px) {
		font-size: 12px;
		padding: 0.5em 1em;
	}
`;

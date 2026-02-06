import styled from '@emotion/styled';

export const ToggleWrapper = styled.button`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	padding: 0.75rem;
	border-radius: 999px;
	background-color: var(--gray-2a2a2a);
	color: var(--color-text-primary);
	font-size: 1rem;
	box-shadow: 0 2px 8px #00000014;
	transition: all 0.2s;
	gap: 0.75rem;
	/* Minimum touch target size (48x48px) for accessibility */
	min-height: 48px;
	min-width: 48px;

	&:hover {
		background-color: var(--gray-333333);
	}

	/* Compact version for mobile header */
	@media (max-width: 639px) {
		padding: 0.6rem;
		gap: 0.5rem;
		background-color: transparent;
		box-shadow: none;
	}

	&:focus-visible {
		outline: 2px solid var(--color-accent-brand);
		outline-offset: 2px;
	}
`;

export const SunIcon = styled.svg`
	width: 18px;
	height: 18px;
	color: var(--orange-f59e0b);
	opacity: ${(props) => (props.$visible ? '1' : '0.3')};
	transition: opacity 0.2s;

	@media (max-width: 639px) {
		width: 16px;
		height: 16px;
	}
`;

export const MoonIcon = styled.svg`
	width: 18px;
	height: 18px;
	color: var(--blue-60a5fa);
	opacity: ${(props) => (props.$visible ? '1' : '0.3')};
	transition: opacity 0.2s;

	@media (max-width: 639px) {
		width: 16px;
		height: 16px;
	}
`;

export const Switch = styled.span`
	display: inline-block;
	width: 44px;
	height: 24px;
	background: var(--color-border-light);
	border-radius: 12px;
	margin: 0;
	position: relative;
	transition: background 0.2s;

	&::after {
		content: '';
		position: absolute;
		top: 2px;
		left: ${(props) => (props.isDark ? '22px' : '2px')};
		width: 20px;
		height: 20px;
		background: var(--color-text-emphasis);
		border-radius: 50%;
		box-shadow: 0 1px 4px #0000001e;
		transition: left 0.2s, background 0.2s;
	}

	/* Compact version for mobile header */
	@media (max-width: 639px) {
		width: 36px;
		height: 20px;

		&::after {
			width: 16px;
			height: 16px;
			top: 2px;
			left: ${(props) => (props.isDark ? '18px' : '2px')};
		}
	}
`;

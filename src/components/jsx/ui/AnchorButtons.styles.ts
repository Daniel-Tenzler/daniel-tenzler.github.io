import styled from '@emotion/styled';

const focusVisibleStyle = `
	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
	}
`;

const baseButtonStyles = `
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	padding: 11px 22px;
	border-radius: var(--button-radius);
	font-size: 15px;
	font-weight: 600;
	line-height: 1;
	text-decoration: none;
	cursor: pointer;
	transition:
		background 0.2s ease,
		border-color 0.2s ease,
		box-shadow 0.2s ease,
		color 0.2s ease;
	-webkit-tap-highlight-color: transparent;
`;

export const PrimaryButtonAnchor = styled.a`
	${baseButtonStyles}
	color: #fff;
	background: var(--color-accent-brand);
	border: 1px solid var(--color-accent-brand);
	box-shadow: 0 2px 12px var(--blue-2337ff-66);

	&:hover {
		background: var(--blue-000d8a);
		border-color: var(--blue-000d8a);
	}

	${focusVisibleStyle}
`;

export const SecondaryButtonAnchor = styled.a`
	${baseButtonStyles}
	color: var(--color-text-emphasis);
	background: transparent;
	border: 1px solid var(--btn-secondary-border);
	backdrop-filter: blur(8px);

	&:hover {
		border-color: var(--color-text-secondary);
	}

	${focusVisibleStyle}
`;

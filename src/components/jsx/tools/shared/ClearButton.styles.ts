import styled from '@emotion/styled';

export const Button = styled.button`
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

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		font-size: 12px;
		padding: 0.4em 0.8em;
	}
`;

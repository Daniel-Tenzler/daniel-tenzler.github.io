import styled from '@emotion/styled';

export const StyledRssButton = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 6px;
	padding: 6px 12px;
	background-color: var(--blue-00004a);
	color: var(--color-text-emphasis);
	border-radius: 4px;
	text-decoration: none;
	font-weight: 500;
	font-size: 12px;
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease;
	border: none;
	cursor: pointer;
	margin-bottom: 16px;

	&:hover {
		background-color: var(--color-accent-brand-dark);
	}
`;

export const StyledRssIcon = styled.svg`
	width: 14px;
	height: 14px;
	fill: currentColor;
`;

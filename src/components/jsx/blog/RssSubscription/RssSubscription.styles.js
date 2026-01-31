import styled from '@emotion/styled';

export const StyledRssSubscriptionContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 1rem;
`;

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
	transition: all 0.2s ease;
	border: none;
	cursor: pointer;
	margin-bottom: 1rem;
	text-decoration: none;

	&:hover {
		background-color: var(--color-accent-brand-dark);
	}

	&:active {
		transform: translateY(0);
	}
`;

export const StyledRssIcon = styled.svg`
	width: 14px;
	height: 14px;
	fill: currentColor;
`;

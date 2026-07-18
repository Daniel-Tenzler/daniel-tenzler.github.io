import styled from '@emotion/styled';

export const Wrapper = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 16px;
	margin-bottom: 28px;
`;

export const Title = styled.h2`
	margin: 0;
	font-size: 24px;
	font-weight: 700;
	color: var(--color-text-emphasis);
	letter-spacing: -0.01em;
	line-height: 1.2;
`;

export const ViewAllLink = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	font-size: 14px;
	font-weight: 500;
	color: var(--color-text-muted);
	text-decoration: none;
	white-space: nowrap;
	transition: color 0.2s ease;

	&:hover {
		color: var(--color-text-emphasis);
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
		border-radius: 4px;
	}
`;

import styled from '@emotion/styled';

export const Card = styled.a`
	display: block;
	background: var(--color-bg-tertiary);
	border-radius: ${({ $noTopBorderRadius }) =>
		$noTopBorderRadius ? '0 0 8px 8px' : '8px'};
	overflow: hidden;
	box-shadow: 0 1px 3px var(--gray-292929-1a);
	transition: all 0.2s ease;
	text-decoration: none;
	color: inherit;

	&:hover {
		box-shadow: 0 8px 8px var(--gray-292929-80);
	}
`;

export const Content = styled.div`
	padding: 24px;
`;

export const Title = styled.h3`
	margin: 0 0 8px;
	font-size: 20px;
	font-weight: 600;
	color: var(--color-text-primary);
	transition: color 0.2s ease;

	${Card}:hover & {
		color: var(--color-text-muted);
	}
`;

export const Description = styled.p`
	margin: 0 0 16px;
	font-size: 14px;
	color: var(--color-text-primary);
`;

export const Meta = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	font-size: 14px;
	color: var(--color-text-muted);
`;

export const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin-top: 12px;
`;

export const Tag = styled.span`
	padding: 4px 12px;
	background-color: var(--black-0f1219-80);
	border-radius: 9999px;
	font-size: 14px;
	color: var(--color-text-muted);
`;

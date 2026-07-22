import styled from '@emotion/styled';
import type { CardProps } from './BlogPostCard.types';

export const Card = styled.a<CardProps>`
	display: flex;
	flex-direction: column;
	height: 100%;
	background: var(--card-bg);
	border: var(--card-border);
	border-radius: var(--card-radius);
	border-top-left-radius: ${(props) =>
		props.$noTopBorderRadius ? '0' : 'var(--card-radius)'};
	border-top-right-radius: ${(props) =>
		props.$noTopBorderRadius ? '0' : 'var(--card-radius)'};
	overflow: hidden;
	padding: var(--card-padding);
	text-decoration: none;
	color: inherit;
	box-shadow: var(--card-shadow);
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		border-color: var(--card-hover-border);
		box-shadow: var(--card-hover-shadow);
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
`;

export const Title = styled.h3`
	margin: 0 0 8px;
	font-size: 18px;
	font-weight: 600;
	line-height: 1.3;
	color: var(--color-text-emphasis);
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	transition: color 0.2s ease;

	${Card}:hover & {
		color: var(--color-text-secondary);
	}
`;

export const Description = styled.p`
	margin: 0 0 16px;
	font-size: 14px;
	line-height: 1.5;
	color: var(--white-ffffff-b3);
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const Meta = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	font-size: 13px;
	color: var(--color-text-secondary);
`;

export const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	margin-top: 14px;
`;

export const Tag = styled.span`
	display: inline-flex;
	align-items: center;
	height: var(--chip-height);
	padding: 0 10px;
	border-radius: var(--chip-radius);
	font-size: 0.75rem;
	font-weight: 500;
	color: var(--color-text-muted);
	background: var(--chip-bg);
	border: 1px solid var(--chip-border);
`;

export const CardFooter = styled.div`
	display: flex;
	align-items: center;
	margin-top: auto;
	padding-top: 18px;
`;

export const ReadLink = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 4px;
	font-size: 13px;
	font-weight: 600;
	color: var(--color-text-emphasis);
	transition: gap 0.2s ease;

	${Card}:hover & {
		gap: 8px;
	}
`;

import styled from '@emotion/styled';
import type { TOCItemProps, TOCLinkProps } from './TableOfContents.types';

export const TOCContainer = styled.nav`
	align-self: start;
	max-height: calc(100vh - 128px);
	overflow-y: auto;
	padding: 24px 24px 24px 8px;
	background: var(--card-bg);
	backdrop-filter: blur(10px);
	border: var(--card-border);
	border-radius: var(--card-radius);
	box-shadow: var(--card-shadow);

	@media (max-width: 768px) {
		align-self: stretch;
		max-height: 40vh;
		padding: 16px;
		margin: 0 0 16px 0;
		border-radius: 12px;
	}

	@media (max-width: 480px) {
		max-height: 35vh;
		padding: 12px;
		border-radius: 8px;
	}
`;

export const TOCList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const TOCItem = styled.li<TOCItemProps>`
	margin-bottom: 8px;
	padding-left: ${(props) => (props.depth - 1) * 1}rem;

	@media (max-width: 768px) {
		margin-bottom: 6px;
		padding-left: ${(props) => (props.depth - 1) * 0.75}rem;
	}
`;

export const TOCLink = styled.a<TOCLinkProps>`
	display: block;
	font-size: 14px;
	color: ${(props) =>
		props.isActive
			? 'var(--color-text-emphasis)'
			: 'var(--color-text-muted)'};
	text-decoration: none;
	transition: color 0.2s ease;
	line-height: 1.4;

	&:hover {
		color: var(--color-text-emphasis);
	}

	@media (max-width: 768px) {
		font-size: 13px;
		line-height: 1.3;
		padding: 4px 0;
	}
`;

import styled from '@emotion/styled';

export const TOCContainer = styled.nav`
	align-self: start;
	max-height: calc(100vh - 8rem);
	overflow-y: auto;
	padding: 1.5rem 1.5rem 1.5rem 0.5rem;
	background-color: var(--gray-303030-cc);
	backdrop-filter: blur(10px);
	border: 1px solid var(--gray-60739f-33);
	border-radius: 1rem;
	box-shadow: 0 4px 6px var(--black-0f1219-1a);

	@media (max-width: 768px) {
		align-self: stretch;
		max-height: 40vh;
		padding: 1rem;
		margin: 0 0 1rem 0;
		border-radius: 0.75rem;
	}

	@media (max-width: 480px) {
		max-height: 35vh;
		padding: 0.75rem;
		border-radius: 0.5rem;
	}
`;

export const TOCList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

export const TOCItem = styled.li`
	margin-bottom: 0.5rem;
	padding-left: ${(props) => (props.depth - 1) * 1}rem;

	@media (max-width: 768px) {
		margin-bottom: 0.35rem;
		padding-left: ${(props) => (props.depth - 1) * 0.75}rem;
	}
`;

export const TOCLink = styled.a`
	display: block;
	font-size: 0.875rem;
	color: ${(props) =>
		props.isActive
			? 'var(--color-text-emphasis)'
			: 'var(--white-bfbfbf-b3)'};
	text-decoration: none;
	transition: color 0.2s ease;
	line-height: 1.4;

	&:hover {
		color: var(--color-text-muted);
	}

	@media (max-width: 768px) {
		font-size: 0.8rem;
		line-height: 1.3;
		padding: 0.25rem 0;
	}
`;

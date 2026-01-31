import styled from '@emotion/styled';

export const Container = styled.div`
	max-width: 56rem;
	min-height: 71dvh;
	margin: 2rem auto;

	@media (max-width: 640px) {
		padding: 0rem 1rem;
	}
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 700;
	color: var(--color-text-emphasis);
	margin-bottom: 0.5rem;
	text-align: center;
	margin: 0;
	@media (min-width: 640px) {
		font-size: 3rem;
	}
`;

export const Description = styled.p`
	font-size: 1.125rem;
	color: var(--color-text-primary);
	text-align: center;
	margin-bottom: 3rem;
	max-width: 42rem;
	margin-left: auto;
	margin-right: auto;
`;

export const CategorySection = styled.div`
	margin-bottom: 2rem;
`;

export const CategoryTitle = styled.h2`
	font-size: 1.5rem;
	font-weight: 600;
	color: var(--color-text-emphasis);
	margin-bottom: 1rem;
	border-bottom: 2px solid var(--gray-383838);
	padding-bottom: 0.5rem;
`;

export const ToolsGrid = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: 1fr;

	@media (min-width: 640px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const ToolCard = styled.a`
	display: block;
	background-color: var(--gray-2d2d2d);
	border: 1px solid var(--gray-383838);
	border-radius: 0.75rem;
	padding: 1.5rem;
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		background-color: var(--gray-303030);
		border-color: var(--white-bfbfbf-33);
		transform: translateY(-1px);
		box-shadow: 0 8px 25px #0000004d;
	}

	&:focus {
		outline: none;
	}

	&:focus-visible {
		outline: 2px solid var(--gray-60739f);
		outline-offset: 2px;
	}
`;

export const ToolIcon = styled.div`
	max-width: 2rem;
	max-height: 2rem;
	margin-bottom: 0%.5;
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--color-text-emphasis);

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		color: var(--color-text-emphasis);
	}
`;

export const ToolTitle = styled.h3`
	font-size: 1.25rem;
	font-weight: 600;
	color: var(--color-text-emphasis);
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
`;

export const ToolDescription = styled.p`
	font-size: 0.875rem;
	color: var(--color-text-primary);
	line-height: 1.5;
`;

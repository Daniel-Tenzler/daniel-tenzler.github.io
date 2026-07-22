import styled from '@emotion/styled';

export const Container = styled.div`
	max-width: 1120px;
	min-height: 71dvh;
	margin: 16px auto;

	@media (max-width: 640px) {
		padding: 0px 16px;
	}
`;

export const Title = styled.h1`
	font-size: 40px;
	font-weight: 700;
	color: var(--color-text-emphasis);
	margin-bottom: 8px;
	text-align: center;
	margin: 0;
	@media (min-width: 640px) {
		font-size: 48px;
	}
`;

export const Description = styled.p`
	font-size: 18px;
	color: var(--color-text-primary);
	text-align: center;
	margin-bottom: 32px;
	max-width: 800px;
	margin-left: auto;
	margin-right: auto;
`;

export const CategorySection = styled.div`
	margin-bottom: 16px;
`;

export const CategoryTitle = styled.h2`
	font-size: 24px;
	font-weight: 600;
	color: var(--color-text-emphasis);
	margin-bottom: 8px;
`;

export const ToolsGrid = styled.div`
	display: grid;
	gap: var(--grid-gap);
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
	background: var(--card-bg);
	border: var(--card-border);
	border-radius: var(--card-radius);
	padding: var(--card-padding);
	text-decoration: none;
	box-shadow: var(--card-shadow);
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		border-color: var(--card-hover-border);
		box-shadow: var(--card-hover-shadow);
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
	}
`;

export const ToolIcon = styled.div`
	max-width: 32px;
	max-height: 32px;
	margin-bottom: 4px;
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
	font-size: 20px;
	font-weight: 600;
	color: var(--color-text-emphasis);
	margin-bottom: 8px;
	margin-top: 8px;
`;

export const ToolDescription = styled.p`
	font-size: 14px;
	color: var(--color-text-primary);
	line-height: 1.5;
`;

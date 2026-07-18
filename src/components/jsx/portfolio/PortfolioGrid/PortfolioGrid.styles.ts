import styled from '@emotion/styled';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: var(--grid-gap);
	padding: 0px 16px;
	width: 100%;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (min-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const Card = styled.article`
	background: var(--card-bg);
	border: var(--card-border);
	border-radius: var(--card-radius);
	overflow: hidden;
	box-shadow: var(--card-shadow);
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		border-color: var(--card-hover-border);
		box-shadow: var(--card-hover-shadow);
	}
`;

export const CardImage = styled.img`
	width: 100%;
	height: 192px;
	object-fit: cover;
`;

export const CardContent = styled.div`
	padding: var(--card-padding);
`;

export const CardTitle = styled.h2`
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 8px;
	color: var(--color-text-emphasis);

	a:hover & {
		color: var(--color-text-muted);
	}
`;

export const CardDescription = styled.p`
	color: var(--white-ffffff-b3);
	margin-bottom: 16px;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const TechContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
`;

export const TechTag = styled.span`
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

export const StyledLinkArea = styled.a`
	text-decoration: none;
`;

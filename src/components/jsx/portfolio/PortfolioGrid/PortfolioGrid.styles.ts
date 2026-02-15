import styled from '@emotion/styled';

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 24px;
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
	background: var(--color-bg-tertiary);
	border-radius: 8px;
	box-shadow: 0 4px 6px var(--gray-292929-1a);
	overflow: hidden;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.05);
	}
`;

export const CardImage = styled.img`
	width: 100%;
	height: 192px;
	object-fit: cover;
`;

export const CardContent = styled.div`
	padding: 24px;
	height: 288px;
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
	color: var(--color-text-primary);
	margin-bottom: 16px;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
`;

export const TechContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
`;

export const TechTag = styled.span`
	padding: 4px 12px;
	background-color: var(--black-0f1219-80);
	border-radius: 9999px;
	font-size: 14px;
	color: var(--color-text-muted);
`;

export const StyledLinkArea = styled.a`
	text-decoration: none;
`;

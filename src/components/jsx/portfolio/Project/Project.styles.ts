import styled from '@emotion/styled';

export const Container = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	padding: 32px 16px;
`;

export const Article = styled.article`
	max-width: 896px;
	margin: 0 auto;
`;

export const Header = styled.header`
	margin-bottom: 16px;
`;

export const Title = styled.h1`
	font-size: 36px;
	font-weight: 700;
	margin-bottom: 16px;
`;

export const TechList = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 6px;
	margin-bottom: 16px;
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

export const LinkContainer = styled.div`
	display: flex;
	gap: 16px;
`;

export const StyledLink = styled.a`
	color: var(--color-text-emphasis);
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`;

export const ProjectImage = styled.img`
	width: 100%;
	border-radius: var(--card-radius);
	box-shadow: var(--card-hover-shadow);
	margin-bottom: 32px;
`;

export const Description = styled.div`
	& p {
		font-size: 18px;
		line-height: 1.75;
	}
`;

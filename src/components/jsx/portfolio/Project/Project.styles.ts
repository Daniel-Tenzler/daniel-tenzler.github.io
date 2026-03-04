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
	gap: 16px;
	margin-bottom: 16px;
`;

export const TechTag = styled.span`
	padding: 4px 12px;
	background-color: var(--black-0f1219-80);
	border-radius: 9999px;
	font-size: 14px;
	color: var(--color-text-muted);
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
	border-radius: 8px;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
	margin-bottom: 32px;
`;

export const Description = styled.div`
	& p {
		font-size: 18px;
		line-height: 1.75;
	}
`;

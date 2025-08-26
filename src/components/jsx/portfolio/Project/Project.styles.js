import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Container = styled.main`
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem 1rem;
`;

export const Article = styled.article`
	max-width: 56rem;
	margin: 0 auto;
`;

export const Header = styled.header`
	margin-bottom: 1rem;
`;

export const Title = styled.h1`
	font-size: 2.25rem;
	font-weight: 700;
	margin-bottom: 1rem;
`;

export const TechList = styled.div`
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
`;

export const TechTag = styled.span`
	padding: 0.25rem 0.75rem;
	background-color: ${getRgbaColor(COLORS.BLACK_0F1219, 0.5)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${COLORS.WHITE_BFBFBF};
`;

export const LinkContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

export const StyledLink = styled.a`
	color: ${COLORS.WHITE_FFFFFF};
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`;

export const ProjectImage = styled.img`
	width: 100%;
	border-radius: 0.5rem;
	box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
	margin-bottom: 2rem;
`;

export const Description = styled.div`
	& p {
		font-size: 1.125rem;
		line-height: 1.75;
	}
`;

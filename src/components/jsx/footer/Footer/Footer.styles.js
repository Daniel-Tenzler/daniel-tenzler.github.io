import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const StyledFooter = styled.footer`
	background-color: ${COLORS.GRAY_303030};
	border-top: 1px solid ${getRgbaColor(COLORS.GRAY_383838)};
`;

export const FooterContainer = styled.div`
	max-width: 56rem;
	margin: 0 auto;
	padding: 2rem 1rem;

	@media (min-width: 640px) {
		padding: 2rem 1.5rem;
	}

	@media (min-width: 1024px) {
		padding: 2rem 2rem;
	}
`;

export const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const Copyright = styled.div`
	font-size: 0.875rem;
	color: ${COLORS.GRAY_E5E9F0};
`;

export const SocialLinks = styled.div`
	display: flex;
	gap: 1.5rem;
`;

export const SocialLink = styled.a`
	color: ${COLORS.GRAY_E5E9F0};
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${COLORS.GRAY_60739F};
	}
`;

export const SocialIcon = styled.svg`
	height: 1.5rem;
	width: 1.5rem;
	margin-left: 5px;
`;

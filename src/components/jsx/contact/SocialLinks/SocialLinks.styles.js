import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

export const Container = styled.div`
	margin-top: 2rem;
	align-self: center;
	justify-self: center;
`;

export const Title = styled.h2`
	font-size: 1.25rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: ${COLORS.offWhite};
`;

export const LinksContainer = styled.div`
	display: flex;
	gap: 1.5rem;
`;

export const SocialLink = styled.a`
	color: ${COLORS.offWhite};
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${COLORS.gray};
	}
`;

export const SocialIcon = styled.svg`
	height: 1.5rem;
	width: 1.5rem;
	margin-left: 5px;
`;

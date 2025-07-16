import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Card = styled.a `
	display: block;
	background: ${COLORS.cardSurfaceBackground};
	border-radius: ${({ $noTopBorderRadius }) =>
		$noTopBorderRadius ? '0 0.5rem 0.5rem 0.5rem' : '0.5rem'};
	overflow: hidden;
	box-shadow: 0 1px 3px ${getRgbaColor(COLORS.cardSurfaceBackground, 0.1)};
	transition: all 0.2s ease;
	text-decoration: none;
	color: inherit;

	&:hover {
		box-shadow: 0 8px 8px ${getRgbaColor(COLORS.cardSurfaceBackground, 0.5)};
	}
`;

export const Content = styled.div `
	padding: 1.5rem;
`;

export const Title = styled.h3 `
	margin: 0 0 0.5rem;
	font-size: 1.25rem;
	font-weight: 600;
	color: ${COLORS.grayLight};
	transition: color 0.2s ease;

	${Card}:hover & {
		color: ${COLORS.offWhite};
	}
`;

export const Description = styled.p `
	margin: 0 0 1rem;
	font-size: 0.875rem;
	color: ${COLORS.grayLight};
`;

export const Meta = styled.div `
	display: flex;
	align-items: center;
	gap: 1rem;
	font-size: 0.875rem;
	color: ${COLORS.offWhite};
`;

export const Tags = styled.div `
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin-top: 0.75rem;
`;

export const Tag = styled.span `
	padding: 0.25rem 0.75rem;
	background-color: ${getRgbaColor(COLORS.black, 0.5)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${COLORS.offWhite};
`;
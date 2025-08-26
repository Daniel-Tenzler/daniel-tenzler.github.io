import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Section = styled.section`
	margin-bottom: 1rem;
`;

export const Title = styled.h1`
	font-size: 1.85rem;
	font-weight: 700;
	margin-bottom: 1.5rem;
	margin-top: 0.5rem;
`;

export const Description = styled.p`
	font-size: 1.25rem;
	color: ${COLORS.GRAY_E5E9F0};
	margin-bottom: 2rem;
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
`;

export const PrimaryButton = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 0.75rem 1.5rem;
	border: 1px solid transparent;
	font-size: 1rem;
	font-weight: 500;
	border-radius: 0.375rem;
	color: ${COLORS.WHITE_FFFFFF};
	background-color: ${COLORS.BLUE_000D8A};
	text-decoration: none;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: ${COLORS.BLUE_2337FF};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${COLORS.BLUE_000D8A};
	}
`;

export const SecondaryButton = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 0.75rem 1.5rem;
	border: 1px solid ${getRgbaColor(COLORS.GRAY_383838)};
	font-size: 1rem;
	font-weight: 500;
	border-radius: 0.375rem;
	color: ${COLORS.WHITE_FFFFFF};
	background-color: ${COLORS.GRAY_292929};
	text-decoration: none;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: ${getRgbaColor(COLORS.GRAY_303030)};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${COLORS.GRAY_303030};
	}
`;

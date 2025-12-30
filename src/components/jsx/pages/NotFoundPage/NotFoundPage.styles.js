import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const StyledNotFoundContainer = styled.section`
	text-align: center;
	padding: 4rem 2rem;
	max-width: 600px;
	margin: 0 auto;
`;

export const StyledErrorCode = styled.div`
	font-size: 8rem;
	font-weight: bold;
	color: ${COLORS.BLUE_2337FF};
	margin-bottom: 1rem;
	text-shadow: 0 0 20px ${getRgbaColor(COLORS.BLUE_2337FF, 0.3)};

	@media (min-width: 768px) {
		font-size: 10rem;
	}
`;

export const StyledErrorTitle = styled.h1`
	font-size: 2.5rem;
	margin-bottom: 1rem;
	color: ${COLORS.WHITE_F1F1F1};
`;

export const StyledErrorDescription = styled.p`
	font-size: 1.2rem;
	margin-bottom: 2rem;
	color: ${COLORS.GRAY_60739F};
	line-height: 1.6;
`;

export const StyledActions = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;

	@media (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}
`;

export const StyledNavLink = styled.a`
	padding: 0.75rem 2rem;
	border-radius: 8px;
	text-decoration: none;
	font-weight: 500;
	transition: all 0.3s ease;
	border: 2px solid transparent;
	min-width: 200px;
	display: inline-block;
	text-align: center;

	@media (min-width: 768px) {
		min-width: 150px;
	}
`;

export const StyledPrimaryLink = styled(StyledNavLink)`
	background-color: ${COLORS.BLUE_2337FF};
	color: ${COLORS.WHITE_FFFFFF};

	&:hover {
		background-color: ${COLORS.BLUE_000D8A};
		box-shadow: 0 2px 4px ${getRgbaColor(COLORS.BLUE_2337FF, 0.6)};
	}
`;

export const StyledSecondaryLink = styled(StyledNavLink)`
	background-color: transparent;
	color: ${COLORS.WHITE_F1F1F1};
	border-color: ${COLORS.GRAY_60739F};

	&:hover {
		border-color: ${COLORS.BLUE_000D8A};
		color: ${COLORS.WHITE_BFBFBF};
		background-color: ${getRgbaColor(COLORS.BLUE_000D8A, 0.1)};
	}
`;

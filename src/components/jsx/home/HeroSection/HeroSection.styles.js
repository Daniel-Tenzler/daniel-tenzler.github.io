import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Section = styled.section`
	padding: 2rem 0;
	position: relative;

	@media (max-width: 720px) {
		padding: 1.5rem 0;
	}
`;

export const ContentWrapper = styled.div`
	max-width: 100%;
	position: relative;
	z-index: 2;
`;

export const Name = styled.h1`
	font-size: clamp(2.5rem, 5vw, 4rem);
	font-weight: 800;
	line-height: 1.1;
	margin: 0 0 0.5rem 0;
	background: linear-gradient(
		135deg,
		${COLORS.WHITE_FFFFFF} 0%,
		${COLORS.WHITE_BFBFBF} 60%
	);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	letter-spacing: -0.02em;
	animation: fadeInUp 0.8s ease-out;

	@keyframes fadeInUp {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (max-width: 720px) {
		font-size: clamp(2rem, 8vw, 3rem);
	}
`;

export const Title = styled.h2`
	font-size: clamp(1.5rem, 3vw, 2rem);
	font-weight: 600;
	line-height: 1.3;
	margin: 0 0 1.5rem 0;
	color: ${COLORS.WHITE_BFBFBF};
	letter-spacing: 0.01em;
	animation: fadeInUp 0.8s ease-out 0.1s both;

	@media (max-width: 720px) {
		font-size: clamp(1.25rem, 6vw, 1.5rem);
		margin-bottom: 1rem;
	}
`;

export const AccentLine = styled.div`
	width: 360px;
	height: 3px;
	background: linear-gradient(
		90deg,
		${COLORS.GRAY_474747} 0%,
		${COLORS.WHITE_FFFFFF} 20%,
		${COLORS.GRAY_474747} 100%
	);
	margin: 0 0 2rem 0;
	border-radius: 2px;
	animation: expandWidth 0.8s ease-out 0.2s both;

	@keyframes expandWidth {
		from {
			width: 0;
			opacity: 0;
		}
		to {
			width: 360px;
			opacity: 1;
		}
	}

	@media (max-width: 720px) {
		margin-bottom: 1.5rem;
		width: 200px;
		@keyframes expandWidth {
			from {
				width: 0;
				opacity: 0;
			}
			to {
				width: 200px;
				opacity: 1;
			}
		}
	}
`;

export const Tagline = styled.p`
	font-size: clamp(1.1rem, 2vw, 1.25rem);
	font-weight: 500;
	line-height: 1.4;
	margin: 0 0 1.5rem 0;
	color: ${COLORS.WHITE_BFBFBF};
	animation: fadeInUp 0.8s ease-out 0.3s both;

	@media (max-width: 720px) {
		font-size: clamp(1rem, 4vw, 1.1rem);
		margin-bottom: 1rem;
	}
`;

export const Description = styled.p`
	font-size: clamp(1rem, 1.5vw, 1.1rem);
	line-height: 1.7;
	margin: 0 0 2.5rem 0;
	color: ${getRgbaColor(COLORS.WHITE_FFFFFF, 0.9)};
	max-width: 600px;
	animation: fadeInUp 0.8s ease-out 0.4s both;

	@media (max-width: 720px) {
		font-size: clamp(0.95rem, 3vw, 1rem);
		margin-bottom: 2rem;
		max-width: 100%;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
	animation: fadeInUp 0.8s ease-out 0.5s both;

	@media (max-width: 720px) {
		gap: 0.75rem;
	}
`;

export const PrimaryButton = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.75rem 1.5rem;
	border: none;
	font-size: 0.95rem;
	font-weight: 600;
	border-radius: 0.5rem;
	color: ${COLORS.WHITE_FFFFFF};
	background: linear-gradient(
		135deg,
		${COLORS.GRAY_292929} 0%,
		${COLORS.BLACK_1A1A1A} 100%
	);
	text-decoration: none;
	transition: all 0.3s ease;
	position: relative;
	overflow: hidden;
	box-shadow: 0 4px 20px ${getRgbaColor(COLORS.BLACK_0F1219, 0.4)};

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			${getRgbaColor(COLORS.WHITE_FFFFFF, 0.2)},
			transparent
		);
		transition: left 0.6s ease;
	}

	&:hover {
		box-shadow: 0 3px 20px ${getRgbaColor(COLORS.BLACK_1A1A1A, 0.9)};
		transform: scale(1.05);
	}

	&:active {
		transform: translateY(0);
	}

	@media (max-width: 720px) {
		padding: 0.625rem 1.25rem;
		font-size: 0.9rem;
		flex: 1;
		min-width: 140px;
	}
`;

export const SecondaryButton = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 0.75rem 1.5rem;
	border: 1px solid ${getRgbaColor(COLORS.GRAY_292929, 0.5)};
	font-size: 0.95rem;
	font-weight: 600;
	border-radius: 0.5rem;
	color: ${COLORS.WHITE_FFFFFF};
	background: ${COLORS.BLACK_1A1A1A};
	text-decoration: none;
	transition: all 0.3s ease;
	position: relative;
	backdrop-filter: blur(10px);

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background: ${getRgbaColor(COLORS.GRAY_292929, 0.1)};
		transition: width 0.3s ease;
		z-index: -1;
	}

	&:hover {
		transform: scale(1.05);
		border-color: ${COLORS.GRAY_292929};
		color: ${COLORS.WHITE_FFFFFF};
		box-shadow: 0 3px 20px ${getRgbaColor(COLORS.BLACK_1A1A1A, 0.9)};
	}

	&:active {
		transform: translateY(0);
	}

	@media (max-width: 720px) {
		padding: 0.625rem 1.25rem;
		font-size: 0.9rem;
		flex: 1;
		min-width: 140px;
	}
`;

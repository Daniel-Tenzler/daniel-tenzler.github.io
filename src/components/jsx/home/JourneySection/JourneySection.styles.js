import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const TimelineContainer = styled.section`
	margin: 2rem auto;
	width: 100%;
`;

export const TimelineWrapper = styled.div`
	overflow-x: auto;
	position: relative;
	scrollbar-width: none;
	-ms-overflow-style: none;
	&::-webkit-scrollbar {
		display: none;
	}
	background: radial-gradient(
		ellipse at center,
		${getRgbaColor(COLORS.white, 0.02)} 0%,
		${getRgbaColor(COLORS.white, 0.01)} 50% ${getRgbaColor(COLORS.white, 0.001)}
			100%
	);
	backdrop-filter: blur(1px);
	border-radius: 20px;
`;

export const TimelineScrollArea = styled.div`
	display: inline-flex; /* Makes the container as wide as its content */
	position: relative;
	padding: 20px 20px 40px 20px;
	gap: 20px;
	min-width: 100%;
`;

export const TimelineLine = styled.div`
	position: absolute;
	bottom: 43px;
	left: 0;
	height: 4px;
	width: 96%;
	background-color: ${getRgbaColor(COLORS.white, 0.7)};

	-webkit-mask-image: linear-gradient(
		to right,
		transparent,
		black 10%,
		black 90%,
		transparent
	);
	mask-image: linear-gradient(
		to right,
		transparent,
		black 10%,
		black 90%,
		transparent
	);
`;

export const TimelineItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 0 0 500px;
	position: relative;
	width: 200px;
	z-index: 1;

	@media (max-width: 720px) {
		flex: 0 0 250px;
	}
`;

export const TimelineContent = styled.div`
	text-align: center;
	margin-bottom: 30px;
	min-height: 200px;
	width: 90%;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	border-radius: 12px;
	background: transparent;
	transition: all 0.3s ease-in-out;
	position: relative;
	z-index: 1;
	align-items: center;

	&:hover {
		position: absolute;
		transform: scale(1.05);
		background: radial-gradient(
			ellipse at center,
			${getRgbaColor(COLORS.white, 0.1)} 0%,
			${getRgbaColor(COLORS.white, 0.03)} 50%,
			${getRgbaColor(COLORS.white, 0.01)} 100%
		);
		backdrop-filter: blur(5px);
		border: 1px solid ${getRgbaColor(COLORS.white, 0.1)};
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
	}
`;

export const TimelineMarker = styled.div`
	position: absolute;
	bottom: -6px;
	width: 15px;
	height: 15px;
	border-radius: 50%;
	background-color: ${({ type }) =>
		type === 'job' ? COLORS.accent : COLORS.accentDark};
	border: 3px solid ${COLORS.white};
	z-index: 1;
`;

export const TimelineTitle = styled.h3`
	height: 3.6em;
	margin: 0 0 0.5rem 0;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	transition: all 0.3s ease-in-out;
	font-size: 20px;
`;

export const TimelineDate = styled.p`
	font-style: italic;
	color: ${COLORS.offWhite};
	height: auto;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	margin: 0 0 0.5rem 0;
	transition: all 0.3s ease-in-out;
	font-size: 16px;
`;

export const TimelineDescription = styled.p`
	height: 6.5em;
	width: 300px;
	margin: 0;
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	transition: all 0.3s ease-in-out;
	font-size: 16px;

	@media (max-width: 720px) {
		width: 250px;
	}
`;

export const StyledJourneyLink = styled.a`
	display: inline-block;
	color: ${COLORS.white};
	text-decoration: none;
	margin-top: 5px;
	&:hover {
		color: ${COLORS.offWhite};
	}
`;

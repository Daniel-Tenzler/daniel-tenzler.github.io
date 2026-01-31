import styled from '@emotion/styled';

export const ProgressBar = styled.div`
	position: relative;
	left: 0px;
	width: 100%;
	height: 4px;
	background-color: var(--color-border-light-cc);
	z-index: 1000;
	backdrop-filter: blur(10px);
`;

export const ProgressFill = styled.div`
	height: 100%;
	background: linear-gradient(
		90deg,
		#000044ff 0%,
		#000096ff 50%,
		#000044ff 100%
	);
	transition: width 0.1s ease-out;
	box-shadow: 0 0 10px #00006480;
`;

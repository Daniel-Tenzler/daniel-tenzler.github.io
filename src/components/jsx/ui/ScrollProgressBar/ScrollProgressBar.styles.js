import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const ProgressBar = styled.div`
	position: relative;
	left: 0px;
	width: 100%;
	height: 4px;	
	background-color: ${getRgbaColor(COLORS.semiSurfacePrimary, 0.8)};
	z-index: 1000;
	backdrop-filter: blur(10px);
`;

export const ProgressFill = styled.div`
	height: 100%;
	background: linear-gradient(90deg,rgba(0, 0, 68, 1) 0%, rgba(0, 0, 150, 1) 50%, rgba(0, 0, 68, 1) 100%);
	transition: width 0.1s ease-out;
	box-shadow: 0 0 10px rgba(00, 00, 100, 0.5);
`;
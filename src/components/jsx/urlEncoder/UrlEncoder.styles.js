import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

export const Container = styled.div `
	width: 90%;
	height: 100%;
	min-height: calc(100vh - 205px);
	margin: 0 auto;
	padding: 1em 0 0 0;
`;

export const InputField = styled.div `
	background-color: ${COLORS.white};
	width: 90%;
	height: 500px;
	overflow-y: scroll;
	margin: 0 auto;
`;
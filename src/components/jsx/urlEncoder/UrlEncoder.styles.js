import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

export const Container = styled.div `
	width: 90%;
	height: 100%;
	min-height: calc(100vh - 205px);
	margin: 0 auto;
	padding: 2em 0 0 0;
	display: flex;
	flex-direction: column;
`;

export const InputField = styled.input `
	background-color: ${COLORS.outerSurfaceBackground};
	color: ${COLORS.white};
	padding: 0.5em;
	max-width: 90%;
	width: 900px;
	height: 500px;
	margin: 0 auto;
	font-size: 18px;
	font-family:
		'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'Liberation Sans', sans-serif;
	border: 2px solid transparent;
	transition: border-color 0.2s ease;

	&:focus,
	&:active {
		border-color: ${COLORS.semiSurfacePrimary};
		outline: none;
	}
`;

export const ButtonContainer = styled.div `
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1em;
	gap: 1em;
`;

export const DecodeButton = styled.button `
	color: ${COLORS.offWhite};
	padding: 0.75em 2em;
	border: none;
	border-radius: 8px;
	background-color: ${COLORS.surfaceBlend1};
	font-weight: 500;
	font-size: 0.95rem;
	cursor: pointer;
	transition:
		background-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		background-color: ${COLORS.grayDark};
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	&:active {
		background-color: ${COLORS.surfaceBlend1};
		box-shadow: none;
	}

	&:focus-visible {
		outline: 2px solid ${COLORS.grayDark};
		outline-offset: 2px;
	}
`;

export const EncodeButton = styled.button `
	color: ${COLORS.offWhite};
	padding: 0.75em 2em;
	border: none;
	border-radius: 8px;
	background-color: ${COLORS.surfaceBlend1};
	font-weight: 500;
	font-size: 0.95rem;
	cursor: pointer;
	transition:
		background-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		background-color: ${COLORS.grayDark};
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	&:active {
		background-color: ${COLORS.surfaceBlend1};
		box-shadow: none;
	}

	&:focus-visible {
		outline: 2px solid ${COLORS.grayDark};
		outline-offset: 2px;
	}
`;
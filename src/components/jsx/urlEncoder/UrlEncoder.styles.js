import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

export const Container = styled.div`
	width: 90%;
	max-width: 1000px;
	height: 100%;
	min-height: calc(100vh - 205px);
	margin: 0 auto;
	padding: 1.5em 0;
	display: flex;
	flex-direction: column;
`;

export const InputField = styled.input`
	background-color: ${COLORS.outerSurfaceBackground};
	color: ${COLORS.white};
	padding: 0.75em;
	max-width: 90%;
	width: 900px;
	max-height: 90vh;
	height: 400px;
	margin: 0 auto;
	font-size: 16px;
	font-family:
		'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'Liberation Sans', sans-serif;
	border: 2px solid transparent;
	border-radius: 8px;
	transition: border-color 0.2s ease;
	resize: vertical;

	&:focus,
	&:active {
		border-color: ${COLORS.semiSurfacePrimary};
		outline: none;
	}

	@media (max-width: 768px) {
		font-size: 14px;
		padding: 0.5em;
		height: 300px;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1.5em;
	gap: 1.5em;
	flex-wrap: wrap;

	@media (max-width: 480px) {
		gap: 1em;
	}
`;

const BaseButton = styled.button`
	color: ${COLORS.offWhite};
	padding: 0.75em 2em;
	border: none;
	border-radius: 8px;
	background-color: ${COLORS.surfaceBlend1};
	font-weight: 500;
	font-size: 0.95rem;
	cursor: pointer;
	min-width: 120px;
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

	@media (max-width: 480px) {
		padding: 0.6em 1.5em;
		font-size: 0.9rem;
		min-width: 100px;
	}
`;

export const DecodeButton = styled(BaseButton)`
`;

export const EncodeButton = styled(BaseButton)`
`;
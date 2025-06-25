import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

export const Form = styled.form`
	max-width: 600px;
	margin: 0 auto;
`;

export const FormGroup = styled.div`
	margin-bottom: 1.5rem;
`;

export const Label = styled.label`
	display: block;
	margin-bottom: 0.5rem;
	font-weight: 500;
	color: ${COLORS.white};
`;

export const Input = styled.input`
	width: 100%;
	padding: 0.75rem;
	border: 1px solid ${getRgbaColor(COLORS.grayLight)};
	border-radius: 0.375rem;
	background: ${COLORS.offWhite};
	color: ${COLORS.black};
	font-size: 1rem;
	transition: all 0.2s ease;

	&:focus {
		outline: none;
		border-color: ${COLORS.semiSurfacePrimary};
		box-shadow: 0 0 0 6px ${getRgbaColor(COLORS.semiSurfacePrimary, 0.2)};
	}

	&::placeholder {
		color: ${COLORS.gray};
	}
`;

export const TextArea = styled.textarea`
	width: 100%;
	padding: 0.75rem;
	border: 1px solid ${getRgbaColor(COLORS.grayLight)};
	border-radius: 0.375rem;
	background: ${COLORS.offWhite};
	color: ${COLORS.black};
	font-size: 1rem;
	min-height: 150px;
	resize: vertical;
	transition: all 0.2s ease;

	&:focus {
		outline: none;
		border-color: ${COLORS.semiSurfacePrimary};
		box-shadow: 0 0 0 2px ${getRgbaColor(COLORS.semiSurfacePrimary, 0.2)};
	}

	&::placeholder {
		color: ${COLORS.gray};
	}
`;

export const SubmitButton = styled.button`
	padding: 0.75rem 1.5rem;
	background: ${COLORS.cardSurfaceBackground};
	color: ${COLORS.white};
	border: none;
	border-radius: 0.375rem;
	font-size: 1rem;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: ${COLORS.surfaceBlend1};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${getRgbaColor(COLORS.semiSurfacePrimary, 0.2)};
	}

	&:disabled {
		background: ${getRgbaColor(COLORS.semiSurfacePrimary)};
		cursor: not-allowed;
	}
`;

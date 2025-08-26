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
	color: ${COLORS.WHITE_FFFFFF};
`;

export const Input = styled.input`
	width: 100%;
	padding: 0.75rem;
	border: 1px solid ${COLORS.GRAY_383838};
	border-radius: 0.375rem;
	background: ${COLORS.WHITE_BFBFBF};
	color: ${COLORS.BLACK_0F1219};
	font-size: 1rem;
	transition: all 0.2s ease;

	&:focus {
		outline: none;
		border-color: ${COLORS.GRAY_303030};
		box-shadow: 0 0 0 6px ${getRgbaColor(COLORS.GRAY_303030, 0.2)};
	}

	&::placeholder {
		color: ${COLORS.GRAY_60739F};
	}
`;

export const TextArea = styled.textarea`
	width: 100%;
	padding: 0.75rem;
	border: 1px solid ${getRgbaColor(COLORS.GRAY_E5E9F0)};
	border-radius: 0.375rem;
	background: ${COLORS.WHITE_BFBFBF};
	color: ${COLORS.BLACK_0F1219};
	font-size: 1rem;
	min-height: 150px;
	resize: vertical;
	transition: all 0.2s ease;

	&:focus {
		outline: none;
		border-color: ${COLORS.GRAY_303030};
		box-shadow: 0 0 0 2px ${getRgbaColor(COLORS.GRAY_303030, 0.2)};
	}

	&::placeholder {
		color: ${COLORS.GRAY_60739F};
	}
`;

export const SubmitButton = styled.button`
	padding: 0.75rem 1.5rem;
	background: ${COLORS.GRAY_292929};
	color: ${COLORS.WHITE_FFFFFF};
	border: none;
	border-radius: 0.375rem;
	font-size: 1rem;
	font-weight: 500;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: ${COLORS.GRAY_383838};
	}

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px ${getRgbaColor(COLORS.GRAY_303030, 0.2)};
	}

	&:disabled {
		background: ${getRgbaColor(COLORS.GRAY_303030)};
		cursor: not-allowed;
	}
`;

import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

export const Container = styled.div`
	width: 90%;
	max-width: 1600px;
	height: 100%;
	min-height: calc(100vh - 205px);
	margin: 0 auto;
	padding: 1.5em 0;
	display: flex;
	gap: 2em;
	align-items: flex-start;

	@media (max-width: 768px) {
		flex-direction: column;
		gap: 1.5em;
		width: 95%;
	}
`;

export const InputSection = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

export const OutputSection = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

export const SectionTitle = styled.h3`
	color: ${COLORS.WHITE_BFBFBF};
	font-size: 1.2rem;
	font-weight: 600;
	margin: 0 0 1em 0;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 1.1rem;
		margin-bottom: 0.8em;
	}
`;

export const InputField = styled.textarea`
	background-color: ${COLORS.GRAY_292929};
	color: ${COLORS.WHITE_FFFFFF};
	padding: 1em;
	height: 500px;
	font-size: 14px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	border: 2px solid transparent;
	border-radius: 8px;
	transition: border-color 0.2s ease;
	resize: vertical;
	line-height: 1.5;

	&:focus-visible {
		border-color: ${COLORS.GRAY_474747};
		outline: 1px solid ${COLORS.GRAY_474747};
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		font-size: 13px;
		height: 300px;
		padding: 0.8em;
	}
`;

export const OutputField = styled.div`
	background-color: ${COLORS.GRAY_292929};
	color: ${COLORS.WHITE_FFFFFF};
	padding: 1em;
	height: 500px;
	font-size: 14px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	border: 2px solid transparent;
	border-radius: 8px;
	overflow-y: auto;
	line-height: 1.5;
	white-space: pre-wrap;
	word-wrap: break-word;

	@media (max-width: 768px) {
		font-size: 13px;
		height: 300px;
		padding: 0.8em;
	}
`;

export const ErrorMessage = styled.div`
	background-color: rgba(220, 38, 38, 0.1);
	color: ${COLORS.RED_FCA5A5};
	padding: 0.8em;
	border-radius: 8px;
	border: 1px solid rgba(220, 38, 38, 0.3);
	margin-top: 1em;
	font-size: 14px;
	line-height: 1.4;
`;

export const SuccessMessage = styled.div`
	background-color: rgba(34, 197, 94, 0.1);
	color: ${COLORS.GREEN_86EFAC};
	padding: 0.8em;
	border-radius: 8px;
	border: 1px solid rgba(34, 197, 94, 0.3);
	margin-top: 1em;
	font-size: 14px;
	line-height: 1.4;
`;

export const FormatButton = styled.button`
	background-color: ${COLORS.GRAY_383838};
	color: ${COLORS.WHITE_BFBFBF};
	padding: 0.75em 1.5em;
	border: none;
	border-radius: 8px;
	font-weight: 500;
	font-size: 0.95rem;
	cursor: pointer;
	margin-top: 1em;
	transition:
		background-color 0.2s ease,
		box-shadow 0.2s ease;

	&:hover {
		background-color: ${COLORS.GRAY_222939};
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	&:active {
		background-color: ${COLORS.GRAY_383838};
		box-shadow: none;
	}

	&:focus-visible {
		outline: 2px solid ${COLORS.GRAY_222939};
		outline-offset: 2px;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	@media (max-width: 768px) {
		padding: 0.6em 1.2em;
		font-size: 0.9rem;
	}
`;

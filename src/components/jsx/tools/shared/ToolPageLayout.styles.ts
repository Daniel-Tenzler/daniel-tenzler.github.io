import styled from '@emotion/styled';

/**
 * Shared layout styles for tool pages.
 * Used by: ColorConverter, GradientGenerator, InputOutput, CsvToJson, etc.
 */

export const Container = styled.div`
	width: 90%;
	max-width: 1000px;
	height: 100%;
	min-height: calc(100vh - 246px);
	margin: 0 auto;
	padding: 1.5em 0;
	display: flex;
	flex-direction: column;
	position: relative;

	@media (max-width: 768px) {
		width: 95%;
	}
`;

export const SectionTitle = styled.h3`
	color: var(--color-text-emphasis);
	font-size: 18px;
	font-weight: 600;
	margin: 0;
	text-align: center;
	padding: 0.8em 0 0.4em 0;
	z-index: 1;

	@media (max-width: 768px) {
		font-size: 16px;
		padding: 0.6em 0 0.3em 0;
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background: var(--card-bg);
	border: var(--card-border);
	border-radius: var(--card-radius);
	flex: 1;
	min-height: 0;
	overflow: hidden;
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease;
	box-sizing: border-box;
	position: relative;
	gap: 1em;
	padding: 1em;

	&:focus-within {
		border-color: var(--card-hover-border);
		box-shadow: var(--card-hover-shadow);
	}

	@media (max-width: 768px) {
		padding: 0.8em;
		gap: 0.8em;
	}
`;

export const SectionHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 100%;
	min-height: 40px;
`;

export const ErrorMessage = styled.div`
	background-color: #dc26261a;
	color: var(--color-status-error);
	padding: 0.8em;
	border-radius: 8px;
	border: 1px solid #dc26264d;
	font-size: 14px;
	line-height: 1.4;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 13px;
		padding: 0.6em;
	}
`;

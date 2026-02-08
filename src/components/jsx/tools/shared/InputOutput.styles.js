import styled from '@emotion/styled';

export const Container = styled.div`
	width: 90%;
	max-width: 1400px;
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
	font-size: 1.1rem;
	font-weight: 600;
	margin: 0;
	text-align: center;
	padding: 0.8em 0 0.4em 0;
	z-index: 1;

	@media (max-width: 768px) {
		font-size: 1rem;
		padding: 0.6em 0 0.3em 0;
	}
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: var(--gray-292929);
	border-radius: 8px;
	flex: 1;
	min-height: 0;
	overflow: hidden;
	border: 2px solid transparent;
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease;
	box-sizing: border-box;
	position: relative;
	gap: 1em;
	padding: 1em;

	&:focus-within {
		border-color: var(--gray-474747);
		outline: 1px solid var(--gray-474747);
		outline-offset: 2px;
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

export const InputGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1em;
	flex: 1;
	min-height: 400px;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		min-height: 300px;
	}
`;

export const InputColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	min-height: 0;
`;

export const ColumnHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.5em;
`;

export const ColumnTitle = styled.div`
	font-size: 13px;
	font-weight: 600;
	color: var(--color-text-primary);
	text-transform: uppercase;
	letter-spacing: 0.05em;

	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

export const Textarea = styled.textarea`
	flex: 1;
	min-height: 350px;
	background-color: var(--gray-383838);
	color: var(--color-text-emphasis);
	padding: 1em;
	border: 1px solid var(--gray-474747);
	border-radius: 8px;
	font-size: 14px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	outline: none;
	resize: none;
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease;
	line-height: 1.5;
	tab-size: 4;

	&::placeholder {
		color: var(--color-text-primary);
	}

	&:focus {
		border-color: var(--color-border-light);
		box-shadow: 0 0 0 2px var(--gray-474747);
	}

	&[readonly] {
		cursor: default;
	}

	@media (max-width: 768px) {
		min-height: 250px;
		font-size: 13px;
		padding: 0.8em;
	}
`;

export const ButtonRow = styled.div`
	display: flex;
	gap: 0.5em;
	flex-wrap: wrap;
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

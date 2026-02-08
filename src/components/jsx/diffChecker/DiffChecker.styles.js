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

export const ControlsContainer = styled.div`
	display: flex;
	gap: 1em;
	align-items: center;
	flex-wrap: wrap;
	padding: 1em;
	background-color: var(--gray-383838);
	border-radius: 8px;
	border: 1px solid var(--gray-474747);

	@media (max-width: 768px) {
		padding: 0.8em;
		gap: 0.8em;
	}
`;

export const DiffModeToggle = styled.div`
	display: flex;
	gap: 0.5em;
	background-color: var(--gray-292929);
	padding: 0.25em;
	border-radius: 6px;

	@media (max-width: 480px) {
		flex: 1;
	}
`;

export const ToggleButton = styled.button`
	padding: 0.6em 1em;
	background-color: transparent;
	color: var(--color-text-primary);
	border: none;
	border-radius: 4px;
	font-weight: 500;
	font-size: 13px;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background-color: var(--gray-383838);
		color: var(--color-text-emphasis);
	}

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}

	${(props) =>
		props.active &&
		`
		background-color: var(--gray-474747);
		color: var(--color-text-emphasis);
		font-weight: 600;
	`}

	@media (max-width: 768px) {
		font-size: 12px;
		padding: 0.5em 0.8em;
	}

	@media (max-width: 480px) {
		flex: 1;
	}
`;

export const OptionLabel = styled.label`
	display: flex;
	align-items: center;
	gap: 0.5em;
	font-size: 13px;
	color: var(--color-text-primary);
	font-weight: 500;

	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

export const Checkbox = styled.input`
	width: 16px;
	height: 16px;
	cursor: pointer;
	accent-color: var(--color-border-light);

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}
`;

export const InputContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1em;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const InputColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
`;

export const ColumnHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
	min-height: 200px;
	background-color: var(--gray-383838);
	color: var(--color-text-emphasis);
	padding: 1em;
	border: 1px solid var(--gray-474747);
	border-radius: 8px;
	font-size: 14px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	outline: none;
	resize: vertical;
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease;
	line-height: 1.5;

	&::placeholder {
		color: var(--color-text-primary);
	}

	&:focus {
		border-color: var(--color-border-light);
		box-shadow: 0 0 0 2px var(--gray-474747);
	}

	@media (max-width: 768px) {
		min-height: 150px;
		font-size: 13px;
		padding: 0.8em;
	}
`;

export const ButtonRow = styled.div`
	display: flex;
	gap: 0.5em;
	justify-content: center;
`;

export const CompareButton = styled.button`
	background-color: var(--color-border-light);
	color: var(--color-text-emphasis);
	padding: 0.6em 1.5em;
	border: none;
	border-radius: 6px;
	font-weight: 600;
	font-size: 14px;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background-color: #3b82f6;
	}

	&:active {
		transform: translateY(1px);
	}

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}

	@media (max-width: 768px) {
		font-size: 13px;
		padding: 0.5em 1.2em;
	}
`;

export const ResultContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	max-height: 400px;
	overflow: hidden;
`;

export const ResultHeader = styled.div`
	font-size: 13px;
	font-weight: 600;
	color: var(--color-text-primary);
	text-transform: uppercase;
	letter-spacing: 0.05em;
	padding: 0.5em 0;

	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

export const ResultContent = styled.div`
	background-color: var(--gray-383838);
	border: 1px solid var(--gray-474747);
	border-radius: 8px;
	padding: 1em;
	overflow-y: auto;
	max-height: 350px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	font-size: 13px;
	line-height: 1.6;

	@media (max-width: 768px) {
		font-size: 12px;
		padding: 0.8em;
	}

	/* Custom scrollbar */
	&::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}

	&::-webkit-scrollbar-track {
		background: var(--gray-292929);
		border-radius: 4px;
	}

	&::-webkit-scrollbar-thumb {
		background: var(--gray-474747);
		border-radius: 4px;

		&:hover {
			background: var(--gray-585858);
		}
	}
`;

export const Line = styled.div`
	display: flex;
	gap: 0.5em;
	align-items: flex-start;
	line-height: 1.6;

	&:hover {
		background-color: var(--gray-474747);
	}
`;

export const LineNumber = styled.span`
	color: var(--color-text-primary);
	font-size: 11px;
	min-width: 30px;
	text-align: right;
	user-select: none;
	opacity: 0.7;
`;

export const LineContent = styled.span`
	flex: 1;
	white-space: pre-wrap;
	word-break: break-all;
`;

export const Addition = styled.span`
	background-color: #16a34a33;
	color: #4ade80;
`;

export const Deletion = styled.span`
	background-color: #dc26261a;
	color: #f87171;
	text-decoration: line-through;
`;

export const NoChange = styled.span`
	color: var(--color-text-emphasis);
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

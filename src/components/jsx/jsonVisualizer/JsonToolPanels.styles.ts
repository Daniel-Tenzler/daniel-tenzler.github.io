import styled from '@emotion/styled';
import { BaseSmallButton } from 'src/components/jsx/ui/Button.styles';

export const PanelsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 0.55em;
	margin: 0.45em 0.6em 0.6em;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const Panel = styled.section`
	border: 1px solid var(--gray-474747);
	border-radius: 8px;
	background: var(--gray-2d2d2d);
	padding: 0.55em;
	min-height: 150px;
`;

export const PanelHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.45em;
`;

export const PanelTitle = styled.h4`
	margin: 0;
	font-size: 14px;
	color: var(--color-text-muted);
`;

export const PanelControls = styled.div`
	display: flex;
	gap: 0.45em;
	margin-bottom: 0.45em;
`;

export const PanelInput = styled.input`
	flex: 1;
	background: var(--gray-383838);
	color: var(--color-text-emphasis);
	border: 1px solid var(--gray-474747);
	border-radius: 6px;
	padding: 0.35em 0.55em;
	font-size: 12px;
`;

export const PanelTextarea = styled.textarea`
	width: 100%;
	min-height: 88px;
	background: var(--gray-383838);
	color: var(--color-text-emphasis);
	border: 1px solid var(--gray-474747);
	border-radius: 6px;
	padding: 0.45em 0.55em;
	font-size: 12px;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	resize: vertical;
	line-height: 1.4;
	margin-bottom: 0.45em;
`;

export const PanelButton = styled(BaseSmallButton)`
	padding: 0.35em 0.7em;
	font-size: 12px;
	background-color: var(--gray-383838);
`;

export const PanelOutput = styled.pre`
	margin: 0;
	min-height: 2.5em;
	max-height: 130px;
	overflow: auto;
	padding: 0.5em;
	font-family: 'Courier New', 'Monaco', 'Consolas', monospace;
	font-size: 11px;
	line-height: 1.4;
	color: var(--color-text-muted);
	background: rgba(0, 0, 0, 0.25);
	border-radius: 6px;
	white-space: pre-wrap;
	word-break: break-word;
`;

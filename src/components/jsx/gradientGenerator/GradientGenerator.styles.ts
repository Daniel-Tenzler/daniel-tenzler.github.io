import styled from '@emotion/styled';
import { BaseSmallButton } from 'src/components/jsx/ui/Button.styles';

export {
	SectionTitle,
	ContentWrapper,
	SectionHeader,
	ErrorMessage,
} from '../tools/shared/ToolPageLayout.styles';

// GradientGenerator uses a wider max-width than the shared default
export const Container = styled.div`
	width: 90%;
	max-width: 1200px;
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

export const TypeTabs = styled.div`
	display: flex;
	gap: 0.5em;
	background-color: var(--gray-383838);
	border-radius: 8px;
	padding: 0.25em;

	@media (max-width: 480px) {
		flex-direction: column;
	}
`;

interface TypeTabProps {
	$active?: boolean;
}

export const TypeTab = styled.button<TypeTabProps>`
	flex: 1;
	padding: 0.75em 1em;
	background-color: transparent;
	color: var(--color-text-emphasis);
	border: none;
	border-radius: 6px;
	font-weight: 500;
	font-size: 14px;
	cursor: pointer;
	transition:
		background-color 0.2s ease,
		color 0.2s ease;

	&:hover {
		background-color: var(--gray-474747);
	}

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}

	${(props) =>
		props.$active &&
		`
		background-color: var(--gray-474747);
		color: var(--color-text-emphasis);
		font-weight: 600;
	`}

	@media (max-width: 768px) {
		font-size: 13px;
		padding: 0.6em 0.8em;
	}
`;

export const PreviewSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
`;

interface GradientPreviewProps {
	$gradient?: string;
}

export const GradientPreview = styled.div<GradientPreviewProps>`
	width: 100%;
	height: 120px;
	border-radius: 8px;
	border: 1px solid var(--gray-474747);
	background: ${(props) =>
		props.$gradient || 'linear-gradient(90deg, #000000, #ffffff)'};
	transition: background 0.2s ease;

	@media (max-width: 480px) {
		height: 100px;
	}
`;

export const ControlsSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

export const ControlsGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;

	select {
		width: 100%;
		padding: 0.75em 1em;
		background-color: var(--gray-383838);
		color: var(--color-text-emphasis);
		border: 1px solid var(--gray-474747);
		border-radius: 8px;
		font-size: 14px;
		cursor: pointer;
		outline: none;
		transition:
			border-color 0.2s ease,
			box-shadow 0.2s ease;

		&:focus {
			border-color: var(--color-border-light);
			box-shadow: 0 0 0 2px var(--gray-474747);
		}

		@media (max-width: 768px) {
			font-size: 13px;
			padding: 0.6em 0.8em;
		}
	}

	label {
		font-size: 13px;
		font-weight: 500;
		color: var(--color-text-primary);
		text-transform: uppercase;
		letter-spacing: 0.05em;

		@media (max-width: 768px) {
			font-size: 12px;
		}
	}
`;

export const ColorStopsSection = styled.section`
	display: flex;
	flex-direction: column;
	gap: 0.8em;
`;

export const ColorStopsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1em;

	h4 {
		margin: 0;
		font-size: 14px;
		font-weight: 600;
		color: var(--color-text-emphasis);

		@media (max-width: 768px) {
			font-size: 13px;
		}
	}

	@media (max-width: 480px) {
		flex-direction: column;
		align-items: stretch;
	}
`;

export const ColorStopsList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;

	@media (max-width: 768px) {
		gap: 0.8em;
	}
`;

export const ColorStopItem = styled.div`
	background-color: var(--gray-383838);
	border: 1px solid var(--gray-474747);
	border-radius: 8px;
	padding: 1em;
	display: flex;
	flex-direction: column;
	gap: 1em;
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease;

	&:hover {
		border-color: var(--color-border-light);
	}

	@media (max-width: 768px) {
		padding: 0.8em;
		gap: 0.8em;
	}
`;

export const ColorStopControls = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;

	@media (max-width: 768px) {
		gap: 0.8em;
	}
`;

export const AddStopButton = styled(BaseSmallButton)`
	align-self: flex-start;

	@media (max-width: 480px) {
		width: 100%;
	}
`;

export const RemoveStopButton = styled(BaseSmallButton)`
	align-self: flex-start;

	@media (max-width: 480px) {
		width: 100%;
	}
`;

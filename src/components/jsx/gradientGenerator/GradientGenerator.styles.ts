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
	max-width: 1520px;
	height: 100%;
	min-height: calc(100vh - 246px);
	margin: 0 auto;
	padding: 1.5em 0 3em;
	display: flex;
	flex-direction: column;
	position: relative;

	@media (max-width: 768px) {
		width: 95%;
	}
`;

export const StudioLayout = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 1.15fr) minmax(340px, 0.85fr);
	gap: 1.25rem;
	align-items: start;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
	}
`;

export const PreviewPanel = styled.section`
	position: sticky;
	top: 5.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
	border: 1px solid rgba(255, 255, 255, 0.12);
	border-radius: 24px;
	background:
		linear-gradient(135deg, rgba(34, 211, 238, 0.12), transparent 42%),
		linear-gradient(315deg, rgba(85, 96, 247, 0.1), transparent 48%),
		var(--gray-383838);
	box-shadow:
		0 24px 80px rgba(0, 0, 0, 0.28),
		inset 0 1px 0 rgba(255, 255, 255, 0.06);

	@media (max-width: 1024px) {
		position: static;
	}
`;

export const PreviewHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 1rem;

	span {
		color: var(--color-text-muted);
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	h3 {
		margin: 0.2rem 0 0;
		color: var(--color-text-emphasis);
		font-size: 1.25rem;
	}
`;

export const GradientTypeBadge = styled.div`
	padding: 0.45rem 0.7rem;
	border: 1px solid rgba(34, 211, 238, 0.35);
	border-radius: 999px;
	background: rgba(34, 211, 238, 0.1);
	color: var(--color-text-emphasis);
	font-size: 0.78rem;
	font-weight: 800;
	letter-spacing: 0.06em;
	text-transform: uppercase;
`;

export const PreviewFrame = styled.div`
	position: relative;
	overflow: hidden;
	border: 1px solid rgba(255, 255, 255, 0.14);
	border-radius: 20px;
	background-color: var(--gray-222939);
	box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.25);
`;

export const TypeTabs = styled.div`
	display: flex;
	gap: 0.5em;
	background-color: rgba(2, 6, 23, 0.28);
	border: 1px solid rgba(255, 255, 255, 0.08);
	border-radius: 14px;
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
	border-radius: 11px;
	font-weight: 700;
	font-size: 14px;
	letter-spacing: 0.04em;
	cursor: pointer;
	transition:
		background-color 0.2s ease,
		color 0.2s ease;

	&:hover {
		background-color: rgba(255, 255, 255, 0.08);
	}

	&:focus-visible {
		outline: 2px solid var(--gray-222939);
		outline-offset: 2px;
	}

	${(props) =>
		props.$active &&
		`
		background: linear-gradient(135deg, #22d3ee, #a855f7);
		box-shadow: 0 10px 28px rgba(34, 211, 238, 0.18);
		color: #020617;
		font-weight: 800;
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
	min-height: 420px;
	border-radius: 20px;
	background: ${(props) =>
		props.$gradient || 'linear-gradient(90deg, #000000, #ffffff)'};
	transition: background 0.2s ease;

	&::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
			linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
		background-size: 48px 48px;
		mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), transparent);
		pointer-events: none;
	}

	@media (max-width: 480px) {
		min-height: 280px;
	}
`;

export const PreviewMeta = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 0.75rem;

	@media (max-width: 640px) {
		grid-template-columns: 1fr;
	}
`;

export const MetaCard = styled.div`
	padding: 0.75rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 14px;
	background: rgba(2, 6, 23, 0.22);

	span {
		display: block;
		margin-bottom: 0.25rem;
		color: var(--color-text-muted);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	strong {
		color: var(--color-text-emphasis);
		font-size: 0.95rem;
	}
`;

export const ControlsPanel = styled.section`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const ControlCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 18px;
	background:
		linear-gradient(135deg, rgba(255, 255, 255, 0.06), transparent),
		var(--gray-383838);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
`;

export const ControlCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	h3,
	h4 {
		margin: 0;
		color: var(--color-text-emphasis);
		font-size: 1rem;
	}

	p {
		margin: 0.25rem 0 0;
		color: var(--color-text-muted);
		font-size: 0.84rem;
		line-height: 1.45;
	}

	@media (max-width: 480px) {
		align-items: stretch;
		flex-direction: column;
	}
`;

export const ControlsSection = styled.section`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 1em;

	@media (max-width: 640px) {
		grid-template-columns: 1fr;
	}
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
	gap: 1em;
`;

export const ColorStopsHeader = ControlCardHeader;

export const ColorStopsList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;

	@media (max-width: 768px) {
		gap: 0.8em;
	}
`;

export const ColorStopItem = styled.div`
	background-color: rgba(2, 6, 23, 0.22);
	border: 1px solid rgba(255, 255, 255, 0.1);
	border-radius: 14px;
	padding: 1em;
	display: flex;
	flex-direction: column;
	gap: 1em;
	transition:
		background-color 0.2s ease,
		border-color 0.2s ease;

	&:hover {
		border-color: rgba(34, 211, 238, 0.34);
	}

	@media (max-width: 768px) {
		padding: 0.8em;
		gap: 0.8em;
	}
`;

export const ColorStopControls = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr) auto;
	align-items: end;
	gap: 1em;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
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

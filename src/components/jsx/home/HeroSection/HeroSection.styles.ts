import styled from '@emotion/styled';

export const Section = styled.section`
	padding: 72px 0 0;
	position: relative;

	@media (max-width: 720px) {
		padding: 48px 0 0;
	}
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 48px;
	align-items: center;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		gap: 40px;
	}
`;

export const TextColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	animation: fadeIn 0.7s ease-out;

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

export const Name = styled.h1`
	margin: 0 0 6px 0;
	font-size: clamp(40px, 5vw, 64px);
	font-weight: 500;
	font-family:
		'Segoe UI Variable', 'Segoe UI', Roboto, 'Noto Sans', 'Helvetica Neue',
		Arial, sans-serif;
	line-height: 1.1;
	position: relative;
	display: inline-block;
	color: transparent;
	letter-spacing: 0;
	font-kerning: none;
	font-variant-ligatures: none;

	@media (max-width: 720px) {
		font-size: clamp(32px, 8vw, 48px);
	}
`;

export const NameAccessible = styled.span`
	position: absolute;
	left: 0;
	top: 0;
	white-space: pre;
	opacity: 0;
	pointer-events: none;
	user-select: none;
`;

export const NameVisual = styled.span`
	position: relative;
	display: inline-flex;
	align-items: flex-start;
	white-space: pre;
`;

export const LetterSlot = styled.span<{ $width: string }>`
	position: relative;
	display: inline-block;
	width: ${(props) => props.$width};
	z-index: 1;
`;

export const SpaceSlot = styled.span`
	display: inline-block;
	width: 0.36em;
`;

const sharedTitleLayerStyles = `
	display: block;
	letter-spacing: 0;
	text-rendering: geometricPrecision;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	background: linear-gradient(
		135deg,
		var(--color-text-emphasis) 0%,
		var(--color-text-muted) 70%
	);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	pointer-events: none;
`;

export const TitleTop = styled.span`
	${sharedTitleLayerStyles}
	font-weight: 500;
	clip-path: inset(0 0 35% 0);
`;

export const TitleBottom = styled.span`
	${sharedTitleLayerStyles}
	position: absolute;
	left: 0;
	top: 0;
	font-weight: 300;
	clip-path: inset(65% 0 0 0);
`;

export const Subtitle = styled.p`
	margin: 0 0 18px 0;
	font-size: 19px;
	font-weight: 500;
	color: var(--color-text-muted);

	@media (max-width: 720px) {
		font-size: 17px;
		margin-bottom: 14px;
	}
`;

export const Description = styled.p`
	margin: 0 0 28px 0;
	font-size: 16px;
	line-height: 1.7;
	color: var(--white-ffffff-b3);
	max-width: 480px;

	@media (max-width: 720px) {
		font-size: 15px;
		margin-bottom: 24px;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 12px;
	flex-wrap: wrap;

	@media (max-width: 720px) {
		width: 100%;
	}
`;

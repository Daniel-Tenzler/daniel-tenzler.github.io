import styled from '@emotion/styled';

export const Section = styled.section`
	padding: 32px 0;
	position: relative;

	@media (max-width: 720px) {
		padding: 24px 0;
	}
`;

export const ContentWrapper = styled.div`
	max-width: 100%;
	position: relative;
	z-index: 2;
`;

export const Name = styled.h1`
	font-size: clamp(40px, 5vw, 64px);
	font-weight: 800;
	line-height: 1.1;
	margin: 0 0 8px 0;
	background: linear-gradient(
		135deg,
		var(--color-text-emphasis) 0%,
		var(--color-text-muted) 60%
	);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
	letter-spacing: -0.02em;
	animation: fadeInUp 0.8s ease-out;

	@keyframes fadeInUp {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@media (max-width: 720px) {
		font-size: clamp(32px, 8vw, 48px);
	}
`;

export const Title = styled.h2`
	font-size: clamp(24px, 3vw, 32px);
	font-weight: 600;
	line-height: 1.3;
	margin: 0 0 24px 0;
	color: var(--color-text-muted);
	letter-spacing: 0.01em;
	animation: fadeInUp 0.8s ease-out 0.1s both;

	@media (max-width: 720px) {
		font-size: clamp(20px, 6vw, 24px);
		margin-bottom: 16px;
	}
`;

export const AccentLine = styled.div`
	width: 360px;
	height: 3px;
	background: linear-gradient(
		90deg,
		var(--gray-474747) 0%,
		var(--color-text-emphasis) 20%,
		var(--gray-474747) 100%
	);
	margin: 0 0 32px 0;
	border-radius: 2px;
	animation: expandWidth 0.8s ease-out 0.2s both;

	@keyframes expandWidth {
		from {
			width: 0;
			opacity: 0;
		}
		to {
			width: 360px;
			opacity: 1;
		}
	}

	@media (max-width: 720px) {
		margin-bottom: 24px;
		width: 200px;
		@keyframes expandWidth {
			from {
				width: 0;
				opacity: 0;
			}
			to {
				width: 200px;
				opacity: 1;
			}
		}
	}
`;

export const Tagline = styled.p`
	font-size: clamp(18px, 2vw, 20px);
	font-weight: 500;
	line-height: 1.4;
	margin: 0 0 24px 0;
	color: var(--color-text-muted);
	animation: fadeInUp 0.8s ease-out 0.3s both;

	@media (max-width: 720px) {
		font-size: clamp(16px, 4vw, 18px);
		margin-bottom: 16px;
	}
`;

export const Description = styled.p`
	font-size: clamp(16px, 1.5vw, 18px);
	line-height: 1.7;
	margin: 0 0 40px 0;
	color: var(--white-ffffff-e6);
	max-width: 600px;
	animation: fadeInUp 0.8s ease-out 0.4s both;

	@media (max-width: 720px) {
		font-size: clamp(15px, 3vw, 16px);
		margin-bottom: 32px;
		max-width: 100%;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	animation: fadeInUp 0.8s ease-out 0.5s both;

	@media (max-width: 720px) {
		gap: 12px;
	}
`;

export const PrimaryButton = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 12px 24px;
	border: none;
	font-size: 15px;
	font-weight: 600;
	border-radius: 16px;
	color: var(--color-text-emphasis);
	background: linear-gradient(
		135deg,
		var(--color-bg-tertiary) 0%,
		var(--color-bg-secondary) 100%
	);
	text-decoration: none;
	transition: all 0.3s ease;
	position: relative;
	overflow: hidden;
	box-shadow: 0 4px 20px var(--black-0f1219-66);

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(
			90deg,
			transparent,
			var(--white-ffffff-33),
			transparent
		);
		transition: left 0.6s ease;
	}

	&:hover {
		box-shadow: 0 3px 20px var(--black-1a1a1a-e6);
		transform: scale(1.05);
	}

	&:active {
		transform: translateY(0);
	}

	@media (max-width: 720px) {
		padding: 10px 20px;
		font-size: 14px;
		flex: 1;
		min-width: 140px;
	}
`;

export const SecondaryButton = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	padding: 12px 24px;
	border: 1px solid var(--gray-292929-80);
	font-size: 15px;
	font-weight: 600;
	border-radius: 16px;
	color: var(--color-text-emphasis);
	background: var(--color-bg-secondary);
	text-decoration: none;
	transition: all 0.3s ease;
	position: relative;
	backdrop-filter: blur(10px);

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background: var(--gray-292929-1a);
		transition: width 0.3s ease;
		z-index: -1;
	}

	&:hover {
		transform: scale(1.05);
		border-color: var(--color-bg-tertiary);
		color: var(--color-text-emphasis);
		box-shadow: 0 3px 20px var(--black-1a1a1a-e6);
	}

	&:active {
		transform: translateY(0);
	}

	@media (max-width: 720px) {
		padding: 10px 20px;
		font-size: 14px;
		flex: 1;
		min-width: 140px;
	}
`;

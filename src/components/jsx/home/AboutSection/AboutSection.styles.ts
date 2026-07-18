import styled from '@emotion/styled';

export const Section = styled.section`
	padding: var(--section-gap) 0;

	@media (max-width: 720px) {
		padding: 40px 0;
	}
`;

export const CalloutCard = styled.div`
	display: flex;
	align-items: center;
	gap: 28px;
	background: var(--card-bg);
	border: var(--card-border);
	border-radius: var(--card-radius);
	padding: 28px;
	backdrop-filter: blur(6px);
	box-shadow: var(--card-shadow);

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
	}
`;

export const Monogram = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	width: 72px;
	height: 72px;
	border-radius: 18px;
	font-size: 26px;
	font-weight: 700;
	letter-spacing: -0.02em;
	color: #fff;
	background: linear-gradient(
		135deg,
		var(--color-accent-brand) 0%,
		var(--blue-000d8a) 100%
	);
	box-shadow: 0 4px 16px var(--blue-2337ff-66);

	@media (max-width: 768px) {
		width: 56px;
		height: 56px;
		font-size: 20px;
		border-radius: 14px;
	}
`;

export const Content = styled.div`
	flex: 1;
	min-width: 0;
`;

export const Title = styled.h2`
	margin: 0 0 8px;
	font-size: 20px;
	font-weight: 700;
	color: var(--color-text-emphasis);
`;

export const Paragraph = styled.p`
	margin: 0;
	font-size: 15px;
	line-height: 1.6;
	color: var(--white-ffffff-b3);

	& + & {
		margin-top: 12px;
	}
`;

export const ActionColumn = styled.div`
	flex-shrink: 0;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

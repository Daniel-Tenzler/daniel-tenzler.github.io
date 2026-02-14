import styled from '@emotion/styled';

export const JourneyDetailsContainer = styled.div`
	min-height: calc(100vh - 350px);
	padding: 32px;
`;

export const Title = styled.h1`
	font-size: 30px;
	line-height: 36px;
	font-weight: 700;
	margin-bottom: 8px;

	@media (min-width: 768px) {
		font-size: 48px;
		line-height: 1;
	}
`;

export const Date = styled.p`
	font-size: 18px;
	line-height: 28px;
	color: var(--color-text-muted);
	margin-bottom: 24px;
`;

export const Details = styled.div`
	p {
		font-size: 18px;
		line-height: 1.77;
	}
`;

export const BackButton = styled.a`
	display: inline-block;
	margin-top: 32px;
	padding: 12px 24px;
	background-color: var(--color-accent-brand-dark);
	color: white;
	text-decoration: none;
	border-radius: 8px;
	font-weight: 600;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: var(--color-accent-brand);
	}
`;

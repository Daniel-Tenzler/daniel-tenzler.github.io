import styled from '@emotion/styled';

export const Section = styled.section`
	margin-bottom: 48px;
`;

export const Title = styled.h2`
	margin-bottom: 16px;
	color: var(--color-text-primary);
`;

export const Content = styled.div`
	background-color: var(--color-bg-tertiary);
	padding: 24px;
	border-radius: 16px;
	box-shadow: 0 1px 2px var(--black-0f1219-0a);
`;

export const Paragraph = styled.p`
	color: var(--color-text-emphasis);
	margin-bottom: 16px;
	font-size: 16px;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;

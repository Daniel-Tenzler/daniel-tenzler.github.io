import styled from '@emotion/styled';

export const Section = styled.section`
	margin-bottom: 3rem;
`;

export const Title = styled.h2`
	margin-bottom: 1rem;
	color: var(--color-text-primary);
`;

export const Content = styled.div`
	background-color: var(--color-bg-tertiary);
	padding: 1.5rem;
	border-radius: 1rem;
	box-shadow: 0 1px 2px var(--black-0f1219-0a);
`;

export const Paragraph = styled.p`
	color: var(--color-text-emphasis);
	margin-bottom: 1rem;
	font-size: 16px;

	&:first-child {
		margin-top: 0;
	}

	&:last-child {
		margin-bottom: 0;
	}
`;

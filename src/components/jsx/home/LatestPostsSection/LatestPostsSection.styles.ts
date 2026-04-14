import styled from '@emotion/styled';

export const Section = styled.section`
	margin-bottom: 48px;
`;

export const Title = styled.h2`
	margin-bottom: 32px;
	color: var(--color-text-primary);
`;

export const PostsGrid = styled.div`
	display: grid;
	gap: 32px;
	grid-template-columns: 1fr;

	@media (min-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const ViewAllLink = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin-top: 24px;
	padding: 10px 24px;
	font-size: 15px;
	font-weight: 600;
	color: var(--color-text-emphasis);
	background: var(--color-bg-tertiary);
	border: 1px solid var(--gray-383838);
	border-radius: 8px;
	text-decoration: none;
	transition:
		border-color 0.2s ease,
		box-shadow 0.2s ease,
		color 0.2s ease;

	&:hover {
		color: var(--color-text-primary);
		border-color: var(--color-text-secondary);
		box-shadow: 0 2px 8px var(--black-0f1219-4d);
	}

	&:focus-visible {
		outline: 2px solid var(--color-text-secondary);
		outline-offset: 2px;
	}
`;

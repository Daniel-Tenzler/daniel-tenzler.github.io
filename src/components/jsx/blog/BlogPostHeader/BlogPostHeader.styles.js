import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
	margin-bottom: 2rem;
	text-align: center;
`;

export const MetaContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	font-size: 0.875rem;
	color: var(--color-text-muted);
	margin-bottom: 1rem;
`;

export const Title = styled.h1`
	font-size: 2rem;
	font-weight: 800;
	color: var(--color-text-primary);
	margin-bottom: 1rem;
	line-height: 1.1;
`;

export const TagsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	justify-content: center;
	margin-bottom: 1.5rem;
`;

export const Tag = styled.span`
	padding: 0.25rem 0.75rem;
	background-color: var(--black-0f1219-80);
	border-radius: 9999px;
	font-size: 0.875rem;
	color: var(--color-text-muted);
`;

export const UpdateInfo = styled.div`
	font-size: 0.875rem;
	color: var(--color-text-emphasis);
	font-style: italic;
`;

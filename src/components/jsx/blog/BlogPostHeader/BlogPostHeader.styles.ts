import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
	margin-bottom: 32px;
	text-align: center;
`;

export const MetaContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
	font-size: 14px;
	color: var(--color-text-muted);
	margin-bottom: 16px;
`;

export const Title = styled.h1`
	font-size: 32px;
	font-weight: 800;
	color: var(--color-text-primary);
	margin-bottom: 16px;
	line-height: 1.1;
`;

export const TagsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	justify-content: center;
	margin-bottom: 24px;
`;

export const Tag = styled.span`
	padding: 4px 12px;
	background-color: var(--black-0f1219-80);
	border-radius: 9999px;
	font-size: 14px;
	color: var(--color-text-muted);
`;

export const UpdateInfo = styled.div`
	font-size: 14px;
	color: var(--color-text-emphasis);
	font-style: italic;
`;

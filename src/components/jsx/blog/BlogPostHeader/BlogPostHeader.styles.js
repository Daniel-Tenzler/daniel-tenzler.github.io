import styled from '@emotion/styled';
import { COLORS, getRgbaColor } from 'src/consts/Colors';

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
	color: ${COLORS.offWhite};
	margin-bottom: 1rem;
`;

export const Title = styled.h1`
	font-size: 2.25rem;
	font-weight: 800;
	color: ${COLORS.grayLight};
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
	background-color: ${getRgbaColor(COLORS.black, 0.5)};
	border-radius: 9999px;
	font-size: 0.875rem;
	color: ${COLORS.offWhite};
`;

export const UpdateInfo = styled.div`
	font-size: 0.875rem;
	color: ${COLORS.white};
	font-style: italic;
`;

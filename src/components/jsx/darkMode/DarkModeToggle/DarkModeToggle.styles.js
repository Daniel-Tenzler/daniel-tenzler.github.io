import styled from '@emotion/styled';
import { COLORS } from 'src/consts/Colors';

export const ToggleWrapper = styled.button`
	display: flex;
	align-items: center;
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	padding: 0.5rem 1rem;
	border-radius: 999px;
	background-color: ${COLORS.BLUE_000D8A};
	color: ${COLORS.BLUE_000D8A};
	font-size: 1rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
	transition: background 0.2s;
	&:focus {
		outline: none;
	}
`;

export const Switch = styled.span`
	display: inline-block;
	width: 40px;
	height: 24px;
	background: ${(props) =>
		props.isDark ? COLORS.GRAY_303030 : COLORS.WHITE_BFBFBF};
	border-radius: 12px;
	margin: 0 0.75rem;
	position: relative;
	transition: background 0.2s;

	&::after {
		content: '';
		position: absolute;
		top: 2px;
		left: ${(props) => (props.isDark ? '18px' : '2px')};
		width: 20px;
		height: 20px;
		background: ${COLORS.WHITE_FFFFFF};
		border-radius: 50%;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
		transition: left 0.2s;
	}
`;

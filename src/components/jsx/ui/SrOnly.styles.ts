import styled from '@emotion/styled';

/**
 * Shared screen-reader-only component.
 * Used by: MobileMenu, Footer, and any component needing visually hidden text.
 */
export const SrOnly = styled.span`
	position: absolute !important;
	width: 1px !important;
	height: 1px !important;
	padding: 0 !important;
	margin: -1px !important;
	overflow: hidden !important;
	clip: rect(0, 0, 0, 0) !important;
	white-space: nowrap !important;
	border: 0 !important;
`;

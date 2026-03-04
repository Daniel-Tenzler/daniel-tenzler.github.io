import styled from '@emotion/styled';

export const ImageContainer = styled.div<React.HTMLAttributes<HTMLDivElement>>`
	position: relative;
	width: 100%;
	padding-top: 56.25%; /* 16:9 aspect ratio */
	overflow: hidden;
	border-radius: 8px 8px 0 0;
`;

export const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

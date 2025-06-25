import styled from '@emotion/styled';

export const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	padding-top: 56.25%; /* 16:9 aspect ratio */
	overflow: hidden;
`;

export const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

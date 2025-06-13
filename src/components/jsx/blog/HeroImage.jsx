import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	padding-top: 56.25%; /* 16:9 aspect ratio */
	overflow: hidden;
`;

const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export default function HeroImage({ src, alt }) {
	return (
		<ImageContainer>
			<Image src={src} alt={alt} />
		</ImageContainer>
	);
}

HeroImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
};

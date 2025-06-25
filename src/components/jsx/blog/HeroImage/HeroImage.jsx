import React from 'react';
import PropTypes from 'prop-types';
import { ImageContainer, Image } from './HeroImage.styles';

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

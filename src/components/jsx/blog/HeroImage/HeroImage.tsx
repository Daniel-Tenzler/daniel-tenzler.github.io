import React from 'react';
import { ImageContainer, Image } from './HeroImage.styles';

export interface HeroImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
	'client:load'?: boolean;
	'client:visible'?: boolean;
	'client:idle'?: boolean;
	'client:only'?: boolean;
}

// Extract standard HTML attributes from HeroImageProps
type StandardHTMLAttributes = Omit<
	HeroImageProps,
	'client:load' | 'client:visible' | 'client:idle' | 'client:only' | 'src' | 'alt'
>;

export default function HeroImage({
	src,
	alt,
	...props
}: HeroImageProps) {
	const standardProps: StandardHTMLAttributes = props;
	return (
		<ImageContainer {...standardProps}>
			<Image src={src} alt={alt} loading="lazy" {...standardProps} />
		</ImageContainer>
	);
}

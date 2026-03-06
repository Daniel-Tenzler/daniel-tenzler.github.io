import { ImageContainer, Image } from './HeroImage.styles';
import type { HeroImageProps, StandardHTMLAttributes } from './HeroImage.types';

export default function HeroImage({ src, alt, ...props }: HeroImageProps) {
	const standardProps: StandardHTMLAttributes = props;
	return (
		<ImageContainer {...standardProps}>
			<Image src={src} alt={alt} loading="lazy" {...standardProps} />
		</ImageContainer>
	);
}

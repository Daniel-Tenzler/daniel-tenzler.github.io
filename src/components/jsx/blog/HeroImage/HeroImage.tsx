import { ImageContainer, Image } from './HeroImage.styles';
import type { HeroImageProps } from './HeroImage.types';

export default function HeroImage({ src, alt }: HeroImageProps) {
	return (
		<ImageContainer>
			<Image src={src} alt={alt} loading="lazy" />
		</ImageContainer>
	);
}

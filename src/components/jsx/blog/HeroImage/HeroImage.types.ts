export interface HeroImageProps {
	src: string;
	alt: string;
	'client:load'?: boolean;
	'client:visible'?: boolean;
	'client:idle'?: boolean;
	'client:only'?: boolean;
}

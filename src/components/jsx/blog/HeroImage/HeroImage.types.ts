import type { ImgHTMLAttributes } from 'react';

export interface HeroImageProps extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	alt: string;
	'client:load'?: boolean;
	'client:visible'?: boolean;
	'client:idle'?: boolean;
	'client:only'?: boolean;
}

export type StandardHTMLAttributes = Omit<
	HeroImageProps,
	| 'client:load'
	| 'client:visible'
	| 'client:idle'
	| 'client:only'
	| 'src'
	| 'alt'
>;

import { IMAGE_TYPES } from '../../images.config.js';

const { widths: PORTFOLIO_IMAGE_WIDTHS, sizes: PORTFOLIO_IMAGE_SIZES } =
	IMAGE_TYPES.portfolio;

export interface ImageDimensions {
	width: number;
	height: number;
}

export interface ImageMetadata extends ImageDimensions {
	format: string;
	size: number;
}

export type ImageLoaderFn = (src: string) => Promise<HTMLImageElement>;

export interface ParsedImagePath {
	basePath: string;
	extension: string;
}

export interface ResponsiveImageData {
	jpeg: {
		src: string;
		srcset: string;
	};
	webp: {
		src: string;
		srcset: string;
	};
	sizes: string;
}

/**
 * Generates responsive image srcset from image assets
 * @param basePath - Base path without extension (e.g., "/blog-placeholder-2")
 * @param extension - File extension including dot (e.g., ".webp")
 * @param widths - Array of widths to generate
 * @returns srcset string for use in img/source tags
 */
export function generateSrcset(
	basePath: string,
	extension: string,
	widths: number[]
): string {
	return widths
		.map((width) => `${basePath}-${width}${extension} ${width}w`)
		.join(', ');
}

/**
 * Gets image metadata including base path and extension
 * @param imagePath - Full image path (e.g., "/images/portfolio/blog-placeholder-2.jpg")
 * @returns Object with basePath and extension
 */
export function parseImagePath(imagePath: string): ParsedImagePath {
	const lastDotIndex = imagePath.lastIndexOf('.');
	const extension = imagePath.slice(lastDotIndex);
	const basePath = imagePath.slice(0, lastDotIndex);
	return { basePath, extension };
}

/**
 * Prepares responsive image data for a portfolio project
 * @param imagePath - Original image path from portfolio data
 * @param widths - Optional custom widths (defaults to portfolio config)
 * @param sizes - Optional custom sizes (defaults to portfolio config)
 * @returns Object with src, srcset, and sizes for webp and fallback formats
 */
export function prepareResponsiveImageData(
	imagePath: string,
	widths?: number[],
	sizes?: string
): ResponsiveImageData {
	const { basePath, extension } = parseImagePath(imagePath);

	// Use provided widths/sizes or default to portfolio config
	const imageWidths = widths || PORTFOLIO_IMAGE_WIDTHS;
	const imageSizes = sizes || PORTFOLIO_IMAGE_SIZES;

	return {
		// Original JPEG as fallback
		jpeg: {
			src: imagePath,
			srcset: generateSrcset(basePath, extension, imageWidths),
		},
		// WebP for modern browsers
		webp: {
			src: basePath + '.webp',
			srcset: generateSrcset(basePath, '.webp', imageWidths),
		},
		sizes: imageSizes,
	};
}

export { PORTFOLIO_IMAGE_WIDTHS, PORTFOLIO_IMAGE_SIZES };

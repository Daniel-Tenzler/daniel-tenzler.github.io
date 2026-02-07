import { IMAGE_TYPES } from '../../images.config.js';

const { widths: PORTFOLIO_IMAGE_WIDTHS, sizes: PORTFOLIO_IMAGE_SIZES } =
	IMAGE_TYPES.portfolio;

/**
 * Generates responsive image srcset from image assets
 * @param {string} basePath - Base path without extension (e.g., "/blog-placeholder-2")
 * @param {string} extension - File extension including dot (e.g., ".webp")
 * @param {number[]} widths - Array of widths to generate
 * @returns {string} - srcset string for use in img/source tags
 */
export function generateSrcset(basePath, extension, widths) {
	return widths
		.map((width) => `${basePath}-${width}${extension} ${width}w`)
		.join(', ');
}

/**
 * Gets image metadata including base path and extension
 * @param {string} imagePath - Full image path (e.g., "/images/portfolio/blog-placeholder-2.jpg")
 * @returns {object} - Object with basePath and extension
 */
export function parseImagePath(imagePath) {
	const lastDotIndex = imagePath.lastIndexOf('.');
	const extension = imagePath.slice(lastDotIndex);
	const basePath = imagePath.slice(0, lastDotIndex);
	return { basePath, extension };
}

/**
 * Prepares responsive image data for a portfolio project
 * @param {string} imagePath - Original image path from portfolio data
 * @param {number[]} [widths] - Optional custom widths (defaults to portfolio config)
 * @param {string} [sizes] - Optional custom sizes (defaults to portfolio config)
 * @returns {object} - Object with src, srcset, and sizes for webp and fallback formats
 */
export function prepareResponsiveImageData(imagePath, widths, sizes) {
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

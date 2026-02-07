import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { IMAGE_TYPES } from '../images.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Validates that widths array is properly configured
 * @param {number[]} widths - Array of widths to validate
 * @param {string} type - Image type name for error messages
 */
function validateWidths(widths, type) {
	if (!Array.isArray(widths) || widths.length === 0) {
		throw new Error(`IMAGE_TYPES.${type}.widths must be a non-empty array`);
	}

	for (const width of widths) {
		if (typeof width !== 'number' || width <= 0 || !Number.isInteger(width)) {
			throw new Error(
				`IMAGE_TYPES.${type}.widths must contain positive integers: ${width}`
			);
		}
	}
}

/**
 * Checks if generated images already exist for a given basename and width
 * @param {string} dir - Directory path
 * @param {string} basename - Base filename without extension
 * @param {number} width - Width to check
 * @returns {boolean} - True if both jpg and webp exist
 */
function hasGeneratedImages(dir, basename, width) {
	const jpgPath = path.join(dir, `${basename}-${width}.jpg`);
	const webpPath = path.join(dir, `${basename}-${width}.webp`);
	return fs.existsSync(jpgPath) && fs.existsSync(webpPath);
}

/**
 * Detects source images in a directory using convention:
 * - Source images are NOT generated images (don't match {name}-{width} pattern)
 * - Generated images have dash-separated sizes (e.g., "photo-400.jpg")
 * @param {string} directory - Directory to scan
 * @param {number[]} widths - Configured widths to identify generated images
 * @returns {string[]} - Array of source image basenames (without extension)
 */
function detectSourceImages(directory, widths) {
	if (!fs.existsSync(directory)) {
		console.warn(`  ⚠️  Directory does not exist: ${directory}`);
		return [];
	}

	const files = fs.readdirSync(directory);
	const sourceImages = new Set();

	// Build regex pattern to match generated images: {name}-{width}.{ext}
	const widthPatterns = widths.map((w) => `${w}$`).join('|');
	const generatedRegex = new RegExp(`-(${widthPatterns})$`);

	for (const file of files) {
		const ext = path.extname(file).toLowerCase();
		if (ext !== '.jpg' && ext !== '.webp') {
			continue;
		}

		const basename = path.basename(file, ext);

		// Skip if this matches a generated image pattern
		if (generatedRegex.test(basename)) {
			continue;
		}

		// Only process jpg files to avoid duplicates (webp will be checked)
		if (ext !== '.jpg') {
			continue;
		}

		// Check if both jpg and webp source variants exist
		const jpgPath = path.join(directory, `${basename}.jpg`);
		const webpPath = path.join(directory, `${basename}.webp`);

		if (fs.existsSync(jpgPath) && fs.existsSync(webpPath)) {
			sourceImages.add(basename);
		} else if (fs.existsSync(jpgPath) && !fs.existsSync(webpPath)) {
			console.warn(
				`  ⚠️  Missing WebP source: ${basename}.webp (skipping ${basename})`
			);
		} else if (!fs.existsSync(jpgPath) && fs.existsSync(webpPath)) {
			console.warn(
				`  ⚠️  Missing JPEG source: ${basename}.jpg (skipping ${basename})`
			);
		}
	}

	return Array.from(sourceImages).sort();
}

/**
 * Generates responsive images for a single source image
 * @param {string} dir - Directory path
 * @param {string} basename - Base filename without extension
 * @param {number[]} widths - Widths to generate
 */
async function generateResponsiveImages(dir, basename, widths) {
	const jpgPath = path.join(dir, `${basename}.jpg`);
	const webpPath = path.join(dir, `${basename}.webp`);

	console.log(`\n  📸 Processing ${basename}:`);

	for (const width of widths) {
		// Skip if already generated
		if (hasGeneratedImages(dir, basename, width)) {
			console.log(`    ✓ ${width}px (exists)`);
			continue;
		}

		const jpgOutput = path.join(dir, `${basename}-${width}.jpg`);
		const webpOutput = path.join(dir, `${basename}-${width}.webp`);

		try {
			// Generate JPEG
			await sharp(jpgPath)
				.resize(width, null, {
					withoutEnlargement: true,
					kernel: sharp.kernel.lanczos3,
				})
				.jpeg({ quality: 85, mozjpeg: true })
				.toFile(jpgOutput);

			// Generate WebP
			await sharp(webpPath)
				.resize(width, null, {
					withoutEnlargement: true,
					kernel: sharp.kernel.lanczos3,
				})
				.webp({ quality: 85, effort: 6 })
				.toFile(webpOutput);

			console.log(`    ✓ ${width}px (generated)`);
		} catch (error) {
			console.error(`    ✗ ${width}px (failed: ${error.message})`);
		}
	}
}

/**
 * Main function to generate all responsive images
 */
async function main() {
	console.log('🎨 Generating responsive images...\n');

	const startTime = Date.now();

	for (const [type, config] of Object.entries(IMAGE_TYPES)) {
		const { directory, widths, sizes } = config;

		// Validate configuration
		validateWidths(widths, type);

		const absoluteDir = path.join(__dirname, '..', directory);
		console.log(`📁 ${type}: ${directory}`);
		console.log(`📐 Widths: ${widths.join(', ')}px`);
		console.log(`📏 Sizes: ${sizes}\n`);

		// Detect source images using convention
		const sourceImages = detectSourceImages(absoluteDir, widths);

		if (sourceImages.length === 0) {
			console.log(`  ℹ️  No source images found in ${directory}`);
			continue;
		}

		console.log(`  Found ${sourceImages.length} source image(s):`);
		for (const basename of sourceImages) {
			console.log(`    - ${basename}`);
		}

		// Generate responsive images
		for (const basename of sourceImages) {
			await generateResponsiveImages(absoluteDir, basename, widths);
		}

		console.log('');
	}

	const elapsed = Date.now() - startTime;
	console.log(`✅ Done in ${elapsed}ms`);
}

main().catch((error) => {
	console.error('❌ Error generating responsive images:', error);
	process.exit(1);
});

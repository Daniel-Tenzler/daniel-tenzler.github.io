/**
 * File validation utilities
 * Shared validation functions for file uploads across components
 */

/**
 * Validate image file type and size
 * @param {File} file - The file to validate
 * @param {Function} setError - Function to set error message
 * @param {Object} options - Validation options
 * @param {number} options.maxSizeMB - Maximum file size in MB (default: 10)
 * @returns {boolean} - True if valid, false otherwise
 */
export const validateImageFile = (file, setError, options = {}) => {
	const { maxSizeMB = 10 } = options;

	// Check file type
	if (!file.type.startsWith('image/')) {
		setError(
			'Please select a valid image file (JPG, PNG, GIF, WebP, etc.)'
		);
		return false;
	}

	// Check file size
	const maxSize = maxSizeMB * 1024 * 1024;
	if (file.size > maxSize) {
		setError(
			`File size exceeds ${maxSizeMB}MB limit. Please choose a smaller image.`
		);
		return false;
	}

	return true;
};

/**
 * Validate image dimensions
 * @param {HTMLImageElement} imgElement - The image element to validate
 * @param {Function} setError - Function to set error message
 * @param {Object} options - Validation options
 * @param {number} options.maxDimension - Maximum dimension (default: 4096)
 * @returns {boolean} - True if valid, false otherwise
 */
export const validateImageDimensions = (imgElement, setError, options = {}) => {
	const { maxDimension = 4096 } = options;

	if (
		imgElement.width > maxDimension ||
		imgElement.height > maxDimension
	) {
		setError(
			`Image dimensions (${imgElement.width}x${imgElement.height}) exceed ${maxDimension}x${maxDimension} limit. Processing may be slow.`
		);
		return false;
	}

	return true;
};

/**
 * Generic file size validator
 * @param {File} file - The file to validate
 * @param {number} maxSizeMB - Maximum file size in MB
 * @param {Function} setError - Function to set error message
 * @returns {boolean} - True if valid, false otherwise
 */
export const validateFileSize = (file, maxSizeMB, setError) => {
	const maxSize = maxSizeMB * 1024 * 1024;
	if (file.size > maxSize) {
		setError(
			`File size exceeds ${maxSizeMB}MB limit. Please choose a smaller file.`
		);
		return false;
	}
	return true;
};

/**
 * Generic file type validator
 * @param {File} file - The file to validate
 * @param {string[]} allowedTypes - Array of allowed MIME types
 * @param {Function} setError - Function to set error message
 * @returns {boolean} - True if valid, false otherwise
 */
export const validateFileType = (file, allowedTypes, setError) => {
	if (!allowedTypes.includes(file.type)) {
		setError(
			`Please select a valid file (${allowedTypes.join(', ')})`
		);
		return false;
	}
	return true;
};

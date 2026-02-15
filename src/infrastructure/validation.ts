/**
 * File validation utilities
 * Shared validation functions for file uploads across components
 */

export interface ValidationResult {
	isValid: boolean;
	errors: string[];
}

export type Validator<T> = (value: unknown) => value is T;
export type ValidationFn = (value: unknown) => ValidationResult;

export type IsEmail = (value: unknown) => value is string;
export type IsUrl = (value: unknown) => value is string;
export type IsPositiveNumber = (value: unknown) => value is number;

interface ValidationOptions {
	maxSizeMB?: number;
}

interface DimensionOptions {
	maxDimension?: number;
}

type SetErrorFn = (error: string) => void;

/**
 * Validate image file type and size
 * @param file - The file to validate
 * @param setError - Function to set error message
 * @param options - Validation options
 * @param options.maxSizeMB - Maximum file size in MB (default: 10)
 * @returns True if valid, false otherwise
 */
export const validateImageFile = (
	file: File,
	setError: SetErrorFn,
	options: ValidationOptions = {}
): boolean => {
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
 * @param imgElement - The image element to validate
 * @param setError - Function to set error message
 * @param options - Validation options
 * @param options.maxDimension - Maximum dimension (default: 4096)
 * @returns True if valid, false otherwise
 */
export const validateImageDimensions = (
	imgElement: HTMLImageElement,
	setError: SetErrorFn,
	options: DimensionOptions = {}
): boolean => {
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
 * @param file - The file to validate
 * @param maxSizeMB - Maximum file size in MB
 * @param setError - Function to set error message
 * @returns True if valid, false otherwise
 */
export const validateFileSize = (
	file: File,
	maxSizeMB: number,
	setError: SetErrorFn
): boolean => {
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
 * @param file - The file to validate
 * @param allowedTypes - Array of allowed MIME types
 * @param setError - Function to set error message
 * @returns True if valid, false otherwise
 */
export const validateFileType = (
	file: File,
	allowedTypes: string[],
	setError: SetErrorFn
): boolean => {
	if (!allowedTypes.includes(file.type)) {
		setError(
			`Please select a valid file (${allowedTypes.join(', ')})`
		);
		return false;
	}
	return true;
};

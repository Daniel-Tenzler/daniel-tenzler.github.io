/**
 * Box Shadow Generator Presets
 * Shared preset configurations for box shadow effects
 */

/**
 * Generate a unique layer ID
 */
export const generateLayerId = () => `layer-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

/**
 * Default layer configuration
 */
export const DEFAULT_LAYER = {
	id: 'default-layer',
	offsetX: 10,
	offsetY: 10,
	blur: 20,
	spread: 0,
	color: '#000000',
	opacity: 0.2,
	inset: false,
};

/**
 * Box shadow presets
 * Each preset is an array of layer configurations
 */
export const BOX_SHADOW_PRESETS = {
	subtle: [
		{
			id: 'subtle-1',
			offsetX: 0,
			offsetY: 2,
			blur: 4,
			spread: 0,
			color: '#000000',
			opacity: 0.1,
			inset: false,
		},
	],
	raised: [
		{
			id: 'raised-1',
			offsetX: 0,
			offsetY: 4,
			blur: 12,
			spread: 0,
			color: '#000000',
			opacity: 0.15,
			inset: false,
		},
		{
			id: 'raised-2',
			offsetX: 0,
			offsetY: 2,
			blur: 4,
			spread: 0,
			color: '#000000',
			opacity: 0.1,
			inset: false,
		},
	],
	floating: [
		{
			id: 'floating-1',
			offsetX: 0,
			offsetY: 20,
			blur: 40,
			spread: 0,
			color: '#000000',
			opacity: 0.3,
			inset: false,
		},
	],
	inset: [
		{
			id: 'inset-1',
			offsetX: 0,
			offsetY: 2,
			blur: 4,
			spread: 0,
			color: '#000000',
			opacity: 0.2,
			inset: true,
		},
	],
};

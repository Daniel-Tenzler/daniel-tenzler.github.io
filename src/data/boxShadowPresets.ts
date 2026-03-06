/**
 * Box Shadow Generator Presets
 * Shared preset configurations for box shadow effects
 */

import type { BoxShadowLayerBase } from 'src/infrastructure/cssUtils';

/**
 * Interface for a box shadow layer configuration
 * Extends the base CSS layer type with an ID for layer management
 */
export interface BoxShadowLayer extends BoxShadowLayerBase {
	id: string;
}

/**
 * Type for box shadow presets object
 * Maps preset names to arrays of layer configurations
 */
export type BoxShadowPresets = {
	[key: string]: BoxShadowLayer[];
};

/**
 * Generate a unique layer ID
 */
export const generateLayerId = (): string =>
	`layer-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;

/**
 * Default layer configuration
 */
export const DEFAULT_LAYER: BoxShadowLayer = {
	id: 'default-layer',
	offsetX: 10,
	offsetY: 10,
	blur: 20,
	spread: 0,
	color: '#000000',
	opacity: 20,
	inset: false,
};

/**
 * Box shadow presets
 * Each preset is an array of layer configurations
 */
export const BOX_SHADOW_PRESETS: BoxShadowPresets = {
	subtle: [
		{
			id: 'subtle-1',
			offsetX: 0,
			offsetY: 2,
			blur: 4,
			spread: 0,
			color: '#000000',
			opacity: 10,
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
			opacity: 15,
			inset: false,
		},
		{
			id: 'raised-2',
			offsetX: 0,
			offsetY: 2,
			blur: 4,
			spread: 0,
			color: '#000000',
			opacity: 10,
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
			opacity: 30,
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
			opacity: 20,
			inset: true,
		},
	],
};

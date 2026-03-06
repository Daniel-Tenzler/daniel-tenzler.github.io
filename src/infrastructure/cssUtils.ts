/**
 * CSS Utilities for Box Shadow and Gradient Generators
 */

import { parseHex } from 'src/infrastructure/colorUtils';
import type {
	CSSValue,
	CSSValueParser,
	BoxShadowLayerBase,
	BoxShadowLayer,
	GradientColorStop,
	LinearGradientConfig,
	RadialGradientConfig,
	ConicGradientConfig,
	GradientState,
	GradientPreset,
} from 'src/infrastructure/cssUtils.types';

// Re-export hexToRgb as alias to parseHex from colorUtils
export const hexToRgb = parseHex;

// Re-export types from cssUtils.types.ts for backward compatibility
export type {
	CSSValue,
	CSSValueParser,
	BoxShadowLayerBase,
	BoxShadowLayer,
	GradientColorStop,
	LinearGradientConfig,
	RadialGradientConfig,
	ConicGradientConfig,
	GradientState,
	GradientPreset,
};

/**
 * Validate hex color format
 * @param hex - Hex color to validate
 * @returns True if valid hex color
 */
export const isValidHex = (hex: string): boolean => {
	if (!hex || typeof hex !== 'string') return false;
	const cleaned = hex.replace('#', '');
	return /^[0-9a-f]{3}$|^[0-9a-f]{6}$/i.test(cleaned);
};

/**
 * Generate box-shadow CSS string from layers array
 * @param layers - Array of shadow layer objects
 * @returns CSS box-shadow string
 */
export const generateBoxShadowCSS = (layers: BoxShadowLayer[]): string => {
	if (!Array.isArray(layers) || layers.length === 0) {
		return 'none';
	}

	const shadowLayers = layers
		.map((layer) => {
			const { offsetX, offsetY, blur, spread, color, opacity, inset } =
				layer;

			// Convert hex color with opacity to rgba
			const rgb = hexToRgb(color);
			if (!rgb) {
				return '';
			}
			const alpha = opacity / 100;
			const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;

			const insetKeyword = inset ? 'inset ' : '';
			return `${insetKeyword}${offsetX}px ${offsetY}px ${blur}px ${spread}px ${rgba}`;
		})
		.filter(Boolean);

	return shadowLayers.join(', ') || 'none';
};

/**
 * Generate gradient CSS string from state object
 * @param state - Gradient state object
 * @returns CSS gradient string
 */
export const generateGradientCSS = (state: GradientState): string => {
	if (
		!state ||
		!state.type ||
		!state.colorStops ||
		state.colorStops.length === 0
	) {
		return 'linear-gradient(90deg, #000000, #ffffff)';
	}

	const { type, colorStops, linear, radial, conic } = state;

	// Sort color stops by position
	const sortedStops = [...colorStops].sort((a, b) => a.position - b.position);

	// Generate color stop strings
	const stopStrings = sortedStops
		.map((stop) => {
			const rgb = hexToRgb(stop.color);
			if (!rgb) {
				return '';
			}
			const alpha = stop.opacity !== undefined ? stop.opacity / 100 : 1;
			const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
			return `${rgba} ${stop.position}%`;
		})
		.filter(Boolean);

	switch (type) {
		case 'linear': {
			const angle = linear?.angle || 90;
			return `linear-gradient(${angle}deg, ${stopStrings.join(', ')})`;
		}
		case 'radial': {
			const shape = radial?.shape || 'circle';
			const posX = radial?.posX || 50;
			const posY = radial?.posY || 50;
			return `radial-gradient(${shape} at ${posX}% ${posY}%, ${stopStrings.join(', ')})`;
		}
		case 'conic': {
			const conicAngle = conic?.angle || 0;
			const conicPosX = conic?.posX || 50;
			const conicPosY = conic?.posY || 50;
			return `conic-gradient(from ${conicAngle}deg at ${conicPosX}% ${conicPosY}%, ${stopStrings.join(', ')})`;
		}
		default:
			return `linear-gradient(90deg, ${stopStrings.join(', ')})`;
	}
};

// Re-export gradient presets from data file
export {
	DEFAULT_GRADIENT_CONFIG,
	GRADIENT_PRESETS,
	GRADIENT_TYPES,
} from 'src/data/gradientPresets';

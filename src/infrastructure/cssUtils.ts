/**
 * CSS Utilities for Box Shadow and Gradient Generators
 */

import { parseHex } from 'src/infrastructure/colorUtils';

// Re-export hexToRgb as alias to parseHex from colorUtils
export const hexToRgb = parseHex;

/**
 * CSS value type for parsing and handling CSS units
 */
export interface CSSValue {
	value: number;
	unit: 'px' | 'rem' | 'em' | '%' | 'vh' | 'vw';
}

/**
 * CSS value parser function type
 */
export type CSSValueParser = (value: string) => CSSValue | null;

/**
 * Box shadow layer configuration
 */
export interface BoxShadowLayer {
	offsetX: number;
	offsetY: number;
	blur: number;
	spread: number;
	color: string;
	opacity: number;
	inset: boolean;
}

/**
 * Gradient color stop configuration
 */
export interface GradientColorStop {
	id: string;
	color: string;
	position: number;
	opacity?: number;
}

/**
 * Linear gradient configuration
 */
export interface LinearGradientConfig {
	angle: number;
}

/**
 * Radial gradient configuration
 */
export interface RadialGradientConfig {
	shape: 'circle' | 'ellipse';
	posX: number;
	posY: number;
}

/**
 * Conic gradient configuration
 */
export interface ConicGradientConfig {
	angle: number;
	posX: number;
	posY: number;
}

/**
 * Gradient state configuration
 */
export interface GradientState {
	type: 'linear' | 'radial' | 'conic';
	colorStops: GradientColorStop[];
	linear?: LinearGradientConfig;
	radial?: RadialGradientConfig;
	conic?: ConicGradientConfig;
}

/**
 * Gradient preset configuration
 */
export interface GradientPreset {
	name: string;
	config: GradientState;
}

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

	const shadowLayers = layers.map((layer) => {
		const { offsetX, offsetY, blur, spread, color, opacity, inset } = layer;

		// Convert hex color with opacity to rgba
		const rgb = hexToRgb(color);
		if (!rgb) {
			return '';
		}
		const alpha = opacity / 100;
		const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;

		const insetKeyword = inset ? 'inset ' : '';
		return `${insetKeyword}${offsetX}px ${offsetY}px ${blur}px ${spread}px ${rgba}`;
	}).filter(Boolean);

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
	const stopStrings = sortedStops.map((stop) => {
		const rgb = hexToRgb(stop.color);
		if (!rgb) {
			return '';
		}
		const alpha = stop.opacity !== undefined ? stop.opacity / 100 : 1;
		const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
		return `${rgba} ${stop.position}%`;
	}).filter(Boolean);

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

/**
 * Gradient type constants
 */
export const GRADIENT_TYPES = {
	LINEAR: 'linear',
	RADIAL: 'radial',
	CONIC: 'conic',
} as const;

/**
 * Default gradient configuration
 */
export const DEFAULT_GRADIENT_CONFIG: GradientState = {
	type: 'linear',
	linear: {
		angle: 135,
	},
	radial: {
		shape: 'circle',
		posX: 50,
		posY: 50,
	},
	conic: {
		angle: 0,
		posX: 50,
		posY: 50,
	},
	colorStops: [
		{ id: 'stop-1', color: '#667eea', position: 0, opacity: 100 },
		{ id: 'stop-2', color: '#764ba2', position: 100, opacity: 100 },
	],
};

/**
 * Gradient presets
 */
export const GRADIENT_PRESETS: GradientPreset[] = [
	{
		name: 'Sunset',
		config: {
			type: 'linear',
			linear: { angle: 135 },
			radial: { shape: 'circle', posX: 50, posY: 50 },
			conic: { angle: 0, posX: 50, posY: 50 },
			colorStops: [
				{ id: 'sunset-1', color: '#ff6b6b', position: 0, opacity: 100 },
				{
					id: 'sunset-2',
					color: '#feca57',
					position: 50,
					opacity: 100,
				},
				{
					id: 'sunset-3',
					color: '#ff9ff3',
					position: 100,
					opacity: 100,
				},
			],
		},
	},
	{
		name: 'Ocean',
		config: {
			type: 'linear',
			linear: { angle: 180 },
			radial: { shape: 'circle', posX: 50, posY: 50 },
			conic: { angle: 0, posX: 50, posY: 50 },
			colorStops: [
				{ id: 'ocean-1', color: '#667eea', position: 0, opacity: 100 },
				{
					id: 'ocean-2',
					color: '#764ba2',
					position: 100,
					opacity: 100,
				},
			],
		},
	},
	{
		name: 'Metallic',
		config: {
			type: 'linear',
			linear: { angle: 45 },
			radial: { shape: 'circle', posX: 50, posY: 50 },
			conic: { angle: 0, posX: 50, posY: 50 },
			colorStops: [
				{
					id: 'metallic-1',
					color: '#2c3e50',
					position: 0,
					opacity: 100,
				},
				{
					id: 'metallic-2',
					color: '#bdc3c7',
					position: 50,
					opacity: 100,
				},
				{
					id: 'metallic-3',
					color: '#2c3e50',
					position: 100,
					opacity: 100,
				},
			],
		},
	},
	{
		name: 'Forest',
		config: {
			type: 'linear',
			linear: { angle: 135 },
			radial: { shape: 'circle', posX: 50, posY: 50 },
			conic: { angle: 0, posX: 50, posY: 50 },
			colorStops: [
				{ id: 'forest-1', color: '#134e5e', position: 0, opacity: 100 },
				{
					id: 'forest-2',
					color: '#71b280',
					position: 100,
					opacity: 100,
				},
			],
		},
	},
	{
		name: 'Fire',
		config: {
			type: 'linear',
			linear: { angle: 45 },
			radial: { shape: 'circle', posX: 50, posY: 50 },
			conic: { angle: 0, posX: 50, posY: 50 },
			colorStops: [
				{ id: 'fire-1', color: '#f12711', position: 0, opacity: 100 },
				{ id: 'fire-2', color: '#f5af19', position: 100, opacity: 100 },
			],
		},
	},
	{
		name: 'Aurora',
		config: {
			type: 'linear',
			linear: { angle: 225 },
			radial: { shape: 'circle', posX: 50, posY: 50 },
			conic: { angle: 0, posX: 50, posY: 50 },
			colorStops: [
				{ id: 'aurora-1', color: '#00c6ff', position: 0, opacity: 100 },
				{
					id: 'aurora-2',
					color: '#0072ff',
					position: 100,
					opacity: 100,
				},
			],
		},
	},
	{
		name: 'Candy',
		config: {
			type: 'linear',
			linear: { angle: 90 },
			radial: { shape: 'circle', posX: 50, posY: 50 },
			conic: { angle: 0, posX: 50, posY: 50 },
			colorStops: [
				{ id: 'candy-1', color: '#ff9a9e', position: 0, opacity: 100 },
				{ id: 'candy-2', color: '#fecfef', position: 50, opacity: 100 },
				{
					id: 'candy-3',
					color: '#fecfef',
					position: 100,
					opacity: 100,
				},
			],
		},
	},
	{
		name: 'Night Sky',
		config: {
			type: 'radial',
			linear: { angle: 180 },
			radial: { shape: 'circle', posX: 50, posY: 50 },
			conic: { angle: 0, posX: 50, posY: 50 },
			colorStops: [
				{ id: 'night-1', color: '#0f0c29', position: 0, opacity: 100 },
				{ id: 'night-2', color: '#302b63', position: 50, opacity: 100 },
				{
					id: 'night-3',
					color: '#24243e',
					position: 100,
					opacity: 100,
				},
			],
		},
	},
];

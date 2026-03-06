/**
 * Gradient Presets Data
 * Default configurations and preset gradients for the Gradient Generator tool
 */

import type {
	GradientState,
	GradientPreset,
} from 'src/infrastructure/cssUtils';

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

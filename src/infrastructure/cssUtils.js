/**
 * CSS Utilities for Box Shadow and Gradient Generators
 */

/**
 * Convert hex color to RGB object
 * @param {string} hex - Hex color (with or without #)
 * @returns {Object|null} RGB object {r, g, b} or null if invalid
 */
export const hexToRgb = (hex) => {
	if (!hex || typeof hex !== 'string') return null;

	const cleaned = hex.replace('#', '');

	// Handle 3-character shorthand
	if (cleaned.length === 3) {
		return {
			r: parseInt(cleaned[0] + cleaned[0], 16),
			g: parseInt(cleaned[1] + cleaned[1], 16),
			b: parseInt(cleaned[2] + cleaned[2], 16),
		};
	}

	// Handle 6-character hex
	if (cleaned.length === 6) {
		const bigint = parseInt(cleaned, 16);
		return {
			r: (bigint >> 16) & 255,
			g: (bigint >> 8) & 255,
			b: bigint & 255,
		};
	}

	return null;
};

/**
 * Convert RGB values to hex color string
 * @param {number} r - Red value (0-255)
 * @param {number} g - Green value (0-255)
 * @param {number} b - Blue value (0-255)
 * @returns {string} Hex color (without #)
 */
export const rgbToHex = (r, g, b) => {
	const toHex = (n) => {
		const hex = Math.round(Math.max(0, Math.min(255, n))).toString(16);
		return hex.length === 1 ? '0' + hex : hex;
	};
	return `${toHex(r)}${toHex(g)}${toHex(b)}`;
};

/**
 * Validate hex color format
 * @param {string} hex - Hex color to validate
 * @returns {boolean} True if valid hex color
 */
export const isValidHex = (hex) => {
	if (!hex || typeof hex !== 'string') return false;
	const cleaned = hex.replace('#', '');
	return /^[0-9a-f]{3}$|^[0-9a-f]{6}$/i.test(cleaned);
};

/**
 * Generate box-shadow CSS string from layers array
 * @param {Array} layers - Array of shadow layer objects
 * @returns {string} CSS box-shadow string
 */
export const generateBoxShadowCSS = (layers) => {
	if (!Array.isArray(layers) || layers.length === 0) {
		return 'none';
	}

	const shadowLayers = layers.map((layer) => {
		const { offsetX, offsetY, blur, spread, color, opacity, inset } = layer;

		// Convert hex color with opacity to rgba
		const rgb = hexToRgb(color);
		const alpha = opacity / 100;
		const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;

		const insetKeyword = inset ? 'inset ' : '';
		return `${insetKeyword}${offsetX}px ${offsetY}px ${blur}px ${spread}px ${rgba}`;
	});

	return shadowLayers.join(', ');
};

/**
 * Generate gradient CSS string from state object
 * @param {Object} state - Gradient state object
 * @returns {string} CSS gradient string
 */
export const generateGradientCSS = (state) => {
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
		const alpha = stop.opacity !== undefined ? stop.opacity / 100 : 1;
		const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
		return `${rgba} ${stop.position}%`;
	});

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
};

/**
 * Default gradient configuration
 */
export const DEFAULT_GRADIENT_CONFIG = {
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
export const GRADIENT_PRESETS = [
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

// Color conversion utilities
// All conversions use RGB as the intermediary format

// RGB object: { r: 0-255, g: 0-255, b: 0-255, a: 0-1 }

/**
 * Parse HEX to RGB
 * Supports: #RGB, #RGBA, #RRGGBB, #RRGGBBAA
 */
export const parseHex = (hex) => {
	const cleaned = hex.replace('#', '');

	// Handle shorthand (3 or 4 chars)
	if (cleaned.length === 3) {
		return {
			r: parseInt(cleaned[0] + cleaned[0], 16),
			g: parseInt(cleaned[1] + cleaned[1], 16),
			b: parseInt(cleaned[2] + cleaned[2], 16),
			a: 1,
		};
	}
	if (cleaned.length === 4) {
		return {
			r: parseInt(cleaned[0] + cleaned[0], 16),
			g: parseInt(cleaned[1] + cleaned[1], 16),
			b: parseInt(cleaned[2] + cleaned[2], 16),
			a: parseInt(cleaned[3] + cleaned[3], 16) / 255,
		};
	}

	// Handle full (6 or 8 chars)
	if (cleaned.length === 6) {
		const bigint = parseInt(cleaned, 16);
		return {
			r: (bigint >> 16) & 255,
			g: (bigint >> 8) & 255,
			b: bigint & 255,
			a: 1,
		};
	}
	if (cleaned.length === 8) {
		const bigint = parseInt(cleaned, 16);
		return {
			r: (bigint >> 24) & 255,
			g: (bigint >> 16) & 255,
			b: (bigint >> 8) & 255,
			a: (bigint & 255) / 255,
		};
	}

	return null;
};

/**
 * Format RGB to HEX
 */
export const formatHex = ({ r, g, b, a }) => {
	const toHex = (n) => n.toString(16).padStart(2, '0');
	let hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
	if (a < 1) {
		hex += toHex(Math.round(a * 255));
	}
	return hex;
};

/**
 * Parse rgb()/rgba() string
 */
export const parseRgb = (str) => {
	const match = str.match(
		/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+)\s*)?\)/
	);
	if (!match) return null;

	const r = parseInt(match[1]);
	const g = parseInt(match[2]);
	const b = parseInt(match[3]);
	const a = match[4] !== undefined ? parseFloat(match[4]) : 1;

	return { r, g, b, a };
};

/**
 * Format RGB to rgb()/rgba() string
 */
export const formatRgb = ({ r, g, b, a }) => {
	if (a < 1) {
		return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2).replace(/\.?0+$/, '')})`;
	}
	return `rgb(${r}, ${g}, ${b})`;
};

/**
 * Convert RGB to HSL
 */
export const rgbToHsl = ({ r, g, b, a }) => {
	const rNorm = r / 255;
	const gNorm = g / 255;
	const bNorm = b / 255;

	const max = Math.max(rNorm, gNorm, bNorm);
	const min = Math.min(rNorm, gNorm, bNorm);
	const delta = max - min;

	let h = 0;
	let s = 0;
	const l = (max + min) / 2;

	if (delta !== 0) {
		s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min);

		switch (max) {
			case rNorm:
				h = ((gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0)) / 6;
				break;
			case gNorm:
				h = ((bNorm - rNorm) / delta + 2) / 6;
				break;
			case bNorm:
				h = ((rNorm - gNorm) / delta + 4) / 6;
				break;
		}
	}

	return {
		h: Math.round(h * 360),
		s: Math.round(s * 100),
		l: Math.round(l * 100),
		a,
	};
};

/**
 * Parse hsl()/hsla() string
 */
export const parseHsl = (str) => {
	const match = str.match(
		/hsla?\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([\d.]+)\s*)?\)/
	);
	if (!match) return null;

	const h = parseInt(match[1]);
	const s = parseInt(match[2]);
	const l = parseInt(match[3]);
	const a = match[4] !== undefined ? parseFloat(match[4]) : 1;

	return hslToRgb({ h, s, l, a });
};

/**
 * Convert HSL to RGB
 */
export const hslToRgb = ({ h, s, l, a = 1 }) => {
	const hNorm = h / 360;
	const sNorm = s / 100;
	const lNorm = l / 100;

	let r, g, b;

	if (s === 0) {
		r = g = b = lNorm;
	} else {
		const hue2rgb = (p, q, t) => {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};

		const q =
			lNorm < 0.5 ? lNorm * (1 + sNorm) : lNorm + sNorm - lNorm * sNorm;
		const p = 2 * lNorm - q;

		r = hue2rgb(p, q, hNorm + 1 / 3);
		g = hue2rgb(p, q, hNorm);
		b = hue2rgb(p, q, hNorm - 1 / 3);
	}

	return {
		r: Math.round(r * 255),
		g: Math.round(g * 255),
		b: Math.round(b * 255),
		a,
	};
};

/**
 * Format RGB to hsl()/hsla() string
 */
export const formatHsl = (rgb) => {
	const hsl = rgbToHsl(rgb);
	if (hsl.a < 1) {
		return `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, ${hsl.a.toFixed(2).replace(/\.?0+$/, '')})`;
	}
	return `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
};

/**
 * Convert RGB to HSV
 */
export const rgbToHsv = ({ r, g, b, a }) => {
	const rNorm = r / 255;
	const gNorm = g / 255;
	const bNorm = b / 255;

	const max = Math.max(rNorm, gNorm, bNorm);
	const min = Math.min(rNorm, gNorm, bNorm);
	const delta = max - min;

	let h = 0;
	const s = max === 0 ? 0 : delta / max;
	const v = max;

	if (delta !== 0) {
		switch (max) {
			case rNorm:
				h = ((gNorm - bNorm) / delta + (gNorm < bNorm ? 6 : 0)) / 6;
				break;
			case gNorm:
				h = ((bNorm - rNorm) / delta + 2) / 6;
				break;
			case bNorm:
				h = ((rNorm - gNorm) / delta + 4) / 6;
				break;
		}
	}

	return {
		h: Math.round(h * 360),
		s: Math.round(s * 100),
		v: Math.round(v * 100),
		a,
	};
};

/**
 * Parse hsv() string
 */
export const parseHsv = (str) => {
	const match = str.match(/hsv\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/);
	if (!match) return null;

	const h = parseInt(match[1]);
	const s = parseInt(match[2]);
	const v = parseInt(match[3]);

	return hsvToRgb({ h, s, v, a: 1 });
};

/**
 * Convert HSV to RGB
 */
export const hsvToRgb = ({ h, s, v, a = 1 }) => {
	const hNorm = h / 360;
	const sNorm = s / 100;
	const vNorm = v / 100;

	const i = Math.floor(hNorm * 6);
	const f = hNorm * 6 - i;
	const p = vNorm * (1 - sNorm);
	const q = vNorm * (1 - f * sNorm);
	const t = vNorm * (1 - (1 - f) * sNorm);

	let r, g, b;

	switch (i % 6) {
		case 0:
			r = vNorm;
			g = t;
			b = p;
			break;
		case 1:
			r = q;
			g = vNorm;
			b = p;
			break;
		case 2:
			r = p;
			g = vNorm;
			b = t;
			break;
		case 3:
			r = p;
			g = q;
			b = vNorm;
			break;
		case 4:
			r = t;
			g = p;
			b = vNorm;
			break;
		case 5:
			r = vNorm;
			g = p;
			b = q;
			break;
	}

	return {
		r: Math.round(r * 255),
		g: Math.round(g * 255),
		b: Math.round(b * 255),
		a,
	};
};

/**
 * Format RGB to hsv() string
 */
export const formatHsv = (rgb) => {
	const hsv = rgbToHsv(rgb);
	return `hsv(${hsv.h}, ${hsv.s}%, ${hsv.v}%)`;
};

/**
 * Convert RGB to HWB
 */
export const rgbToHwb = ({ r, g, b, a }) => {
	const hsv = rgbToHsv({ r, g, b, a });
	const w = ((1 - hsv.s / 100) * hsv.v) / 100;
	const bVal = (1 - hsv.v) / 100;

	return {
		h: hsv.h,
		w: Math.round(w * 100),
		b: Math.round(bVal * 100),
		a,
	};
};

/**
 * Parse hwb() string
 */
export const parseHwb = (str) => {
	const match = str.match(
		/hwb\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(?:,\s*([\d.]+)\s*)?\)/
	);
	if (!match) return null;

	const h = parseInt(match[1]);
	const w = parseInt(match[2]);
	const bVal = parseInt(match[3]);
	const a = match[4] !== undefined ? parseFloat(match[4]) : 1;

	return hwbToRgb({ h, w, b: bVal, a });
};

/**
 * Convert HWB to RGB
 */
export const hwbToRgb = ({ h, w, b, a = 1 }) => {
	// Handle edge case where w + b >= 100
	if (w + b >= 100) {
		const gray = (100 * w) / (w + b);
		return {
			r: Math.round(gray * 2.55),
			g: Math.round(gray * 2.55),
			b: Math.round(gray * 2.55),
			a,
		};
	}

	const hsvResult = {
		h: h,
		s: 100 - (w / (100 - b)) * 100,
		v: 100 - b,
		a,
	};

	return hsvToRgb(hsvResult);
};

/**
 * Format RGB to hwb() string
 */
export const formatHwb = (rgb) => {
	const hwb = rgbToHwb(rgb);
	if (hwb.a < 1) {
		return `hwb(${hwb.h}, ${hwb.w}%, ${hwb.b}%, ${hwb.a.toFixed(2).replace(/\.?0+$/, '')})`;
	}
	return `hwb(${hwb.h}, ${hwb.w}%, ${hwb.b}%)`;
};

/**
 * Convert RGB to CMYK
 */
export const rgbToCmyk = ({ r, g, b }) => {
	const rNorm = r / 255;
	const gNorm = g / 255;
	const bNorm = b / 255;

	const k = 1 - Math.max(rNorm, gNorm, bNorm);
	const c = k === 1 ? 0 : (1 - rNorm - k) / (1 - k);
	const m = k === 1 ? 0 : (1 - gNorm - k) / (1 - k);
	const y = k === 1 ? 0 : (1 - bNorm - k) / (1 - k);

	return {
		c: Math.round(c * 100),
		m: Math.round(m * 100),
		y: Math.round(y * 100),
		k: Math.round(k * 100),
	};
};

/**
 * Parse cmyk() string
 */
export const parseCmyk = (str) => {
	const match = str.match(
		/cmyk\(\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/
	);
	if (!match) return null;

	const c = parseInt(match[1]) / 100;
	const m = parseInt(match[2]) / 100;
	const y = parseInt(match[3]) / 100;
	const k = parseInt(match[4]) / 100;

	return cmykToRgb({ c, m, y, k });
};

/**
 * Convert CMYK to RGB
 */
export const cmykToRgb = ({ c, m, y, k }) => {
	const r = 255 * (1 - c) * (1 - k);
	const g = 255 * (1 - m) * (1 - k);
	const b = 255 * (1 - y) * (1 - k);

	return {
		r: Math.round(r),
		g: Math.round(g),
		b: Math.round(b),
		a: 1,
	};
};

/**
 * Format RGB to cmyk() string
 */
export const formatCmyk = (rgb) => {
	const cmyk = rgbToCmyk(rgb);
	return `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`;
};

/**
 * Validation regex patterns
 */
export const validators = {
	hex: /^#?([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i,
	rgb: /^rgba?\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*(?:,\s*[\d.]+\s*)?\)$/,
	hsl: /^hsla?\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*(?:,\s*[\d.]+\s*)?\)$/,
	hsv: /^hsv\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*\)$/,
	hwb: /^hwb\(\s*\d+\s*,\s*\d+%\s*,\s*\d+%\s*(?:,\s*[\d.]+\s*)?\)$/,
	cmyk: /^cmyk\(\s*\d+%\s*,\s*\d+%\s*,\s*\d+%\s*,\s*\d+%\s*\)$/,
};

/**
 * Detect format and parse to RGB
 */
export const parseColor = (input) => {
	if (!input || typeof input !== 'string') return null;

	const trimmed = input.trim().toLowerCase();

	// Try each format
	for (const [format, validator] of Object.entries(validators)) {
		if (validator.test(trimmed)) {
			switch (format) {
				case 'hex':
					return parseHex(trimmed);
				case 'rgb':
					return parseRgb(trimmed);
				case 'hsl':
					return parseHsl(trimmed);
				case 'hsv':
					return parseHsv(trimmed);
				case 'hwb':
					return parseHwb(trimmed);
				case 'cmyk':
					return parseCmyk(trimmed);
			}
		}
	}

	return null;
};

/**
 * Convert RGB to all formats
 */
export const convertToAllFormats = (rgb) => {
	if (!rgb) return null;

	return {
		hex: formatHex(rgb),
		rgb: formatRgb(rgb),
		hsl: formatHsl(rgb),
		hsv: formatHsv(rgb),
		hwb: formatHwb(rgb),
		cmyk: formatCmyk(rgb),
	};
};

/**
 * Convert HEX color with opacity to RGBA string
 * @param {string} hex - HEX color value (with or without # prefix)
 * @param {number} opacity - Opacity value (0-1)
 * @returns {string} RGBA color string
 * @example
 * hexToRgba('#ff0000', 0.5) // returns 'rgba(255, 0, 0, 0.5)'
 * Used by Box Shadow Generator
 */
export const hexToRgba = (hex, opacity) => {
	const cleanHex = hex.replace('#', '');
	const r = parseInt(cleanHex.substring(0, 2), 16);
	const g = parseInt(cleanHex.substring(2, 4), 16);
	const b = parseInt(cleanHex.substring(4, 6), 16);
	return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

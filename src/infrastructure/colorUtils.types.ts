// Re-export color types from global.types
export type { RGB, RGBA, HSL, HSLA, HSV, CMYK, HexColor, ColorString } from '@/types/global.types';

import type { RGB, RGBA, HSL, HSLA, HSV, CMYK, HexColor, ColorString } from '@/types/global.types';

// Input color formats
export type ColorInput =
  | RGB
  | RGBA
  | HSL
  | HSLA
  | HSV
  | CMYK
  | HexColor
  | ColorString;

// Normalized color object (0-1 range)
export interface NormalizedRGB {
	r: number; // 0-1
	g: number; // 0-1
	b: number; // 0-1
	a: number; // 0-1
}

// Conversion function types
export type ToRGB = (color: ColorInput) => RGB;
export type ToRGBA = (color: ColorInput) => RGBA;
export type ToHSL = (color: ColorInput) => HSL;
export type ToHSLA = (color: ColorInput) => HSLA;
export type ToHSV = (color: ColorInput) => HSV;
export type ToCMYK = (color: ColorInput) => CMYK;
export type ToHex = (color: ColorInput) => HexColor;

// Validation
export type ColorValidator = (color: unknown) => color is ColorInput;

// HWB color type (not in global.types yet)
export interface HWB {
	h: number; // 0-360
	w: number; // 0-100
	b: number; // 0-100
	a?: number; // 0-1
}

// All color formats result
export interface AllColorFormats {
	hex: string;
	rgb: string;
	hsl: string;
	hsv: string;
	hwb: string;
	cmyk: string;
}

// Validator patterns
export interface ValidatorPatterns {
	hex: RegExp;
	rgb: RegExp;
	hsl: RegExp;
	hsv: RegExp;
	hwb: RegExp;
	cmyk: RegExp;
}

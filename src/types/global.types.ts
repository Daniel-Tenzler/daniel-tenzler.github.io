// Utility types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

// Color types for colorUtils
export type RGB = { r: number; g: number; b: number; a?: number };
export type RGBA = { r: number; g: number; b: number; a: number };
export type HSL = { h: number; s: number; l: number; a?: number };
export type HSLA = { h: number; s: number; l: number; a: number };
export type HSV = { h: number; s: number; v: number; a?: number };
export type CMYK = { c: number; m: number; y: number; k: number };

// Color string formats
export type HexColor = `#${string}`;
export type ColorString = string; // named colors, rgb(), hsl(), etc.

// Theme
export type Theme = 'dark' | 'light';
export type ColorScheme = Theme;

// Spacing (matching px system)
export type Spacing = 4 | 8 | 12 | 16 | 24 | 32 | 48 | 64;

// Breakpoints
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

// Common web types
export type URLString = string;
export type ISODate = string;

/**
 * CSS Utilities Types
 * Type definitions for Box Shadow and Gradient Generators
 */

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
export type CSSValueParser = (v: string) => CSSValue | null;

/**
 * Box shadow layer configuration (base type without ID)
 */
export interface BoxShadowLayerBase {
	offsetX: number;
	offsetY: number;
	blur: number;
	spread: number;
	color: string;
	opacity: number;
	inset: boolean;
}

/**
 * Box shadow layer configuration for CSS generation
 * Alias for BoxShadowLayerBase for backward compatibility
 */
export type BoxShadowLayer = BoxShadowLayerBase;

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

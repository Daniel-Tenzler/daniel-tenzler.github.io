import type {
	GradientState,
	LinearGradientConfig,
	RadialGradientConfig,
	ConicGradientConfig,
} from 'src/infrastructure/cssUtils';

/**
 * Ensures gradient state always has all config types.
 * Used internally to guarantee type safety when accessing
 * gradient-specific properties.
 */
export type CompleteGradientState = GradientState & {
	linear: LinearGradientConfig;
	radial: RadialGradientConfig;
	conic: ConicGradientConfig;
};

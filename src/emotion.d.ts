import '@emotion/react';
import type { ShouldForwardProp } from '@emotion/react';

// Allow Emotion to recognize transient props (props prefixed with $)
// These are props that should be passed to the styled component but not to the underlying DOM element
declare module '@emotion/react' {
	export interface Theme {
		colors: {
		primary: string;
		secondary: string;
		background: string;
		text: string;
		border: string;
	};
	spacing: {
		xs: string;
		sm: string;
		md: string;
		lg: string;
		xl: string;
	};
	breakpoints: {
		sm: string;
		md: string;
		lg: string;
		xl: string;
	};
}

	export interface EmotionCache {
		insert: (selector: string, serialized: string, sheet: string) => void;
	}

	export interface StyleSheet {
		create: (rules: string[]) => void;
	}

	export interface SerializedStyles {
		name: string;
		styles: string;
		map: string;
	}

	// Extend shouldForwardProp to handle transient props
	export const shouldForwardProp: ShouldForwardProp<'web'>;
}

// Extend Emotion's styled component types to support transient props
declare global {
	namespace JSX {
		interface IntrinsicAttributes {
			// Allow common transient props used in this project
			$active?: unknown;
			$visible?: unknown;
			$isDark?: unknown;
			$isFullscreen?: unknown;
			$backgroundColor?: unknown;
			$boxShadow?: unknown;
			$gradient?: unknown;
			$noTopBorderRadius?: unknown;
			$variant?: unknown;
			$flexDirection?: unknown;
			$flexWrap?: unknown;
			$justifyContent?: unknown;
			$alignItems?: unknown;
			$gap?: unknown;
			$padding?: unknown;
			$margin?: unknown;
			$width?: unknown;
			$height?: unknown;
			$maxWidth?: unknown;
			$minWidth?: unknown;
			$opacity?: unknown;
			$zIndex?: unknown;
			$position?: unknown;
			$top?: unknown;
			$left?: unknown;
			$right?: unknown;
			$bottom?: unknown;
			$transform?: unknown;
			$transition?: unknown;
			$pointerEvents?: unknown;
			$userSelect?: unknown;
			$cursor?: unknown;
			$display?: unknown;
			$overflow?: unknown;
		}
	}
}

export {};

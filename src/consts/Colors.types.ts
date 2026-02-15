// Utility function types
export type HexColor = `#${string}`;

export interface HexToRgbFunction {
	(hex: string): string;
}

export interface GetRgbaColorFunction {
	(hex: string, opacity?: number): string;
}

// Color constants interface
export interface ColorConstants {
	BLUE_2337FF: string;
	BLUE_000D8A: string;
	BLUE_00004A: string;
	BLACK_1A1A1A: string;
	BLACK_0F1219: string;
	WHITE_FFFFFF: string;
	WHITE_BFBFBF: string;
	WHITE_F1F1F1: string;
	GREEN_86EFAC: string;
	RED_FCA5A5: string;
	GRAY_60739F: string;
	GRAY_E5E9F0: string;
	GRAY_222939: string;
	GRAY_292929: string;
	GRAY_2D2D2D: string;
	GRAY_303030: string;
	GRAY_383838: string;
	GRAY_404040: string;
	GRAY_474747: string;
}

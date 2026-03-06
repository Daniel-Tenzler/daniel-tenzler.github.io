export type RGBMatrix = number[][][]; // [y][x][rgb]

export interface ProcessImageResult {
	matrix: RGBMatrix;
	matrixString: string;
	processed: RGBMatrix;
}

export type ProcessingMode = 'smooth' | 'spread';

import type { RefObject } from 'react';
import type { RGBMatrix, ProcessingMode } from './useImageProcessing.types';

export interface UsePixelizerReturn {
	// State
	selectedFile: File | null;
	imagePreview: string | null;
	rgbMatrix: string;
	error: string;
	isProcessing: boolean;
	smoothingFactor: number;
	smoothedMatrix: RGBMatrix | null;
	processingMode: ProcessingMode;

	// Refs
	fileInputRef: RefObject<HTMLInputElement | null>;
	canvasRef: RefObject<HTMLCanvasElement | null>;

	// Setters
	setSelectedFile: (f: File | null) => void;
	setImagePreview: (p: string | null) => void;
	setRgbMatrix: (m: string) => void;
	setIsProcessing: (p: boolean) => void;
	setSmoothingFactor: (f: number) => void;
	setSmoothedMatrix: (m: RGBMatrix | null) => void;
	setProcessingMode: (m: ProcessingMode) => void;

	// Actions
	clearAll: () => void;
	setErrorState: (e: string) => void;
	clearError: () => void;
}

import type { RefObject } from 'react';

export interface UsePixelationReturn {
	// State
	pixelSize: number;
	originalImage: string | null;
	pixelatedCanvas: HTMLCanvasElement | null;
	isProcessing: boolean;
	error: string;

	// Ref
	fileInputRef: RefObject<HTMLInputElement | null>;

	// Setters
	setPixelSize: (s: number) => void;
	setOriginalImage: (i: string | null) => void;
	setPixelatedCanvas: (c: HTMLCanvasElement | null) => void;
	setIsProcessing: (p: boolean) => void;
	setError: (e: string) => void;

	// Actions
	clearAll: () => void;
}

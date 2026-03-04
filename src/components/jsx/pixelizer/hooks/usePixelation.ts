import { useState, useRef } from 'react';
import type { RefObject } from 'react';

interface UsePixelationReturn {
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

const usePixelation = (): UsePixelationReturn => {
	const [pixelSize, setPixelSize] = useState<number>(8);
	const [originalImage, setOriginalImage] = useState<string | null>(null);
	const [pixelatedCanvas, setPixelatedCanvas] =
		useState<HTMLCanvasElement | null>(null);
	const [isProcessing, setIsProcessing] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const fileInputRef = useRef<HTMLInputElement | null>(null);

	const clearAll = () => {
		setPixelSize(8);
		setOriginalImage(null);
		setPixelatedCanvas(null);
		setIsProcessing(false);
		setError('');
		if (fileInputRef.current) {
			fileInputRef.current.value = '';
		}
	};

	return {
		// State
		pixelSize,
		originalImage,
		pixelatedCanvas,
		isProcessing,
		error,

		// Ref
		fileInputRef,

		// Setters
		setPixelSize,
		setOriginalImage,
		setPixelatedCanvas,
		setIsProcessing,
		setError,

		// Actions
		clearAll,
	};
};

export default usePixelation;

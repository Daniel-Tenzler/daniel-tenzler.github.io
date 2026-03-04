import { useState, useRef } from 'react';
import type { RefObject } from 'react';

interface UsePixelizerReturn {
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

type RGBMatrix = number[][][]; // [y][x][rgb]
type ProcessingMode = 'smooth' | 'spread';

const usePixelizer = (): UsePixelizerReturn => {
	const [selectedFile, setSelectedFile] = useState<File | null>(null);
	const [imagePreview, setImagePreview] = useState<string | null>(null);
	const [rgbMatrix, setRgbMatrix] = useState<string>('');
	const [error, setError] = useState<string>('');
	const [isProcessing, setIsProcessing] = useState<boolean>(false);
	const [smoothingFactor, setSmoothingFactor] = useState<number>(2);
	const [smoothedMatrix, setSmoothedMatrix] = useState<RGBMatrix | null>(
		null
	);
	const [processingMode, setProcessingMode] =
		useState<ProcessingMode>('smooth');

	const fileInputRef = useRef<HTMLInputElement | null>(null);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	const clearAll = () => {
		setSelectedFile(null);
		setImagePreview(null);
		setRgbMatrix('');
		setSmoothedMatrix(null);
		setError('');
		if (fileInputRef.current) {
			fileInputRef.current.value = '';
		}
		if (canvasRef.current) {
			const ctx = canvasRef.current.getContext('2d');
			if (ctx) {
				ctx.clearRect(
					0,
					0,
					canvasRef.current.width,
					canvasRef.current.height
				);
			}
		}
	};

	const setErrorState = (errorMessage: string) => {
		setError(errorMessage);
	};

	const clearError = () => {
		setError('');
	};

	return {
		// State
		selectedFile,
		imagePreview,
		rgbMatrix,
		error,
		isProcessing,
		smoothingFactor,
		smoothedMatrix,
		processingMode,

		// Refs
		fileInputRef,
		canvasRef,

		// Setters
		setSelectedFile,
		setImagePreview,
		setRgbMatrix,
		setIsProcessing,
		setSmoothingFactor,
		setSmoothedMatrix,
		setProcessingMode,

		// Actions
		clearAll,
		setErrorState,
		clearError,
	};
};

export default usePixelizer;

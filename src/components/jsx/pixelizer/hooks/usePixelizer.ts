import { useState, useRef } from 'react';
import type { RGBMatrix, ProcessingMode } from './useImageProcessing.types';
import type { UsePixelizerReturn } from './usePixelizer.types';

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

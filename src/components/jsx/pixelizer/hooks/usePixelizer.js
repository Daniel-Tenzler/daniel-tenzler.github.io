import { useState, useRef } from 'react';

const usePixelizer = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [imagePreview, setImagePreview] = useState(null);
	const [rgbMatrix, setRgbMatrix] = useState('');
	const [error, setError] = useState('');
	const [isProcessing, setIsProcessing] = useState(false);
	const [smoothingFactor, setSmoothingFactor] = useState(2);
	const [smoothedMatrix, setSmoothedMatrix] = useState(null);
	const [processingMode, setProcessingMode] = useState('smooth');

	const fileInputRef = useRef(null);
	const canvasRef = useRef(null);

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
			ctx.clearRect(
				0,
				0,
				canvasRef.current.width,
				canvasRef.current.height
			);
		}
	};

	const setErrorState = (errorMessage) => {
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

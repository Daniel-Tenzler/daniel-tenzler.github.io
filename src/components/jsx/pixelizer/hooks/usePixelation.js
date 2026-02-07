import { useState, useRef } from 'react';

const usePixelation = () => {
	const [pixelSize, setPixelSize] = useState(8);
	const [originalImage, setOriginalImage] = useState(null);
	const [pixelatedCanvas, setPixelatedCanvas] = useState(null);
	const [isProcessing, setIsProcessing] = useState(false);
	const [error, setError] = useState('');
	const fileInputRef = useRef(null);

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
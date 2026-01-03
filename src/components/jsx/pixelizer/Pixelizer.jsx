import React, { useEffect } from 'react';
import usePixelizer from 'src/components/jsx/pixelizer/hooks/usePixelizer';
import useImageProcessing from 'src/components/jsx/pixelizer/hooks/useImageProcessing';
import {
	Container,
	FileInput,
	FileInputLabel,
	ButtonContainer,
	ProcessButton,
	ImagePreview,
	PreviewContainer,
	ErrorMessage,
	CanvasContainer,
	ImageComparisonContainer,
	ReductionControls,
	ReductionSlider,
	ReductionLabel,
	ProcessingModeContainer,
	ProcessingModeLabel,
	ProcessingModeSelect,
} from './Pixelizer.styles';

const Pixelizer = () => {
	const {
		selectedFile,
		imagePreview,
		rgbMatrix,
		error,
		isProcessing,
		smoothingFactor,
		smoothedMatrix,
		processingMode,
		fileInputRef,
		canvasRef,
		setSelectedFile,
		setImagePreview,
		setRgbMatrix,
		setIsProcessing,
		setSmoothingFactor,
		setSmoothedMatrix,
		setProcessingMode,
		clearAll,
		setErrorState,
		clearError,
	} = usePixelizer();

	const { processImage, renderSmoothedImage, smoothMatrix, spreadMatrix } =
		useImageProcessing();

	// Effect to render canvas when smoothedMatrix changes
	useEffect(() => {
		if (smoothedMatrix && canvasRef.current) {
			renderSmoothedImage(smoothedMatrix, canvasRef);
		}
	}, [smoothedMatrix, renderSmoothedImage, canvasRef]);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (!file) return;

		// Validate file type
		if (!file.type.startsWith('image/')) {
			setErrorState('Please select a valid image file');
			return;
		}

		clearError();
		setSelectedFile(file);
		setRgbMatrix('');
		setSmoothedMatrix(null);

		// Create preview
		// eslint-disable-next-line no-undef
		const reader = new FileReader();
		reader.onload = (e) => {
			setImagePreview(e.target.result);
		};
		reader.readAsDataURL(file);
	};

	const handleProcessImage = async () => {
		if (!selectedFile) {
			setErrorState('Please select an image file first');
			return;
		}

		setIsProcessing(true);
		clearError();

		try {
			const { matrixString, processed } = await processImage(
				imagePreview,
				smoothingFactor,
				processingMode
			);
			setRgbMatrix(matrixString);
			setSmoothedMatrix(processed);
		} catch (err) {
			console.error('Error processing image:', err);
			setErrorState('Error processing image. Please try again.');
		} finally {
			setIsProcessing(false);
		}
	};

	const handleSmoothingChange = (e) => {
		const newFactor = parseInt(e.target.value);
		setSmoothingFactor(newFactor);

		// Re-process with new smoothing factor if we have a matrix
		if (rgbMatrix) {
			try {
				const matrix = JSON.parse(rgbMatrix);
				const processed =
					processingMode === 'spread'
						? spreadMatrix(matrix, newFactor)
						: smoothMatrix(matrix, newFactor);
				setSmoothedMatrix(processed);
			} catch (err) {
				console.error('Error updating smoothing:', err);
			}
		}
	};

	const handleProcessingModeChange = (e) => {
		const newMode = e.target.value;
		setProcessingMode(newMode);

		// Re-process with new mode if we have a matrix
		if (rgbMatrix) {
			try {
				const matrix = JSON.parse(rgbMatrix);
				const processed =
					newMode === 'spread'
						? spreadMatrix(matrix, smoothingFactor)
						: smoothMatrix(matrix, smoothingFactor);
				setSmoothedMatrix(processed);
			} catch (err) {
				console.error('Error updating processing mode:', err);
			}
		}
	};

	return (
		<Container>
			<FileInputLabel htmlFor="image-upload">
				Choose Image File
			</FileInputLabel>
			<FileInput
				id="image-upload"
				type="file"
				accept="image/*"
				onChange={handleFileChange}
				ref={fileInputRef}
				aria-label="Upload image file"
			/>

			<ProcessingModeContainer>
				<ProcessingModeLabel htmlFor="processing-mode">
					Processing Mode
				</ProcessingModeLabel>
				<ProcessingModeSelect
					id="processing-mode"
					value={processingMode}
					onChange={handleProcessingModeChange}
					aria-label="Select processing mode"
				>
					<option value="smooth">Smooth Matrix</option>
					<option value="spread">Spread Matrix</option>
				</ProcessingModeSelect>
			</ProcessingModeContainer>

			{imagePreview && (
				<ImageComparisonContainer>
					<PreviewContainer>
						<h3>Original Image</h3>
						<ImagePreview
							src={imagePreview}
							alt="Image preview"
							aria-label="Image preview"
							loading="lazy"
						/>
					</PreviewContainer>
					{smoothedMatrix && (
						<PreviewContainer>
							<h3>
								{processingMode === 'spread'
									? 'Spread'
									: 'Smoothed'}{' '}
								Image (Radius: {smoothingFactor})
							</h3>
							<CanvasContainer>
								<canvas
									ref={canvasRef}
									aria-label={`${processingMode === 'spread' ? 'Spread' : 'Smoothed'} image canvas`}
								/>
							</CanvasContainer>
						</PreviewContainer>
					)}
				</ImageComparisonContainer>
			)}

			{error && (
				<ErrorMessage role="alert" aria-live="polite">
					{error}
				</ErrorMessage>
			)}

			{smoothedMatrix && (
				<ReductionControls>
					<ReductionLabel htmlFor="smoothing-slider">
						{processingMode === 'spread' ? 'Spread' : 'Smoothing'}{' '}
						Radius: {smoothingFactor}
					</ReductionLabel>
					<ReductionSlider
						id="smoothing-slider"
						type="range"
						min="1"
						max="10"
						value={smoothingFactor}
						onChange={handleSmoothingChange}
						aria-label={`Adjust ${processingMode === 'spread' ? 'spread' : 'smoothing'} radius`}
					/>
				</ReductionControls>
			)}

			<ButtonContainer>
				<ProcessButton
					onClick={handleProcessImage}
					disabled={!selectedFile || isProcessing}
					aria-label="Process image to RGB matrix"
				>
					{isProcessing ? 'Processing...' : 'Process Image'}
				</ProcessButton>
				<ProcessButton
					onClick={clearAll}
					disabled={!selectedFile && !rgbMatrix}
					aria-label="Clear all data"
				>
					Clear
				</ProcessButton>
			</ButtonContainer>
		</Container>
	);
};

export default Pixelizer;

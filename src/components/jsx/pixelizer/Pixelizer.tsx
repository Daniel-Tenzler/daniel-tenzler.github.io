import React, { useState, useRef, useEffect } from 'react';
import usePixelation from '@/components/jsx/pixelizer/hooks/usePixelation';
import usePixelationEffect from '@/components/jsx/pixelizer/hooks/usePixelationEffect';
import { validateImageFile, validateImageDimensions } from '@/infrastructure/validation';
import {
	Container,
	Header,
	ControlsSection,
	FileUploadZone,
	PixelSizeSlider,
	ActionButtons,
	ProcessButton,
	ComparisonSection,
	ImageCard,
	ErrorMessage,
	ProcessingMessage,
	FileInput,
	UploadHint,
} from './Pixelizer.styles';

const Pixelizer = () => {
	const {
		pixelSize,
		originalImage,
		pixelatedCanvas,
		isProcessing,
		error,
		fileInputRef,
		setPixelSize,
		setOriginalImage,
		setPixelatedCanvas,
		setIsProcessing,
		setError,
		clearAll,
	} = usePixelation();

	const { pixelateImage } = usePixelationEffect();
	const originalImageRef = useRef<HTMLImageElement>(null);
	const [isDragOver, setIsDragOver] = useState(false);

	// Process the image when original image or pixel size changes
	useEffect(() => {
		if (originalImageRef.current && pixelSize) {
			setIsProcessing(true);
			try {
				const canvas = pixelateImage(
					originalImageRef.current,
					pixelSize
				);
				setPixelatedCanvas(canvas);
			} catch (err) {
				console.error('Error pixelating image:', err);
				setError('Error processing image. Please try again.');
			} finally {
				setIsProcessing(false);
			}
		}
	}, [
		originalImage,
		pixelSize,
		pixelateImage,
		setIsProcessing,
		setPixelatedCanvas,
		setError,
	]);

	const handleFileSelect = (file: File) => {
		if (!validateImageFile(file, setError)) {
			return;
		}

		setError('');
		setIsProcessing(true);

		const reader = new FileReader();
		reader.onload = (e) => {
			const img = new Image();
			img.onload = () => {
				validateImageDimensions(img, setError);
				setOriginalImage((e.target as FileReader).result as string);
				setIsProcessing(false);
			};
			img.onerror = () => {
				setError('Failed to load image. Please try a different file.');
				setIsProcessing(false);
			};
			img.src = (e.target as FileReader).result as string;
		};
		reader.readAsDataURL(file);
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			handleFileSelect(file);
		}
	};

	const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragOver(true);
	};

	const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragOver(false);
	};

	const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDragOver(false);

		const file = e.dataTransfer.files[0];
		if (file) {
			handleFileSelect(file);
		}
	};

	const handleDownload = () => {
		if (!pixelatedCanvas) {
			return;
		}

		// Convert canvas to blob and download
		pixelatedCanvas.toBlob((blob: Blob | null) => {
			if (!blob) {
				setError('Failed to download image. Please try again.');
				return;
			}

			// Create download link
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;

			// Extract original filename and add suffix
			const originalName = originalImage
				? originalImage.split('/').pop()?.split('.')[0]
				: 'image';
			link.download = `${originalName}-pixelated.png`;

			// Trigger download and cleanup
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			URL.revokeObjectURL(url);
		}, 'image/png');
	};

	const handleClear = () => {
		clearAll();
		setIsDragOver(false);
	};

	const handlePixelSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPixelSize(parseInt(e.target.value, 10));
	};

	const getFileDisplayName = (): string => {
		if (!originalImage) return '';
		const parts = originalImage.split('/');
		return parts[parts.length - 1] || '';
	};

	return (
		<Container>
			<Header>
				<h1>Pixelizer</h1>
				<p>
					Transform any image into pixel art. Upload an image, adjust
					the pixel size, and download your retro creation.
				</p>
			</Header>

			<ControlsSection>
				<FileUploadZone
					htmlFor="file-upload"
					className={`${isDragOver ? 'drag-over' : ''} ${originalImage ? 'has-file' : ''}`}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
					tabIndex={0}
					role="button"
					aria-label="Upload image file or drag and drop"
					onKeyDown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							fileInputRef.current?.click();
						}
					}}
				>
					{!originalImage ? (
						<>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
								/>
							</svg>
							<div className="upload-text">
								<strong>Click to upload</strong> or drag and
								drop
								<br />
								<UploadHint>
									JPG, PNG, GIF, WebP (max 10MB)
								</UploadHint>
							</div>
						</>
					) : (
						<div className="upload-text">
							<strong>Current file:</strong>{' '}
							{getFileDisplayName()}
							<br />
							<UploadHint>
								Click or drag to replace
							</UploadHint>
						</div>
					)}
					<FileInput
						id="file-upload"
						type="file"
						accept="image/*"
						onChange={handleFileChange}
						ref={fileInputRef}
						aria-label="Upload image file"
					/>
				</FileUploadZone>

				<PixelSizeSlider>
					<label className="slider-label" htmlFor="pixel-size">
						Pixel Size: {pixelSize}
					</label>
					<div className="slider-container">
						<input
							id="pixel-size"
							className="slider"
							type="range"
							min="1"
							max="32"
							value={pixelSize}
							onChange={handlePixelSizeChange}
							disabled={!originalImage || isProcessing}
							aria-label="Adjust pixel size from 1 to 32"
						/>
						<span className="size-value">{pixelSize}px</span>
					</div>
				</PixelSizeSlider>

				<ActionButtons>
					<ProcessButton
						onClick={() => fileInputRef.current?.click()}
						disabled={isProcessing}
						aria-label="Select image file"
					>
						Select Image
					</ProcessButton>
					<ProcessButton
						onClick={handleDownload}
						disabled={!pixelatedCanvas || isProcessing}
						aria-label="Download pixelated image"
					>
						Download
					</ProcessButton>
					<ProcessButton
						onClick={handleClear}
						disabled={!originalImage && !pixelatedCanvas}
						aria-label="Clear all and reset"
					>
						Clear
					</ProcessButton>
				</ActionButtons>
			</ControlsSection>

			{error && (
				<ErrorMessage role="alert" aria-live="polite">
					{error}
				</ErrorMessage>
			)}

			{originalImage && (
				<ComparisonSection>
					<ImageCard>
						<div className="image-wrapper">
							<img
								ref={originalImageRef}
								src={originalImage}
								alt="Original uploaded file"
								loading="lazy"
							/>
						</div>
						<div className="image-label">
							Original
							{originalImageRef.current && (
								<span>
									{' '}
									({originalImageRef.current.width}×
									{originalImageRef.current.height})
								</span>
							)}
						</div>
					</ImageCard>

					{pixelatedCanvas && (
						<ImageCard>
							<div className="image-wrapper">
								{/* Convert canvas to display */}
								<img
									src={pixelatedCanvas.toDataURL('image/png')}
									alt="Pixelated version"
									loading="lazy"
								/>
							</div>
							<div className="image-label">
								Pixelated ({pixelSize}px blocks)
								<span>
									{' '}
									({pixelatedCanvas.width}×
									{pixelatedCanvas.height})
								</span>
							</div>
						</ImageCard>
					)}
				</ComparisonSection>
			)}

			{isProcessing && (
				<ProcessingMessage
					role="status"
					aria-live="polite"
				>
					Processing image...
				</ProcessingMessage>
			)}
		</Container>
	);
};

export default Pixelizer;

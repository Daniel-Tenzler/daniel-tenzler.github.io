const usePixelationEffect = () => {
	const pixelateImage = (
		imageElement: HTMLImageElement,
		pixelSize: number
	): HTMLCanvasElement => {
		if (!imageElement) {
			throw new Error('Image element is required');
		}

		if (!pixelSize || pixelSize < 1 || pixelSize > 32) {
			throw new Error('Pixel size must be between 1 and 32');
		}

		// Create offscreen canvas for downsample
		const offscreenCanvas = document.createElement('canvas');
		const offscreenCtx = offscreenCanvas.getContext('2d');

		if (!offscreenCtx) {
			throw new Error('Could not get canvas context');
		}

		// Calculate reduced dimensions
		const reducedWidth = Math.ceil(imageElement.width / pixelSize);
		const reducedHeight = Math.ceil(imageElement.height / pixelSize);

		// Set reduced canvas size
		offscreenCanvas.width = reducedWidth;
		offscreenCanvas.height = reducedHeight;

		// Draw image to the tiny canvas (downsample)
		offscreenCtx.drawImage(imageElement, 0, 0, reducedWidth, reducedHeight);

		// Create result canvas at original dimensions
		const resultCanvas = document.createElement('canvas');
		const resultCtx = resultCanvas.getContext('2d');

		if (!resultCtx) {
			throw new Error('Could not get canvas context');
		}

		// Set result canvas to original image dimensions
		resultCanvas.width = imageElement.width;
		resultCanvas.height = imageElement.height;

		// Disable image smoothing to get sharp pixel blocks
		resultCtx.imageSmoothingEnabled = false;

		// Draw the tiny canvas back to full size (upsample with nearest-neighbor)
		resultCtx.drawImage(
			offscreenCanvas,
			0,
			0,
			reducedWidth,
			reducedHeight,
			0,
			0,
			imageElement.width,
			imageElement.height
		);

		return resultCanvas;
	};

	return { pixelateImage };
};

export default usePixelationEffect;

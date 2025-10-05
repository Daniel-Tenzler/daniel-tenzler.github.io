const useImageProcessing = () => {
	const imageToRGBMatrix = (imageElement) => {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');

		// Match canvas size to image
		canvas.width = imageElement.width;
		canvas.height = imageElement.height;

		// Draw image on the canvas
		ctx.drawImage(imageElement, 0, 0);

		// Extract pixel data
		const { data, width, height } = ctx.getImageData(
			0,
			0,
			canvas.width,
			canvas.height
		);

		// Convert to matrix
		const matrix = [];
		for (let y = 0; y < height; y++) {
			const row = [];
			for (let x = 0; x < width; x++) {
				const i = (y * width + x) * 4;
				const r = data[i];
				const g = data[i + 1];
				const b = data[i + 2];
				row.push([r, g, b]);
			}
			matrix.push(row);
		}

		return matrix;
	};

	const smoothMatrix = (matrix, factor) => {
		const smoothed = [];
		const height = matrix.length;
		const width = matrix[0].length;

		for (let y = 0; y < height; y++) {
			const row = [];
			for (let x = 0; x < width; x++) {
				// Calculate the range of pixels to average
				const startX = Math.max(0, x - factor);
				const endX = Math.min(width - 1, x + factor);
				const startY = Math.max(0, y - factor);
				const endY = Math.min(height - 1, y + factor);

				let totalR = 0,
					totalG = 0,
					totalB = 0;
				let count = 0;

				// Average all pixels in the neighborhood
				for (let ny = startY; ny <= endY; ny++) {
					for (let nx = startX; nx <= endX; nx++) {
						const [r, g, b] = matrix[ny][nx];
						totalR += r;
						totalG += g;
						totalB += b;
						count++;
					}
				}

				// Set the averaged color
				row.push([
					Math.round(totalR / count),
					Math.round(totalG / count),
					Math.round(totalB / count),
				]);
			}
			smoothed.push(row);
		}

		return smoothed;
	};

	const spreadMatrix = (matrix, factor = 1) => {
		const height = matrix.length;
		const width = matrix[0].length;

		// Create a blank matrix (filled with black or transparent pixels)
		const output = Array.from({ length: height }, () =>
			Array.from({ length: width }, () => [0, 0, 0])
		);

		const filled = Array.from({ length: height }, () =>
			Array.from({ length: width }, () => false)
		);

		// Spread each pixel color outward
		for (let y = 0; y < height; y += factor) {
			for (let x = 0; x < width; x += factor) {
				const [r, g, b] = matrix[y][x];

				const startX = Math.max(0, x - factor);
				const endX = Math.min(width - 1, x + factor);
				const startY = Math.max(0, y - factor);
				const endY = Math.min(height - 1, y + factor);

				for (let ny = startY; ny <= endY; ny++) {
					for (let nx = startX; nx <= endX; nx++) {
						// Only set pixel if it hasn’t already been filled
						if (!filled[ny][nx]) {
							output[ny][nx] = [r, g, b];
							filled[ny][nx] = true;
						}
					}
				}
			}
		}

		return output;
	};

	const renderSmoothedImage = (matrix, canvasRef) => {
		if (!matrix || !canvasRef.current) return;

		const ctx = canvasRef.current.getContext('2d');
		const height = matrix.length;
		const width = matrix[0].length;

		// Set canvas size
		canvasRef.current.width = width;
		canvasRef.current.height = height;

		const imageData = ctx.createImageData(width, height);
		const data = imageData.data;

		let i = 0;
		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				const [r, g, b] = matrix[y][x];
				data[i++] = r;
				data[i++] = g;
				data[i++] = b;
				data[i++] = 255; // alpha channel
			}
		}

		ctx.putImageData(imageData, 0, 0);
	};

	const processImage = async (
		imagePreview,
		smoothingFactor,
		processingMode = 'smooth'
	) => {
		return new Promise((resolve, reject) => {
			// eslint-disable-next-line no-undef
			const img = new Image();
			img.onload = () => {
				try {
					const matrix = imageToRGBMatrix(img);
					const processed =
						processingMode === 'spread'
							? spreadMatrix(matrix, smoothingFactor)
							: smoothMatrix(matrix, smoothingFactor);
					const matrixString = JSON.stringify(matrix, null, 2);

					resolve({
						matrix,
						matrixString,
						processed,
					});
				} catch (err) {
					reject(err);
				}
			};
			img.onerror = () => {
				reject(new Error('Error loading image'));
			};
			img.src = imagePreview;
		});
	};

	return {
		imageToRGBMatrix,
		smoothMatrix,
		spreadMatrix,
		renderSmoothedImage,
		processImage,
	};
};

export default useImageProcessing;

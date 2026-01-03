import { useEffect, useRef, useCallback } from 'react';
import { COLORS, getRgbaColor } from 'src/consts/Colors';
import { Canvas } from './GridBackground.styles';

export default function GridBackground() {
	const canvasRef = useRef(null);
	const mousePosRef = useRef({ x: -9999, y: -9999 });
	const animationIdRef = useRef(null);
	const lastTimeRef = useRef(0);
	const isVisibleRef = useRef(true);

	// Throttled animation frame for better performance
	const draw = useCallback((currentTime) => {
		if (!isVisibleRef.current) {
			animationIdRef.current = requestAnimationFrame(draw);
			return;
		}

		// Limit to ~30fps for better performance
		if (currentTime - lastTimeRef.current < 33) {
			animationIdRef.current = requestAnimationFrame(draw);
			return;
		}

		lastTimeRef.current = currentTime;

		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		const { width, height } = canvas;

		ctx.clearRect(0, 0, width, height);

		const spacing = 40;
		const maxLineWidth = 2.0;
		const minLineWidth = 0.5;
		const maxEffectDist = 200;
		const gridColor = getRgbaColor(COLORS.WHITE_BFBFBF, 0.1);

		// Optimize grid drawing with fewer calculations
		const mouseDistance = {
			x: mousePosRef.current.x,
			y: mousePosRef.current.y,
		};

		// Vertical lines
		for (let x = 0; x <= width; x += spacing) {
			const dist = Math.abs(mouseDistance.x - x);
			if (dist < maxEffectDist) {
				const weight = Math.max(0, 1 - dist / maxEffectDist);
				const lineWidth =
					minLineWidth + weight * (maxLineWidth - minLineWidth);

				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, height);
				ctx.lineWidth = lineWidth;
				ctx.strokeStyle = gridColor;
				ctx.stroke();
			} else {
				// Draw minimal lines for distant areas
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, height);
				ctx.lineWidth = minLineWidth;
				ctx.strokeStyle = gridColor;
				ctx.stroke();
			}
		}

		// Horizontal lines
		for (let y = 0; y <= height; y += spacing) {
			const dist = Math.abs(mouseDistance.y - y);
			if (dist < maxEffectDist) {
				const weight = Math.max(0, 1 - dist / maxEffectDist);
				const lineWidth =
					minLineWidth + weight * (maxLineWidth - minLineWidth);

				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(width, y);
				ctx.lineWidth = lineWidth;
				ctx.strokeStyle = gridColor;
				ctx.stroke();
			} else {
				// Draw minimal lines for distant areas
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(width, y);
				ctx.lineWidth = minLineWidth;
				ctx.strokeStyle = gridColor;
				ctx.stroke();
			}
		}

		animationIdRef.current = requestAnimationFrame(draw);
	}, []);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		resizeCanvas();

		// Use requestIdleCallback for non-critical initialization
		if ('requestIdleCallback' in window) {
			requestIdleCallback(() => {
				animationIdRef.current = requestAnimationFrame(draw);
			});
		} else {
			animationIdRef.current = requestAnimationFrame(draw);
		}

		// Throttled resize handler
		let resizeTimeout;
		const handleResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				resizeCanvas();
			}, 150);
		};

		// Optimized mouse move handler with throttling
		let ticking = false;
		const handleMouseMove = (e) => {
			if (!ticking) {
				ticking = true;
				if ('requestIdleCallback' in window) {
					requestIdleCallback(() => {
						mousePosRef.current = { x: e.clientX, y: e.clientY };
						ticking = false;
					});
				} else {
					setTimeout(() => {
						mousePosRef.current = { x: e.clientX, y: e.clientY };
						ticking = false;
					}, 16);
				}
			}
		};

		// Intersection Observer for visibility optimization
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					isVisibleRef.current = entry.isIntersecting;
				});
			},
			{ threshold: 0.1 }
		);

		observer.observe(canvas);

		window.addEventListener('resize', handleResize);
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', handleMouseMove);
			observer.disconnect();
			if (animationIdRef.current) {
				cancelAnimationFrame(animationIdRef.current);
			}
			if (resizeTimeout) {
				clearTimeout(resizeTimeout);
			}
		};
	}, [draw]);

	return <Canvas ref={canvasRef} />;
}

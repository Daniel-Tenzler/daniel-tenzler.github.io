import { useEffect, useRef, useCallback } from 'react';
import { COLORS, getRgbaColor } from '@/consts/Colors';
import {
	CURSOR_EASE,
	calculateEasedPoint,
	calculateWarpedPoint,
	type Point,
} from './GridBackground.utils';
import { Canvas } from './GridBackground.styles';

const GRID_SPACING = 40;
const SEGMENT_SIZE = 16;
const MIN_LINE_WIDTH = 0.5;
const MAX_LINE_WIDTH = 1.35;
const MAX_EFFECT_DIST = 200;
const WARP_OPTIONS = {
	maxWarp: 6,
	warpRadius: 220,
};

export default function GridBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const targetMousePosRef = useRef<Point>({ x: -9999, y: -9999 });
	const easedMousePosRef = useRef<Point>({ x: -9999, y: -9999 });
	const hasMousePositionRef = useRef(false);
	const animationIdRef = useRef<number | null>(null);
	const lastTimeRef = useRef(0);
	const isVisibleRef = useRef(true);

	const stopAnimation = useCallback(() => {
		if (animationIdRef.current !== null) {
			cancelAnimationFrame(animationIdRef.current);
			animationIdRef.current = null;
		}
	}, []);

	const draw = useCallback((currentTime: number) => {
		animationIdRef.current = null;

		if (!isVisibleRef.current) return;

		// Limit to ~30fps for better performance
		if (currentTime - lastTimeRef.current < 33) {
			animationIdRef.current = requestAnimationFrame(draw);
			return;
		}

		lastTimeRef.current = currentTime;

		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		const { width, height } = canvas;

		ctx.clearRect(0, 0, width, height);

		const gridColor = getRgbaColor(COLORS.WHITE_BFBFBF, 0.1);
		easedMousePosRef.current = hasMousePositionRef.current
			? calculateEasedPoint(
					easedMousePosRef.current,
					targetMousePosRef.current,
					CURSOR_EASE
				)
			: easedMousePosRef.current;
		const mousePosition = easedMousePosRef.current;

		const calculateLineWidth = (distance: number) => {
			const weight = Math.max(0, 1 - distance / MAX_EFFECT_DIST);
			return MIN_LINE_WIDTH + weight * (MAX_LINE_WIDTH - MIN_LINE_WIDTH);
		};

		ctx.strokeStyle = gridColor;
		ctx.lineCap = 'round';
		ctx.lineJoin = 'round';

		// Vertical lines
		for (let x = 0; x <= width; x += GRID_SPACING) {
			ctx.beginPath();
			ctx.lineWidth = calculateLineWidth(Math.abs(mousePosition.x - x));

			for (let y = 0; y <= height; y += SEGMENT_SIZE) {
				const point = calculateWarpedPoint(
					{ x, y },
					mousePosition,
					WARP_OPTIONS
				);

				if (y === 0) {
					ctx.moveTo(point.x, point.y);
				} else {
					ctx.lineTo(point.x, point.y);
				}
			}

			if (height % SEGMENT_SIZE !== 0) {
				const point = calculateWarpedPoint(
					{ x, y: height },
					mousePosition,
					WARP_OPTIONS
				);
				ctx.lineTo(point.x, point.y);
			}

			ctx.stroke();
		}

		// Horizontal lines
		for (let y = 0; y <= height; y += GRID_SPACING) {
			ctx.beginPath();
			ctx.lineWidth = calculateLineWidth(Math.abs(mousePosition.y - y));

			for (let x = 0; x <= width; x += SEGMENT_SIZE) {
				const point = calculateWarpedPoint(
					{ x, y },
					mousePosition,
					WARP_OPTIONS
				);

				if (x === 0) {
					ctx.moveTo(point.x, point.y);
				} else {
					ctx.lineTo(point.x, point.y);
				}
			}

			if (width % SEGMENT_SIZE !== 0) {
				const point = calculateWarpedPoint(
					{ x: width, y },
					mousePosition,
					WARP_OPTIONS
				);
				ctx.lineTo(point.x, point.y);
			}

			ctx.stroke();
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
		let idleCallbackId: number | null = null;
		if ('requestIdleCallback' in window) {
			idleCallbackId = requestIdleCallback(() => {
				idleCallbackId = null;
				animationIdRef.current = requestAnimationFrame(draw);
			});
		} else {
			animationIdRef.current = requestAnimationFrame(draw);
		}

		// Throttled resize handler
		let resizeTimeout: ReturnType<typeof setTimeout>;
		const handleResize = () => {
			clearTimeout(resizeTimeout);
			resizeTimeout = setTimeout(() => {
				resizeCanvas();
			}, 150);
		};

		// Optimized mouse move handler with frame-based throttling
		let mouseFrame: number | null = null;
		let pendingMousePosition: Point | null = null;
		const handleMouseMove = (e: MouseEvent) => {
			pendingMousePosition = { x: e.clientX, y: e.clientY };

			if (mouseFrame === null) {
				mouseFrame = requestAnimationFrame(() => {
					if (pendingMousePosition === null) return;

					targetMousePosRef.current = pendingMousePosition;
					if (!hasMousePositionRef.current) {
						easedMousePosRef.current = pendingMousePosition;
						hasMousePositionRef.current = true;
					}

					pendingMousePosition = null;
					mouseFrame = null;
				});
			}
		};

		// Intersection Observer — fully pause/resume animation loop
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const wasVisible = isVisibleRef.current;
					isVisibleRef.current = entry.isIntersecting;

					if (!wasVisible && isVisibleRef.current) {
						// Became visible — restart the loop
						lastTimeRef.current = 0;
						animationIdRef.current = requestAnimationFrame(draw);
					} else if (wasVisible && !isVisibleRef.current) {
						// Became hidden — stop the loop entirely
						stopAnimation();
					}
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
			stopAnimation();
			if (mouseFrame !== null) {
				cancelAnimationFrame(mouseFrame);
			}
			if (idleCallbackId !== null && 'cancelIdleCallback' in window) {
				window.cancelIdleCallback(idleCallbackId);
			}
			if (resizeTimeout) {
				clearTimeout(resizeTimeout);
			}
		};
	}, [draw, stopAnimation]);

	return <Canvas ref={canvasRef} />;
}

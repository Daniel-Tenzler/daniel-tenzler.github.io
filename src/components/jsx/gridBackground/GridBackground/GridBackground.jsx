import { useEffect, useRef } from 'react';
import { COLORS, getRgbaColor } from 'src/consts/Colors';
import { Canvas } from './GridBackground.styles';

export default function GridBackground() {
	const canvasRef = useRef(null);
	const mousePosRef = useRef({ x: -9999, y: -9999 });

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');

		function resizeCanvas() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		}

		resizeCanvas();
		window.addEventListener('resize', resizeCanvas);

		function draw() {
			const { width, height } = canvas;
			ctx.clearRect(0, 0, width, height);

			const spacing = 40;
			const maxLineWidth = 2.0;
			const minLineWidth = 0.5;
			const maxEffectDist = 200;
			const gridColor = getRgbaColor(COLORS.offWhite, 0.1);

			for (let x = 0; x <= width; x += spacing) {
				const dist = Math.abs(mousePosRef.current.x - x);
				const weight = Math.max(0, 1 - dist / maxEffectDist);
				const lineWidth = minLineWidth + weight * (maxLineWidth - minLineWidth);
				ctx.beginPath();
				ctx.moveTo(x, 0);
				ctx.lineTo(x, height);
				ctx.lineWidth = lineWidth;
				ctx.strokeStyle = gridColor;
				ctx.stroke();
			}

			for (let y = 0; y <= height; y += spacing) {
				const dist = Math.abs(mousePosRef.current.y - y);
				const weight = Math.max(0, 1 - dist / maxEffectDist);
				const lineWidth = minLineWidth + weight * (maxLineWidth - minLineWidth);
				ctx.beginPath();
				ctx.moveTo(0, y);
				ctx.lineTo(width, y);
				ctx.lineWidth = lineWidth;
				ctx.strokeStyle = gridColor;
				ctx.stroke();
			}

			requestAnimationFrame(draw);
		}

		draw();

		let ticking = false;
		const handleMouseMove = (e) => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(() => {
					mousePosRef.current = { x: e.clientX, y: e.clientY };
					ticking = false;
				});
			}
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('resize', resizeCanvas);
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, [mousePosRef]);

	return <Canvas ref={canvasRef} />;
}

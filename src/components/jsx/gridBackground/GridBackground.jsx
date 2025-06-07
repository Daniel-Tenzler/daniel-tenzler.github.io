import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
`;

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
      const maxLineWidth = 1.5;
      const minLineWidth = 0.5;
      const maxEffectDist = 200;

      for (let x = 0; x <= width; x += spacing) {
        const dist = Math.abs(mousePosRef.current.x - x);
        const weight = Math.max(0, 1 - dist / maxEffectDist);
        const lineWidth = minLineWidth + weight * (maxLineWidth - minLineWidth);
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = 'rgba(0,0,0,0.1)';
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
        ctx.strokeStyle = 'rgba(0,0,0,0.1)';
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

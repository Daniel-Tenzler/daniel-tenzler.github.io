export interface Point {
	x: number;
	y: number;
}

export interface Rect {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

export interface CursorGlowPosition extends Point {
	opacity: number;
}

const clamp = (value: number, min: number, max: number) =>
	Math.min(Math.max(value, min), max);

export const calculateCursorGlow = (
	pointer: Point,
	rect: Rect,
	activationDistance: number
): CursorGlowPosition => {
	const closestX = clamp(pointer.x, rect.left, rect.right);
	const closestY = clamp(pointer.y, rect.top, rect.bottom);
	const distance = Math.hypot(pointer.x - closestX, pointer.y - closestY);

	return {
		x: pointer.x - rect.left,
		y: pointer.y - rect.top,
		opacity: clamp(1 - distance / activationDistance, 0, 1),
	};
};

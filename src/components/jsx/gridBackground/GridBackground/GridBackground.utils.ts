export interface Point {
	x: number;
	y: number;
}

export interface WarpOptions {
	maxWarp: number;
	warpRadius: number;
}

// Tuned for the ~30fps canvas throttle in GridBackground.
export const CURSOR_EASE = 0.14;

export const calculateEasedPoint = (
	current: Point,
	target: Point,
	ease: number
): Point => ({
	x: current.x + (target.x - current.x) * ease,
	y: current.y + (target.y - current.y) * ease,
});

export const calculateWarpedPoint = (
	point: Point,
	cursor: Point,
	options: WarpOptions
): Point => {
	const dx = point.x - cursor.x;
	const dy = point.y - cursor.y;
	const distance = Math.hypot(dx, dy);

	if (distance === 0 || distance >= options.warpRadius) {
		return point;
	}

	const falloff = 1 - distance / options.warpRadius;
	const warpAmount = options.maxWarp * falloff * falloff;

	return {
		x: point.x + (dx / distance) * warpAmount,
		y: point.y + (dy / distance) * warpAmount,
	};
};

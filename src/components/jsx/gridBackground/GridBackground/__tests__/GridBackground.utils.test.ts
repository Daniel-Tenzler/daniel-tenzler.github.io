import * as assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import {
	CURSOR_EASE,
	calculateEasedPoint,
	calculateWarpedPoint,
} from '../GridBackground.utils.ts';

describe('calculateEasedPoint', () => {
	test('uses a responsive default cursor ease value', () => {
		const easedPoint = calculateEasedPoint(
			{ x: 0, y: 0 },
			{ x: 100, y: 0 },
			CURSOR_EASE
		);

		assert.ok(Math.abs(easedPoint.x - 14) < Number.EPSILON * 10);
		assert.strictEqual(easedPoint.y, 0);
	});

	test('moves the current point partway toward the target point', () => {
		const easedPoint = calculateEasedPoint(
			{ x: 0, y: 10 },
			{ x: 100, y: 60 },
			0.08
		);

		assert.deepStrictEqual(easedPoint, { x: 8, y: 14 });
	});

	test('keeps a point stable when it already matches the target point', () => {
		const point = { x: 42, y: 24 };

		const easedPoint = calculateEasedPoint(point, point, 0.08);

		assert.deepStrictEqual(easedPoint, point);
	});
});

describe('calculateWarpedPoint', () => {
	test('subtly pushes nearby points away from the cursor', () => {
		const warpedPoint = calculateWarpedPoint(
			{ x: 120, y: 100 },
			{ x: 100, y: 100 },
			{
				maxWarp: 6,
				warpRadius: 220,
			}
		);

		assert.ok(warpedPoint.x > 120);
		assert.strictEqual(warpedPoint.y, 100);
		assert.ok(warpedPoint.x < 126);
	});

	test('leaves a point unchanged when it is exactly under the cursor', () => {
		const point = { x: 100, y: 100 };

		const warpedPoint = calculateWarpedPoint(point, point, {
			maxWarp: 6,
			warpRadius: 220,
		});

		assert.deepStrictEqual(warpedPoint, point);
	});

	test('leaves a point on the warp radius boundary unchanged', () => {
		const point = { x: 320, y: 100 };

		const warpedPoint = calculateWarpedPoint(
			point,
			{ x: 100, y: 100 },
			{
				maxWarp: 6,
				warpRadius: 220,
			}
		);

		assert.deepStrictEqual(warpedPoint, point);
	});

	test('leaves points outside the warp radius unchanged', () => {
		const point = { x: 400, y: 100 };

		const warpedPoint = calculateWarpedPoint(
			point,
			{ x: 100, y: 100 },
			{
				maxWarp: 6,
				warpRadius: 220,
			}
		);

		assert.deepStrictEqual(warpedPoint, point);
	});
});

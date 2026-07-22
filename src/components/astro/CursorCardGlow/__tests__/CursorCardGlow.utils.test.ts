import * as assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import { calculateCursorGlow } from '../CursorCardGlow.utils.ts';

const cardRect = {
	top: 100,
	right: 300,
	bottom: 300,
	left: 100,
};

describe('calculateCursorGlow', () => {
	test('positions a fully visible glow under a cursor inside the card', () => {
		assert.deepStrictEqual(
			calculateCursorGlow({ x: 150, y: 175 }, cardRect, 120),
			{ x: 50, y: 75, opacity: 1 }
		);
	});

	test('fades the glow as the cursor approaches the card', () => {
		const glow = calculateCursorGlow({ x: 40, y: 200 }, cardRect, 120);

		assert.deepStrictEqual(glow, { x: -60, y: 100, opacity: 0.5 });
	});

	test('hides the glow outside the activation distance', () => {
		const glow = calculateCursorGlow({ x: -20, y: 200 }, cardRect, 120);

		assert.strictEqual(glow.opacity, 0);
	});
});

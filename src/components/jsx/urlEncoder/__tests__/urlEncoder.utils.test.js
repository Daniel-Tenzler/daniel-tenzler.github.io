import * as assert from 'node:assert/strict';
import { describe, test } from 'node:test';

import {
	buildHighlightedUrlParts,
	findDomainHighlights,
} from '../urlEncoder.utils.ts';

describe('findDomainHighlights', () => {
	test('finds domains in raw and URL-encoded nested URLs', () => {
		const input =
			'https://outer.example.com/path?redirect=https%3A%2F%2Fauth.example.org%2Fcallback';

		const highlights = findDomainHighlights(input);

		assert.deepStrictEqual(
			highlights.map((highlight) => highlight.text),
			['outer.example.com', 'auth.example.org']
		);
		assert.deepStrictEqual(
			highlights.map((highlight) => highlight.encoded),
			[false, true]
		);
		assert.deepStrictEqual(
			highlights.map((highlight) =>
				input.slice(highlight.start, highlight.end)
			),
			['outer.example.com', 'auth.example.org']
		);
	});

	test('finds URL-encoded domains with encoded dots', () => {
		const input =
			'callback=https%3A%2F%2Fapi%2Eexample%2Edev%2Fdone';

		const highlights = findDomainHighlights(input);

		assert.deepStrictEqual(
			highlights.map((highlight) => highlight.text),
			['api%2Eexample%2Edev']
		);
		assert.strictEqual(highlights[0].encoded, true);
	});

	test('finds domains in double-encoded nested URLs', () => {
		const input =
			'callback=https%253A%252F%252Ftwice.example.net%252Fdone';

		const highlights = findDomainHighlights(input);

		assert.deepStrictEqual(
			highlights.map((highlight) => highlight.text),
			['twice.example.net']
		);
		assert.strictEqual(highlights[0].encoded, true);
	});
});

describe('buildHighlightedUrlParts', () => {
	test('splits text into highlighted domain parts', () => {
		const input = 'redirect=https%3A%2F%2Fnested.example.com%2Fdone';

		const parts = buildHighlightedUrlParts(input);

		assert.deepStrictEqual(parts, [
			{ text: 'redirect=https%3A%2F%2F', highlighted: false },
			{ text: 'nested.example.com', highlighted: true },
			{ text: '%2Fdone', highlighted: false },
		]);
	});

	test('returns one unhighlighted part when there are no URLs', () => {
		const input = 'plain text without a callback domain';

		const parts = buildHighlightedUrlParts(input);

		assert.deepStrictEqual(parts, [
			{ text: input, highlighted: false },
		]);
	});
});

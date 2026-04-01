import * as assert from 'node:assert/strict';
import { test, describe } from 'node:test';
import {
	parseJson,
	formatJson,
	minifyJson,
	sortKeys,
	lookupPath,
	removeEmptyValues,
	resolveIndent,
	queryJson,
	validateJsonSchema,
	encodeSharePayload,
	decodeSharePayload,
} from '../jsonVisualizer.utils';
import type { SimpleJsonSchema } from '../jsonVisualizer.utils';

describe('parseJson', () => {
	test('should parse valid JSON object', () => {
		const result = parseJson('{"name":"test","value":42}');
		assert.ok(result.ok);
		assert.deepStrictEqual((result as { ok: true; value: unknown }).value, {
			name: 'test',
			value: 42,
		});
	});

	test('should parse valid JSON array', () => {
		const result = parseJson('[1, 2, 3]');
		assert.ok(result.ok);
		assert.deepStrictEqual(
			(result as { ok: true; value: unknown }).value,
			[1, 2, 3]
		);
	});

	test('should parse valid JSON primitive', () => {
		const result = parseJson('"hello"');
		assert.ok(result.ok);
		assert.strictEqual(
			(result as { ok: true; value: unknown }).value,
			'hello'
		);
	});

	test('should return error for empty input', () => {
		const result = parseJson('');
		assert.ok(!result.ok);
		assert.strictEqual(
			(result as { ok: false; error: string }).error,
			'Input is empty'
		);
	});

	test('should return error for whitespace-only input', () => {
		const result = parseJson('   \n\t  ');
		assert.ok(!result.ok);
		assert.strictEqual(
			(result as { ok: false; error: string }).error,
			'Input is empty'
		);
	});

	test('should return error message for invalid JSON', () => {
		const result = parseJson('{invalid}');
		assert.ok(!result.ok);
		const error = (result as { ok: false; error: string }).error;
		assert.ok(
			typeof error === 'string' && error.length > 0,
			`Expected non-empty error string, got: "${error}"`
		);
	});

	test('should return a non-empty error string for structurally invalid JSON', () => {
		const result = parseJson('{"key": "value" "extra": 1}');
		assert.ok(!result.ok);
		const error = (result as { ok: false; error: string }).error;
		assert.ok(
			typeof error === 'string' && error.length > 0,
			'Error message should be a non-empty string'
		);
	});
});

describe('formatJson', () => {
	test('should pretty-print an object with 2-space indent by default', () => {
		const obj = { a: 1, b: 2 };
		const result = formatJson(obj);
		assert.strictEqual(result, '{\n  "a": 1,\n  "b": 2\n}');
	});

	test('should pretty-print with custom indentation', () => {
		const obj = { a: 1 };
		const result = formatJson(obj, 4);
		assert.strictEqual(result, '{\n    "a": 1\n}');
	});

	test('should format nested objects', () => {
		const obj = { user: { name: 'Alice' } };
		const result = formatJson(obj);
		assert.strictEqual(
			result,
			'{\n  "user": {\n    "name": "Alice"\n  }\n}'
		);
	});

	test('should format arrays', () => {
		const arr = [1, 2, 3];
		const result = formatJson(arr);
		assert.strictEqual(result, '[\n  1,\n  2,\n  3\n]');
	});
});

describe('minifyJson', () => {
	test('should produce compact output with no whitespace', () => {
		const obj = { a: 1, b: [2, 3] };
		const result = minifyJson(obj);
		assert.strictEqual(result, '{"a":1,"b":[2,3]}');
	});

	test('should minify a simple string', () => {
		const result = minifyJson('hello');
		assert.strictEqual(result, '"hello"');
	});

	test('should minify a number', () => {
		const result = minifyJson(42);
		assert.strictEqual(result, '42');
	});

	test('should minify null', () => {
		const result = minifyJson(null);
		assert.strictEqual(result, 'null');
	});
});

describe('sortKeys', () => {
	test('should sort top-level keys alphabetically', () => {
		const input = { c: 3, a: 1, b: 2 };
		const result = sortKeys(input) as Record<string, unknown>;
		assert.deepStrictEqual(Object.keys(result), ['a', 'b', 'c']);
	});

	test('should sort keys recursively in nested objects', () => {
		const input = { z: { y: 2, x: 1 }, a: 0 };
		const result = sortKeys(input) as Record<string, unknown>;
		assert.deepStrictEqual(Object.keys(result), ['a', 'z']);
		const nested = result['z'] as Record<string, unknown>;
		assert.deepStrictEqual(Object.keys(nested), ['x', 'y']);
	});

	test('should produce stable output regardless of input key order', () => {
		const input1 = { b: 2, a: 1 };
		const input2 = { a: 1, b: 2 };
		assert.strictEqual(
			JSON.stringify(sortKeys(input1)),
			JSON.stringify(sortKeys(input2))
		);
	});

	test('should handle arrays without sorting elements', () => {
		const input = [
			{ b: 2, a: 1 },
			{ d: 4, c: 3 },
		];
		const result = sortKeys(input) as Record<string, unknown>[];
		assert.deepStrictEqual(Object.keys(result[0]), ['a', 'b']);
		assert.deepStrictEqual(Object.keys(result[1]), ['c', 'd']);
	});

	test('should return primitives unchanged', () => {
		assert.strictEqual(sortKeys(42), 42);
		assert.strictEqual(sortKeys('hello'), 'hello');
		assert.strictEqual(sortKeys(null), null);
		assert.strictEqual(sortKeys(true), true);
	});

	test('should not mutate the original object', () => {
		const input = { c: 3, a: 1, b: 2 };
		const originalKeys = Object.keys(input);
		sortKeys(input);
		assert.deepStrictEqual(Object.keys(input), originalKeys);
	});
});

describe('lookupPath', () => {
	const sample = {
		user: {
			name: 'Alice',
			address: {
				city: 'Berlin',
			},
		},
		items: [
			{ id: 1, label: 'first' },
			{ id: 2, label: 'second' },
		],
	};

	test('should look up a top-level property', () => {
		const result = lookupPath(sample, 'user');
		assert.ok(result.ok);
		assert.deepStrictEqual(
			(result as { ok: true; value: unknown }).value,
			sample.user
		);
	});

	test('should look up a nested property', () => {
		const result = lookupPath(sample, 'user.name');
		assert.ok(result.ok);
		assert.strictEqual(
			(result as { ok: true; value: unknown }).value,
			'Alice'
		);
	});

	test('should look up a deeply nested property', () => {
		const result = lookupPath(sample, 'user.address.city');
		assert.ok(result.ok);
		assert.strictEqual(
			(result as { ok: true; value: unknown }).value,
			'Berlin'
		);
	});

	test('should look up an array item by bracket notation', () => {
		const result = lookupPath(sample, 'items[0].label');
		assert.ok(result.ok);
		assert.strictEqual(
			(result as { ok: true; value: unknown }).value,
			'first'
		);
	});

	test('should return error for missing property', () => {
		const result = lookupPath(sample, 'user.missing');
		assert.ok(!result.ok);
		assert.ok(
			(result as { ok: false; error: string }).error.includes('missing')
		);
	});

	test('should return error for out-of-bounds index', () => {
		const result = lookupPath(sample, 'items[5]');
		assert.ok(!result.ok);
		assert.ok(
			(result as { ok: false; error: string }).error.includes(
				'out of bounds'
			)
		);
	});

	test('should return the whole value for empty path', () => {
		const result = lookupPath(sample, '');
		assert.ok(result.ok);
		assert.strictEqual(
			(result as { ok: true; value: unknown }).value,
			sample
		);
	});
});

describe('removeEmptyValues', () => {
	test('should remove null values', () => {
		const input = { a: 1, b: null, c: 'hello' };
		const result = removeEmptyValues(input) as Record<string, unknown>;
		assert.deepStrictEqual(result, { a: 1, c: 'hello' });
	});

	test('should remove empty strings', () => {
		const input = { a: 'hello', b: '', c: 'world' };
		const result = removeEmptyValues(input) as Record<string, unknown>;
		assert.deepStrictEqual(result, { a: 'hello', c: 'world' });
	});

	test('should remove empty arrays', () => {
		const input = { a: [1, 2], b: [], c: [3] };
		const result = removeEmptyValues(input) as Record<string, unknown>;
		assert.deepStrictEqual(result, { a: [1, 2], c: [3] });
	});

	test('should remove empty objects', () => {
		const input = { a: { x: 1 }, b: {}, c: { y: 2 } };
		const result = removeEmptyValues(input) as Record<string, unknown>;
		assert.deepStrictEqual(result, { a: { x: 1 }, c: { y: 2 } });
	});

	test('should remove nested empty values recursively', () => {
		const input = {
			user: {
				name: 'Alice',
				nickname: '',
				address: {
					city: 'Berlin',
					zip: null,
				},
				tags: [],
			},
			active: true,
		};
		const result = removeEmptyValues(input) as Record<string, unknown>;
		assert.deepStrictEqual(result, {
			user: {
				name: 'Alice',
				address: {
					city: 'Berlin',
				},
			},
			active: true,
		});
	});

	test('should remove parent when all children are removed', () => {
		const input = { a: 1, b: { c: null, d: '' } };
		const result = removeEmptyValues(input) as Record<string, unknown>;
		assert.deepStrictEqual(result, { a: 1 });
	});

	test('should handle arrays by filtering empty elements', () => {
		const input = { items: [null, 'hello', '', { x: 1 }, {}] };
		const result = removeEmptyValues(input) as Record<string, unknown>;
		assert.deepStrictEqual(result, { items: ['hello', { x: 1 }] });
	});

	test('should not remove falsy values that are not empty', () => {
		const input = { a: 0, b: false, c: 'text' };
		const result = removeEmptyValues(input) as Record<string, unknown>;
		assert.deepStrictEqual(result, { a: 0, b: false, c: 'text' });
	});

	test('should return undefined for an object that becomes empty', () => {
		const input = { a: null, b: '' };
		const result = removeEmptyValues(input);
		assert.strictEqual(result, undefined);
	});

	test('should return undefined for an array that becomes empty', () => {
		const input = [null, ''];
		const result = removeEmptyValues(input);
		assert.strictEqual(result, undefined);
	});

	test('should return primitives unchanged (non-null, non-empty-string)', () => {
		assert.strictEqual(removeEmptyValues(42), 42);
		assert.strictEqual(removeEmptyValues('hello'), 'hello');
		assert.strictEqual(removeEmptyValues(true), true);
	});

	test('should return undefined for null input', () => {
		assert.strictEqual(removeEmptyValues(null), undefined);
	});

	test('should return undefined for empty string input', () => {
		assert.strictEqual(removeEmptyValues(''), undefined);
	});

	test('should not mutate the original object', () => {
		const input = { a: 1, b: null, c: { d: '' } };
		const originalKeys = Object.keys(input);
		removeEmptyValues(input);
		assert.deepStrictEqual(Object.keys(input), originalKeys);
	});
});

describe('resolveIndent', () => {
	test('should return 2 for 2spaces preset', () => {
		assert.strictEqual(resolveIndent('2spaces'), 2);
	});

	test('should return 4 for 4spaces preset', () => {
		assert.strictEqual(resolveIndent('4spaces'), 4);
	});

	test('should return tab character for tab preset', () => {
		assert.strictEqual(resolveIndent('tab'), '\t');
	});
});

describe('queryJson', () => {
	const sample = {
		user: {
			name: 'Alice',
			address: {
				city: 'Berlin',
			},
		},
		items: [{ id: 1 }, { id: 2 }],
	};

	test('should support jsonpath style root path', () => {
		const result = queryJson(sample, '$.user.address.city');
		assert.ok(result.ok);
		assert.strictEqual(
			(result as { ok: true; value: unknown }).value,
			'Berlin'
		);
	});

	test('should support bracket path on arrays', () => {
		const result = queryJson(sample, 'items[1].id');
		assert.ok(result.ok);
		assert.strictEqual((result as { ok: true; value: unknown }).value, 2);
	});

	test('should return error on missing path', () => {
		const result = queryJson(sample, '$.user.phone');
		assert.ok(!result.ok);
		assert.ok(
			(result as { ok: false; error: string }).error.includes('not found')
		);
	});
});

describe('validateJsonSchema', () => {
	test('should validate required fields and primitive types', () => {
		const schema: SimpleJsonSchema = {
			type: 'object',
			required: ['name', 'age'],
			properties: {
				name: { type: 'string' },
				age: { type: 'number' },
			},
		};

		const okResult = validateJsonSchema({ name: 'Alice', age: 31 }, schema);
		assert.strictEqual(okResult.valid, true);
		assert.deepStrictEqual(okResult.errors, []);

		const failResult = validateJsonSchema({ name: 'Alice' }, schema);
		assert.strictEqual(failResult.valid, false);
		assert.ok(failResult.errors.length > 0);
	});

	test('should validate nested object properties', () => {
		const schema: SimpleJsonSchema = {
			type: 'object',
			properties: {
				user: {
					type: 'object',
					required: ['email'],
					properties: {
						email: { type: 'string' },
					},
				},
			},
		};

		const result = validateJsonSchema({ user: {} }, schema);
		assert.strictEqual(result.valid, false);
		assert.ok(
			result.errors.some(
				(error: { path: string; message: string }) =>
					error.path === '$.user.email'
			)
		);
	});
});

describe('share payload helpers', () => {
	test('should encode and decode json string roundtrip', () => {
		const input = '{"name":"alice","age":30}';
		const encoded = encodeSharePayload(input);
		const decoded = decodeSharePayload(encoded);
		assert.ok(decoded.ok);
		assert.strictEqual(
			(decoded as { ok: true; value: string }).value,
			input
		);
	});

	test('should reject invalid base64 payload', () => {
		const decoded = decodeSharePayload('***bad***');
		assert.ok(!decoded.ok);
	});
});

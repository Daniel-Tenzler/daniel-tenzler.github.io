export interface ParseSuccess {
	ok: true;
	value: unknown;
}

export interface ParseFailure {
	ok: false;
	error: string;
}

export type ParseResult = ParseSuccess | ParseFailure;

export interface LookupSuccess {
	ok: true;
	value: unknown;
}

export interface LookupFailure {
	ok: false;
	error: string;
}

export type LookupResult = LookupSuccess | LookupFailure;

export interface SchemaError {
	path: string;
	message: string;
}

export interface SchemaValidationResult {
	valid: boolean;
	errors: SchemaError[];
}

export interface SimpleJsonSchema {
	type?: 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null';
	required?: string[];
	properties?: Record<string, SimpleJsonSchema>;
	items?: SimpleJsonSchema;
}

/** Indent presets for JSON formatting. */
export type IndentPreset = '2spaces' | '4spaces' | 'tab';

/**
 * Resolve an indent preset to the value accepted by JSON.stringify's
 * third argument (a positive number of spaces or the string "\t").
 */
export function resolveIndent(preset: IndentPreset): number | string {
	switch (preset) {
		case '2spaces':
			return 2;
		case '4spaces':
			return 4;
		case 'tab':
			return '\t';
	}
}

/**
 * Parse a JSON string and return a structured result.
 * Returns `{ ok: true, value }` on success or `{ ok: false, error }` on failure.
 */
export function parseJson(input: string): ParseResult {
	if (!input.trim()) {
		return { ok: false, error: 'Input is empty' };
	}

	try {
		const value: unknown = JSON.parse(input);
		return { ok: true, value };
	} catch (e) {
		const message = e instanceof Error ? e.message : String(e);
		return { ok: false, error: message };
	}
}

/**
 * Pretty-print a parsed JSON value with the given indentation (default: 2 spaces).
 * Returns a string even if `value` is `undefined` (yields `undefined` as literal).
 */
export function formatJson(
	value: unknown,
	indent: number | string = 2
): string {
	if (value === undefined) {
		return 'undefined';
	}
	return JSON.stringify(value, null, indent);
}

/**
 * Minify a parsed JSON value (compact, no whitespace).
 * Returns a string even if `value` is `undefined` (yields `undefined` as literal).
 */
export function minifyJson(value: unknown): string {
	if (value === undefined) {
		return 'undefined';
	}
	return JSON.stringify(value);
}

/**
 * Recursively sort object keys alphabetically.
 * Returns a new value; does not mutate the input.
 */
export function sortKeys(value: unknown): unknown {
	if (Array.isArray(value)) {
		return value.map(sortKeys);
	}

	if (value !== null && typeof value === 'object') {
		const obj = value as Record<string, unknown>;
		const sorted: Record<string, unknown> = {};
		const keys = Object.keys(obj).sort();
		for (const key of keys) {
			sorted[key] = sortKeys(obj[key]);
		}
		return sorted;
	}

	return value;
}

/**
 * Look up a value by dot-separated JSON path (e.g. `"user.address.city"`).
 * Bracket index notation (e.g. `"items[0].name"`) is also supported.
 * Returns `{ ok: true, value }` on success or `{ ok: false, error }` if the path cannot be resolved.
 */
export function lookupPath(value: unknown, path: string): LookupResult {
	if (!path) {
		return { ok: true, value };
	}

	// Split on dots, but also handle bracket notation within a segment
	const segments = path
		.split('.')
		.flatMap((segment) => {
			const parts: string[] = [];
			const bracketRegex = /^(.+?)\[(\d+)\]$/;
			const match = segment.match(bracketRegex);
			if (match) {
				parts.push(match[1]);
				parts.push(`[${match[2]}]`);
			} else {
				parts.push(segment);
			}
			return parts;
		})
		.filter((s) => s !== '');

	let current: unknown = value;

	for (const segment of segments) {
		if (current === null || current === undefined) {
			return {
				ok: false,
				error: `Cannot access "${segment}" on null or undefined`,
			};
		}

		if (typeof current !== 'object') {
			return {
				ok: false,
				error: `Cannot access "${segment}" on a non-object value`,
			};
		}

		// Bracket index access
		const indexMatch = segment.match(/^\[(\d+)\]$/);
		if (indexMatch) {
			if (!Array.isArray(current)) {
				return {
					ok: false,
					error: `Cannot use array index at "${segment}" on a non-array`,
				};
			}
			const idx = Number.parseInt(indexMatch[1], 10);
			if (idx < 0 || idx >= current.length) {
				return {
					ok: false,
					error: `Index ${idx} is out of bounds`,
				};
			}
			current = current[idx];
		} else {
			const obj = current as Record<string, unknown>;
			if (!(segment in obj)) {
				return {
					ok: false,
					error: `Property "${segment}" not found`,
				};
			}
			current = obj[segment];
		}
	}

	return { ok: true, value: current };
}

/**
 * Query a JSON value by supporting both dot syntax and JSONPath-like root syntax.
 */
export function queryJson(value: unknown, path: string): LookupResult {
	const normalizedPath = path.trim().replace(/^\$\.?/, '');
	return lookupPath(value, normalizedPath);
}

function getValueType(value: unknown): SimpleJsonSchema['type'] {
	if (value === null) {
		return 'null';
	}
	if (Array.isArray(value)) {
		return 'array';
	}
	return typeof value as SimpleJsonSchema['type'];
}

function validateSchemaNode(
	value: unknown,
	schema: SimpleJsonSchema,
	path: string,
	errors: SchemaError[]
): void {
	if (schema.type) {
		const actualType = getValueType(value);
		if (actualType !== schema.type) {
			errors.push({
				path,
				message: `Expected type ${schema.type}, received ${actualType}`,
			});
			return;
		}
	}

	if (schema.type === 'object') {
		if (
			value === null ||
			typeof value !== 'object' ||
			Array.isArray(value)
		) {
			return;
		}
		const obj = value as Record<string, unknown>;
		for (const key of schema.required ?? []) {
			if (!(key in obj)) {
				errors.push({
					path: `${path}.${key}`,
					message: `Missing required property "${key}"`,
				});
			}
		}
		for (const [key, propertySchema] of Object.entries(
			schema.properties ?? {}
		)) {
			if (key in obj) {
				validateSchemaNode(
					obj[key],
					propertySchema,
					`${path}.${key}`,
					errors
				);
			}
		}
		return;
	}

	if (schema.type === 'array') {
		if (!Array.isArray(value) || !schema.items) {
			return;
		}
		for (let index = 0; index < value.length; index += 1) {
			validateSchemaNode(
				value[index],
				schema.items,
				`${path}[${index}]`,
				errors
			);
		}
	}
}

/**
 * Lightweight schema validator supporting type, required, properties, and items.
 */
export function validateJsonSchema(
	value: unknown,
	schema: SimpleJsonSchema
): SchemaValidationResult {
	const errors: SchemaError[] = [];
	validateSchemaNode(value, schema, '$', errors);
	return {
		valid: errors.length === 0,
		errors,
	};
}

/** Encode raw JSON text into a URL-friendly payload. */
export function encodeSharePayload(rawJson: string): string {
	return encodeURIComponent(rawJson);
}

/** Decode a URL payload back to raw JSON text. */
export function decodeSharePayload(payload: string): ParseResult {
	try {
		const rawJson = decodeURIComponent(payload);
		const parseResult = parseJson(rawJson);
		if (!parseResult.ok) {
			return {
				ok: false,
				error: parseResult.error,
			};
		}
		return {
			ok: true,
			value: rawJson,
		};
	} catch (error) {
		return {
			ok: false,
			error:
				error instanceof Error
					? error.message
					: 'Invalid share payload',
		};
	}
}

/**
 * Recursively remove keys whose values are "empty":
 *   - null
 *   - empty string ("")
 *   - empty array ([])
 *   - empty object ({})
 *
 * After removing children, if a parent object becomes empty it is also removed.
 * Arrays are filtered (empty-element slots are dropped) but the array itself
 * is only removed if it becomes empty AND its parent decides to prune.
 *
 * Returns a new value; does not mutate the input.
 */
export function removeEmptyValues(value: unknown): unknown {
	if (Array.isArray(value)) {
		const mapped = value.map(removeEmptyValues).filter(isNotEmpty);
		return mapped.length > 0 ? mapped : undefined;
	}

	if (value !== null && typeof value === 'object') {
		const obj = value as Record<string, unknown>;
		const result: Record<string, unknown> = {};
		for (const key of Object.keys(obj)) {
			const cleaned = removeEmptyValues(obj[key]);
			if (isNotEmpty(cleaned)) {
				result[key] = cleaned;
			}
		}
		return Object.keys(result).length > 0 ? result : undefined;
	}

	if (value === null || value === '') {
		return undefined;
	}

	return value;
}

/** Type guard that returns false for values considered "empty". */
function isNotEmpty(value: unknown): boolean {
	if (value === undefined) return false;
	if (value === null) return false;
	if (value === '') return false;
	if (Array.isArray(value) && value.length === 0) return false;
	if (
		typeof value === 'object' &&
		!Array.isArray(value) &&
		Object.keys(value as Record<string, unknown>).length === 0
	)
		return false;
	return true;
}

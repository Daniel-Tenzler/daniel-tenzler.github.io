import assert from 'assert';
import { test } from 'node:test';
import path from 'path';
import { sanitizePath } from '../sftp-deployer.js';

test('sanitizePath should normalize paths using path.normalize', () => {
	const result = sanitizePath('path/to/file');
	assert.equal(result, path.normalize('path/to/file'));
});

test('sanitizePath should remove directory traversal attempts', () => {
	const result = sanitizePath('../../../etc/passwd');
	assert.ok(!result.includes('..'));
});

test('sanitizePath should handle mixed traversal', () => {
	const result = sanitizePath('safe/../../etc/passwd');
	assert.ok(!result.includes('..'));
});

test('sanitizePath should allow single dot', () => {
	const result = sanitizePath('./file.txt');
	assert.ok(result.includes('file.txt'));
});

test('sanitizePath should prevent complex traversal', () => {
	const result = sanitizePath('safe/.././../unsafe');
	assert.ok(!result.includes('..'));
});

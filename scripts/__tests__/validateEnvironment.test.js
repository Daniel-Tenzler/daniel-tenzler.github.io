import assert from 'assert';
import { test, beforeEach, afterEach } from 'node:test';
import { ErrorCodes } from '../errors.js';
import { DeployHelper } from '../deploy-helper.js';
import fs from 'fs';
import os from 'os';
import path from 'path';

let tempDir;
let tempEnvPath;
let helper;

beforeEach(() => {
	tempDir = fs.mkdtempSync(os.tmpdir());
	tempEnvPath = path.join(tempDir, '.env.test');
	helper = new DeployHelper('github');
});

afterEach(() => {
	if (fs.existsSync(tempEnvPath)) {
		fs.unlinkSync(tempEnvPath);
	}
	fs.rmdirSync(tempDir);
});

test('should accept valid environment variables', async () => {
	fs.writeFileSync(tempEnvPath, 'BASE_URL=https://example.com\nSFTP_HOST=example.com');
	await helper.validateEnvironmentFile(tempEnvPath);
	assert.ok(true); // No error thrown
});

test('should reject disallowed variables', async () => {
	fs.writeFileSync(tempEnvPath, 'MALICIOUS_VAR=attack');
	await assert.rejects(
		async () => await helper.validateEnvironmentFile(tempEnvPath),
		(err) => err.code === ErrorCodes.ENV_VAR_NOT_ALLOWED
	);
});

test('should reject empty values', async () => {
	fs.writeFileSync(tempEnvPath, 'BASE_URL=');
	await assert.rejects(
		async () => await helper.validateEnvironmentFile(tempEnvPath),
		(err) => err.code === ErrorCodes.ENV_VAR_INVALID
	);
});

test('should validate BASE_URL uses https', async () => {
	fs.writeFileSync(tempEnvPath, 'BASE_URL=http://insecure.com');
	await assert.rejects(
		async () => await helper.validateEnvironmentFile(tempEnvPath),
		(err) => err.code === ErrorCodes.ENV_VAR_INVALID
	);
});

test('should validate SFTP_PORT is numeric', async () => {
	fs.writeFileSync(tempEnvPath, 'SFTP_PORT=abc');
	await assert.rejects(
		async () => await helper.validateEnvironmentFile(tempEnvPath),
		(err) => err.code === ErrorCodes.ENV_VAR_INVALID
	);
});

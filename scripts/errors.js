/**
 * Deployment error with code and recovery hint
 */
export class DeployError extends Error {
	/**
	 * @param {string} code - Error code for programmatic handling
	 * @param {string} message - Human-readable message
	 * @param {string} [hint] - Recovery suggestion
	 */
	constructor(code, message, hint = '') {
		super(message);
		this.name = 'DeployError';
		this.code = code;
		this.hint = hint;

		// Preserve stack trace (V8 engines: Node.js, Chrome)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, DeployError);
		}
	}
}

/**
 * Error code constants
 */
export const ErrorCodes = {
	// Environment errors
	ENV_FILE_NOT_FOUND: 'ENV_FILE_NOT_FOUND',
	ENV_VAR_MISSING: 'ENV_VAR_MISSING',
	ENV_VAR_INVALID: 'ENV_VAR_INVALID',
	ENV_VAR_NOT_ALLOWED: 'ENV_VAR_NOT_ALLOWED',

	// SSH/SFTP errors
	SSH_KEY_NOT_FOUND: 'SSH_KEY_NOT_FOUND',
	SSH_KEY_BAD_PERMISSIONS: 'SSH_KEY_BAD_PERMISSIONS',
	SSH_CONNECTION_FAILED: 'SSH_CONNECTION_FAILED',
	SSH_AUTH_FAILED: 'SSH_AUTH_FAILED',

	// Build errors
	BUILD_FAILED: 'BUILD_FAILED',
	DIST_NOT_FOUND: 'DIST_NOT_FOUND',

	// Deployment errors
	DEPLOY_VALIDATION_FAILED: 'DEPLOY_VALIDATION_FAILED',
	REMOTE_DIR_NOT_FOUND: 'REMOTE_DIR_NOT_FOUND',
	UPLOAD_FAILED: 'UPLOAD_FAILED',
};

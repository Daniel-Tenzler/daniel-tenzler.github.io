// Centralized deployment configuration
export const DEPLOY_CONFIG = {
	// SFTP retry settings
	sftp: {
		maxRetries: 3,
		retryDelay: 1000,
		readyTimeout: 20000,
	},

	// Modern SSH algorithms (remove deprecated sha1)
	sshAlgorithms: {
		kex: ['curve25519-sha256', 'ecdh-sha2-nistp256', 'diffie-hellman-group16-sha512'],
		cipher: ['chacha20-poly1305@openssh.com', 'aes256-gcm@openssh.com', 'aes256-ctr'],
		serverHostKey: ['ssh-ed25519', 'rsa-sha2-512', 'ecdsa-sha2-nistp256'],
		hmac: ['hmac-sha2-256-etm@openssh.com', 'hmac-sha2-256'],
	},

	// Protected paths that should never be deleted/overwritten
	protected: {
		directories: ['doppelkopf'],
		files: ['.htaccess'],
	},

	// Allowed environment variables (security whitelist)
	allowedEnvVars: [
		'BASE_URL',
		'DEPLOY_TARGET',
		'GITHUB_TOKEN',
		'PUBLIC_ENV',
		'SFTP_HOST',
		'SFTP_PORT',
		'SFTP_USER',
		'SFTP_PRIVATE_KEY_PATH',
		'SFTP_KEY_PASSPHRASE', // NEW: support encrypted keys
		'SFTP_REMOTE_DIR',
	],

	// File permission modes (octal)
	permissions: {
		file: 0o644,
		dir: 0o755,
		privateKey: 0o600,
	},
};

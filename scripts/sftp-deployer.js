import fs from 'fs';
import path from 'path';
import SftpClient from 'ssh2-sftp-client';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import { DEPLOY_CONFIG } from './config.js';
import { DeployError, ErrorCodes } from './errors.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Sanitize path to prevent directory traversal attacks
 * @param {string} unsafePath - Potentially unsafe path
 * @returns {string} Sanitized path
 */
function sanitizePath(unsafePath) {
	return path.normalize(unsafePath).replace(/\.\./g, '');
}

class SftpDeployer {
	constructor() {
		this.projectRoot = path.resolve(__dirname, '..');
		this.distDir = path.join(this.projectRoot, 'dist');
		this.whitelistPath = path.join(__dirname, 'whitelist.json');
		this.maxRetries = DEPLOY_CONFIG.sftp.maxRetries;
		this.retryDelay = DEPLOY_CONFIG.sftp.retryDelay;
	}

	async log(message, type = 'info') {
		const timestamp = new Date().toLocaleTimeString();
		const colors = {
			info: chalk.blue,
			success: chalk.green,
			warning: chalk.yellow,
			error: chalk.red,
			gray: chalk.gray,
		};

		const color = colors[type] || colors.info;
		console.log(`[${chalk.gray(timestamp)}] ${color(`[SFTP] ${message}`)}`);
	}

	async loadWhitelist() {
		try {
			const whitelistContent = fs.readFileSync(
				this.whitelistPath,
				'utf8'
			);
			const parsed = JSON.parse(whitelistContent);
			return {
				protectedDirectories: [
					...DEPLOY_CONFIG.protected.directories,
					...(parsed.protectedDirectories || []),
				],
				protectedFiles: [
					...DEPLOY_CONFIG.protected.files,
					...(parsed.protectedFiles || []),
				],
			};
		} catch (error) {
			await this.log(
				`Failed to load whitelist: ${error.message}`,
				'error'
			);
			return {
				protectedDirectories: DEPLOY_CONFIG.protected.directories,
				protectedFiles: DEPLOY_CONFIG.protected.files,
			};
		}
	}

	getEnvironmentConfig() {
		const requiredEnvVars = [
			'SFTP_HOST',
			'SFTP_PORT',
			'SFTP_USER',
			'SFTP_PRIVATE_KEY_PATH',
			'SFTP_REMOTE_DIR',
		];

		const config = {};
		const missing = [];

		for (const envVar of requiredEnvVars) {
			const value = process.env[envVar];
			if (!value) {
				missing.push(envVar);
			} else {
				config[envVar] = value;
			}
		}

		if (missing.length > 0) {
			throw new Error(
				`Missing required environment variables: ${missing.join(', ')}`
			);
		}

		return config;
	}

	async loadPrivateKey(keyPath) {
		const fullPath = path.resolve(this.projectRoot, keyPath);
		if (!fs.existsSync(fullPath)) {
			throw new DeployError(
				ErrorCodes.SSH_KEY_NOT_FOUND,
				`SSH private key not found: ${fullPath}`
			);
		}

		// Validate file permissions
		const stats = fs.statSync(fullPath);
		const mode = stats.mode & parseInt('777', 8);
		const octalMode = mode.toString(8);

		const allowedModes = [DEPLOY_CONFIG.permissions.privateKey, 0o400];
		if (process.platform !== 'win32' && !allowedModes.includes(mode)) {
			throw new DeployError(
				ErrorCodes.SSH_KEY_BAD_PERMISSIONS,
				`SSH key has insecure permissions: ${octalMode}`,
				`Run: chmod ${DEPLOY_CONFIG.permissions.privateKey.toString(8)} <key-path>`
			);
		}

		return fs.readFileSync(fullPath, 'utf8');
	}

	async sleep(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	async connectWithRetry(sftp, config, attempt = 1) {
		try {
			await this.log(
				`Connecting to SFTP server (attempt ${attempt}/${this.maxRetries})...`
			);

			const privateKey = await this.loadPrivateKey(
				config.SFTP_PRIVATE_KEY_PATH
			);

			await sftp.connect({
				host: config.SFTP_HOST,
				port: parseInt(config.SFTP_PORT),
				username: config.SFTP_USER,
				privateKey: privateKey,
				readyTimeout: DEPLOY_CONFIG.sftp.readyTimeout,
				passphrase: process.env.SFTP_KEY_PASSPHRASE,
				algorithms: DEPLOY_CONFIG.sshAlgorithms,
			});

			await this.log('Connected to SFTP server', 'success');
			return true;
		} catch (error) {
			await this.log(
				`Connection attempt ${attempt} failed: ${error.message}`,
				'error'
			);

			if (attempt < this.maxRetries) {
				const delay = this.retryDelay * Math.pow(2, attempt - 1);
				await this.log(`Retrying in ${delay}ms...`, 'warning');
				await this.sleep(delay);
				return this.connectWithRetry(sftp, config, attempt + 1);
			}

			throw error;
		}
	}

	async uploadDirectory(sftp, localPath, remotePath, whitelist) {
		const items = fs.readdirSync(localPath);
		let uploadedCount = 0;
		let totalCount = items.length;

		await this.log(
			`Uploading ${totalCount} items from ${path.basename(localPath)}...`
		);

		for (const item of items) {
			const localItemPath = path.join(localPath, item);
			const remoteItemPath = sanitizePath(
				path.join(remotePath, item)
			).replace(/\\/g, '/');
			const stats = fs.statSync(localItemPath);

			if (stats.isDirectory()) {
				// Check if directory is protected
				if (whitelist.protectedDirectories.includes(item)) {
					await this.log(
						`Skipping protected directory: ${item}`,
						'warning'
					);
					continue;
				}

				// Create remote directory
				try {
					await sftp.mkdir(remoteItemPath, true);
					await this.log(`Created directory: ${item}`);
				} catch {
					// Directory might already exist
					await this.log(
						`Directory exists or creation failed: ${item}`,
						'warning'
					);
				}

				// Recursively upload directory contents
				await this.uploadDirectory(
					sftp,
					localItemPath,
					remoteItemPath,
					whitelist
				);
			} else {
				// Check if file is protected
				if (whitelist.protectedFiles.includes(item)) {
					await this.log(
						`Skipping protected file: ${item}`,
						'warning'
					);
					continue;
				}

				// Upload file
				try {
					await sftp.put(localItemPath, remoteItemPath);

					// Set file permissions
					await sftp.chmod(remoteItemPath, DEPLOY_CONFIG.permissions.file);

					await this.log(`Uploaded file: ${item}`, 'success');
					uploadedCount++;
				} catch (error) {
					await this.log(
						`Failed to upload ${item}: ${error.message}`,
						'error'
					);
					throw error;
				}
			}
		}

		// Set directory permissions
		try {
			await sftp.chmod(remotePath, DEPLOY_CONFIG.permissions.dir);
		} catch (error) {
			await this.log(
				`Failed to set directory permissions for ${remotePath}: ${error.message}`,
				'warning'
			);
		}

		return uploadedCount;
	}

	async cleanRemoteDirectory(sftp, remotePath, whitelist) {
		await this.log('Cleaning remote directory...');

		try {
			// Get all items in remote directory
			const items = await sftp.list(remotePath);

			for (const item of items) {
				const remoteItemPath = sanitizePath(
					path.join(remotePath, item.name)
				).replace(/\\/g, '/');

				if (item.type === 'd') {
					// Check if directory is protected
					if (whitelist.protectedDirectories.includes(item.name)) {
						await this.log(
							`Preserving protected directory: ${item.name}`,
							'warning'
						);
						continue;
					}

					// Recursively remove directory
					try {
						await sftp.rmdir(remoteItemPath, true);
						await this.log(`Removed directory: ${item.name}`);
					} catch (error) {
						await this.log(
							`Failed to remove directory ${item.name}: ${error.message}`,
							'error'
						);
					}
				} else {
					// Check if file is protected
					if (whitelist.protectedFiles.includes(item.name)) {
						await this.log(
							`Preserving protected file: ${item.name}`,
							'warning'
						);
						continue;
					}

					// Remove file
					try {
						await sftp.delete(remoteItemPath);
						await this.log(`Removed file: ${item.name}`);
					} catch (error) {
						await this.log(
							`Failed to remove file ${item.name}: ${error.message}`,
							'error'
						);
					}
				}
			}
		} catch (error) {
			await this.log(
				`Failed to clean remote directory: ${error.message}`,
				'warning'
			);
		}
	}

	async validateDeployment(sftp, remotePath) {
		await this.log('Validating deployment...');

		try {
			const indexPath = path
				.join(remotePath, 'index.html')
				.replace(/\\/g, '/');
			const exists = await sftp.exists(indexPath);

			if (!exists) {
				throw new Error('index.html not found after deployment');
			}

			await this.log(
				'Deployment validation successful - index.html found',
				'success'
			);
			return true;
		} catch (error) {
			await this.log(
				`Deployment validation failed: ${error.message}`,
				'error'
			);
			return false;
		}
	}

	async deploy() {
		const sftp = new SftpClient();

		try {
			// Load configuration
			const config = this.getEnvironmentConfig();
			const whitelist = await this.loadWhitelist();

			// Validate local dist directory
			if (!fs.existsSync(this.distDir)) {
				throw new Error(
					`Distribution directory not found: ${this.distDir}`
				);
			}

			await this.log('Starting SFTP deployment process...');

			// Connect to SFTP server
			await this.connectWithRetry(sftp, config);

			// Clean remote directory (except protected items)
			await this.cleanRemoteDirectory(
				sftp,
				config.SFTP_REMOTE_DIR,
				whitelist
			);

			// Upload files
			const uploadedCount = await this.uploadDirectory(
				sftp,
				this.distDir,
				config.SFTP_REMOTE_DIR,
				whitelist
			);
			await this.log(
				`Successfully uploaded ${uploadedCount} files`,
				'success'
			);

			// Validate deployment
			const isValid = await this.validateDeployment(
				sftp,
				config.SFTP_REMOTE_DIR
			);
			if (!isValid) {
				throw new Error('Deployment validation failed');
			}

			await this.log(
				'SFTP deployment completed successfully!',
				'success'
			);
			return true;
		} catch (error) {
			await this.log(`SFTP deployment failed: ${error.message}`, 'error');
			return false;
		} finally {
			try {
				await sftp.end();
				await this.log('SFTP connection closed', 'gray');
			} catch (error) {
				await this.log(
					`Error closing SFTP connection: ${error.message}`,
					'warning'
				);
			}
		}
	}
}

export { sanitizePath, SftpDeployer };

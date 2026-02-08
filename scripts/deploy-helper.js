import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import chalk from 'chalk';
import { execSync } from 'child_process';
import dotenv from 'dotenv';
import { SftpDeployer } from './sftp-deployer.js';
import { DEPLOY_CONFIG } from './config.js';
import { DeployError, ErrorCodes } from './errors.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class DeployHelper {
	constructor(target) {
		this.target = target;
		this.projectRoot = path.resolve(__dirname, '..');
		this.envFile = path.join(this.projectRoot, '.env');
		this.sourceEnvFile = path.join(this.projectRoot, `.env.${target}`);
		this.dryRun = process.argv.includes('--dry-run');
		this.originalRobotsTxt = null;
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
		console.log(`[${chalk.gray(timestamp)}] ${color(message)}`);
	}

	async validateTarget() {
		if (!['github', 'server'].includes(this.target)) {
			throw new Error(
				`Invalid deployment target: ${this.target}. Must be 'github' or 'server'.`
			);
		}

		if (!fs.existsSync(this.sourceEnvFile)) {
			throw new Error(
				`Environment file not found: ${this.sourceEnvFile}`
			);
		}

		// Check if environment file contains required variables
		const content = fs.readFileSync(this.sourceEnvFile, 'utf8');
		if (this.target === 'github' && !content.includes('GITHUB_TOKEN=')) {
			throw new Error(`GITHUB_TOKEN not found in ${this.sourceEnvFile}`);
		}
	}

	async preFlightChecks() {
		await this.log('Running pre-flight checks...');

		// Check 1: Verify dist directory will exist after build
		const distDir = path.join(this.projectRoot, 'dist');
		if (!fs.existsSync(distDir)) {
			await this.log(
				'[CHECK] dist/ directory will be created by build',
				'info'
			);
		}

		// Check 2: Verify environment file exists
		if (!fs.existsSync(this.sourceEnvFile)) {
			throw new DeployError(
				ErrorCodes.ENV_FILE_NOT_FOUND,
				`Environment file not found: ${this.sourceEnvFile}`,
				'Ensure .env.github or .env.server exists'
			);
		}
		await this.log('[CHECK] Environment file exists', 'success');

		// Check 3: For server deployment, verify SSH key
		if (this.target === 'server') {
			const keyPath = process.env.SFTP_PRIVATE_KEY_PATH;
			if (!keyPath) {
				throw new DeployError(
					ErrorCodes.SSH_KEY_NOT_FOUND,
					'SFTP_PRIVATE_KEY_PATH not set',
					'Add SFTP_PRIVATE_KEY_PATH to .env.server'
				);
			}

			const fullKeyPath = path.resolve(this.projectRoot, keyPath);
			if (!fs.existsSync(fullKeyPath)) {
				throw new DeployError(
					ErrorCodes.SSH_KEY_NOT_FOUND,
					`SSH key not found: ${fullKeyPath}`,
					'Check SFTP_PRIVATE_KEY_PATH points to valid key file'
				);
			}
			await this.log('[CHECK] SSH key file exists', 'success');
		}

		await this.log('All pre-flight checks passed', 'success');
	}

	async loadEnvironment() {
		await this.log(
			`Loading environment for ${chalk.bold(this.target)} deployment...`
		);

		try {
			// Validate environment file content before copying
			await this.validateEnvironmentFile(this.sourceEnvFile);

			// Copy the appropriate environment file to .env
			fs.copyFileSync(this.sourceEnvFile, this.envFile);

			// Load environment variables into process.env
			dotenv.config({ path: this.envFile });

			await this.log(
				`Environment loaded from ${chalk.cyan(this.sourceEnvFile)}`,
				'success'
			);
		} catch (error) {
			throw new Error(`Failed to load environment: ${error.message}`);
		}
	}

	/**
	 * Validate environment file content for security
	 * @param {string} envFilePath - Path to environment file
	 */
	async validateEnvironmentFile(envFilePath) {
		const content = fs.readFileSync(envFilePath, 'utf8');

		for (const line of content.split('\n')) {
			if (line.trim() && !line.startsWith('#')) {
				const [varName, ...valueParts] = line.split('=');
				const varNameTrimmed = varName.trim();
				const value = valueParts.join('=').trim();

				if (!DEPLOY_CONFIG.allowedEnvVars.includes(varNameTrimmed)) {
					throw new DeployError(
						ErrorCodes.ENV_VAR_NOT_ALLOWED,
						`Invalid environment variable: ${varNameTrimmed}`,
						`Only these variables are allowed: ${DEPLOY_CONFIG.allowedEnvVars.join(', ')}`
					);
				}

				if (value === '') {
					throw new DeployError(
						ErrorCodes.ENV_VAR_INVALID,
						`Empty value for: ${varNameTrimmed}`,
						'All environment variables must have values'
					);
				}

				if (
					varNameTrimmed === 'BASE_URL' &&
					!value.startsWith('https://')
				) {
					throw new DeployError(
						ErrorCodes.ENV_VAR_INVALID,
						`BASE_URL must use https://`,
						'Change http:// to https://'
					);
				}

				if (varNameTrimmed === 'SFTP_PORT') {
					const port = parseInt(value, 10);
					if (isNaN(port) || port < 1 || port > 65535) {
						throw new DeployError(
							ErrorCodes.ENV_VAR_INVALID,
							`SFTP_PORT must be between 1-65535`,
							'Use a valid port number'
						);
					}
				}
			}
		}
	}

	async cleanBuild() {
		await this.log('Cleaning previous build...');
		try {
			execSync('npm run clean', {
				cwd: this.projectRoot,
				stdio: 'pipe',
			});
			await this.log('Build directory cleaned', 'success');
		} catch (error) {
			throw new Error(
				`Failed to clean build directory: ${error.message}`
			);
		}
	}

	async buildProject() {
		await this.log('Building project...');
		try {
			// Update robots.txt with correct sitemap URL before building
			await this.updateRobotsTxt();

			execSync('npx astro build', {
				cwd: this.projectRoot,
				stdio: 'pipe',
			});
			await this.log('Project built successfully', 'success');
		} catch (error) {
			throw new Error(`Build failed: ${error.message}`);
		}
	}

	async deploy() {
		if (this.target === 'github') {
			await this.deployToGitHub();
		} else if (this.target === 'server') {
			await this.deployToServer();
		}
	}

	async deployToGitHub() {
		await this.log('Deploying to GitHub Pages...');
		if (this.dryRun) {
			await this.log(
				'[DRY RUN] Would run: gh-pages -d dist -b gh-pages --dotfiles --nojekyll',
				'info'
			);
			return;
		}
		try {
			execSync('npx gh-pages -d dist -b gh-pages --dotfiles --nojekyll', {
				cwd: this.projectRoot,
				stdio: 'pipe',
			});
			await this.log('Successfully deployed to GitHub Pages!', 'success');
		} catch (error) {
			throw new Error(`GitHub deployment failed: ${error.message}`);
		}
	}

	async deployToServer() {
		await this.log('Deploying to private server via SFTP...');
		if (this.dryRun) {
			await this.log(
				'[DRY RUN] Would deploy via SFTP to: ' +
					process.env.SFTP_REMOTE_DIR,
				'info'
			);
			return;
		}

		const deployer = new SftpDeployer();
		const success = await deployer.deploy();

		if (success) {
			await this.log(
				'Successfully deployed to private server!',
				'success'
			);
		} else {
			throw new Error('SFTP deployment failed');
		}
	}

	async updateRobotsTxt() {
		await this.log('Updating robots.txt with correct sitemap URL...');
		try {
			const baseUrl = process.env.BASE_URL;
			if (!baseUrl) {
				throw new DeployError(
					ErrorCodes.ENV_VAR_MISSING,
					'BASE_URL not found in environment variables'
				);
			}

			const robotsPath = path.join(
				this.projectRoot,
				'public',
				'robots.txt'
			);

			// BACKUP the original content
			this.originalRobotsTxt = fs.readFileSync(robotsPath, 'utf8');

			// Replace placeholder with actual sitemap URL
			const updatedContent = this.originalRobotsTxt.replace(
				'__DYNAMIC_SITEMAP_URL__',
				`${baseUrl}/sitemap-index.xml`
			);

			fs.writeFileSync(robotsPath, updatedContent);
			await this.log(
				`Updated robots.txt with sitemap: ${baseUrl}/sitemap-index.xml`,
				'success'
			);
		} catch (error) {
			throw new DeployError(
				ErrorCodes.BUILD_FAILED,
				`Failed to update robots.txt: ${error.message}`
			);
		}
	}

	async cleanup() {
		// Reset robots.txt to original state
		if (this.originalRobotsTxt) {
			try {
				const robotsPath = path.join(
					this.projectRoot,
					'public',
					'robots.txt'
				);
				fs.writeFileSync(robotsPath, this.originalRobotsTxt);
				await this.log('robots.txt restored to original state', 'gray');
			} catch (error) {
				await this.log(
					`Warning: Failed to restore robots.txt: ${error.message}`,
					'warning'
				);
			}
		}

		// Remove the temporary .env file
		if (fs.existsSync(this.envFile)) {
			fs.unlinkSync(this.envFile);
			await this.log('Temporary environment file cleaned up', 'gray');
		}
	}

	async execute() {
		try {
			await this.log(
				`Starting deployment to ${chalk.bold(this.target.toUpperCase())}...`
			);
			if (this.dryRun) {
				await this.log(
					chalk.yellow('DRY RUN MODE - no changes will be made'),
					'warning'
				);
			}
			await this.log('='.repeat(50));

			// Validate deployment target
			await this.validateTarget();

			// Load appropriate environment (validation happens inside)
			await this.loadEnvironment();

			// Pre-flight checks
			await this.preFlightChecks();

			// Clean and build
			await this.cleanBuild();
			await this.buildProject();

			// Deploy based on target
			await this.deploy();

			await this.log('='.repeat(50));
			await this.log(
				`Deployment to ${chalk.bold(this.target.toUpperCase())} completed successfully!`,
				'success'
			);
		} catch (error) {
			await this.log(`Deployment failed: ${error.message}`, 'error');
			process.exit(1);
		} finally {
			await this.cleanup();
		}
	}
}

// Main execution
async function main() {
	const target = process.argv[2];

	if (!target) {
		console.error(chalk.red('Error: Deployment target is required'));
		console.error(
			chalk.yellow('Usage: node scripts/deploy-helper.js [github|server]')
		);
		process.exit(1);
	}

	const deployHelper = new DeployHelper(target);
	await deployHelper.execute();
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
	console.error(
		chalk.red('Unhandled Rejection at:'),
		promise,
		'reason:',
		reason
	);
	process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
	console.error(chalk.red('Uncaught Exception:'), error);
	process.exit(1);
});

// Run main function only if this file is executed directly
if (
	import.meta.url ===
	new URL(`file://${process.argv[1].replace(/\\/g, '/')}`).href
) {
	main();
}

export { DeployHelper };

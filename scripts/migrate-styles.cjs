/**
 * Migration script to rename all .styles.js files to .styles.ts
 *
 * This script:
 * 1. Finds all .styles.js files in the codebase
 * 2. Renames them to .styles.ts
 * 3. Updates any imports that reference the .js extensions
 *
 * Usage: node scripts/migrate-styles.cjs [--dry-run]
 */

const fs = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');

/**
 * Recursively find all files matching a pattern
 */
function findFilesRecursive(dir, pattern) {
	let results = [];
	const items = fs.readdirSync(dir, { withFileTypes: true });

	for (const item of items) {
		const fullPath = path.join(dir, item.name);

		if (item.isDirectory()) {
			// Skip node_modules and .astro
			if (
				item.name !== 'node_modules' &&
				item.name !== '.astro' &&
				item.name !== 'dist'
			) {
				results = results.concat(findFilesRecursive(fullPath, pattern));
			}
		} else if (item.isFile() && pattern.test(item.name)) {
			results.push(fullPath);
		}
	}

	return results;
}

/**
 * Find all .styles.js files in the src directory
 */
function findStyleFiles() {
	const files = findFilesRecursive(
		path.join(process.cwd(), 'src'),
		/\.styles\.js$/
	);
	// Convert to relative paths
	return files.map((file) => path.relative(process.cwd(), file));
}

/**
 * Find all .jsx, .ts, .tsx, .astro files that might import styles
 */
function findSourceFiles() {
	const extensions = ['.jsx', '.ts', '.tsx', '.astro', '.js'];
	const results = [];

	for (const ext of extensions) {
		const pattern = new RegExp(`\\${ext}$`);
		const files = findFilesRecursive(
			path.join(process.cwd(), 'src'),
			pattern
		);
		results.push(...files);
	}

	// Filter out .styles.js files (we're renaming those)
	return results
		.map((file) => path.relative(process.cwd(), file))
		.filter((file) => !file.endsWith('.styles.js'));
}

/**
 * Update imports in a file that reference .styles.js extensions
 */
function updateImportsInFile(filePath, styleFileBasename) {
	if (!fs.existsSync(filePath)) {
		return;
	}

	let content = fs.readFileSync(filePath, 'utf-8');

	// Replace imports of specific .styles.js file with .styles (no extension)
	const patterns = [
		// Match exact imports with various path formats
		new RegExp(
			`from ['"]([^'"]+\\${path.sep})?${styleFileBasename}\\.styles\\.js['"]`,
			'g'
		),
		new RegExp(
			`from ['"]([^'"]+)/${styleFileBasename}\\.styles\\.js['"]`,
			'g'
		),
	];

	let updatedContent = content;
	let hasChanges = false;

	for (const pattern of patterns) {
		const matches = updatedContent.match(pattern);
		if (matches) {
			hasChanges = true;
			updatedContent = updatedContent.replace(
				pattern,
				(_match, p1) => `from '${p1 || ''}${styleFileBasename}.styles'`
			);
		}
	}

	if (hasChanges) {
		if (DRY_RUN) {
			console.log(`Would update imports in: ${filePath}`);
		} else {
			fs.writeFileSync(filePath, updatedContent, 'utf-8');
			console.log(`Updated imports in: ${filePath}`);
		}
	}
}

/**
 * Main migration function
 */
function migrate() {
	console.log('Finding all .styles.js files...');
	const styleFiles = findStyleFiles();

	console.log(`Found ${styleFiles.length} .styles.js files`);
	console.log('');

	if (DRY_RUN) {
		console.log('DRY RUN MODE - No files will be modified');
		console.log('');
	}

	console.log('Step 1: Renaming .styles.js files to .styles.ts');
	const renamedFiles = [];
	for (const file of styleFiles) {
		const newPath = file.replace('.styles.js', '.styles.ts');
		const basename = path.basename(file, '.js');

		if (DRY_RUN) {
			console.log(`Would rename: ${file} -> ${newPath}`);
		} else {
			fs.renameSync(file, newPath);
			console.log(`Renamed: ${file} -> ${newPath}`);
		}
		renamedFiles.push({ oldPath: file, newPath, basename });
	}

	console.log('');
	console.log('Step 2: Updating imports in consuming files');

	// Find all source files that might import styles
	const sourceFiles = findSourceFiles();
	const styleBasenames = renamedFiles.map((f) => f.basename);

	for (const srcFile of sourceFiles) {
		const content = fs.readFileSync(srcFile, 'utf-8');

		// Check if file imports any of the style files
		for (const basename of styleBasenames) {
			if (content.includes(`${basename}.styles.js`)) {
				updateImportsInFile(srcFile, basename);
			}
		}
	}

	console.log('');
	console.log('Migration complete!');
	console.log(`Total files renamed: ${styleFiles.length}`);
	console.log(`Please run 'yarn typecheck' to verify the changes.`);
}

// Run migration
migrate();

# Image Generation System

This documentation describes the convention-based responsive image generation system.

## Overview

The image generation system automatically creates responsive image sizes for source images placed in configured directories. It uses a naming convention to distinguish between source images and generated images.

## Convention

### Source Images

Source images are identified by the following convention:

- **No dash in the filename** (e.g., `photo.jpg`, `project.webp`)
- **Both `.jpg` and `.webp` variants must exist**
- Placed in configured directories (e.g., `public/images/portfolio`)

### Generated Images

Generated images follow this pattern:

- **Dash-separated sizes** (e.g., `photo-400.jpg`, `photo-640.webp`)
- Created automatically by the generation script
- Both `.jpg` and `.webp` variants are generated

## Configuration

Image types are configured in `images.config.js`:

```javascript
export const IMAGE_TYPES = {
	portfolio: {
		directory: 'public/images/portfolio',
		widths: [400, 640, 960],
		sizes: '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw',
	},
};
```

## Workflow

### Adding New Images

1. **Place source images** in the configured directory:
    - Add both `.jpg` and `.webp` variants
    - Use filenames without dashes (e.g., `myproject.jpg` and `myproject.webp`)

2. **Run the generation script**:

    ```bash
    yarn generate-images
    ```

3. **Use in your code**:

    ```javascript
    import { prepareResponsiveImageData } from 'src/infrastructure/imageUtils';

    const imageData = prepareResponsiveImageData(
    	'/images/portfolio/myproject.jpg'
    );
    ```

### Example

If you add `blog-placeholder-6.jpg` and `blog-placeholder-6.webp` to `public/images/portfolio`:

```bash
yarn generate-images
```

The script will automatically:

- Detect the new source image
- Generate `blog-placeholder-6-400.jpg` and `blog-placeholder-6-400.webp`
- Generate `blog-placeholder-6-640.jpg` and `blog-placeholder-6-640.webp`
- Generate `blog-placeholder-6-960.jpg` and `blog-placeholder-6-960.webp`

## Script Behavior

The `scripts/generate-images.js` script:

1. **Reads configuration** from `images.config.js`
2. **Validates widths arrays** to ensure they contain positive integers
3. **Scans directories** for source images (files without dashes)
4. **Checks for both variants** (`.jpg` and `.webp`)
5. **Skips existing images** to avoid regenerating
6. **Generates missing sizes** using Sharp
7. **Provides clear output** showing progress and warnings

## Duplicate Avoidance

The script skips generating images if both `.jpg` and `.webp` variants already exist for a given width. This makes the script safe to run multiple times.

## Error Handling

The script handles errors gracefully:

- Warns about missing source variants
- Continues processing other images if one fails
- Provides clear error messages
- Exits with error code if generation fails

## Adding New Image Types

To add a new image type:

1. Update `images.config.js`:

    ```javascript
    export const IMAGE_TYPES = {
    	portfolio: {
    		/* existing config */
    	},
    	blog: {
    		directory: 'public/images/blog',
    		widths: [600, 900, 1200],
    		sizes: '100vw',
    	},
    };
    ```

2. The script will automatically handle the new type on the next run.

## Implementation Details

- **Library**: Uses [Sharp](https://sharp.pixelplumbing.com/) for fast image processing
- **Quality**: JPEG at 85% with mozjpeg, WebP at 85% with effort 6
- **Resizing**: Lanczos3 kernel, without enlargement
- **Format**: Generates both JPEG (fallback) and WebP (modern) variants

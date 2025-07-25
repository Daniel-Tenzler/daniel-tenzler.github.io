import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/data/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		readTime: z.string().optional(),
		tags: z.array(z.string()).optional(),
		author: z.string().optional(),
	}),
});

const journeyCollection = defineCollection({
	type: 'content',
	schema: z.object({}),
});

export const collections = {
	blog: blog,
	journey: journeyCollection,
};

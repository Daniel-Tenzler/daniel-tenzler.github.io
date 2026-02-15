// Astro content collection types
export interface BlogPostFrontmatter {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImage?: string;
  readTime?: string;
  tags?: string[];
  author?: string;
}

export interface JourneyItemFrontmatter {
  title: string;
  description: string;
  date: Date;
  type?: string;
  icon?: string;
}

// Astro getStaticPaths return type
export interface StaticPath {
  params: Record<string, string | number>;
  props?: Record<string, unknown>;
}

export type StaticPaths = Promise<StaticPath[]>;

/**
 * Content access layer. Routes read content only through these functions,
 * so the static modules in src/content can later be replaced by a CMS
 * (e.g. WordPress REST API) without touching page components.
 */
import { posts, type Post } from "@/content/posts";

export type { Post };

export function getPosts(): Post[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date));
}

export function getFeaturedPosts(limit = 3): Post[] {
  return getPosts()
    .filter((p) => p.featured)
    .slice(0, limit);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getCategories(): string[] {
  return Array.from(new Set(posts.map((p) => p.category)));
}

export function formatDate(iso: string): string {
  const [y = 1970, m = 1, d = 1] = iso.split("-").map(Number);
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

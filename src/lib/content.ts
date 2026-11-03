/**
 * Content access layer. Routes read texts only through these functions.
 * Texts ("Textos") come from Mariana's Substack RSS feed via a server function,
 * because Substack does not allow the browser to read the feed directly (no CORS).
 */
import { substack } from "@/content/site";
import type { Post } from "./substack";
import { getSubstackPosts } from "./substack.functions";

export type { Post };

/** Latest posts, newest first, plus an error flag when the feed could not be read. */
export function loadPosts() {
  return getSubstackPosts();
}

/** Where a former internal article URL (/textos/<slug>) should send the reader. */
export function substackArticleUrl(slug: string): string {
  return `${substack.url}/p/${encodeURIComponent(slug)}`;
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

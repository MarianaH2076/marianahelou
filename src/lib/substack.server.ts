import { parseSubstackFeed, type Post } from "./substack";

export type FeedResult = { posts: Post[]; error: string | null };

const CACHE_MS = 15 * 60 * 1000;
const TIMEOUT_MS = 8000;

let cache: { at: number; posts: Post[] } | null = null;

/** Test hook: forget the cached feed. */
export function resetFeedCache() {
  cache = null;
}

/**
 * Fetches and parses the Substack feed, caching it in memory per server instance.
 * Never throws: on failure it serves the last good copy, or an empty list with an error flag.
 */
export async function loadSubstackFeed(feedUrl: string, fetchImpl: typeof fetch = fetch): Promise<FeedResult> {
  if (cache && Date.now() - cache.at < CACHE_MS) return { posts: cache.posts, error: null };

  try {
    const res = await fetchImpl(feedUrl, {
      headers: { accept: "application/rss+xml, application/xml, text/xml", "user-agent": "MarianaHelouSite/1.0" },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) throw new Error(`Substack feed responded ${res.status}`);
    const posts = parseSubstackFeed(await res.text());
    cache = { at: Date.now(), posts };
    return { posts, error: null };
  } catch (error) {
    console.error("[substack] feed unavailable:", error);
    if (cache) return { posts: cache.posts, error: null };
    return { posts: [], error: "unavailable" };
  }
}

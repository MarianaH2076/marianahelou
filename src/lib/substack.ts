/**
 * Substack RSS parsing. Pure string handling (no DOMParser, no Node APIs) so it runs
 * the same in the browser, Node (Netlify) and Cloudflare Workers.
 */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  url: string; // article on Substack
};

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  hellip: "…",
  mdash: "—",
  ndash: "–",
  lsquo: "‘",
  rsquo: "’",
  ldquo: "“",
  rdquo: "”",
};

export function decodeEntities(text: string): string {
  return text.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] === "#") {
      const n = code[1]?.toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(n) && n > 0 && n <= 0x10ffff ? String.fromCodePoint(n) : match;
    }
    return NAMED_ENTITIES[code.toLowerCase()] ?? match;
  });
}

function stripCdata(text: string): string {
  return text.replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, "$1");
}

function stripTags(html: string): string {
  return html.replace(/<[^>]*>/g, " ");
}

function clean(text: string): string {
  return decodeEntities(stripTags(stripCdata(text))).replace(/\s+/g, " ").trim();
}

function tag(item: string, name: string): string {
  const match = item.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`, "i"));
  return match?.[1] ?? "";
}

function truncate(text: string, max = 220): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ") > 0 ? cut.lastIndexOf(" ") : max).trimEnd() + "…";
}

/** Slug of a Substack article URL: https://x.substack.com/p/<slug> */
export function slugFromUrl(url: string): string {
  const match = url.match(/\/p\/([^/?#]+)/);
  return match?.[1] ?? "";
}

function toIsoDate(pubDate: string): string | null {
  const d = new Date(pubDate);
  return Number.isNaN(d.getTime()) ? null : d.toISOString().slice(0, 10);
}

/** Parses a Substack RSS document into posts, newest first. Invalid items are skipped. */
export function parseSubstackFeed(xml: string): Post[] {
  const items = xml.match(/<item>[\s\S]*?<\/item>/gi) ?? [];
  const posts: Post[] = [];

  for (const item of items) {
    const title = clean(tag(item, "title"));
    const url = clean(tag(item, "link"));
    const date = toIsoDate(clean(tag(item, "pubDate")));
    if (!title || !/^https?:\/\//.test(url) || !date) continue;

    let excerpt = clean(tag(item, "description"));
    if (!excerpt) {
      const firstParagraph = stripCdata(tag(item, "content:encoded")).match(/<p[^>]*>([\s\S]*?)<\/p>/i);
      excerpt = truncate(clean(firstParagraph?.[1] ?? ""));
    }

    posts.push({ slug: slugFromUrl(url), title, excerpt, date, url });
  }

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}

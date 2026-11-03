import { readFileSync } from "node:fs";
import path from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { substackArticleUrl } from "@/lib/content";
import { decodeEntities, parseSubstackFeed } from "@/lib/substack";
import { loadSubstackFeed, resetFeedCache } from "@/lib/substack.server";

const realFeed = readFileSync(path.resolve(__dirname, "fixtures/substack-feed.xml"), "utf8");

const feedWith = (items: string) => `<?xml version="1.0"?><rss><channel>${items}</channel></rss>`;
const item = (title: string, date: string, slug: string, description = "Resumo") =>
  `<item><title><![CDATA[${title}]]></title><description><![CDATA[${description}]]></description>` +
  `<link>https://marianahelou.substack.com/p/${slug}</link><pubDate>${date}</pubDate></item>`;

describe("Substack feed parsing", () => {
  it("reads title, summary, publication date and Substack link from the real feed", () => {
    const [post] = parseSubstackFeed(realFeed);
    expect(post).toEqual({
      slug: "o-mes-em-que-a-pausa-me-mostrou-o",
      title: "O mês em que a pausa me mostrou o caminho",
      excerpt:
        "Entre o burnout, TDAH e um punhado de pausas, estou encontrando formas possíveis de cuidar de mim mesma",
      date: "2025-05-04",
      url: "https://marianahelou.substack.com/p/o-mes-em-que-a-pausa-me-mostrou-o",
    });
  });

  it("orders posts newest first", () => {
    const posts = parseSubstackFeed(
      feedWith(
        item("Antigo", "Mon, 06 Jan 2025 10:00:00 GMT", "antigo") +
          item("Novo", "Sat, 01 Mar 2025 10:00:00 GMT", "novo"),
      ),
    );
    expect(posts.map((p) => p.title)).toEqual(["Novo", "Antigo"]);
  });

  it("skips items without a valid date or link", () => {
    const posts = parseSubstackFeed(feedWith(item("Sem data", "não é data", "x") + item("Ok", "Sat, 01 Mar 2025 10:00:00 GMT", "ok")));
    expect(posts.map((p) => p.title)).toEqual(["Ok"]);
  });

  it("decodes accented characters encoded as HTML entities", () => {
    expect(decodeEntities("poss&#237;veis &#8220;di&#225;rio&#8221; &amp; s&#xe9;rie")).toBe("possíveis “diário” & série");
  });
});

describe("Former internal article URLs", () => {
  it("redirect to the matching article on Substack", () => {
    expect(substackArticleUrl("o-mes-em-que-a-pausa-me-mostrou-o")).toBe(
      "https://marianahelou.substack.com/p/o-mes-em-que-a-pausa-me-mostrou-o",
    );
  });
});

describe("Feed unavailable", () => {
  beforeEach(() => {
    resetFeedCache();
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  it("returns an empty list with an error flag instead of failing the page", async () => {
    const failing = vi.fn().mockRejectedValue(new Error("network down"));
    await expect(loadSubstackFeed("https://example.test/feed", failing)).resolves.toEqual({
      posts: [],
      error: "unavailable",
    });
  });

  it("keeps showing the last texts it managed to load", async () => {
    const ok = vi.fn().mockResolvedValue(new Response(realFeed, { status: 200 }));
    await loadSubstackFeed("https://example.test/feed", ok);
    const failing = vi.fn().mockResolvedValue(new Response("", { status: 503 }));
    const result = await loadSubstackFeed("https://example.test/feed", failing);
    expect(result.error).toBeNull();
    expect(result.posts).toHaveLength(1);
  });
});

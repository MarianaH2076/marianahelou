import { createFileRoute, redirect } from "@tanstack/react-router";

import { substackArticleUrl } from "@/lib/content";

/**
 * Former internal article page. Articles now live on Substack, so any
 * /textos/<slug> link is sent to the matching Substack article (/p/<slug>).
 */
export const Route = createFileRoute("/textos/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ href: substackArticleUrl(params.slug), statusCode: 301 });
  },
  head: () => ({ meta: [{ title: "Redirecionando para o Substack | Mariana Helou" }, { name: "robots", content: "noindex" }] }),
});

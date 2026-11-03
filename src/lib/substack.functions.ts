import { createServerFn } from "@tanstack/react-start";

import { substack } from "@/content/site";
import { loadSubstackFeed } from "./substack.server";

/** Public, read-only: returns the latest Substack posts (or an empty list + error flag). */
export const getSubstackPosts = createServerFn({ method: "GET" }).handler(async () => {
  return loadSubstackFeed(substack.feedUrl);
});

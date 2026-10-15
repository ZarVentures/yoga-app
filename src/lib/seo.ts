import { SITE } from "../data/site";

type HeadValue = Record<string, unknown>;

/**
 * Standard SEO/OpenGraph meta + canonical link block shared by every page head.
 * Pass the page path (e.g. "/about") so each page gets its own canonical URL
 * and og:url — a site-wide canonical pointing at the home page makes Google
 * treat every other page as a duplicate of the home page.
 */
export function seoMeta(title: string, description: string, path = "") {
  const url = path === "" ? SITE.url : `${SITE.url}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@RumanaYoga" },
    ],
    links: [{ rel: "canonical", href: url }],
  } satisfies { meta: HeadValue[]; links: HeadValue[] };
}

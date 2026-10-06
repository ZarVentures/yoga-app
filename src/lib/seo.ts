import { SITE } from "../data/site";

/** Standard SEO/OpenGraph meta block shared by every page head. */
export function seoMeta(title: string, description: string) {
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE.url },
    { property: "og:site_name", content: SITE.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@RumanaYoga" },
  ];
}

import { createFileRoute, notFound } from "@tanstack/react-router";

import { ArticleDetail } from "@/components/blog/ArticleDetail";
import { getPostBySlug } from "@/data/blog";
import { seoMeta } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.post.title} — Rumana Rab Holistic Yoga`;
    return {
      meta: seoMeta(title, loaderData.post.excerpt),
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { post } = Route.useLoaderData();
  return <ArticleDetail post={post} />;
}

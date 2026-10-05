import { createFileRoute } from "@tanstack/react-router";

import { BlogArticles } from "@/components/blog/BlogArticles";
import { BlogHero } from "@/components/blog/BlogHero";
import { FeaturedArticle } from "@/components/blog/FeaturedArticle";
import { WellnessJournalCta } from "@/components/blog/NewsletterCta";
import { seoMeta } from "@/lib/seo";

const title = "Blog — Rumana Rab Holistic Yoga";
const description =
  "Stories, insights and inspiration for your wellness journey — yoga, mindfulness, nutrition, therapy and lifestyle articles by Rumana Rab.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: seoMeta(title, description),
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <BlogHero />
      <FeaturedArticle />
      <BlogArticles />
      <WellnessJournalCta eyebrow="The Wellness Journal" />
    </>
  );
}

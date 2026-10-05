import { createFileRoute, notFound } from "@tanstack/react-router";

import { TrainerDetail } from "@/components/trainers/TrainerDetail";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getTrainerBySlug } from "@/data/trainers";
import { seoMeta } from "@/lib/seo";

export const Route = createFileRoute("/trainer/$slug")({
  loader: ({ params }) => {
    const trainer = getTrainerBySlug(params.slug);
    if (!trainer) throw notFound();
    return { trainer };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Trainer not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.trainer.name} — Rumana Rab Holistic Yoga`;
    return {
      meta: seoMeta(title, loaderData.trainer.bio),
    };
  },
  component: TrainerPage,
});

function TrainerPage() {
  const { trainer } = Route.useLoaderData();
  return (
    <SiteLayout>
      <TrainerDetail trainer={trainer} />
    </SiteLayout>
  );
}

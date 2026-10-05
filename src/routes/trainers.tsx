import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { TrainerGrid } from "@/components/trainers/TrainerGrid";
import { TrainerHero } from "@/components/trainers/TrainerHero";
import { TrainerIntro } from "@/components/trainers/TrainerIntro";
import { WhyChooseTrainers } from "@/components/trainers/WhyChooseTrainers";
import { seoMeta } from "@/lib/seo";

const title = "Trainers — Rumana Rab Holistic Yoga";
const description = "Meet the teachers guiding your holistic yoga journey.";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: seoMeta(title, description),
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <TrainerHero />
      <TrainerIntro />
      <section className="bg-background">
        <div className="container-page pb-16 lg:pb-24">
          <TrainerGrid />
        </div>
      </section>
      <WhyChooseTrainers />
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";

import { AboutTeaser } from "@/components/home/AboutTeaser";
import { Hero } from "@/components/home/Hero";
import { SpecialtiesSection } from "@/components/home/SpecialtiesSection";
import { SuccessStories } from "@/components/home/SuccessStories";
import { TrustBar } from "@/components/home/TrustBar";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { seoMeta } from "@/lib/seo";

const title = "Rumana Rab Holistic Yoga — Peaceful, Personalised Practice";
const description =
  "Holistic yoga, breathwork and nutrition guidance — therapy yoga, prenatal yoga, meditation and more.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: seoMeta(title, description),
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <AboutTeaser />
      <SpecialtiesSection />
      <SuccessStories />
    </SiteLayout>
  );
}

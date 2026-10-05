import { createFileRoute } from "@tanstack/react-router";

import { AboutHero } from "@/components/about/AboutHero";
import { AssociationsSection } from "@/components/about/AssociationsSection";
import { JourneySection } from "@/components/about/JourneySection";
import { MissionVisionSection } from "@/components/about/MissionVisionSection";
import { TrainersSection } from "@/components/about/TrainersSection";
import { WelcomeSection } from "@/components/about/WelcomeSection";
import { WhyChooseSection } from "@/components/about/WhyChooseSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { seoMeta } from "@/lib/seo";

const title = "About — Rumana Rab Holistic Yoga";
const description = "The story and philosophy behind Rumana Rab Holistic Yoga.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: seoMeta(title, description),
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <AboutHero />
      <WelcomeSection />
      <JourneySection />
      <MissionVisionSection />
      <WhyChooseSection />
      <TrainersSection />
      <AssociationsSection />
    </SiteLayout>
  );
}

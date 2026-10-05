import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { BookingCta } from "@/components/schedule/BookingCta";
import { ScheduleHero } from "@/components/schedule/ScheduleHero";
import { ScheduleSection } from "@/components/schedule/ScheduleSection";
import { seoMeta } from "@/lib/seo";

const title = "Schedule — Rumana Rab Holistic Yoga";
const description = "Weekly class timings and session availability.";

export const Route = createFileRoute("/schedule")({
  head: () => ({
    meta: seoMeta(title, description),
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ScheduleHero />
      <ScheduleSection />
      <BookingCta />
    </SiteLayout>
  );
}

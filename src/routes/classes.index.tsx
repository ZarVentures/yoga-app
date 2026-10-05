import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { ClassDetailModal } from "@/components/classes/ClassDetailModal";
import { ClassesGrid } from "@/components/classes/ClassesGrid";
import { ClassesHero } from "@/components/classes/ClassesHero";
import { ClassesIntro } from "@/components/classes/ClassesIntro";
import { ConsultationCta } from "@/components/classes/ConsultationCta";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getClassBySlug } from "@/data/classes";
import { seoMeta } from "@/lib/seo";

const title = "Classes — Rumana Rab Holistic Yoga";
const description = "Explore holistic yoga classes at Rumana Rab Holistic Yoga.";

export const Route = createFileRoute("/classes/")({
  head: () => ({
    meta: seoMeta(title, description),
  }),
  component: Page,
});

function Page() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const selectedClass = selectedSlug ? getClassBySlug(selectedSlug) : undefined;

  return (
    <SiteLayout>
      <ClassesHero />
      <ClassesIntro />
      <section className="container-page pb-16 pt-10 lg:pb-20 lg:pt-14">
        <ClassesGrid onSelect={setSelectedSlug} />
      </section>
      <ConsultationCta />

      {selectedClass ? (
        <ClassDetailModal yogaClass={selectedClass} onClose={() => setSelectedSlug(null)} />
      ) : null}
    </SiteLayout>
  );
}

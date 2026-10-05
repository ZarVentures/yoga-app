import { createFileRoute } from "@tanstack/react-router";

import { WellnessJournalCta } from "@/components/blog/NewsletterCta";
import { CorporateYogaCta } from "@/components/packages/CorporateYogaCta";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PackagesHero } from "@/components/packages/PackagesHero";
import { PackagesPage } from "@/components/packages/PackagesPage";
import { seoMeta } from "@/lib/seo";

const title = "Packages — Rumana Rab Holistic Yoga";
const description = "Membership and session packages for every practice level.";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: seoMeta(title, description),
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PackagesHero />
      <PackagesPage />
      <CorporateYogaCta />
      <WellnessJournalCta
        title="Find the Right Package for You"
        description="Start your yoga journey with a package designed to fit your practice, routine, and wellness goals."
        buttonLabel="View Schedule"
        buttonTo="/schedule"
      />
    </SiteLayout>
  );
}

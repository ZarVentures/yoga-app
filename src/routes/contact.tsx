import { createFileRoute } from "@tanstack/react-router";

import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoSection } from "@/components/contact/ContactInfoSection";
import { ContactNewsletterCta } from "@/components/contact/ContactNewsletterCta";
import { MapSection } from "@/components/contact/MapSection";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { seoMeta } from "@/lib/seo";

const title = "Contact — Rumana Rab Holistic Yoga";
const description = "Get in touch to book a session or ask a question.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: seoMeta(title, description),
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <ContactHero />
      <ContactInfoSection />
      <MapSection />
      <ContactNewsletterCta />
    </SiteLayout>
  );
}

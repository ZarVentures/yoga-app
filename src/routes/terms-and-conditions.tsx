import { createFileRoute } from "@tanstack/react-router";

import { TermsConditionsPage } from "@/components/terms/TermsConditionsPage";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { seoMeta } from "@/lib/seo";

const title = "Terms & Conditions — Rumana Rab Holistic Yoga";
const description =
  "The terms and conditions that apply when using our studio, classes, and services.";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: seoMeta(title, description),
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <TermsConditionsPage />
    </SiteLayout>
  );
}

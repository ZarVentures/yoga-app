import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/layout/SiteLayout";
import { PagePlaceholder } from "@/components/shared/PagePlaceholder";
import { seoMeta } from "@/lib/seo";

const title = "Terms and Conditions — Rumana Rab Holistic Yoga";
const description = "The terms that apply when using our website and services.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: seoMeta(title, description),
  }),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PagePlaceholder eyebrow="Legal" title="Terms &amp; Conditions" description={description} />
    </SiteLayout>
  );
}

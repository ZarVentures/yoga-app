import { createFileRoute } from "@tanstack/react-router";

import { PrivacyPolicyPage } from "@/components/privacy/PrivacyPolicyPage";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { seoMeta } from "@/lib/seo";

const title = "Privacy Policy — Rumana Rab Holistic Yoga";
const description = "How we handle and protect your personal information.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => seoMeta(title, description, "/privacy-policy"),
  component: Page,
});

function Page() {
  return (
    <SiteLayout>
      <PrivacyPolicyPage />
    </SiteLayout>
  );
}

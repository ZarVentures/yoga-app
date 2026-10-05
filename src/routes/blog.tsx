import { Outlet, createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/layout/SiteLayout";

export const Route = createFileRoute("/blog")({
  component: () => (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  ),
});

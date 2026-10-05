import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { X } from "lucide-react";

import { ClassDetailContent } from "@/components/classes/ClassDetailContent";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { getClassBySlug } from "@/data/classes";
import { seoMeta } from "@/lib/seo";

export const Route = createFileRoute("/classes/$slug")({
  loader: ({ params }) => {
    const yogaClass = getClassBySlug(params.slug);
    if (!yogaClass) throw notFound();
    return { yogaClass };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Class not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.yogaClass.label} — Rumana Rab Holistic Yoga`;
    const description = loaderData.yogaClass.description;
    return {
      meta: seoMeta(title, description),
    };
  },
  component: ClassPage,
});

function ClassPage() {
  const { yogaClass } = Route.useLoaderData();
  return (
    <SiteLayout>
      <div className="bg-background">
        <div className="container-page flex items-center justify-between py-4">
          <Link
            to="/classes"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-forest"
          >
            <span className="grid size-8 place-items-center rounded-full bg-light-sage text-forest">
              <X className="size-4" aria-hidden="true" />
            </span>
            Close
          </Link>
          <Button
            asChild
            className="h-9 rounded-full bg-forest px-5 text-forest-foreground shadow-soft hover:bg-forest/90"
          >
            <Link to="/contact">Book a Session</Link>
          </Button>
        </div>
        <ClassDetailContent yogaClass={yogaClass} />
      </div>
    </SiteLayout>
  );
}

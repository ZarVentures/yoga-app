import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { GalleryFilterBar } from "@/components/gallery/GalleryFilterBar";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GalleryHero } from "@/components/gallery/GalleryHero";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { GALLERY_ITEMS, type GalleryFilterId } from "@/data/gallery";
import { seoMeta } from "@/lib/seo";

const title = "Gallery — Rumana Rab Holistic Yoga";
const description =
  "Moments of healing, growth and togetherness from our classes, workshops, events and community.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: seoMeta(title, description),
  }),
  component: Page,
});

function Page() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilterId>("all");

  const items = useMemo(() => {
    if (activeFilter === "all") return GALLERY_ITEMS;
    if (activeFilter === "videos") return GALLERY_ITEMS.filter((item) => item.type === "video");
    return GALLERY_ITEMS.filter((item) => item.type === "image");
  }, [activeFilter]);

  return (
    <SiteLayout>
      <GalleryHero />
      <section className="bg-cream">
        <div className="container-page py-12 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold text-forest sm:text-3xl">
              Explore Our Gallery
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75 sm:text-base">
              Browse the moments that make our studio a home — from daily classes and workshops to
              retreats and the people who share this journey.
            </p>
          </div>

          <div className="mt-8">
            <GalleryFilterBar active={activeFilter} onChange={setActiveFilter} />
          </div>

          <div className="mt-10">
            {items.length > 0 ? (
              <GalleryGrid items={items} />
            ) : (
              <p className="py-12 text-center text-sm text-muted-foreground">
                No moments to show for this filter yet.
              </p>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

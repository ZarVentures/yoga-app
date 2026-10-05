import { GALLERY_FILTERS, type GalleryFilterId } from "@/data/gallery";
import { cn } from "@/lib/utils";

type GalleryFilterBarProps = {
  active: GalleryFilterId;
  onChange: (filter: GalleryFilterId) => void;
};

export function GalleryFilterBar({ active, onChange }: GalleryFilterBarProps) {
  return (
    <div
      role="tablist"
      aria-label="Filter gallery"
      className="flex flex-wrap justify-center gap-2 sm:gap-3"
    >
      {GALLERY_FILTERS.map((filter) => {
        const isActive = active === filter.id;
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={cn(
              "cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors sm:px-5",
              isActive
                ? "border-forest bg-forest text-cream"
                : "border-border bg-card text-foreground/75 hover:border-sage hover:text-forest",
            )}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}

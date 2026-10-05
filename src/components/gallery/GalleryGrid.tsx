import { Play } from "lucide-react";
import { GalleryImage } from "@/components/gallery/GalleryImage";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { type GalleryItem } from "@/data/gallery";
import { useState } from "react";

type GalleryGridProps = {
  items: GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setSelected(item)}
              aria-label={`View ${item.alt}`}
              className="group block w-full cursor-pointer overflow-hidden rounded-[5px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
            >
              <div className="relative overflow-hidden rounded-[5px]">
                <GalleryImage
                  alt={item.alt}
                  src={item.src}
                  aspectClassName="aspect-[4/3]"
                  className="rounded-[5px] transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {item.type === "video" ? (
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 grid place-items-center bg-forest/25"
                  >
                    <span className="grid size-14 place-items-center rounded-full bg-forest/90 text-cream shadow-soft transition-transform group-hover:scale-110">
                      <Play className="size-6 fill-current" />
                    </span>
                  </span>
                ) : null}
              </div>

              <span className="mt-2 block text-center text-sm font-semibold text-foreground/80">
                {item.alt}
              </span>
            </button>
          </li>
        ))}
      </ul>

      {selected ? <GalleryLightbox item={selected} onClose={() => setSelected(null)} /> : null}
    </>
  );
}

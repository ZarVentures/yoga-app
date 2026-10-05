import { ArrowRight } from "lucide-react";

import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { cn } from "@/lib/utils";

type ClassCardProps = {
  slug: string;
  label: string;
  shortDescription: string;
  imageAlt: string;
  image: string;
  imagePosition?: string | undefined;
  onSelect: (slug: string) => void;
};

export function ClassCard({
  slug,
  label,
  shortDescription,
  imageAlt,
  image,
  imagePosition,
  onSelect,
}: ClassCardProps) {
  return (
    <article className="group flex h-full flex-col items-center">
      {/* Tall portrait image card with arch-shaped top + golden frame */}
      <div className="relative w-[88%] overflow-hidden rounded-t-[9rem] border-[6px] border-gold bg-gold shadow-[0_10px_30px_rgba(47,74,58,0.12)] lg:w-[92%]">
        <div className="relative aspect-[3/3.8] w-full overflow-hidden">
          <ImagePlaceholder
            alt={imageAlt}
            label={label}
            src={image}
            imgClassName={imagePosition}
            aspectClassName="aspect-[3/3.8]"
            className="h-full w-full rounded-t-[9rem]"
          />
          {/* Bottom gradient + title overlay */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-forest/90 to-transparent" />
          <h3 className="absolute inset-x-3 bottom-3 text-center font-display text-xl font-semibold leading-snug text-cream">
            {label}
          </h3>
        </div>
      </div>

      <div className="mt-5 flex w-full max-w-[22rem] flex-1 flex-col items-center px-2 text-center">
        <p className="text-sm leading-relaxed text-muted-foreground">{shortDescription}</p>
        <button
          type="button"
          onClick={() => onSelect(slug)}
          className={cn(
            "mt-auto inline-flex items-center gap-1.5 pt-5 text-xs font-bold uppercase tracking-[0.14em]",
            "text-forest transition-colors hover:text-sage-deep",
          )}
        >
          Explore Program
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </button>
      </div>
    </article>
  );
}

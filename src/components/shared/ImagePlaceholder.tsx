import { Image } from "lucide-react";

import { cn } from "@/lib/utils";

type ImagePlaceholderProps = {
  /** Descriptive, accessible alt text — also shown as the caption while no src is set. */
  alt: string;
  /** Optional caption rendered on the placeholder. Defaults to `alt`. */
  label?: string;
  /** Final image URL. Pass a src later to swap the placeholder for the real photo. */
  src?: string;
  /** How the image fits its box: "cover" crops to fill, "contain" shows the whole image. */
  fit?: "cover" | "contain";
  /** Aspect-ratio class, e.g. "aspect-[4/3]". */
  aspectClassName?: string;
  /** Extra classes applied to the rendered <img> (e.g. object-position). */
  imgClassName?: string | undefined;
  /** Called if the image fails to load (e.g. missing file) so callers can swap to a placeholder. */
  onError?: () => void;
  className?: string;
};

/**
 * Responsive image container that doubles as a clear placeholder.
 * Drop in a `src` later to swap the placeholder for the real image.
 */
export function ImagePlaceholder({
  alt,
  label,
  src,
  fit = "cover",
  aspectClassName = "aspect-[4/3]",
  imgClassName,
  onError,
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-light-sage",
        aspectClassName,
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={onError}
          className={cn(
            "absolute inset-0 size-full",
            fit === "contain" ? "object-contain" : "object-cover",
            imgClassName,
          )}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center"
        >
          <Image className="size-7 text-sage-deep/50" aria-hidden="true" />
          <span className="max-w-56 text-xs font-medium uppercase leading-relaxed tracking-[0.16em] text-sage-deep/70">
            {label ?? alt}
          </span>
        </div>
      )}
    </div>
  );
}

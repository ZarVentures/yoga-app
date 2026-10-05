import { Image as ImageIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type GalleryImageProps = {
  alt: string;
  src?: string | undefined;
  aspectClassName?: string;
  imgClassName?: string;
  className?: string;
};

/**
 * Gallery image with a safe fallback. If no src is set, or the file is missing
 * (or fails to load), a styled placeholder renders instead of a broken image icon.
 */
export function GalleryImage({
  alt,
  src,
  aspectClassName = "aspect-[4/3]",
  imgClassName,
  className,
}: GalleryImageProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;

  useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (showPlaceholder) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex w-full flex-col items-center justify-center gap-3 bg-light-sage p-6 text-center",
          aspectClassName,
          className,
        )}
      >
        <ImageIcon className="size-7 text-sage-deep/50" aria-hidden="true" />
        <span className="max-w-56 text-xs font-medium uppercase leading-relaxed tracking-[0.16em] text-sage-deep/70">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cn("relative w-full overflow-hidden bg-light-sage", aspectClassName, className)}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={cn("absolute inset-0 size-full object-cover", imgClassName)}
      />
    </div>
  );
}

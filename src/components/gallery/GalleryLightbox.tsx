import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { GalleryImage } from "@/components/gallery/GalleryImage";
import { type GalleryItem } from "@/data/gallery";

type GalleryLightboxProps = {
  item: GalleryItem;
  onClose: () => void;
};

export function GalleryLightbox({ item, onClose }: GalleryLightboxProps) {
  return (
    <Dialog
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
    >
      <DialogContent className="w-auto max-w-none border-0 bg-transparent p-0 text-cream shadow-none">
        <DialogTitle className="sr-only">{item.alt}</DialogTitle>

        <DialogDescription className="sr-only">{item.alt} — full size preview</DialogDescription>

        {item.type === "video" ? (
          item.videoSrc ? (
            <video
              src={item.videoSrc}
              poster={item.src}
              controls
              playsInline
              className="max-h-[85vh] max-w-full rounded-[5px] border-4 border-gold object-contain"
            />
          ) : (
            <div className="relative overflow-hidden rounded-[5px]">
              <GalleryImage
                alt={item.alt}
                src={item.src}
                aspectClassName="aspect-video"
                className="rounded-[5px]"
              />

              <div className="absolute inset-0 grid place-items-center bg-forest/30">
                <p className="rounded-full bg-forest/90 px-5 py-2 text-sm font-semibold text-cream shadow-soft">
                  Video coming soon
                </p>
              </div>
            </div>
          )
        ) : item.src ? (
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            className="max-h-[85vh] max-w-full rounded-[5px] border-4 border-gold object-contain"
          />
        ) : (
          <div className="grid h-64 place-items-center rounded-[5px] bg-light-sage">
            <p className="text-sm font-medium text-sage-deep/70">{item.alt}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";

import { ClassDetailContent } from "@/components/classes/ClassDetailContent";
import { Button } from "@/components/ui/button";
import { type YogaClass } from "@/data/classes";
import { cn } from "@/lib/utils";

type ClassDetailModalProps = {
  yogaClass: YogaClass;
  onClose: () => void;
};

export function ClassDetailModal({ yogaClass, onClose }: ClassDetailModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="class-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-forest/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative flex h-full w-full flex-col overflow-hidden rounded-none bg-background shadow-lifted",
        )}
      >
        {/* Top controls */}
        <div className="flex shrink-0 items-center justify-between border-b border-border bg-background/95 px-4 py-3 backdrop-blur-sm sm:px-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close class details"
            className="inline-flex items-center gap-2 rounded-full text-sm font-medium text-foreground/80 transition-colors hover:text-forest"
          >
            <span className="grid size-8 place-items-center rounded-full bg-light-sage text-forest">
              <X className="size-4" aria-hidden="true" />
            </span>
            Close
          </button>

          <Button
            asChild
            className="h-9 rounded-full bg-forest px-5 text-forest-foreground shadow-soft hover:bg-forest/90"
          >
            <Link to="/contact">Book a Session</Link>
          </Button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <ClassDetailContent yogaClass={yogaClass} />
        </div>
      </div>
    </div>,
    document.body,
  );
}

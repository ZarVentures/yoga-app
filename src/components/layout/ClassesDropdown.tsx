import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { ClassDetailModal } from "@/components/classes/ClassDetailModal";
import { CLASSES, type YogaClass } from "@/data/classes";

function ProgramThumb({ item }: { item: YogaClass }) {
  const [failed, setFailed] = useState(false);

  return (
    <span className="relative size-11 shrink-0 overflow-hidden rounded-lg border border-border bg-light-sage">
      {item.image && !failed ? (
        <img
          src={item.image}
          alt=""
          aria-hidden="true"
          loading="lazy"
          onError={() => setFailed(true)}
          className={`size-full object-cover ${item.imagePosition ?? ""}`}
        />
      ) : (
        <span className="grid size-full place-items-center text-sage-deep/60">
          <Sparkles className="size-4" aria-hidden="true" />
        </span>
      )}
    </span>
  );
}

export function ClassesDropdown() {
  const [open, setOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<YogaClass | null>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  const openClass = (item: YogaClass) => {
    setOpen(false);
    setSelectedClass(item);
  };

  return (
    <div
      ref={wrapper}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <Link
        to="/classes"
        aria-expanded={open}
        aria-haspopup="true"
        onFocus={() => setOpen(true)}
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-base font-semibold text-foreground/80 transition-colors hover:text-forest data-[status=active]:text-forest data-[status=active]:font-bold"
      >
        Programs
        <ChevronDown
          className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </Link>

      {open ? (
        <div className="absolute left-0 top-full z-50 w-[min(42rem,calc(100vw-3rem))] animate-in slide-in-from-top-2 fade-in-0 duration-150">
          <div className="overflow-hidden rounded-[5px] border border-border bg-card shadow-lifted">
            <div className="flex items-center justify-between gap-4 border-b border-border bg-light-sage/70 px-5 py-3">
              <div className="min-w-0">
                <p className="eyebrow">Our Programs</p>
                <p className="truncate font-display text-lg leading-tight text-forest">
                  Holistic practices for every body
                </p>
              </div>
              <Link
                to="/classes"
                onClick={() => setOpen(false)}
                className="inline-flex shrink-0 items-center gap-1 rounded-full border border-forest/25 bg-card px-3 py-1.5 text-xs font-semibold text-forest transition-colors hover:bg-forest hover:text-cream"
              >
                View all
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>

            <ul
              aria-label="Programs"
              className="grid max-h-[23rem] grid-cols-1 gap-1 overflow-y-auto overscroll-contain p-3 sm:grid-cols-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-sage/40 [&::-webkit-scrollbar-track]:bg-transparent"
            >
              {CLASSES.map((item) => (
                <li key={item.slug}>
                  <button
                    type="button"
                    onClick={() => openClass(item)}
                    className="group flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-light-sage focus-visible:bg-light-sage focus-visible:outline-none"
                  >
                    <ProgramThumb item={item} />
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                        {item.label}
                        <ArrowRight
                          className="size-3.5 shrink-0 -translate-x-1 text-sage-deep opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-muted-foreground">
                        {item.shortDescription}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border bg-light-sage/40 px-5 py-3 text-xs text-muted-foreground">
              <span>Not sure which program fits you?</span>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="font-semibold text-forest underline-offset-4 transition-colors hover:text-sage-deep hover:underline"
              >
                Book a free consultation
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {selectedClass ? (
        <ClassDetailModal yogaClass={selectedClass} onClose={() => setSelectedClass(null)} />
      ) : null}
    </div>
  );
}

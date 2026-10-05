import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarClock, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function PackagesDropdown() {
  const [open, setOpen] = useState(false);
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
        to="/packages"
        aria-expanded={open}
        aria-haspopup="true"
        onFocus={() => setOpen(true)}
        className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-base font-semibold text-foreground/80 transition-colors hover:text-forest data-[status=active]:text-forest data-[status=active]:font-bold"
      >
        Packages
        <ChevronDown
          className={`size-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </Link>

      {open ? (
        <div className="absolute left-0 top-full z-50 w-[min(21rem,calc(100vw-3rem))] animate-in slide-in-from-top-2 fade-in-0 duration-150">
          <div className="overflow-hidden rounded-[5px] border border-border bg-card shadow-lifted">
            <div className="border-b border-border bg-light-sage/70 px-5 py-3">
              <p className="eyebrow">Packages</p>
              <p className="font-display text-lg leading-tight text-forest">Plan your practice</p>
            </div>

            <ul aria-label="Packages" className="p-3">
              <li>
                <Link
                  to="/schedule"
                  onClick={() => setOpen(false)}
                  className="group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-light-sage focus-visible:bg-light-sage focus-visible:outline-none"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-forest/15 bg-light-sage text-forest transition-colors group-hover:border-forest/30 group-hover:bg-card">
                    <CalendarClock className="size-5" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-1.5 text-sm font-semibold text-foreground">
                      Schedule
                      <ArrowRight
                        className="size-3.5 shrink-0 -translate-x-1 text-sage-deep opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="mt-0.5 block text-xs leading-snug text-muted-foreground">
                      View weekly class timings and reserve your spot.
                    </span>
                  </span>
                </Link>
              </li>
            </ul>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border bg-light-sage/40 px-5 py-3 text-xs text-muted-foreground">
              <span>Prefer a personal plan?</span>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="font-semibold text-forest underline-offset-4 transition-colors hover:text-sage-deep hover:underline"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

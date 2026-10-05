import { Link } from "@tanstack/react-router";
import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

import { ClassDetailModal } from "@/components/classes/ClassDetailModal";
import { Button } from "@/components/ui/button";
import { CLASSES, type YogaClass } from "@/data/classes";
import { MAIN_NAV } from "@/data/site";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [classesOpen, setClassesOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState<YogaClass | null>(null);

  if (!open) return null;

  return (
    <div className="xl:hidden">
      <div className="fixed inset-0 z-40 bg-forest/30" onClick={onClose} aria-hidden="true" />
      <div className="fixed inset-y-0 right-0 z-50 flex w-[88%] max-w-sm flex-col bg-card shadow-lifted">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="font-display text-lg text-forest">Menu</span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="grid size-10 shrink-0 place-items-center rounded-full text-forest transition-colors hover:bg-light-sage"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {MAIN_NAV.map((item) =>
              item.label === "Program" ? (
                <li key={item.label}>
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center">
                    <Link
                      to="/classes"
                      onClick={onClose}
                      className="min-w-0 truncate rounded-xl px-4 py-3 text-base text-foreground/85 transition-colors hover:bg-light-sage hover:text-forest"
                    >
                      Program
                    </Link>
                    <button
                      type="button"
                      aria-expanded={classesOpen}
                      aria-label="Toggle classes submenu"
                      onClick={() => setClassesOpen((v) => !v)}
                      className="grid size-11 shrink-0 place-items-center rounded-xl text-forest transition-colors hover:bg-light-sage"
                    >
                      <ChevronDown
                        className={`size-5 transition-transform duration-200 ${classesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>
                  {classesOpen ? (
                    <ul className="mt-1 space-y-0.5 border-l border-border pl-3">
                      {CLASSES.map((cls) => (
                        <li key={cls.slug}>
                          <button
                            type="button"
                            onClick={() => {
                              setClassesOpen(false);
                              setSelectedClass(cls);
                            }}
                            className="block w-full rounded-lg px-4 py-2.5 text-left text-sm text-muted-foreground transition-colors hover:bg-light-sage hover:text-forest"
                          >
                            {cls.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ) : item.label === "Packages" ? (
                <li key={item.label}>
                  <Link
                    to="/packages"
                    onClick={onClose}
                    className="block rounded-xl px-4 py-3 text-base text-foreground/85 transition-colors hover:bg-light-sage hover:text-forest data-[status=active]:font-semibold data-[status=active]:text-forest"
                  >
                    {item.label}
                  </Link>
                  <ul className="mt-1 space-y-0.5 border-l border-border pl-3">
                    <li>
                      <Link
                        to="/schedule"
                        onClick={onClose}
                        className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-light-sage hover:text-forest"
                      >
                        Schedule
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    onClick={onClose}
                    activeOptions={{ exact: item.to === "/" }}
                    className="block rounded-xl px-4 py-3 text-base text-foreground/85 transition-colors hover:bg-light-sage hover:text-forest data-[status=active]:font-semibold data-[status=active]:text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="border-t border-border p-5">
          <Button asChild variant="cta" size="lg" className="w-full">
            <Link to="/contact" onClick={onClose}>
              Book a Session
            </Link>
          </Button>
        </div>
      </div>

      {selectedClass ? (
        <ClassDetailModal yogaClass={selectedClass} onClose={() => setSelectedClass(null)} />
      ) : null}
    </div>
  );
}

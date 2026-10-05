import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CorporateYogaCta() {
  return (
    <section className="pb-14 pt-4 sm:pb-16">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-md border border-gold/20 bg-forest px-5 py-10 shadow-lifted sm:px-8 lg:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_auto]">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold/40 bg-light-sage text-forest">
                  <Building2 className="size-4.5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-gold">
                  Corporate Programs
                </p>
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-cream sm:text-3xl">
                Corporate Yoga
              </h2>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-cream/75">
                Tailored yoga and wellness programs designed for corporate teams and workplaces.
              </p>
            </div>

            <div className="flex w-full flex-col items-start gap-5 lg:w-auto lg:items-end">
              <div className="text-left lg:text-right">
                <p className="text-[0.625rem] font-bold uppercase tracking-[0.14em] text-cream/60">
                  Pricing
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-gold sm:text-2xl">
                  Depends On Corporate
                </p>
              </div>
              <Button
                asChild
                variant="gold"
                size="lg"
                className="h-10 w-full rounded-full px-8 shadow-soft sm:w-auto"
              >
                <Link to="/contact">
                  Enquire Now
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

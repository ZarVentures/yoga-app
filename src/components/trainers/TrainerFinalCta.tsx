import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function TrainerFinalCta() {
  return (
    <section className="bg-background">
      <div className="container-page py-16 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl">
            Find the Right Practice for You
          </h2>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" aria-hidden="true" />
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Explore our classes and discover the perfect practice for your wellness journey.
          </p>
          <Button asChild variant="cta" size="lg" className="mt-7 h-11 px-8">
            <Link to="/classes">
              Explore Our Classes
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

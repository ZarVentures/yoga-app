import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export function BookingCta() {
  return (
    <section className="bg-light-sage">
      <div className="container-page py-16 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight text-forest sm:text-4xl">
            Ready to Begin Your Practice?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Choose a class that suits your schedule and take the first step toward a healthier, more
            balanced you.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild variant="gold" size="lg" className="h-11 rounded-full px-8">
              <Link to="/contact">Book a Class</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="h-11 rounded-full border border-forest/20 bg-surface px-8 text-forest shadow-soft hover:bg-light-sage"
            >
              <Link to="/packages">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

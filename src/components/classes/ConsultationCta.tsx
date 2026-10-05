import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export function ConsultationCta() {
  return (
    <section className="bg-light-sage">
      <div className="container-page py-16 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          
          <p className="eyebrow mt-4">Need Help Choosing?</p>
          <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-forest sm:text-3xl lg:text-4xl">
            Not sure which practice is right for you?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Every body is different. Tell us about your goals, lifestyle, and comfort level, and
            we'll help you find the yoga practice, class, or personal session that truly fits — no
            guesswork.
          </p>
          <Button
            asChild
            variant="gold"
            size="lg"
            className="mt-6 h-11 rounded-full px-8 shadow-soft"
          >
            <Link to="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

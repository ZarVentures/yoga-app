import { Link } from "@tanstack/react-router";

import { ImagePlaceholder } from "@/components/shared/ImagePlaceholder";
import { Button } from "@/components/ui/button";

export function AboutTeaser() {
  return (
    <section className="container-page py-16 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 rounded-[5px]">
        <div className="relative mx-auto w-full max-w-[30rem] lg:max-w-[32rem]">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-[5px] bg-[linear-gradient(180deg,#2C7958_0%,#2D634C_100%)] sm:translate-x-4 sm:translate-y-4"
          />
          <ImagePlaceholder
            src="/rumana-rab.png"
            alt="Portrait of Rumana Rab, therapeutic yoga specialist"
            label="Portrait — Rumana Rab"
            aspectClassName="aspect-[3/2]"
            className="relative w-full rounded-[5px] shadow-[0_10px_30px_rgba(47,74,58,0.14)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[10px] bg-sage/10"
          />
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-[5px] border border-gold/70 bg-light-sage px-4 py-2 shadow-soft sm:bottom-4 sm:right-4">
            <span aria-hidden="true" className="h-2.5 w-[2px] bg-gold" />
            <span className="text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-forest">
              Since 1997
            </span>
          </span>
        </div>

        <div>
          <p className="eyebrow">About Rumana Rab</p>
          <h2 className="mt-3 text-3xl lg:text-4xl">Begin Your Yoga Journey With Rumana Rab</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A dedicated yoga specialist, who approaches yoga as a holistic form of therapy for the
            body, mind, and overall well-being.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Through mindful practice, yoga can become a powerful path toward better health, inner
            balance, physical fitness, and a more peaceful lifestyle.
          </p>

          <div className="mt-6 rounded-xl border border-forest/10 bg-light-sage px-5 py-4 ">
            <p className="font-display text-lg leading-snug text-forest">
              Join Dubai's most trusted therapeutic yoga specialist.
            </p>
          </div>

          <Button asChild variant="cta" size="lg" className="mt-8 rounded-md">
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

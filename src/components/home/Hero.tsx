import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [
  {
    src: "/carousel.png",
    alt: "Hero image 1 — Rumana teaching a yoga class",
    label: "Hero Image 1",
  },
  {
    src: "/carousel1.png",
    alt: "Hero image 2 — Rumana teaching a yoga class",
    label: "Hero Image 2",
  },
  {
    src: "/carousel2.png",
    alt: "Hero image 3 — Rumana teaching a yoga class",
    label: "Hero Image 3",
  },
  {
    src: "/carousel3.png",
    alt: "Hero image 4 — Rumana teaching a yoga class",
    label: "Hero Image 4",
  },
];

const AUTOPLAY_MS = 5000;

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap() ?? 0);
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || paused) return;
    const id = window.setInterval(() => api.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [api, paused]);

  return (
    <section
      aria-label="Rumana Rab Holistic Yoga showcase"
      className="relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
        <CarouselContent className="ml-0">
          {HERO_SLIDES.map((slide, index) => (
            <CarouselItem key={slide.label} className="pl-0">
              <div className="relative aspect-[4/3] min-h-[440px] w-full overflow-hidden sm:aspect-[16/9] sm:min-h-[480px] lg:aspect-[21/9] lg:min-h-0">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  className="absolute inset-0 size-full object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Subtle dark tint so the headline stays readable on the photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"
      />

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center pb-20 sm:pb-24 lg:pb-0">
        <div className="container-page pointer-events-auto w-full">
          <div className="max-w-xl sm:max-w-2xl">
            <p className="relative text-xs font-semibold uppercase tracking-[0.14em] text-gold sm:text-sm sm:tracking-[0.22em]">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full bg-gold/35 blur-xl"
              />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/85 px-3 py-0.5 text-forest">
                <Sparkles className="size-3.5" aria-hidden="true" />
                Welcome to Rumana Rab Holistic Yoga
              </span>
            </p>
            <h1 className="mt-3 text-3xl leading-tight text-[#f0bf4c] font-semibold sm:mt-4 sm:text-5xl lg:text-6xl">
              Heal. Strengthen. Transform.
            </h1>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white sm:mt-4 sm:text-lg">
              A peaceful space where movement, mindfulness, and inner wellness come together.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
              <Button asChild variant="cta" size="lg" className="rounded-md">
                <Link to="/contact">Book Classes</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="border border-cream/40 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
              >
                <Link to="/classes">Explore Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
        <div className="container-page flex items-center justify-between gap-4 pb-3 sm:gap-6 sm:pb-6">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => api?.scrollPrev()}
            className="pointer-events-auto grid size-9 shrink-0 place-items-center rounded-full border border-cream/40 bg-black/30 text-cream backdrop-blur-sm transition-colors hover:bg-black/60 sm:size-10"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
          </button>

          <div
            role="group"
            aria-label="Choose hero slide"
            className="pointer-events-auto flex items-center gap-2"
          >
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.label}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === selected ? "true" : undefined}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  index === selected ? "w-7 bg-gold" : "w-2 bg-cream/60 hover:bg-cream",
                )}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => api?.scrollNext()}
            className="pointer-events-auto grid size-9 shrink-0 place-items-center rounded-full border border-cream/40 bg-black/30 text-cream backdrop-blur-sm transition-colors hover:bg-black/60 sm:size-10"
          >
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

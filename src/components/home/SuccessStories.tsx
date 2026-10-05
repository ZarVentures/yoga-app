import { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    name: "Vinita Shivhare",
    condition: "Lower Back Pain",
    quote:
      "I came to Rumana complaining of lower back pain as a result of slip disc and nerve compression. Within 6 months, I noticed the improvement and could easily practice all the asanas and postures without any pain. Also, the various pranayamas and asanas during the course made me feel healthy and energetic. I must thank Rumana for all her help and in confirming my belief of limitless health and benefits of practicing yoga.",
  },
  {
    name: "Meera Joshi",
    condition: "Knee Pain",
    quote:
      "I had a tendon in the knee damaged. It was very painful and despite a lot of physiotherapy and painkillers, I could not walk without limping or sleep without pain. I also had pain in hip and thigh joints. I started yoga sessions with Rumana 5 weeks ago. Now, I do not have any pain in my hip and thigh joints. It has completely vanished! The knee pain is 90% cured. I am really impressed that with a few yoga exercises, my pain has been cured. THANK YOU RUMANA!",
  },
  {
    name: "Ranjeet Kaur Kanjan",
    condition: "Weight Loss",
    quote:
      "I have lost 10 kilos in one and half month. This could happen only because of Rumana's support and inspiration along with her yoga exercises and specific diet chart which I followed strictly and regularly. It worked! Thanks Rumana!",
  },
  {
    name: "Anjali Menon",
    condition: "Stress & Anxiety",
    quote:
      "Working in a high-pressure environment left me constantly stressed and unable to sleep. After just a few weeks of sessions with Rumana, I felt a genuine shift — calmer mind, better sleep, and a sense of balance I had lost. Her approach is gentle yet deeply effective.",
  },
  {
    name: "Farhan Sheikh",
    condition: "Post-Surgery Recovery",
    quote:
      "Following my shoulder surgery, my doctor recommended yoga for rehabilitation. Rumana tailored every session to my recovery needs. Her patience and knowledge made me feel safe throughout. Today my range of motion is fully restored, and I feel stronger than before.",
  },
] as const;

const AUTOPLAY_MS = 5000;

export function SuccessStories() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [emblaApi]);

  return (
    <section aria-label="Testimonials" className="relative overflow-hidden bg-cream py-8 lg:py-11">
      <img
        src="/testimonials.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-cream/70" />

      <div className="container-page relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sage-deep">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl text-forest lg:text-4xl">Success Stories</h2>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="mt-6 overflow-hidden">
          <div className="flex">
            {TESTIMONIALS.map((story) => (
              <div
                key={story.name}
                role="group"
                aria-roledescription="slide"
                className="min-w-0 shrink-0 grow-0 basis-full px-4"
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="mt-4 text-lg font-semibold text-forest">{story.name}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">{story.condition}</p>

                  <blockquote className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-forest/80 lg:text-base">
                    <span aria-hidden="true" className="text-xl text-gold">
                      &ldquo;
                    </span>
                    {story.quote}
                    <span aria-hidden="true" className="text-xl text-gold">
                      &rdquo;
                    </span>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div
          role="group"
          aria-label="Choose testimonial"
          className="mt-4 flex items-center justify-center gap-2"
        >
          {TESTIMONIALS.map((story, index) => (
            <button
              key={story.name}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === selectedIndex ? "true" : undefined}
              onClick={() => scrollTo(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === selectedIndex ? "w-6 bg-gold" : "w-1.5 bg-sage/40 hover:bg-sage/70",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

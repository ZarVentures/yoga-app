import { useEffect, useRef, useState } from "react";

const QUOTE = "Kill Your Pain With Your Brain";

function TypewriterQuote() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setStarted(true);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started || visibleCount >= QUOTE.length) return;
    const id = window.setTimeout(() => setVisibleCount((v) => v + 1), 70);
    return () => window.clearTimeout(id);
  }, [started, visibleCount]);

  return (
    <p
      ref={ref}
      className="font-display text-lg leading-snug text-gold lg:text-xl"
      aria-label={QUOTE}
    >
      &ldquo;{QUOTE.slice(0, visibleCount)}
      &rdquo;
    </p>
  );
}

export function JourneySection() {
  return (
    <section>
      <div className="container-page py-16 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[16rem_1fr] lg:gap-24">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-[16rem] rounded-[1.25rem] lg:ml-5">
            <img
              src="/rumana-rab1.png"
              alt="Rumana Rab — personal yoga journey"
              loading="lazy"
              className="absolute inset-0 size-full object-cover"
            />
          </div>

          <div>
            <p className="eyebrow">The Journey</p>
            <h2 className="mt-3 text-3xl lg:text-4xl">A Personal Journey Into Yoga</h2>
            <p className="mt-6 text-base leading-[1.6] text-muted-foreground">
              Rumana Rab Certified Yoga Therapist & Holistic Wellness Expert, in Dubai. over 19+
              years of experience in yoga. Rumana has realized her vision of yoga by line the
              foundation of her yoga studio, “Rumana Rab Holistic Yoga”.
            </p>
            <p className="mt-6 text-base leading-[1.6] text-muted-foreground">
              Ms Rumana figured out yoga in 1997 while living in India. She herself was obese and
              diagnosed with Thyroid imbalance. In her wake to overcome her own ailment, she
              practiced yoga and it turned out to be just a remedy!
            </p>
            <p className="mt-4 text-base leading-[1.6] text-muted-foreground">
              Upon moving to Dubai, Rumana Rab continued her dedicated journey with yoga, carrying
              with her years of experience, knowledge, and a deep understanding of holistic
              wellbeing. Rumana coaches her students to take yoga off their mat and apply the
              principles to their day to day lives. She not only teaches this philosophy, she lives
              it! Rumana follows a holistic approach to Yoga.
            </p>

            <div className="mt-6 border-l-4 border-gold pl-4">
              <TypewriterQuote />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

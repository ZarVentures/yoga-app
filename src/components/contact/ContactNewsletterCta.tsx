import { NEWSLETTER } from "@/data/contact";

export function ContactNewsletterCta() {
  return (
    <section aria-label="Wellness Journal" className="bg-light-sage">
      <div className="container-page pb-12 pt-12 lg:pb-16 lg:pt-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{NEWSLETTER.eyebrow}</p>
          <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-forest sm:text-3xl lg:text-4xl">
            {NEWSLETTER.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {NEWSLETTER.description}
          </p>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-sage-deep">
            
          </p>
          <p className="mt-1 text-xs font-medium leading-tight text-forest sm:text-sm">
            {NEWSLETTER.hours}
          </p>
        </div>
      </div>
    </section>
  );
}

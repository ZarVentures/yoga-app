import type { ReactNode } from "react";

import { Eye, Flower2, Target } from "lucide-react";

export function MissionVisionSection() {
  return (
    <section className="container-page py-16 lg:py-24">
      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        <CardShell
          icon={<Target className="size-5" aria-hidden="true" strokeWidth={2.5} />}
          heading="Our Mission"
          text="Our mission is to make yoga a meaningful part of everyday life. With 19 years of experience, we offer personalized practices that support the body, breath, and mind."
        />
        <CardShell
          icon={<Eye className="size-5" aria-hidden="true" strokeWidth={2.5} />}
          heading="Our Vision"
          text="Our vision at Rumana Rab Holistic Yoga is to create a welcoming space where yoga becomes part of everyday life. We aspire to make holistic yoga in Dubai accessible, personalized, and meaningful for people of all levels."
        />
      </div>
    </section>
  );
}

function CardShell({ icon, heading, text }: { icon: ReactNode; heading: string; text: string }) {
  return (
    <article className="relative overflow-hidden rounded-md border border-forest/10 bg-light-sage/50 p-5 shadow-soft lg:p-6">
      <div className="flex items-start gap-4">
        <span className="grid size-14 shrink-0 place-items-center rounded-full bg-white text-sage-deep shadow-soft">
          {icon}
        </span>

        <div className="min-w-0">
          <h2 className="text-[28px] font-semibold leading-tight text-[#123D2B] lg:text-[32px]">
            {heading}
          </h2>

          <div className="mt-4 space-y-3 text-base leading-[1.6] text-muted-foreground">
            {text.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type WellnessJournalCtaProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonTo?: "/contact" | "/schedule";
};

export function WellnessJournalCta({
  eyebrow,
  title = "Have a Question or Feedback?",
  description = "Want to suggest a topic, share your thoughts on an article or just say hello? We'd love to hear from you — reach out any time.",
  buttonLabel = "Contact Us",
  buttonTo = "/contact",
}: WellnessJournalCtaProps = {}) {
  return (
    <section aria-label={eyebrow ?? "Wellness Journal"} className="bg-light-sage">
      <div className="container-page py-16 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-forest sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>

          <Button
            asChild
            variant="gold"
            size="lg"
            className="mt-6 h-10 rounded-full px-8 shadow-soft"
          >
            <Link to={buttonTo}>
              {buttonLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

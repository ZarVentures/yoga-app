import { MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MAP_INSTRUCTIONS_URL } from "@/data/contact";

export function MapSection() {
  return (
    <section className="bg-background">
      <div className="container-page pb-16 pt-4 lg:pb-24 lg:pt-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="relative min-h-[18rem] overflow-hidden rounded-md lg:min-h-[24rem]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.766958690226!2d55.315132!3d25.244773000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d2b47b8b89f%3A0x799bb28184bc8154!2sRumana%20Rab%20Holistic%20Yoga!5e0!3m2!1sen!2sae!4v1788782639193!5m2!1sen!2sae"
              title="Rumana Rab Holistic Yoga Studio Location"
              className="absolute inset-0 size-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <div className="flex flex-col justify-center gap-5">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
              <MapPin className="size-3.5" aria-hidden="true" />
              Dubai, United Arab Emirates
            </span>

            <h2 className="font-display text-2xl font-semibold leading-tight text-forest sm:text-3xl">
              Find Us at Our Studio
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Visit us at our studio in the heart of Dubai. Get in touch before you arrive so we can
              prepare your space and welcome you personally.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Sessions are available by appointment only — reach out to book your visit.
            </p>

            <Button asChild variant="forest" size="lg" className="mt-1 h-11 self-start px-8">
              <a href={MAP_INSTRUCTIONS_URL} target="_blank" rel="noreferrer noopener">
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

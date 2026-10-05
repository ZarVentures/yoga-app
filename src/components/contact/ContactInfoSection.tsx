import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfoCard } from "@/components/contact/ContactInfoCard";
import { CONTACT_CARDS, type ContactCardKey } from "@/data/contact";

const CARD_ICONS: Record<ContactCardKey, typeof MapPin> = {
  location: MapPin,
  email: Mail,
  phone: Phone,
};

export function ContactInfoSection() {
  return (
    <section className="bg-background">
      <div className="container-page grid gap-10 pb-4 pt-16 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:pb-6 lg:pt-24">
        <div>
          <p className="eyebrow">CONTACT INFORMATION</p>
          <h2 className="mt-1 font-display text-4xl font-semibold leading-tight text-forest sm:text-3xl">
            Get in Touch
          </h2>
          <div className="mt-2 h-1 w-12 rounded-full bg-gold" aria-hidden="true" />
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Whether you have a question about programs, bookings or guidance, our team is here to
            help. Choose the way that works best for you.
          </p>

          <div className="mt-8 grid gap-4">
            {CONTACT_CARDS.map((card) => {
              const Icon = CARD_ICONS[card.key];
              return (
                <ContactInfoCard
                  key={card.key}
                  icon={Icon}
                  title={card.title}
                  value={card.value}
                  note={card.note}
                  href={card.href}
                />
              );
            })}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

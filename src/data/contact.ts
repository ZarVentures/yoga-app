import { SITE } from "@/data/site";

export type ContactCardKey = "location" | "email" | "phone";

export type ContactCard = {
  key: ContactCardKey;
  title: string;
  value: string;
  note?: string;
  href?: string;
};

export const CONTACT_CARDS: ContactCard[] = [
  {
    key: "location",
    title: "Our Location",
    value: SITE.contact.address,
    note: "By Appointment Only",
  },
  {
    key: "email",
    title: "Email Us",
    value: SITE.contact.email,
    href: `mailto:${SITE.contact.email}`,
  },
  {
    key: "phone",
    title: "Call Us",
    value: SITE.contact.phone,
  },
];

export const MAP_INSTRUCTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.contact.address,
)}`;

export const NEWSLETTER = {
  eyebrow: "Stay Connected",
  title: "Stay Connected With Our Wellness Journal",
  description:
    "Have a question or need guidance? Our team is here to help during our support hours.",
  
  hours: "Mon–Fri, 9:00 AM – 6:00 PM GST",
};

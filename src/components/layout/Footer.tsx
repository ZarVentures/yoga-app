import { Link } from "@tanstack/react-router";
import { FileText, Mail, MapPin, Phone, Shield } from "lucide-react";
import { useState } from "react";

import { ClassDetailModal } from "@/components/classes/ClassDetailModal";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { CLASSES, type YogaClass } from "@/data/classes";
import { QUICK_LINKS, SITE } from "@/data/site";

const linkClass =
  "text-[0.95rem] text-cream/75 transition-colors hover:text-gold focus-visible:text-gold";

export function Footer() {
  const [selectedClass, setSelectedClass] = useState<YogaClass | null>(null);

  return (
    <>
      <footer className="bg-forest text-cream">
        <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0">
            <Link to="/" className="inline-block">
              <img
                src="/rumanalogo.png"
                alt={SITE.name}
                loading="lazy"
                className="h-14 w-auto sm:h-16"
              />
            </Link>
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-cream/70">
              {SITE.tagline}
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Quick links" className="min-w-0">
            <h3 className="text-base font-bold uppercase tracking-[0.18em] text-gold">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Programs" className="min-w-0">
            <h3 className="text-base font-bold uppercase tracking-[0.18em] text-gold">Programs</h3>
            <ul className="mt-5 space-y-3">
              {CLASSES.filter(
                (item) =>
                  item.slug !== "customized-diet" &&
                  item.slug !== "body-toning-yoga" &&
                  item.slug !== "eye-yoga" &&
                  item.slug !== "yoga-for-kids" &&
                  item.slug !== "yoga-for-arthritis",
              ).map((item) => (
                <li key={item.slug}>
                  <button
                    type="button"
                    onClick={() => setSelectedClass(item)}
                    className="cursor-pointer text-[0.95rem] text-cream/75 transition-colors hover:text-gold focus-visible:text-gold"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <h3 className="text-base font-bold uppercase tracking-[0.18em] text-gold">Contact</h3>
            <ul className="mt-5 space-y-4 text-[0.95rem] text-cream/75">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span className="min-w-0">{SITE.contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span className="min-w-0 break-words">{SITE.contact.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                <span className="min-w-0 break-words">{SITE.contact.email}</span>
              </li>
            </ul>
            <div className="mt-6 border-t border-cream/15 pt-5">
              <ul className="space-y-4">
                <li>
                  <Link to="/privacy-policy" className="flex items-center gap-3">
                    <Shield className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    <span className="min-w-0 text-[0.95rem] text-cream/75 transition-colors hover:text-gold focus-visible:text-gold">
                      Privacy Policy
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="flex items-center gap-3">
                    <FileText className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    <span className="min-w-0 text-[0.95rem] text-cream/75 transition-colors hover:text-gold focus-visible:text-gold">
                      Terms &amp; Conditions
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/15">
          <div className="container-page flex flex-col gap-4 px-10 py-6 text-[0.95rem] text-cream/70 md:flex-row md:items-center md:justify-between lg:px-16">
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
              <span>Copyright © 2026 {SITE.name}. All rights reserved.</span>
            </div>
            <p className="flex items-center gap-2">
              Developed by{" "}
              <a
                href={SITE.developer.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-cream transition-colors hover:text-gold focus-visible:text-gold"
              >
                <img
                  src={SITE.developer.logo}
                  alt={SITE.developer.name}
                  loading="lazy"
                  className="h-7 w-auto"
                />
                <span>{SITE.developer.name}</span>
              </a>
            </p>
          </div>
        </div>
      </footer>

      {selectedClass ? (
        <ClassDetailModal yogaClass={selectedClass} onClose={() => setSelectedClass(null)} />
      ) : null}
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { MobileMenu } from "@/components/layout/MobileMenu";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { SITE } from "@/data/site";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-sm">
        <div className="container-page grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between">
          <Link to="/" className="flex min-w-0 items-center">
            <img
              src="/rumanalogo.png"
              alt={SITE.name}
              loading="lazy"
              className="h-14 w-auto sm:h-16"
            />
          </Link>

          <Navbar />

          <div className="flex items-center gap-2">
            <Button asChild variant="cta" className="hidden xl:inline-flex">
              <Link to="/contact">Book a Session</Link>
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-forest transition-colors hover:bg-light-sage xl:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

import { Link } from "@tanstack/react-router";

import { ClassesDropdown } from "@/components/layout/ClassesDropdown";
import { PackagesDropdown } from "@/components/layout/PackagesDropdown";
import { MAIN_NAV } from "@/data/site";

export function Navbar() {
  return (
    <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
      {MAIN_NAV.map((item) =>
        item.label === "Program" ? (
          <ClassesDropdown key={item.label} />
        ) : item.label === "Packages" ? (
          <PackagesDropdown key={item.label} />
        ) : (
          <Link
            key={item.label}
            to={item.to}
            activeOptions={{ exact: item.to === "/" }}
            className="rounded-md px-3 py-2 text-base font-semibold text-foreground/80 transition-colors hover:text-forest data-[status=active]:font-bold data-[status=active]:text-forest"
          >
            {item.label}
          </Link>
        ),
      )}
    </nav>
  );
}

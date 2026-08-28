import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { VERTICALS } from "@/lib/verticals";

export function Footer() {
  return (
    <footer className="border-t border-border pb-24 pt-16 sm:pb-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-5xl font-medium tracking-tight">{SITE.product}</p>
          <p className="mt-2 font-display text-lg italic text-muted">by {SITE.brand}</p>
          <p className="mt-6 kicker">{SITE.cities}</p>
        </div>
        <div className="flex flex-col gap-3 font-sans text-sm text-muted">
          {VERTICALS.map((v) => (
            <Link key={v.id} to="/$lane" params={{ lane: v.id }} className="hover:text-fg">
              {v.id}
            </Link>
          ))}
          <a href={SITE.phoneHref} className="hover:text-fg">
            {SITE.phone}
          </a>
          <a href={SITE.emailHref} className="hover:text-fg">
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}

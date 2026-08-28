import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { SITE } from "@/lib/site";
import { VERTICALS } from "@/lib/verticals";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.45);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        solid && "border-b border-border bg-bg",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-baseline gap-3 text-fg">
          <span className="font-display text-3xl font-medium tracking-tight">{SITE.product}</span>
          <span className="hidden font-display text-sm italic font-normal text-muted sm:inline">
            by {SITE.brand}
          </span>
        </Link>
        <nav className="flex items-center gap-6 sm:gap-8">
          {VERTICALS.map((v) => (
            <Link
              key={v.id}
              to="/$lane"
              params={{ lane: v.id }}
              className="hidden kicker hover:text-fg md:inline"
            >
              {v.id}
            </Link>
          ))}
          <a href={SITE.phoneHref} className="hidden kicker hover:text-fg lg:inline">
            {SITE.phone}
          </a>
          <Button asChild>
            <Link to="/book">Hold the date</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

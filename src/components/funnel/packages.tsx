import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

const PACKS = [
  {
    id: "night",
    name: "The Night",
    note: "Weddings and private rooms",
    lines: ["Robot + attendant", "Unlimited digital", "On-site prints", "Custom overlay"],
  },
  {
    id: "activation",
    name: "The Activation",
    note: "Corporate and brand",
    featured: true,
    lines: ["Everything in The Night", "Brand wrap + overlay", "Opt-in capture if you want it", "Same-day date hold"],
  },
  {
    id: "flagship",
    name: "Flagship",
    note: "Trade, tour, 800+",
    lines: ["Second unit available", "Producer on site", "Quoted for the date", "Never a menu"],
  },
];

export function Packages() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="kicker">The hold</p>
          <h2 className="mt-4 max-w-xl font-display text-title font-medium">Quoted for the date. Never the hour.</h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {PACKS.map((p) => (
            <article key={p.id} className={p.featured ? "bg-fg p-8 text-bg" : "bg-bg p-8"}>
              <p className="kicker" style={p.featured ? { color: "#6b6458" } : undefined}>
                {p.note}
              </p>
              <h3 className="mt-4 font-display text-3xl font-medium">{p.name}</h3>
              <ul className={`mt-6 space-y-2 text-sm ${p.featured ? "text-bg/70" : "text-muted"}`}>
                {p.lines.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Button asChild variant={p.featured ? "ghost" : "default"}>
                  <Link to="/book" search={{ pack: p.id }}>
                    Hold this
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

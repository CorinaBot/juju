import { Link } from "@tanstack/react-router";
import { VERTICALS } from "@/lib/verticals";
import { FilmRail } from "@/components/funnel/rail";
import { Reveal } from "@/components/motion/reveal";

export function Lanes() {
  return (
    <div id="lookbook">
      <div className="mx-auto max-w-6xl px-6 pt-16">
        <Reveal>
          <p className="kicker">Three rooms</p>
          <h2 className="mt-4 max-w-2xl font-display text-title font-medium">
            Wedding. Corporate. Brand.
          </h2>
          <p className="mt-5 max-w-xl font-light text-muted">
            Same machine. Three buyers. Who you are is the first question — the
            date is the only one that matters.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
            {VERTICALS.map((v) => (
              <Link
                key={v.id}
                to="/$lane"
                params={{ lane: v.id }}
                className="font-display text-lg italic text-primary hover:text-fg"
              >
                {v.kicker}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
      {VERTICALS.map((v) => (
        <FilmRail
          key={v.id}
          id={v.id}
          kicker={v.kicker}
          title={v.title}
          deck={v.deck}
          cta={v.cta}
          lane={v.id}
          slides={v.slides}
        />
      ))}
    </div>
  );
}

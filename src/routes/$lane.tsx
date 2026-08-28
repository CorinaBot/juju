import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { FilmRail } from "@/components/funnel/rail";
import { How } from "@/components/funnel/how";
import { Packages } from "@/components/funnel/packages";
import { Faq } from "@/components/funnel/faq";
import { Close } from "@/components/funnel/close";
import { Button } from "@/components/ui/button";
import { VERTICALS, type Vertical } from "@/lib/verticals";
import { SITE } from "@/lib/site";

function findLane(id: string): Vertical | undefined {
  return VERTICALS.find((v) => v.id === id);
}

export const Route = createFileRoute("/$lane")({
  beforeLoad: ({ params }) => {
    if (!findLane(params.lane)) throw notFound();
  },
  head: ({ params }) => {
    const v = findLane(params.lane);
    const title = v ? `${v.title} · JUJU` : "JUJU";
    return {
      meta: [
        { title },
        { name: "description", content: v?.deck ?? SITE.tagline },
      ],
    };
  },
  component: LanePage,
});

function LanePage() {
  const { lane } = Route.useParams();
  const v = findLane(lane);
  if (!v) return null;
  const hero = v.slides.find((s) => s.video) ?? v.slides[0];

  return (
    <Shell>
      <section className="relative min-h-[85vh] overflow-hidden">
        {hero?.video ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            poster={hero.src}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        ) : hero?.src ? (
          <img src={hero.src} alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : null}
        <div className="film-veil absolute inset-0" />
        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-end px-6 pb-16 pt-32">
          <p className="kicker">{v.kicker}</p>
          <h1 className="mt-5 max-w-3xl font-display text-display font-medium">{v.title}</h1>
          <p className="mt-6 max-w-lg font-light text-fg/80">{v.deck}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button asChild>
              <Link to="/book" search={{ lane: v.id }}>
                {v.cta}
              </Link>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#look">The film</a>
            </Button>
          </div>
        </div>
      </section>
      <div id="look">
        <FilmRail
          id={`${v.id}-rail`}
          kicker={v.kicker}
          title={v.title}
          deck={v.deck}
          cta={v.cta}
          lane={v.id}
          slides={v.slides}
        />
      </div>
      <How />
      <Packages />
      <Faq />
      <Close />
    </Shell>
  );
}

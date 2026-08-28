import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { asset } from "@/lib/asset";
import type { Slide } from "@/lib/verticals";

type Props = {
  id: string;
  kicker: string;
  title: string;
  deck: string;
  cta: string;
  lane: string;
  slides: Slide[];
};

export function FilmRail({ id, kicker, title, deck, cta, lane, slides }: Props) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const cards = [...el.querySelectorAll<HTMLElement>("[data-card]")];
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let dist = Infinity;
      cards.forEach((card, i) => {
        const c = card.offsetLeft + card.offsetWidth / 2;
        const d = Math.abs(c - mid);
        if (d < dist) {
          dist = d;
          best = i;
        }
      });
      setActive(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (paused || reduce.current) return;
    const timer = window.setInterval(() => go(1), 4200);
    return () => window.clearInterval(timer);
  }, [paused, active]);

  function go(dir: number) {
    const el = track.current;
    if (!el) return;
    const cards = [...el.querySelectorAll<HTMLElement>("[data-card]")];
    const next = (active + dir + cards.length) % cards.length;
    cards[next]?.scrollIntoView({
      behavior: reduce.current ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
  }

  const slide = slides[active] ?? slides[0];

  return (
    <section
      id={id}
      className="bg-bg pb-16 pt-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="kicker">{kicker}</p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="font-display text-title font-medium">{title}</h2>
            <p className="mt-4 font-light text-muted">{deck}</p>
          </div>
          <Link
            to="/book"
            search={{ lane }}
            className="font-sans text-kicker font-medium tracking-luxury uppercase text-primary hover:text-fg"
          >
            {cta}
          </Link>
        </div>
      </div>

      <div
        ref={track}
        className="lookbook-track mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-[10vw] pb-2"
        onPointerDown={() => setPaused(true)}
        onPointerUp={() => setPaused(false)}
      >
        {slides.map((s, i) => (
          <figure
            key={s.kicker + i}
            data-card
            className={cn(
              "relative shrink-0 snap-center overflow-hidden",
              s.wide ? "aspect-video w-[86vw] sm:w-[42rem]" : "aspect-[4/5] w-[78vw] sm:w-[24rem]",
              s.colophon ? "bg-fg text-bg" : "bg-surface",
            )}
          >
            {s.colophon ? (
              <div className="flex h-full flex-col justify-end p-8">
                <p className="font-display text-6xl font-medium tracking-tight">JUJU</p>
                <p className="mt-2 font-display text-xl italic font-normal">by Rogue Motions</p>
                <p className="mt-10 font-sans text-kicker tracking-luxury uppercase">{s.title}</p>
              </div>
            ) : s.video ? (
              <video
                className="h-full w-full object-cover"
                poster={s.src ? asset(s.src) : undefined}
                muted
                loop
                playsInline
                autoPlay={i === active}
              >
                <source src={asset(s.video)} type="video/mp4" />
              </video>
            ) : s.src ? (
              <img src={asset(s.src)} alt={s.title} className="h-full w-full object-cover" />
            ) : null}
          </figure>
        ))}
      </div>

      <div className="mx-auto mt-7 flex max-w-6xl items-center gap-5 px-6">
        <button type="button" aria-label="Previous" onClick={() => go(-1)} className="font-display text-3xl leading-none text-muted hover:text-fg">
          ‹
        </button>
        <button type="button" aria-label="Next" onClick={() => go(1)} className="font-display text-3xl leading-none text-muted hover:text-fg">
          ›
        </button>
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-quote italic font-normal">{slide.title}</p>
          <div className="mt-3 h-px bg-border">
            <div
              key={active}
              className="h-px bg-primary"
              style={{
                width: paused || reduce.current ? `${((active + 1) / slides.length) * 100}%` : "100%",
                animation: paused || reduce.current ? "none" : "lookbook-fill 4.2s linear",
              }}
            />
          </div>
        </div>
        <p className="font-display text-sm tabular-nums text-muted">
          {String(active + 1).padStart(2, "0")}
          <span className="text-border"> / </span>
          {String(slides.length).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}

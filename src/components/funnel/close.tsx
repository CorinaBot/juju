import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { Reveal } from "@/components/motion/reveal";
import { asset } from "@/lib/asset";

export function Close() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div className="film-zoom absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={asset("/media/dancefloor.jpg")}
        >
          <source src={asset("/media/v-floor.mp4")} type="video/mp4" />
        </video>
      </div>
      <div className="film-veil absolute inset-0" />
      <div className="relative mx-auto flex min-h-[90vh] max-w-4xl flex-col justify-end px-6 pb-24 pt-32">
        <Reveal>
          <p className="kicker">{SITE.cities}</p>
          <h2 className="mt-6 font-display text-display font-medium">
            Give them a night
            <span className="mt-1 block font-normal italic">they can point at.</span>
          </h2>
          <p className="mt-8 max-w-md font-light text-fg/75">
            Send the date. If JUJU is free, we hold it. If it is not, we say so the same day.
          </p>
          <div className="mt-10 flex flex-wrap items-baseline gap-8">
            <Button asChild>
              <Link to="/book">Hold the date</Link>
            </Button>
            <Button variant="ghost" asChild>
              <a href={SITE.phoneHref}>{SITE.phone}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

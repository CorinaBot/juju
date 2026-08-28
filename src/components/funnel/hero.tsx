import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { asset } from "@/lib/asset";

export function Hero() {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      <div className="film-zoom absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={asset("/media/hero-still.jpg")}
        >
          <source src={asset("/media/hero-bride.mp4")} type="video/mp4" />
        </video>
      </div>
      <div className="film-veil absolute inset-0" />
      <div className="film-exit relative mx-auto flex min-h-dvh max-w-6xl flex-col justify-end px-6 pb-16 pt-32">
        <p className="kicker">The robot that comes to your guests</p>
        <p className="mt-4 font-display text-[clamp(4rem,16vw,9.5rem)] font-medium leading-[0.82] tracking-tight">
          {SITE.product}
        </p>
        <p className="mt-2 font-display text-2xl italic font-normal text-fg/80">
          by {SITE.brand}
        </p>
        <h1 className="mt-8 max-w-3xl font-display text-title font-medium">
          She sees herself.
          <span className="mt-1 block font-normal italic">Then the room changes.</span>
        </h1>
        <p className="mt-6 max-w-lg font-light text-fg/80">
          No booth in a hallway. JUJU walks the floor, shows them the photograph
          it just took, and puts the print in their hand. We bring the power, the
          attendant, the overlay. You take the night.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Button asChild>
            <Link to="/book">Hold the date</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link to="/$lane" params={{ lane: "wedding" }}>
              Three rooms
            </Link>
          </Button>
        </div>
        <p className="mt-8 kicker">
          {SITE.response} · No card to inquire · {SITE.cities}
        </p>
      </div>
    </section>
  );
}

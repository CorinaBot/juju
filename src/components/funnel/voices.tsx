import { Reveal } from "@/components/motion/reveal";
import { asset } from "@/lib/asset";

export function Voices() {
  return (
    <section id="voices" className="bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <p className="kicker">In the room</p>
          <h2 className="mt-4 max-w-xl font-display text-title font-medium">
            They find themselves. Then they say it.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-3 md:grid-cols-2">
          <figure className="relative aspect-video overflow-hidden bg-surface">
            <video className="h-full w-full object-cover" poster={asset("/media/recognize.jpg")} autoPlay muted loop playsInline>
              <source src={asset("/media/recognize.mp4")} type="video/mp4" />
            </video>
          </figure>
          <figure className="relative aspect-video overflow-hidden bg-surface">
            <video className="h-full w-full object-cover" poster={asset("/media/grandma.jpg")} autoPlay muted loop playsInline>
              <source src={asset("/media/grandma-speak.mp4")} type="video/mp4" />
            </video>
          </figure>
        </div>
      </div>
    </section>
  );
}

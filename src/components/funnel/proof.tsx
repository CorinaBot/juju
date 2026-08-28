import { Reveal } from "@/components/motion/reveal";

export function Proof() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <img src="/media/real-wedding.jpg" alt="" className="film-ken absolute inset-0 h-full w-full object-cover" />
      <div className="film-veil absolute inset-0" />
      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-end px-6 pb-20 pt-32">
        <Reveal>
          <p className="kicker">The half-second</p>
          <h2 className="mt-4 max-w-2xl font-display text-title font-medium">
            That’s me.
            <span className="mt-2 block font-normal italic">Then the print is in their hand.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

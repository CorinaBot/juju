import { Reveal } from "@/components/motion/reveal";

const STEPS = [
  { n: "01", t: "Send the date", d: "City, guest band, the room. We answer the same day if JUJU is free." },
  { n: "02", t: "We hold it", d: "One attendant, power, overlay, prints. No hallway. No second vendor." },
  { n: "03", t: "She walks", d: "JUJU comes to the guests. They see themselves. The print is in their hand." },
];

export function How() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="kicker">How it works</p>
          <h2 className="mt-4 max-w-xl font-display text-title font-medium">Three moves. Then the night.</h2>
        </Reveal>
        <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-bg p-8">
              <p className="kicker">{s.n}</p>
              <p className="mt-4 font-display text-2xl font-medium">{s.t}</p>
              <p className="mt-3 font-light text-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

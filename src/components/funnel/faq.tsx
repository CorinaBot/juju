import { Reveal } from "@/components/motion/reveal";

const Q = [
  { q: "Do you publish a rate?", a: "No. The date, the room, and the buyer set the quote. We answer the same day." },
  { q: "Is there a line?", a: "No. JUJU walks. Guests never leave the floor you paid for." },
  { q: "Power? Attendant?", a: "We bring both. You do not find an outlet. You do not staff it." },
  { q: "Florida only?", a: "Miami, Orlando, Tampa. Travel after that — say the city." },
];

export function Faq() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="kicker">Before you send the date</p>
        </Reveal>
        <div className="mt-10 divide-y divide-border">
          {Q.map((item) => (
            <div key={item.q} className="grid gap-3 py-8 md:grid-cols-[1fr_1.2fr]">
              <p className="font-display text-xl font-medium">{item.q}</p>
              <p className="font-light text-muted">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

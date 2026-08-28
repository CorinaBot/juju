import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { Shell } from "@/components/site/shell";
import { Button } from "@/components/ui/button";
import { EVENT_TYPES, GUEST_BANDS, SITE, saveLead, type Lead } from "@/lib/site";
import { cn } from "@/lib/utils";

type Search = { pack?: string; lane?: string };

export const Route = createFileRoute("/book")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    pack: typeof s.pack === "string" ? s.pack : undefined,
    lane: typeof s.lane === "string" ? s.lane : undefined,
  }),
  component: Book,
});

function Book() {
  const { pack, lane } = Route.useSearch();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    eventType: EVENT_TYPES.some((t) => t.id === lane) ? (lane as string) : "",
    date: "",
    guests: "",
    city: "",
    venue: "",
    name: "",
    email: "",
    phone: "",
    notes: pack ? `Interested in ${pack}` : "",
  });

  const set = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const canNext = useMemo(() => {
    if (step === 0) return Boolean(form.eventType);
    if (step === 1) return Boolean(form.date && form.guests && form.city);
    return Boolean(form.name && form.email && form.phone);
  }, [form, step]);

  function submit(e: FormEvent) {
    e.preventDefault();
    if (step < 2) {
      setStep((s) => s + 1);
      return;
    }
    const lead: Lead = { ...form, createdAt: new Date().toISOString() };
    saveLead(lead);
    setDone(true);
  }

  return (
    <Shell>
      <div className="mx-auto grid min-h-dvh max-w-6xl gap-0 pt-24 md:grid-cols-2">
        <div className="relative hidden min-h-[32rem] md:block">
          <img src="/media/recognize.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
          <p className="absolute bottom-10 left-10 right-10 font-display text-title font-medium">
            First we hold the date.
            <span className="mt-2 block font-normal italic">Then we talk about the night.</span>
          </p>
        </div>
        <div className="flex flex-col justify-center px-6 py-16 md:px-12">
          {done ? (
            <div>
              <p className="kicker">Date received</p>
              <h1 className="mt-4 font-display text-title font-medium">We’ll answer within the hour.</h1>
              <p className="mt-4 font-light text-muted">
                If JUJU is free, we hold it. If it is not, we say so the same day.
              </p>
              <p className="mt-8">
                <a href={SITE.phoneHref} className="text-primary">
                  {SITE.phone}
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <p className="kicker">Step {String(step + 1).padStart(2, "0")} / 03</p>
              <h1 className="mt-3 font-display text-title font-medium">
                {step === 0 && "Who is this night for?"}
                {step === 1 && "When, and how many."}
                {step === 2 && "How we reach you."}
              </h1>

              {step === 0 && (
                <div className="mt-8 grid gap-3">
                  {EVENT_TYPES.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => set("eventType", t.id)}
                      className={cn(
                        "border px-5 py-4 text-left transition-colors",
                        form.eventType === t.id ? "border-primary bg-surface" : "border-border hover:border-muted",
                      )}
                    >
                      <p className="font-display text-xl font-medium">{t.label}</p>
                      <p className="mt-1 text-sm text-muted">{t.note}</p>
                    </button>
                  ))}
                </div>
              )}

              {step === 1 && (
                <div className="mt-8 space-y-6">
                  <label className="block">
                    <span className="kicker">Date</span>
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => set("date", e.target.value)}
                      className="mt-2 w-full border-b border-border bg-transparent py-3 text-fg outline-none"
                    />
                  </label>
                  <fieldset>
                    <span className="kicker">Guests</span>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {GUEST_BANDS.map((g) => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => set("guests", g.id)}
                          className={cn(
                            "border px-4 py-2 text-sm",
                            form.guests === g.id ? "border-primary text-fg" : "border-border text-muted",
                          )}
                        >
                          {g.label}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  <label className="block">
                    <span className="kicker">City</span>
                    <input
                      required
                      value={form.city}
                      onChange={(e) => set("city", e.target.value)}
                      className="mt-2 w-full border-b border-border bg-transparent py-3 outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="kicker">Venue</span>
                    <input
                      value={form.venue}
                      onChange={(e) => set("venue", e.target.value)}
                      className="mt-2 w-full border-b border-border bg-transparent py-3 outline-none"
                    />
                  </label>
                </div>
              )}

              {step === 2 && (
                <div className="mt-8 space-y-6">
                  <label className="block">
                    <span className="kicker">Name</span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      className="mt-2 w-full border-b border-border bg-transparent py-3 outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="kicker">Email</span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      className="mt-2 w-full border-b border-border bg-transparent py-3 outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="kicker">Phone</span>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      className="mt-2 w-full border-b border-border bg-transparent py-3 outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="kicker">Notes</span>
                    <textarea
                      value={form.notes}
                      onChange={(e) => set("notes", e.target.value)}
                      rows={3}
                      className="mt-2 w-full border-b border-border bg-transparent py-3 outline-none"
                    />
                  </label>
                </div>
              )}

              <div className="mt-10 flex items-center gap-4">
                {step > 0 && (
                  <Button type="button" variant="ghost" onClick={() => setStep((s) => s - 1)}>
                    Back
                  </Button>
                )}
                <Button type="submit" disabled={!canNext}>
                  {step < 2 ? "Continue" : "Hold this date"}
                </Button>
              </div>
              <p className="mt-6 text-xs text-muted">{SITE.response}</p>
            </form>
          )}
        </div>
      </div>
    </Shell>
  );
}

export function Trust() {
  const items = [
    { n: "Same day", l: "Date held or declined" },
    { n: "One attendant", l: "Power, overlay, prints" },
    { n: "The floor", l: "Not a hallway booth" },
    { n: "Florida + travel", l: "Miami · Orlando · Tampa" },
  ];
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-border md:grid-cols-4">
        {items.map((i) => (
          <div key={i.l} className="bg-bg px-6 py-8">
            <p className="font-display text-xl font-medium">{i.n}</p>
            <p className="mt-2 text-sm text-muted">{i.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";
import { Hero } from "@/components/funnel/hero";
import { Trust } from "@/components/funnel/trust";
import { Lanes } from "@/components/funnel/lanes";
import { Voices } from "@/components/funnel/voices";
import { Proof } from "@/components/funnel/proof";
import { How } from "@/components/funnel/how";
import { Packages } from "@/components/funnel/packages";
import { Faq } from "@/components/funnel/faq";
import { Close } from "@/components/funnel/close";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JUJU by Rogue Motions" },
      {
        name: "description",
        content:
          "JUJU, the roaming robot photo booth from Rogue Motions. Wedding, corporate, brand. Miami, Orlando, Tampa.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Shell>
      <Hero />
      <Trust />
      <Lanes />
      <Voices />
      <Proof />
      <How />
      <Packages />
      <Faq />
      <Close />
    </Shell>
  );
}

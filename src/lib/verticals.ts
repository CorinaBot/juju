export type Slide = {
  src?: string;
  video?: string;
  kicker: string;
  title: string;
  wide?: boolean;
  colophon?: boolean;
};

export type Vertical = {
  id: "wedding" | "corporate" | "brand";
  kicker: string;
  title: string;
  deck: string;
  cta: string;
  slides: Slide[];
};

export const VERTICALS: Vertical[] = [
  {
    id: "wedding",
    kicker: "01 · Wedding",
    title: "The night they point at.",
    deck: "Recognition. The grandmother. The last dance. JUJU walks the room they paid for.",
    cta: "Hold a wedding date",
    slides: [
      { src: "/media/open-bride-45.jpg", video: "/media/look-bride.mp4", kicker: "Opening", title: "The night begins." },
      { src: "/media/dancefloor.jpg", video: "/media/v-floor.mp4", kicker: "The floor", title: "They can point at it.", wide: true },
      { src: "/media/lockup/45-ballroom.jpg", kicker: "Ballroom", title: "That’s me." },
      { src: "/media/grandma.jpg", video: "/media/grandma-speak.mp4", kicker: "Monday", title: "The story they tell." },
      { src: "/media/couple-talk.jpg", video: "/media/zoom-speak.mp4", kicker: "The couple", title: "Book this tonight.", wide: true },
    ],
  },
  {
    id: "corporate",
    kicker: "02 · Corporate",
    title: "The room you paid for, walked.",
    deck: "No queue in a hallway. No booth competing with the program. Throughput without asking anyone to leave.",
    cta: "Hold a corporate date",
    slides: [
      { src: "/media/lanes/corp-gala.jpg", video: "/media/lanes/corp-gala.mp4", kicker: "Gala", title: "Black tie. No line.", wide: true },
      { src: "/media/lanes/corp-roof.jpg", video: "/media/lanes/corp-roof.mp4", kicker: "Offsite", title: "The cocktail does the work." },
      { src: "/media/goldballroom.jpg", kicker: "Ballroom", title: "The room leans in." },
      { src: "/media/planner.jpg", kicker: "The producer", title: "Saturdays go first." },
      { colophon: true, kicker: "Rogue Motions", title: "Miami · Orlando · Tampa" },
    ],
  },
  {
    id: "brand",
    kicker: "03 · Brand",
    title: "The activation that does the work.",
    deck: "Overlay. Names. Opt-in if you want it. The photograph is the proof — and the asset.",
    cta: "Hold an activation",
    slides: [
      { src: "/media/lanes/brand-lounge.jpg", kicker: "Lounge", title: "The brand on the print.", wide: true },
      { src: "/media/rooftop.jpg", video: "/media/v-roof.mp4", kicker: "Launch", title: "They find themselves wearing you." },
      { src: "/media/lockup/1x1-dancefloor.jpg", video: "/media/v-floor.mp4", kicker: "The floor", title: "The party is the media." },
      { src: "/media/point.jpg", video: "/media/point.mp4", kicker: "The point", title: "That’s you." },
      { colophon: true, kicker: "Rogue Motions", title: "Quoted for the date. Never a menu." },
    ],
  },
];

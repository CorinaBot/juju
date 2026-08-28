export const SITE = {
  brand: "Rogue Motions",
  product: "JUJU",
  tagline: "She sees herself. Then the room changes.",
  phone: "305-897-0992",
  phoneHref: "tel:3058970992",
  email: "Roguemosfx@gmail.com",
  emailHref: "mailto:Roguemosfx@gmail.com",
  cities: "Miami · Orlando · Tampa · Travel",
  response: "We reply within the hour.",
} as const;

export const EVENT_TYPES = [
  { id: "brand", label: "Brand activation", note: "Tours, launches, overlays" },
  { id: "corporate", label: "Corporate", note: "Galas, offsites, trade" },
  { id: "wedding", label: "Wedding", note: "Ceremony through last dance" },
  { id: "private", label: "Private", note: "Birthdays, celebrations" },
] as const;

export const GUEST_BANDS = [
  { id: "under-75", label: "Under 75" },
  { id: "75-150", label: "75–150" },
  { id: "150-300", label: "150–300" },
  { id: "300-plus", label: "300+" },
] as const;

export type Lead = {
  eventType: string;
  date: string;
  guests: string;
  city: string;
  venue: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
  createdAt: string;
};

const LEAD_KEY = "juju-lead";

export function saveLead(lead: Lead) {
  localStorage.setItem(LEAD_KEY, JSON.stringify(lead));
}

export function readLead(): Lead | null {
  try {
    const raw = localStorage.getItem(LEAD_KEY);
    return raw ? (JSON.parse(raw) as Lead) : null;
  } catch {
    return null;
  }
}

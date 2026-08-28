# CLAUDE.md — JUJU × Rogue Motions
Handoff from Grok · 28 August 2026
Give this file to Claude first. Then clone the repo.

You are taking over a luxury roaming-robot photobooth funnel for **JUJU** by **Rogue Motions** (Roguemosfx). The job is to ship a site and creatives that sell the recognition moment — guest sees themselves on the LED — without looking like a Canva wedding template or a vibecoded booth clone.

---

## Start here (5 minutes)

1. Clone `https://github.com/CorinaBot/juju`
2. Open this file + `docs/HANDOFF.md` + `docs/FUNNEL-AND-COPY.md`
3. Live preview (no login): https://cdn.jsdelivr.net/gh/CorinaBot/juju@main/docs/index.html
4. Repo media CDN: `https://cdn.jsdelivr.net/gh/CorinaBot/juju@main/public/media/<file>`
5. Vercel exists but is SSO-locked: https://juju-flackomarketing-8716s-projects.vercel.app
   Fix: Vercel project **juju** → Settings → Deployment Protection → turn off Vercel Authentication.

Do not rebuild from scratch unless the owner asks. The repo is the product. Extra stills/films live in the zip the owner is carrying.

---

## Who / product

| | |
|---|---|
| Product | JUJU — attended roaming robot photobooth |
| House | Rogue Motions / Roguemosfx |
| Category | Corporate + brand activation first. Wedding is proof of polish, not the headline buyer. |
| Line | The robot that comes to your guests. |
| Hero beat | She sees herself on the screen. Then the room changes. |
| Geography | Miami / Florida · Atlanta · Virginia · Tennessee · North Carolina · South Carolina · travel |
| Email | Roguemosfx@gmail.com |
| Phone (unresolved — confirm with owner) | `305-897-0992` used on later pages · `980.413.0800` used in original copy bank |
| Competitor to beat | https://www.roboboothusa.com/chicago/products/robot-photobooth — steal density and catalog clarity, not the look |

Hardware truth (lock this):
- Real unit is a **square LED photo frame on a rolling body with a dome camera head**.
- There is a **black unit** and a **white unit**. Both appear in owner photos.
- The LED must show the **same people standing next to the robot**. Screen mismatch kills the sale.

Owner source photos (in the zip, folder `01-your-originals`):
- Indoor wedding bride + black JUJU (`650018200_…_n.jpg`)
- Outdoor banner / unit (`EB01FDF5-…png`)
- Garden lockup screenshot + white-robot ballroom bride screenshot
- OG card (`image.png`)
- Competitor notes (`pasted-text.txt`)

---

## What already exists

### Code (GitHub)
TanStack Start + Vite + React. Routes:

- `/` home film
- `/wedding` `/corporate` `/brand` — three buyer lanes (`src/lib/verticals.ts`)
- `/book` three-step hold: who → date → contact

Key files:
- `src/routes/index.tsx` `book.tsx` `$lane.tsx`
- `src/components/funnel/*` hero, voices, rail, packages, how, faq, close
- `src/components/site/shell.tsx` header footer progress
- `src/styles.css` tokens, grain, captions, reduced-motion
- `src/lib/asset.ts` CDN helper
- `docs/index.html` static public page (jsDelivr-hosted)
- `public/media/**` films and stills already in the repo

Local run (from repo):
```
npm install
npm run dev
```

### Media already in the repo (`public/media`)
Stills: garden, dancefloor, rooftop, goldballroom, lobby, barn, coastal, backyard, hero-still, recognize, grandma, planner, point, couple-talk, real-wedding, open-bride-169, open-bride-45
Lockups: `lockup/45-garden-og.jpg` `lockup/45-ballroom.jpg` `lockup/1x1-dancefloor.jpg`
Films: hero-bride.mp4, look-bride.mp4, zoom-speak.mp4, grandma-speak.mp4, recognize.mp4, point.mp4, v-floor.mp4, v-roof.mp4
Lanes: corp-gala, corp-roof, brand-lounge

CDN example:
`https://cdn.jsdelivr.net/gh/CorinaBot/juju@main/public/media/hero-bride.mp4`

### Extra media (owner zip, not all in git)
God-mode laugh/talk films, testimonial set, venue walks, 40 numbered ads/reels, raw Imagine dumps. See zip folder map below.

---

## Brand rules — do not break

### Voice
- Recognition, not “magic.” Coverage of the floor they paid for. No line.
- Wedding language is editorial, not bridal-blog.
- Corporate language is traffic + brand surface + list (CRM opt-in at share).

### Never say
USA’s first · the magic · unforgettable memories · wow your guests · vibecoded stacks of QR / phone / orange checks · hourly price on the public page · invented logo walls (Meta, Hilton, etc.)

### Type
- Display: **Bodoni Moda** (upright). Site currently uses this.
- Emotional second line only: italic serif (Instrument Serif or Newsreader italic).
- Body / UI: **Libre Franklin** light (or Outfit). Not Inter.
- Kickers: small caps, ~0.22em tracking.
- One line of type on ads. Then stop.

Copy-doc also allows Cormorant Garamond + Outfit. If you change type, pick one system and keep it. Do not mix five serifs.

### Color
- Ink `#0b0a08` or `#0B0B0C`
- Cream / paper `#f3ece1` or `#F4EFE6`
- Champagne `#c9a36a` or `#C4A574` — rules, eyebrows, filled CTAs
- Hairline `#2a261f`
- Purple = robot underglow only. Never a brand wash. Never a gradient blob.

### UI
- Filled champagne CTA. Ghost buttons die on dark film.
- Catalog density like roboboothusa (lists, spec, how-it-works) inside a cinematic film page.
- Grain overlay is allowed (fractal noise, ~0.07 opacity).
- Respect `prefers-reduced-motion`.
- No tacky boxed “feature cards.” Hairline panels or full-bleed chapters.

### Photography / video
- Real hardware. Do not invent a different robot.
- Screen content must match the people in frame.
- Faces are proof. Robot is hero.
- Mute-safe films. Recognition → laugh → speak.

---

## Copy locked (use as-is unless owner changes it)

**Eyebrow:** The roaming robot photobooth
**H1:** The booth that walks the room.
**Dek:** No corner setup. No line. Juju comes to your guests, wears your brand, and hands them a photo before the conversation ends.
**Primary CTA:** Plan an activation
**Secondary CTA:** phone (confirm which number)

Alts to test, do not stack:
No line. No corner booth. No dead floor. / Your booth just grew legs. / The robot comes to your guests. / Meet JUJU.

Form field order is strategy:
1. Name 2. Email 3. Phone
4. I am a — Brand / Agency / Event producer / Planner / Couple / Other
5. Event type — Brand activation / Tour / Trade show / Corporate event / Gala / Wedding / Private celebration / Something else
6. City 7. Event date 8. Notes

Role before date. Brand/Agency/Producer first. Wedding below Gala.
No budget field. No public price.
Button microcopy: “Activations are scoped to the room, the brand layer, and the outcome — not the clock.”

### Internal rate card (never publish hourly)
| Tier | Band |
|---|---|
| Standard ≤300 guests, 3–4 hrs | $2,400–$2,800 |
| Launch 300–800, 5–6 hrs | $3,200–$4,200 |
| Flagship 800+ / trade show / dual | $4,800–$7,000 |
| Tour / multi-city | custom |
| Extra hour | $450–$500 |
| Data / CRM export | +$400 |
| UGC rights | +$300–$600 |

$395/hr is cost basis only. Quote the block.

---

## Three buyer verticals

Defined in `src/lib/verticals.ts`:

1. **Wedding** — recognition / laugh / “book this.” Social proof. Not prospecting headline.
2. **Corporate** — gala, rooftop, no dead floor, planner does not run it.
3. **Brand** — aisle traffic, overlay, opt-in list, send them back to the booth holding the mark.

Each lane has its own stills/films under `public/media/lanes/`.

---

## Ads to run first (in owner zip `07-ad-creatives-reels`)

- `21-wedding-laugh-final.jpg`
- `22-ad-walks-the-room.jpg`
- `24-ad-no-line.jpg`
- `26-ad-comes-to-them.jpg`
- `27-wedding-laugh-reel.mp4`
- `35-screen.mp4`

Hooks: The booth comes to them. / Stop parking photos in a corner. / A robot. A brand surface. A list.

---

## Owner zip folder map

File the owner downloads from Grok: `JUJU-ROGUE-MOTIONS-HANDOFF.zip` (~716 MB)

```
00-read-me/              HANDOFF.md + asset index
01-your-originals/       owner photos + competitor paste
02-lockups-og/           OG source
03-stills-backgrounds/   garden, floor, roof, ballroom, lobby, barn, coastal
04-films-godmode/        recognize, laugh, talk, grandma, planner, point
05-films-testimonials/   bride / groomsman / bridesmaids / couple
06-films-venues/         walk films
07-ad-creatives-reels/   40 ads + JUJU-FUNNEL-AND-COPY.md
```

Optional extra zip: `JUJU-HANDOFF-06-raw-generations.zip` — unused Imagine dumps. Ignore unless you need raw frames.

---

## Open work (do this, in order)

1. Confirm phone number with owner. Put one number everywhere.
2. Turn off Vercel Deployment Protection so `.vercel.app` is public. Point a real host (`juju.roguemosfx.com`) when DNS exists.
3. Keep cinematic film + add roboboothusa-level catalog density (how it works, spec, inclusions, FAQ). Owner hated empty “pretty” pages and also hated tacky boxes.
4. Screen-match every new still/film to the people in frame.
5. Do not publish the rate card. Date-first hold. Same-day yes/no.
6. Banner reprint: black field, giant JUJU, three lines, URL. Phone/QR on an attendant card, not the pull-up.
7. Add the CRM sentence: guest info collected at share, exported for their CRM.
8. Insurance figure only if they have the cert. Do not invent $2M/$5M.

---

## Taste notes from the owner (treat as law)

- “Text font looks disgusting / not elegant. Boxes are ugly and tacky. This isn’t rich.”
- Hero must stay the white-robot + bride / garden lockup energy.
- Testimonials must be realistic. People on the LED = people in the room.
- Wanted a zoom-in film where the couple says they need to book this now (`zoom-speak.mp4`).
- Goal: better than any competitor robobooth. Hypnotic, not template.

---

## Prompt to paste into Claude on the other computer

```
Read CLAUDE.md first, then clone https://github.com/CorinaBot/juju
Live page: https://cdn.jsdelivr.net/gh/CorinaBot/juju@main/docs/index.html
This is JUJU by Rogue Motions — roaming robot photobooth.
Corporate/brand first, wedding is proof.
Do not say USA’s first, magic, or publish hourly prices.
Hardware is the real square-LED robot in the owner photos. Screen must match the people.
Continue the site and creatives. Do not start over.
```

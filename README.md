# Balaji Movers and Siding — Website (Next.js)

A single-page, animated marketing site built from the company's PDF
brochure content, structured to be easy to read and easy to change.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build: `npm run build && npm run start`

## The idea: one small file per job

Instead of one giant page file, everything is split so each file does
exactly one thing. To change something, you almost always only need to
open ONE file:

| I want to...                         | Open this file (JS) | ...and its styles |
|---------------------------------------|-----------------|---------------------|
| Change any text, phone number, image  | `data/siteData.js` | — |
| Add/remove/reorder hero carousel slides | `data/siteData.js` -> `hero.slides` | `components/Home/Hero.css` |
| Edit how the hero carousel behaves    | `components/Home/sections/Hero.js` | `components/Home/Hero.css` |
| Edit the navbar                       | `components/Home/sections/Navbar.js` | `components/Home/Navbar.css` |
| Edit the About text/vision/mission    | `components/Home/sections/About.js` | `components/Home/sections/About.css` |
| Edit the stat numbers (300, 50, 7...) | `components/Home/sections/Stats.js` | `components/Home/sections/Stats.css` |
| Edit the specifications list          | `components/Home/sections/Specifications.js` | `components/Home/sections/Specifications.css` |
| Edit the advantages cards             | `components/Home/sections/Advantages.js` | `components/Home/sections/Advantages.css` |
| Edit the photo gallery                | `components/Home/sections/Gallery.js` | `components/Home/sections/Gallery.css` |
| Edit the certificates                 | `components/Home/sections/Certifications.js` | `components/Home/sections/Certifications.css` |
| Edit the "Dear Customer" CTA banner   | `components/Home/sections/Letter.js` | `components/Home/sections/Letter.css` |
| Edit the team cards                   | `components/Home/sections/Team.js` | `components/Home/sections/Team.css` |
| Edit the contact cards                | `components/Home/sections/Contact.js` | `components/Home/sections/Contact.css` |
| Edit the footer                       | `components/Home/sections/Footer.js` | `components/Home/sections/Footer.css` |
| Edit the image preview popup          | `components/Home/sections/Lightbox.js` | `components/Home/sections/Lightbox.css` |
| Change the loading screen             | `components/Loader/Loader.js` | `components/Loader/Loader.css` |
| Change shared buttons/titles/colors   | — | `components/Home/Home.css`, `styles/globals.css` |

`components/Home/Home.js` doesn't contain any content or styling — its
only job is to list the sections in the order they appear on the page:

```js
<Navbar .../>
<Hero .../>
<About .../>
<Stats .../>
...
```

If you want to reorder the page (e.g. move Team above Gallery), you
just move one line in this file.

## The 3 small "helpers" every section can use

- **`components/Home/Reveal.js`** — wrap anything in `<Reveal>...</Reveal>`
  and it will fade/slide in once scrolled into view. Sections use this
  instead of each writing their own animation logic.
- **`components/Home/useScrollReveal.js`** — the actual logic behind
  `Reveal`. In plain English: "watch this element, and once it's on
  screen, flip a switch." That's the whole animation system.
- **`components/Home/CountUpNumber.js`** — the "300 / 50 / 7..." numbers
  in the stats strip. Counts up in fixed small steps every 20ms —
  simple arithmetic, no animation math.

## Hero carousel

The hero is now a 3-slide carousel, driven entirely by
`data/siteData.js` -> `hero.slides` (an array). Each slide is just:

```js
{
  eyebrow: "...",
  title: "...",
  subtitle: "...",
  image: "/images/...",
  founder: { name, role, photo }   // optional — only slide 1 has this
}
```

To add a 4th slide, add another object to that array — `Hero.js`
doesn't need any changes. How it works, in `Hero.js`:

- One number in state, `activeIndex`, says which slide is showing.
- Every slide is always rendered; only the one matching `activeIndex`
  gets the `slide--active` class (that's what makes it visible/hidden
  — see `Hero.css`).
- A timer advances to the next slide every 6 seconds. Clicking a dot
  or an arrow changes `activeIndex` directly, which restarts that timer.

## CSS files — every section has its own file

Nothing is bundled into one big stylesheet. Every section gets its
own `.css` file, and every selector inside that file is scoped under
that section's own top-level class — so class names never collide or
leak between sections:

```
components/Home/Home.css                    -> .homeParentNode   (SHARED ONLY: buttons, titles, reveal animation)
components/Home/Navbar.css                   -> .navbarParentNode
components/Home/Hero.css                     -> .heroParentNode
components/Home/sections/About.css           -> .aboutParentNode
components/Home/sections/Stats.css           -> .statsParentNode
components/Home/sections/Specifications.css  -> .specificationsParentNode
components/Home/sections/Advantages.css      -> .advantagesParentNode
components/Home/sections/Gallery.css         -> .galleryParentNode
components/Home/sections/Certifications.css  -> .certificationsParentNode
components/Home/sections/Letter.css          -> .letterParentNode
components/Home/sections/Team.css            -> .teamParentNode
components/Home/sections/Contact.css         -> .contactParentNode
components/Home/sections/Footer.css          -> .footerParentNode
components/Home/sections/Lightbox.css        -> .lightboxParentNode
components/Loader/Loader.css                 -> .loaderParentNode
```

`Home.css` is the one exception, and on purpose: it only holds things
used by *multiple* sections (the `.btn` styles, `.sectionTitle` /
`.sectionEyebrow` typography, and the `.reveal` fade-in animation used
by every section through the `<Reveal>` component). Putting a button
style in 12 separate files just to keep "one file per section" would
make changing the button color a 12-file job — so shared things stay
shared, and everything else is split out.

```css
/* components/Home/sections/Stats.css */
.statsParentNode { ... }
.statsParentNode .statCard { ... }
.statsParentNode .statCard .statCard__number { ... }

/* components/Home/sections/Team.css */
.teamParentNode .teamCard:hover { ... }
```

All CSS files are imported once, globally, from `pages/_app.js` —
that's a Next.js requirement for plain (non-Module) CSS files, not a
choice made per-component. Because none of the section root class
names repeat, import order between section files doesn't matter;
`Home.css` is imported first only so its shared/base rules can be
overridden by a section file if one ever needs to.

## Other pieces

- `pages/_app.js` — loads Bootstrap + all CSS files once, globally.
- `pages/_document.js` — fonts (Oswald + Inter) and page meta tags.
- `pages/index.js` — renders `<Loader />` then `<Home />`.
- `styles/globals.css` — only color/spacing variables + basic resets.
  No component styling lives here on purpose.
- `public/images/` — photos extracted/cropped from the PDF brochure
  (hero, gallery, certificates, team, route map, etc). No PDF is
  rendered anywhere — these are plain image files used in `<img>` tags.

## Content source

Copy and figures come from the uploaded PDF brochure. `bms-pl.in`
blocks automated fetching (its `robots.txt` disallows it), so this was
built from the PDF plus the info already shared in this conversation.

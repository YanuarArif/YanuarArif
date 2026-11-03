# Developer Portfolio

A production-quality developer portfolio built with Vite, React, TypeScript, Tailwind CSS, and
shadcn/ui‑style primitives. It is a client-rendered SPA with its own theme system, animated
sections, project case studies, a typed blog, and honest contact-form integration points.

**The interface and all content ship in English (`en`) and Indonesian (`id`).** A toggle in the
header (and the mobile sheet) switches every label, section heading, and content record at once.

> **The projects are real applications** built by the site owner; the case studies and screenshots
> in `src/data/projects.*.ts` describe them. **Employers, articles, and certifications are still
> fictional demonstration content** — replace them with real work history. Details are below.

---

## Getting started (Bun)

```bash
bun install
bun run dev        # http://localhost:5173
```

| Command | What it does |
| --- | --- |
| `bun run dev` | Start the Vite dev server with HMR |
| `bun run build` | Type-check, then build the production bundle to `dist/` |
| `bun run preview` | Serve the built bundle locally |
| `bun run typecheck` | `tsc --noEmit` |
| `bun run lint` | ESLint over the whole project |

Requires Bun (1.2+). Do not use npm, yarn, or pnpm — the project ships a `bun.lock`.

---

## What is implemented

**Layout & navigation**
- Sticky, blur-backed navbar with client-side route links, scroll-spy active indicators, and
  smooth in-page scrolling with a header offset.
- Responsive mobile navigation (Accessible Radix dialog sheet) with focus trapping, `Escape` to
  close, body scroll locking, and automatic close on navigation.
- Animated theme toggle (light/dark), persisted to `localStorage` under `yanuar-portfolio-theme`,
  applied before first paint by an inline script in `index.html` to prevent a flash.
- Language toggle (EN / ID) in the header and the mobile sheet, persisted under
  `yanuar-portfolio-locale`, defaulting to the browser language. `<html lang>` and the Open Graph
  locale are kept in sync for screen readers and crawlers.
- Footer with brand mark, sitemap links, social links, copyright, and a back-to-top control that
  appears after scrolling.

**Home page sections**
1. **Hero** — name, role, value-focused intro, availability badge, two primary CTAs, social links,
   and a code-styled developer card plus an abstract local portrait.
2. **About** — background, interests, goals, current learning, and highlight cards.
3. **Skills** — six categorised groups with technology icons and qualitative experience labels
   (`Advanced` / `Proficient` / `Working knowledge`) instead of fake percentages.
4. **Projects** — featured project cards with artwork, category, stack, feature highlights, live /
   repository links, and a "view details" route.
5. **Experience & Education** — tabbed timeline for work, freelance, development, education, and
   certifications, each with highlights and tags.
6. **Blog preview** — three featured article cards with cover, category, date, and reading time.
7. **Contact** — email/location/social panel plus a validated form (name, email, subject, message)
   with idle/submitting/success/error states and a clearly labelled unconfigured state.

**Routes**
| Path | Page |
| --- | --- |
| `/` | Home (all sections) |
| `/projects/:slug` | Full case study |
| `/blog` | Article listing with category filters |
| `/blog/:slug` | Article detail with in-page typography |
| `*` | Custom 404 with navigation back into the site |

Detail, listing, and 404 routes are code-split with `React.lazy` + `Suspense`, and unknown slugs
render the 404 page instead of an empty shell.

**Case study structure** — overview, problem, solution, main features, stack by layer, development
process, technical challenges with decisions, results, lessons learned, and screenshot gallery.

**Theming** — CSS-variable design tokens for both themes (`src/index.css`), Tailwind v4 `@theme`
bridge, reduced-motion-aware transitions, and AA-contrast text and borders.

**Languages** — every interface string and content record exists in English and Indonesian
(`Localized<T>`), switched from the header or the mobile sheet, persisted in `localStorage`, and
defaulting to the browser language. The choice propagates to `<html lang>`, `og:locale`, document
titles, form validation messages, and `Intl`-formatted dates.

**Motion** — a small `Reveal` wrapper using Motion for scroll entrance, plus hover/focus
transitions. Every animation is disabled or reduced under `prefers-reduced-motion`.

**SEO** — route-level titles, descriptions, canonicals, Open Graph, and Twitter tags via a
lightweight `useSeo` hook (no Helmet dependency), static fallback metadata plus JSON-LD `Person`
schema in `index.html`, `sitemap.xml`, `robots.txt`, and a generated 1200×630 `og-image.png`.

**Accessibility** — semantic landmarks and heading order, skip link, visible focus rings, labelled
form fields with inline errors wired through `aria-describedby` / `aria-invalid`, live-region
status messages, keyboard-operable cards and navigation, and decorative artwork marked
`aria-hidden`.

**Performance** — self-hosted fonts with no render-blocking third-party requests: the Poppins
woff2 files live in `src/assets/fonts/` (latin + latin-ext, split by `unicode-range` so the browser
fetches only the subset it needs), and JetBrains Mono is loaded for code blocks via Fontsource.
Project screenshots are optimised WebP (1600 px wide, ~50–150 KB each), route-level code splitting,
lazy section rendering below the fold, and vendor chunking in `vite.config.ts`.

---

## Project structure

```
.
├── public/
│   ├── _redirects            # Netlify-style SPA fallback
│   ├── favicon.svg
│   ├── images/projects/      # untouched source screenshots (PNG)
│   ├── og-image.png          # 1200×630 social card
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/fonts/         # self-hosted Poppins woff2 (latin, latin-ext) + OFL license
│   ├── assets/images/        # portrait (JPG), project screenshots (WebP), blog covers (SVG)
│   ├── components/
│   │   ├── blog/             # article-content, blog-card
│   │   ├── layout/           # navbar, mobile-nav, footer, logo, layout,
│   │   │                     # scroll-manager, back-to-top, route-fallback, not-found-content
│   │   ├── projects/         # project-card, case-study
│   │   ├── sections/         # hero, about, skills, projects, experience,
│   │   │                     # blog-preview, contact, section-heading
│   │   ├── ui/               # button, card, badge, dialog, form-fields, reveal,
│   │   │                     # tech-icon, social-icon, brand-icons, theme-toggle,
│   │   │                     # language-toggle
│   │   ├── locale-provider.tsx
│   │   └── theme-provider.tsx
│   ├── data/                 # profile, skills, experience, education, ui, media,
│   │                         # projects(.en/.id), blog(.en/.id)
│   ├── hooks/                # use-theme, use-locale, use-seo, use-scroll-spy
│   ├── lib/                  # utils, navigation, blog helpers, tech-icons
│   ├── pages/                # HomePage, ProjectDetailPage, BlogPage, BlogDetailPage, NotFoundPage
│   ├── types/                # shared content models
│   ├── App.tsx
│   ├── index.css             # design tokens + base styles
│   └── main.tsx
├── index.html                # static metadata, theme bootstrap, JSON-LD
├── vercel.json               # SPA rewrite for Vercel
├── vite.config.ts
└── tsconfig.json
```

---

## Reusable components

| Component | Purpose |
| --- | --- |
| `SectionHeading` | Eyebrow + title + supporting copy used by every section |
| `Reveal` | Reduced-motion-safe scroll entrance wrapper |
| `Button` / `Badge` / `Card` | shadcn-style CVA primitives with design-token variants |
| `Dialog` | Radix dialog used by the mobile navigation sheet |
| `Input` / `Textarea` / `Label` / `FieldError` | Labelled, validated form controls with inline errors |
| `ThemeToggle` / `ThemeProvider` | Persisted light/dark theme with pre-paint initialization |
| `LanguageToggle` / `LocaleProvider` | Persisted EN/ID switch that also updates `<html lang>` |
| `Logo` | Monogram + wordmark used in the navbar and footer |
| `SocialIcon` / `BrandIcon` | GitHub, LinkedIn, and email marks (local SVG paths) |
| `TechIcon` | Technology glyphs keyed by stack name with a text fallback |
| `ProjectCard` | Summary card for the featured projects grid |
| `CaseStudy` | Full project detail layout, fed by `Project.caseStudy` |
| `BlogCard` / `ArticleContent` | Article preview card and the block renderer for article bodies |
| `NotFoundContent` | Shared 404 body used by the route and unknown-slug states |
| `RouteFallback` | Suspense skeleton shown while a page chunk loads |
| `ScrollManager` / `BackToTop` | Route scroll restoration and the floating back-to-top button |

---

## Editing content

All copy lives in `src/data` and is typed by `src/types/index.ts`, so removing a required field
fails type-checking rather than breaking the page silently.

### Everything is bilingual

Content modules export a `Localized<T>` record — one complete model per language — and components
read the active slice with `useLocalized()`:

```ts
import { profileContent } from '@/data/profile'
import { useLocalized } from '@/hooks/use-locale'

const profile = useLocalized(profileContent) // Profile in the active locale
```

Since `Localized<T> = Record<'en' | 'id', T>`, a missing translation is a compile error rather than
an empty section. Interface strings (labels, buttons, `aria-label`s, validation messages) live in
`src/data/ui.ts`, typed as `UICopy`, and are read with `useUICopy()`.

### Where each kind of content lives

| Content | File | Notes |
| --- | --- | --- |
| Name, role, intro, email, location, socials, availability | `src/data/profile.ts` | `profileContent` |
| About paragraphs, interests, goals, learning, highlights | `src/data/profile.ts` | `aboutContent` |
| Skills and qualitative levels | `src/data/skills.ts` | `skillGroupsContent` |
| Projects and full case studies | `src/data/projects.en.ts`, `src/data/projects.id.ts` | Lookup helpers in `projects.ts` |
| Experience timeline | `src/data/experience.ts` | `experienceContent` + `experienceKindLabelsContent` |
| Education and certifications | `src/data/education.ts` | `educationContent`, `certificationsContent` |
| Blog articles | `src/data/blog.en.ts`, `src/data/blog.id.ts` | Combined in `blog.ts` |
| Every interface string | `src/data/ui.ts` | `uiCopy`, read via `useUICopy()` |
| Navigation labels | `src/lib/navigation.ts` | `href`s shared, labels per language |
| Image imports | `src/data/media.ts` | One artwork file serves both languages |

**Skills** — ordered groups, each with an icon key (`layout`, `server`, `database`,
`infrastructure`, `workflow`, `mobile`), a description, and `{ name, level }` entries. `level` is a
stable key (`Advanced`, `Proficient`, `Working knowledge`) translated through
`uiCopy[locale].skills.levels`, so no percentage bars are invented. Icons resolve through
`src/lib/tech-icons.ts`; unknown names fall back to a text chip.

**Experience** — `kind` decides the timeline icon and label: `work`, `freelance`, `development`,
`education`, `certification`.

**Site-wide branding** — name, role, and URL live in `src/data/profile.ts`; the pre-JavaScript shell
lives in `index.html` (title, description, canonical, Open Graph, JSON-LD); the absolute URLs live in
`public/sitemap.xml` and `public/robots.txt`. Change all three when you change your domain.

### Adding another language

1. Extend `Locale` in `src/types/index.ts` and add the tag to `SUPPORTED_LOCALES` in
   `src/hooks/use-locale.ts`.
2. Add the new key to every `Localized` record — TypeScript lists each one that is still missing.
3. Add a display name in `src/components/ui/language-toggle.tsx` and an Open Graph locale code in
   `src/hooks/use-seo.ts`.

---

## Adding, editing, or removing projects

Projects live in `src/data/projects.en.ts` and `src/data/projects.id.ts`, combined into a
`Localized<Project[]>` in `src/data/projects.ts`. To add one:

1. Add the screenshot to `src/assets/images/projects/` (WebP, 1600 px wide is enough for the 16:10
   card) and register it in `src/data/media.ts` — the artwork is shared by both languages. Keep the
   untouched original outside `src/` if you need it later.
2. Copy an existing object in **both** locale files, reusing the same `slug` (the card and the case
   study route both key off it, so it must match across languages).
3. Fill in `name`, `category`, `summary`, `description`, `year`, `role`, `duration`, `thumbnail`,
   `thumbnailAlt`, `featured`, `tech`, `features`, `links`, and the `caseStudy` block. Translating
   product names, technology names, and URLs is unnecessary — keep them identical.
4. Add the new path to `public/sitemap.xml`.

To remove a project, delete its object from both locale files (and its artwork if unused). Setting
`featured: false` keeps it reachable by URL but removes it from the home grid. `links.demo` and
`links.repository` are optional: fill in only the destinations that exist publicly, and the card
and case-study page will hide the button that would otherwise be a dead link.

## Adding a blog article

Articles are typed `BlogPost` objects in `src/data/blog.en.ts` and `src/data/blog.id.ts`, with no CMS
and no Markdown dependency:

1. Add a cover to `src/assets/images/blog/` and register it in `src/data/media.ts`.
2. Append an object to **both** locale files with the same `slug` but translated `title`,
   `excerpt`, category-adjacent copy, and `content`. Keep `publishedAt` identical so ordering
   matches, and reuse the same `cover`.
3. Build `content` from blocks: `paragraph`, `heading` (`level: 2 | 3`), `list` (optional
   `ordered`), `code` (`language`, `code`), `quote`, and `callout`. Code blocks are usually best
   left untranslated.
4. Reading time is derived from the word count and dates are formatted through `Intl`, so `id`
   renders `18 September 2026` while `en` renders `September 18, 2026` — nothing to maintain.

The listing page sorts by date, the detail page builds its table of contents from the active
language's headings, and unknown slugs render the 404 page.

---

## Contact form

The form validates on the client (required fields, email shape, minimum message length), blocks
duplicate submissions, and exposes idle, submitting, success, and error states. It never claims a
message was sent unless a request actually succeeded.

To connect a service, set one environment variable (see `.env.example`):

```bash
VITE_CONTACT_ENDPOINT=https://your-endpoint.example.com/contact
```

The endpoint receives `POST` JSON `{ name, email, subject, message, source }` and must answer `2xx`
for success. Anything else surfaces the error state with a mailto fallback. Without the variable the
form shows a clearly labelled "not connected yet" notice and offers the direct email link, so nothing
is misrepresented. Any provider works (Formspree, Resend via a small Worker/function, a Hono route,
etc.) — no SDK is bundled.

---

## Deployment

The build is a static SPA in `dist/`. Configure a fallback rewrite to `/index.html` so nested routes
survive a hard refresh:

- **Vercel** — `vercel.json` is included.
- **Netlify / Cloudflare Pages** — `public/_redirects` is included (`/* /index.html 200`).
- **Other hosts** — add an equivalent catch-all rewrite.

Before going live, update `siteUrl` in `src/data/profile.ts`, the canonical/OG URLs in `index.html`,
and the absolute URLs in `public/sitemap.xml` and `public/robots.txt` to your real domain. Regenerate
`public/og-image.png` if you change the name or branding — it is a static 1200×630 PNG, so the
language toggle does not affect it.

Both languages are served from the same URL: the language is a client-side preference, not a route
prefix. Search engines therefore index whichever language the crawler lands on, with `<html lang>`
and `og:locale` reflecting the active choice.

---

## Manual setup still required

- Replace the demonstration employers, articles, and certifications with your own, in both `en` and
  `id` files. Keep the slugs identical across languages.
- Fill in `links.demo` / `links.repository` for KivaPOS and Saleta Food once those destinations are
  public, and point the social links at real destinations.
- Verify the stack, year, and duration fields on each project — they are the easiest details to get
  out of date.
- Set a real contact endpoint if you want the form to deliver messages.
- Confirm `siteUrl` matches your real deployed domain — Vercel projects are served from
  `<project>.vercel.app`. Keep `index.html`, `sitemap.xml`, and `robots.txt` in step with it.
- Update the domain in the metadata, sitemap, and robots files, then submit the sitemap to search
  consoles.

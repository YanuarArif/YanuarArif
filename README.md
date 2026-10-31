# Developer Portfolio

A production-quality developer portfolio built with Vite, React, TypeScript, Tailwind CSS, and
shadcn/ui‑style primitives. It is a client-rendered SPA with its own theme system, animated
sections, project case studies, a typed blog, and honest contact-form integration points.

> **Everything in this repository is fictional sample content.** The name, employer, projects,
> articles, certifications, and links are placeholders created for demonstration. Replace them —
> details are below.

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
- Animated theme toggle (light/dark), persisted to `localStorage` under `avery-portfolio-theme`,
  applied before first paint by an inline script in `index.html` to prevent a flash.
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

**Motion** — a small `Reveal` wrapper using Motion for scroll entrance, plus hover/focus
transitions. Every animation is disabled or reduced under `prefers-reduced-motion`.

**SEO** — route-level titles, descriptions, canonicals, Open Graph, and Twitter tags via a
lightweight `useSeo` hook (no Helmet dependency), static fallback metadata plus JSON-LD `Person`
schema in `index.html`, `sitemap.xml`, `robots.txt`, and a generated 1200×630 `og-image.png`.

**Accessibility** — semantic landmarks and heading order, skip link, visible focus rings, labelled
form fields with inline errors wired through `aria-describedby` / `aria-invalid`, live-region
status messages, keyboard-operable cards and navigation, and decorative artwork marked
`aria-hidden`.

**Performance** — self-hosted variable fonts (Inter, JetBrains Mono) via Fontsource with no
render-blocking third-party requests, vector artwork (no raster payloads in the app), route-level
code splitting, lazy section rendering below the fold, and vendor chunking in `vite.config.ts`.

---

## Project structure

```
.
├── public/
│   ├── _redirects            # Netlify-style SPA fallback
│   ├── favicon.svg
│   ├── og-image.png          # 1200×630 social card
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/images/        # local SVG artwork (portrait, projects, blog covers)
│   ├── components/
│   │   ├── blog/             # article-content, blog-card
│   │   ├── layout/           # navbar, mobile-nav, footer, logo, layout,
│   │   │                     # scroll-manager, back-to-top, route-fallback, not-found-content
│   │   ├── projects/         # project-card, case-study
│   │   ├── sections/         # hero, about, skills, projects, experience,
│   │   │                     # blog-preview, contact, section-heading
│   │   ├── ui/               # button, card, badge, dialog, form-fields, reveal,
│   │   │                     # tech-icon, social-icon, brand-icons, theme-toggle
│   │   └── theme-provider.tsx
│   ├── data/                 # profile, skills, projects, experience, education, blog
│   ├── hooks/                # use-theme, use-seo, use-scroll-spy
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
| `FormField`, `TextareaField` | Labelled, validated form controls with inline errors |
| `ThemeToggle` / `ThemeProvider` | Persisted light/dark theme with pre-paint initialization |
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

**Personal information** — `src/data/profile.ts`
- `profile` — name, initials, role, tagline, intro, location, timezone, email, site URL, SEO
  description, availability badge, and the social links shown in the hero, contact, and footer.
- `about` — portrait image path/alt text, paragraphs, interests, goals, learning items, highlights.

**Skills** — `src/data/skills.ts`: ordered groups, each with an icon key
(`layout`, `server`, `database`, `infrastructure`, `workflow`, `mobile`), a description, and
`{ name, level }` entries. Icons resolve through `src/lib/tech-icons.ts`; unknown names fall back to
a text chip.

**Experience & education** — `src/data/experience.ts` (`TimelineEntry[]`) and
`src/data/education.ts` (degrees, coursework, certifications). `kind` decides the timeline icon and
label: `work`, `freelance`, `development`, `education`, `certification`.

**Site-wide branding** — `src/data/profile.ts` (`name`, `initials`, `siteUrl`), `index.html`
(title, description, canonical, Open Graph, JSON-LD), `public/sitemap.xml`, `public/robots.txt`, and
`public/favicon.svg`. Search for `averylindqvist` and `Avery Lindqvist` to replace every placeholder
at once.

---

## Adding, editing, or removing projects

Projects live in `src/data/projects.ts` as `Project[]`. To add one:

1. Drop a cover and a detail image in `src/assets/images/projects/` (any imported asset works).
2. Copy an existing object, give it a unique `slug` — the card and the case study route both use it.
3. Fill in `name`, `category`, `summary`, `description`, `year`, `role`, `duration`, `thumbnail`,
   `thumbnailAlt`, `featured`, `tech`, `features`, `links`, and the `caseStudy` block.
4. Add the new path to `public/sitemap.xml`.

To remove a project, delete its object (and its artwork if unused). Setting `featured: false`
keeps it available by URL but removes it from the home grid. Demo and repository links are strings —
point them at real URLs or leave the placeholder `https://example.com/...` values.

## Adding a blog article

Articles live in `src/data/blog.ts` as typed `BlogPost` objects, with no CMS and no Markdown
dependency:

1. Add a cover to `src/assets/images/blog/` and import it at the top of the file.
2. Append an object with a unique `slug`, `title`, `excerpt`, `category`, `publishedAt`
   (`YYYY-MM-DD`), `cover`, `coverAlt`, `tags`, optional `featured`, and a `content` array.
3. Build `content` from blocks: `paragraph`, `heading` (`level: 2 | 3`), `list` (optional
   `ordered`), `code` (`language`, `code`), `quote`, and `callout`.
4. Reading time is derived automatically from the word count — nothing to maintain.

The listing page filters by category, sorts by date, and links to the detail route; unknown slugs
render the 404 page.

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
`public/og-image.png` if you change the name or branding.

---

## Manual setup still required

- Replace all fictional content (name, email, socials, employers, projects, articles, education,
  certifications) with your own.
- Point the demo/repository/social links at real destinations; placeholders use `example.com`.
- Set a real contact endpoint if you want the form to deliver messages.
- Update the domain in the metadata, sitemap, and robots files, then submit the sitemap to search
  consoles.

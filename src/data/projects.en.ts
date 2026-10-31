import { projectMedia } from "@/data/media";
import type { Project } from "@/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  FEATURED PROJECTS — ENGLISH
 *  Every project below is fictional demonstration content.
 *  The Indonesian translation lives in `projects.id.ts`.
 * ─────────────────────────────────────────────────────────────
 */
export const projectsEn: Project[] = [
  {
    slug: "taskflow",
    name: "TaskFlow",
    category: "SaaS · Productivity",
    summary:
      "A less noisy project workspace for small product teams, built around a keyboard-first board and a readable activity log.",
    description:
      "TaskFlow is a case study in project management software: real-time boards, permissions, accessible drag-and-drop, and a deliberate effort to keep the interface from getting noisy.",
    year: "2025",
    role: "Product design & full-stack engineering",
    duration: "12 weeks",
    thumbnail: projectMedia.taskflow.cover,
    thumbnailAlt:
      "TaskFlow app interface showing a kanban board with sprint columns and activity panel",
    featured: true,
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Hono",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    features: [
      {
        title: "Keyboard-first board",
        description:
          "Create, move, and finish tasks without touching a mouse. A command palette covers everything else.",
      },
      {
        title: "Real-time without the jumpiness",
        description:
          "The server decides the order and the client updates optimistically, so remote teammates stay in sync and cards don’t jump around.",
      },
      {
        title: "Activity that explains itself",
        description:
          "A readable timeline records decisions and ownership changes, not just which field was edited.",
      },
      {
        title: "Role-aware permissions",
        description:
          "Workspace, project, and task permissions are enforced in one policy layer that every endpoint shares.",
      },
      {
        title: "Views for different ways of working",
        description:
          "Board, list, and compact timeline views share one filter model, and the state lives in the URL.",
      },
      {
        title: "Portable data",
        description:
          "CSV and JSON exports come from a typed query layer, so teams can always take their data with them.",
      },
    ],
    links: {
      demo: "https://example.com/demo/taskflow",
      repository: "https://github.com/YanuarArif/taskflow",
    },
    caseStudy: {
      overview:
        "TaskFlow is a project workspace for product teams of three to fifteen people. It doesn’t try to win on feature count. It focuses on the few moments that make a board useful every day: capturing work quickly, seeing what changed, and moving a task without losing context.",
      problem:
        "Small teams tend to add tools rather than replace them. The boards they had were either too basic to answer “who changed this, and why?” or so configurable that maintaining the workspace became a project of its own. The brief: a dependable daily workspace that stays fast with hundreds of tasks on a board, works fully from the keyboard, and makes changes easy to follow without a separate audit dashboard.",
      solution:
        "I designed a compact three-panel layout (navigation, board, activity) around a task model where the server has the final say. Every change goes through a typed command endpoint, task order uses fractional indexes, and events are written in the same step as the data change. The board updates optimistically and still reconciles cleanly when two people move the same card.",
      stack: [
        {
          label: "Interface",
          items: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Motion"],
        },
        { label: "Application", items: ["Hono", "Zod", "Node.js", "REST API"] },
        {
          label: "Data & infrastructure",
          items: ["PostgreSQL", "Prisma", "Redis", "Docker"],
        },
      ],
      process: [
        {
          title: "Map the daily routine",
          description:
            "I interviewed four small product teams and watched how they used their current boards. Most of the friction came from status meetings and unclear ownership, not from missing features.",
        },
        {
          title: "Design the information model",
          description:
            "I modelled workspaces, projects, tasks, comments, and events before touching the interface. Permissions and activity history were part of the data from the start, not features added later.",
        },
        {
          title: "Build vertical slices",
          description:
            "Each slice shipped end to end: schema, endpoint, interface, tests. The board came first, then activity, filters, and exports. Integration problems showed up early that way.",
        },
        {
          title: "Test with a small beta group",
          description:
            "Three teams used it for two weeks. I watched sessions, tracked error states, and cut two planned features that added configuration without changing how anyone worked.",
        },
      ],
      challenges: [
        {
          title: "Moving cards without a mouse",
          problem:
            "A board that only supports pointer drag-and-drop doesn’t work for keyboard and assistive-technology users, and native drag events tell screen readers very little.",
          solution:
            "Each card has a move menu and dedicated keyboard shortcuts. A polite live region announces the new column and position after every move, and the same command API handles pointer, keyboard, and bulk actions.",
        },
        {
          title: "Reordering at the same time",
          problem:
            "When two people moved cards at once, positions got duplicated and updates were occasionally lost. Rewriting every row on each move wouldn’t scale to large boards.",
          solution:
            "I used fractional string indexes and a revision field on each task. A move is sent as “place after task X”, the server resolves it, and clients only reconcile the tasks whose revision changed.",
        },
        {
          title: "Making activity readable",
          problem:
            "An event log turns into noise easily. Recording every field change made the timeline useless within a day.",
          solution:
            "Events are modelled as meaningful actions (assigned, moved, blocked, completed), and consecutive edits by the same person are grouped. The UI shows a sentence, who did it, and a relative time instead of a JSON diff.",
        },
      ],
      results: [
        "The beta group dropped a second tracking tool for sprint planning, which cut duplicate updates in their weekly review.",
        "For returning users, creating and moving tasks by keyboard tested faster than using the pointer.",
        "Seeded boards with 800 tasks stayed responsive in reorder tests, with no commands dropped across simulated concurrent sessions.",
        "The activity timeline was the most-used side panel in beta sessions, mostly for settling questions about who owns what.",
      ],
      lessons: [
        "A fast interface usually comes from a clear data model, not a faster component.",
        "Accessibility constraints made the interaction better for everyone. The keyboard flow ended up as the main way to move tasks.",
        "Cutting configuration was harder than adding features, but it’s the main reason the workspace feels calmer than the alternatives.",
      ],
      screenshots: [
        {
          src: projectMedia.taskflow.detail,
          alt: "TaskFlow activity timeline and task detail panel with typed comments and status history",
          caption:
            "Task details and activity share one panel, so decisions stay attached to the work.",
        },
      ],
    },
  },
  {
    slug: "shopease",
    name: "ShopEase",
    category: "E-commerce",
    summary:
      "A headless storefront for independent homeware brands, with editorial browsing, instant search, and a checkout that stays out of the way.",
    description:
      "ShopEase is an e-commerce case study covering faceted search, performance for an image-heavy catalogue, accessible product selection, and a cart that holds up.",
    year: "2024",
    role: "Frontend lead & design systems",
    duration: "16 weeks",
    thumbnail: projectMedia.shopease.cover,
    thumbnailAlt:
      "ShopEase storefront with a large product image, editorial headline, and curated product grid",
    featured: true,
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Cloudflare",
    ],
    features: [
      {
        title: "Editorial collection pages",
        description:
          "Merchandisers build stories from reusable blocks without breaking the layout or the performance budget.",
      },
      {
        title: "Instant faceted search",
        description:
          "Filter by material, colour, and availability. The state lives in the URL, so it can be shared and cached.",
      },
      {
        title: "Fast image delivery",
        description:
          "Responsive sources, modern formats, and blur-up placeholders keep large product photos from weighing the page down.",
      },
      {
        title: "Persistent cart",
        description:
          "A server-backed cart survives refreshes, multiple tabs, and signing in, without duplicating line items.",
      },
      {
        title: "Accessible variant selection",
        description:
          "Colour and size pickers show real names, availability, and keyboard focus instead of decorative swatches.",
      },
      {
        title: "Order tracking",
        description:
          "A simple post-purchase page shows fulfilment progress, receipts, and how to contact support, all in one place.",
      },
    ],
    links: {
      demo: "https://example.com/demo/shopease",
      repository: "https://github.com/YanuarArif/shopease",
    },
    caseStudy: {
      overview:
        "ShopEase is a headless storefront for a collective of independent homeware brands. The brief asked for the feel of a printed catalogue (generous photography, careful typography, unhurried browsing) without giving up the speed and clarity people expect from a modern shop.",
      problem:
        "The collective was on a hosted theme that looked fine on a fast connection and was close to unusable on a phone. Product pages loaded over 4 MB of images, filters triggered full page loads, and colour selection relied on small, unlabelled swatches. The team also needed to publish seasonal edits without a developer.",
      solution:
        "I built a React storefront on top of a small commerce API, with a block-based content model for editorial pages. Search and filters live in the URL, images are served responsively from Cloudflare, and the server reconciles the cart on every change. The result reads like a magazine but behaves like an app.",
      stack: [
        {
          label: "Interface",
          items: [
            "React",
            "TypeScript",
            "Vite",
            "Tailwind CSS",
            "React Router",
          ],
        },
        {
          label: "Commerce",
          items: ["Node.js", "PostgreSQL", "Stripe", "Zod"],
        },
        {
          label: "Delivery",
          items: ["Cloudflare", "GitHub Actions", "Playwright"],
        },
      ],
      process: [
        {
          title: "Audit the real catalogue",
          description:
            "I profiled the existing store with its actual product photos and third-party scripts, then set performance budgets for the listing and product templates before designing anything.",
        },
        {
          title: "Design a block system",
          description:
            "Editorial pages are built from a small set of blocks with limited props. Merchandisers can arrange stories freely without inventing new layouts or writing inline styles.",
        },
        {
          title: "Prototype the purchase path",
          description:
            "I prototyped the product page, variant picker, cart drawer, and checkout together. Edge cases like unavailable combinations and price changes were handled in the prototype, not patched after launch.",
        },
        {
          title: "Measure and refine",
          description:
            "Lighthouse runs, throttled device tests, and screen-reader passes were part of every pull request. Final QA covered the five most common mobile viewports and two older Android phones.",
        },
      ],
      challenges: [
        {
          title: "Heavy images, small budgets",
          problem:
            "High-resolution product photography is central to the brand, but a single collection page could easily pass several megabytes of images.",
          solution:
            "Art direction uses a few aspect-ratio presets and AVIF/WebP sources. Images above the fold load eagerly with their dimensions reserved. The rest are lazy-loaded with low-quality placeholders, which keeps layout shift close to zero.",
        },
        {
          title: "Cart drift across tabs",
          problem:
            "People often browse in several tabs. A client-only cart overwrote newer changes and sometimes brought back items that had been removed.",
          solution:
            "The cart became a server resource with a version field. Each change sends the version it expects, and a stale response triggers a refetch instead of being applied. A lightweight broadcast channel updates other open tabs in the same browser.",
        },
        {
          title: "Variant selection that works for everyone",
          problem:
            "The old swatches showed colour only visually and disabled some combinations without saying why.",
          solution:
            "Every option has a text label and an availability count. Unavailable combinations stay focusable and explain the reason, and choosing an option updates a live summary with the full product name, size, price, and stock status.",
        },
      ],
      results: [
        "In internal comparisons, the redesigned collection template cut initial image weight by more than half.",
        "Filtering became instant and shareable, and the team used URL state directly in seasonal campaigns.",
        "In usability tests, fewer people abandoned checkout once unavailable variants were explained inline.",
        "Merchandising edits that used to need a developer now go out from the content editor, with no code changes.",
      ],
      lessons: [
        "Performance is design work. Choosing image ratios early prevented most of the expensive problems.",
        "A shared URL-state model meant fewer bugs and less documentation, since every filter had one source of truth.",
        "The best accessibility fixes also turned out to be the clearest interactions for everyone else.",
      ],
      screenshots: [
        {
          src: projectMedia.shopease.detail,
          alt: "ShopEase product page with material details, accessible colour and size selectors, and add-to-cart panel",
          caption:
            "Material, colour, and size options stay visible and explain availability before checkout.",
        },
      ],
    },
  },
  {
    slug: "fintrack",
    name: "FinTrack",
    category: "Fintech · Dashboard",
    summary:
      "A personal finance dashboard for freelancers: uneven income, recurring costs, and a forecast that’s upfront about its uncertainty.",
    description:
      "FinTrack is a personal finance case study covering recurring-transaction detection, accessible data visualisation, CSV imports, and privacy-minded design.",
    year: "2024",
    role: "Product design & frontend engineering",
    duration: "10 weeks",
    thumbnail: projectMedia.fintrack.cover,
    thumbnailAlt:
      "FinTrack dashboard with cash flow chart, category breakdown, and recent transactions",
    featured: true,
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Redis",
    ],
    features: [
      {
        title: "Cash-flow forecast",
        description:
          "Combines known recurring costs with a cautious view of irregular income, kept clearly apart from actual figures.",
      },
      {
        title: "Recurring detection",
        description:
          "Suggests subscriptions and bills from how often transactions repeat, then lets people confirm or dismiss them.",
      },
      {
        title: "Useful categories",
        description:
          "Rules take priority over automatic guesses, and any suggestion can be corrected in one step.",
      },
      {
        title: "CSV import",
        description:
          "A column-mapping flow with preview and duplicate detection handles exports from different banks.",
      },
      {
        title: "Accessible charts",
        description:
          "Every chart comes with a table version, a readable summary, and data points you can reach by keyboard.",
      },
      {
        title: "Private by default",
        description:
          "The demo has no bank connections. All data stays in the user’s own account and can be exported or deleted.",
      },
    ],
    links: {
      demo: "https://example.com/demo/fintrack",
      repository: "https://github.com/YanuarArif/fintrack",
    },
    caseStudy: {
      overview:
        "FinTrack is a finance dashboard built around a familiar freelancer problem: income arrives unevenly, but rent, software, and tax bills don’t. It helps people see what’s already committed, what’s likely, and what’s still uncertain, without pretending a forecast is a promise.",
      problem:
        "Most budgeting tools assume a regular paycheck, so freelancers end up padding categories by hand or ignoring the dashboard altogether. Many also show confident projections based on very little data, which is worse than showing no projection at all.",
      solution:
        "I designed a two-layer model: confirmed recurring items and observed income history. The dashboard keeps committed cash flow separate from projected cash flow, shows the assumptions behind every number, and asks users to correct categories instead of quietly learning from its own mistakes.",
      stack: [
        {
          label: "Interface",
          items: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts"],
        },
        {
          label: "Application",
          items: ["Node.js", "REST API", "PostgreSQL", "Redis"],
        },
        { label: "Quality", items: ["Vitest", "Testing Library", "Docker"] },
      ],
      process: [
        {
          title: "Talk to freelancers",
          description:
            "Six conversations made one thing obvious. The useful question isn’t “what did I spend?” but “what can I safely commit to next month?”",
        },
        {
          title: "Define the forecast honestly",
          description:
            "I wrote down every assumption (irregular income, buffer, tax set-aside, recurring items) and made each one visible and editable in the interface.",
        },
        {
          title: "Build the data path first",
          description:
            "CSV ingestion, deduplication, and category rules came before the charts. A dashboard is only as trustworthy as its import flow.",
        },
        {
          title: "Design with real, messy data",
          description:
            "I tested with anonymised exports that had missing columns, duplicate rows, and overlapping descriptions. That surfaced edge cases synthetic data would have hidden.",
        },
      ],
      challenges: [
        {
          title: "Dates, time zones, and recurring bills",
          problem:
            "A bill charged on the last day of the month kept drifting in the projection when the user travelled or the browser ran in a different time zone.",
          solution:
            "All financial dates are stored as plain calendar dates with no time component. Recurrence rules are expanded on the server using the account’s time zone, and the client only formats the dates that come back.",
        },
        {
          title: "Charts nobody could read",
          problem:
            "The first cash-flow chart relied on colour and hover, didn’t work for screen-reader users, and hid the difference between actual and projected values.",
          solution:
            "The chart is now just one view of a small summary table. Actuals use solid marks, projections use outlined marks, and each month has a focusable data point with a full text summary. The table sits behind a disclosure instead of being trapped in a tooltip.",
        },
        {
          title: "Inconsistent imports",
          problem:
            "Bank CSV exports differed in delimiter, date format, encoding, and column names. Early imports created duplicates whenever a user retried.",
          solution:
            "The importer keeps parsing, mapping, and normalisation separate. A deterministic fingerprint built from date, amount, and description prevents duplicates, and every import is previewed before it’s saved.",
        },
      ],
      results: [
        "Test participants could tell committed costs from projected income without any instructions.",
        "In test fixtures, duplicate detection held up across repeated imports of overlapping date ranges.",
        "Every chart on the dashboard now has a matching table and text summary, so the core information doesn’t depend on sight or a pointer.",
        "The forecast assumptions page became a deliberate part of onboarding instead of an advanced setting.",
      ],
      lessons: [
        "Trust is a design material. Showing the assumptions was worth more than improving the projection algorithm.",
        "Import flows deserve as much design attention as dashboards. Most data problems start there.",
        "Accessible charts tend to be clearer charts, because you have to say what the picture is actually saying.",
      ],
      screenshots: [
        {
          src: projectMedia.fintrack.detail,
          alt: "FinTrack forecast view with actual and projected cash flow, assumption controls, and a data table",
          caption:
            "Projections are outlined and labelled, with the summary table next to the chart.",
        },
      ],
    },
  },
  {
    slug: "fitlife",
    name: "FitLife",
    category: "Health & Fitness",
    summary:
      "A training companion for people who work out in short, irregular windows: offline-first, low-friction, and straight about progress.",
    description:
      "FitLife is a fitness-tracking case study covering offline-first mobile architecture, background sync, accessible activity charts, and performance on modest devices.",
    year: "2023",
    role: "Full-stack developer",
    duration: "14 weeks",
    thumbnail: projectMedia.fitlife.cover,
    thumbnailAlt:
      "FitLife mobile app screens showing an activity ring, weekly training plan, and workout summary",
    featured: true,
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    features: [
      {
        title: "Offline workouts",
        description:
          "Sessions are recorded locally and sync when a connection returns, without blocking the timer or losing sets.",
      },
      {
        title: "Plans that adapt",
        description:
          "A weekly plan reschedules missed sessions instead of turning a streak into a source of guilt.",
      },
      {
        title: "Progress that means something",
        description:
          "Highlights consistency and personal trends rather than ranking people on arbitrary leaderboards.",
      },
      {
        title: "Low-friction logging",
        description:
          "Start a workout from a plan, a saved routine, or one tap on the home screen. No account needed to begin.",
      },
      {
        title: "Accessible summaries",
        description:
          "Charts come with summaries and list views, and the app supports scalable text and reduced motion throughout.",
      },
      {
        title: "Private social layer",
        description:
          "Optional training groups share completed workouts and encouragement, never body metrics or precise location.",
      },
    ],
    links: {
      demo: "https://example.com/demo/fitlife",
      repository: "https://github.com/YanuarArif/fitlife",
    },
    caseStudy: {
      overview:
        "FitLife is a training companion for people who don’t keep a perfect schedule. It was designed around short sessions, unpredictable weeks, and phones that are often offline in gyms or basements. The app treats a missed session as normal and makes it easy to pick up again.",
      problem:
        "Most fitness apps reward unbroken streaks, so an interrupted week feels like failure. They also need a connection for basic logging and bury useful progress under social comparison. The brief was to build something that stays useful on a bad connection and in a busy week.",
      solution:
        "I built an offline-first mobile client with a local workout queue and deterministic sync. The weekly plan is generated from the days a person is free and recalculated when sessions are missed. Progress is shown as personal trends (consistency, volume, and recovery) with accessible summaries instead of a single score.",
      stack: [
        {
          label: "Mobile",
          items: ["React Native", "Expo", "TypeScript", "SQLite"],
        },
        { label: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "Zod"] },
        { label: "Delivery", items: ["Docker", "GitHub Actions", "Sentry"] },
      ],
      process: [
        {
          title: "Watch real sessions",
          description:
            "I followed five people through short workouts and noted every interruption. Handling the phone, rest timers, and going offline mattered more than the exercise library.",
        },
        {
          title: "Design for the interrupted week",
          description:
            "The weekly planner works from available days, not fixed weekdays. Missed sessions go into a light backlog that can be dismissed without penalty.",
        },
        {
          title: "Build sync before screens",
          description:
            "The local-first data layer and sync protocol came before the polished interface, so every screen was tested against real offline and conflict behaviour.",
        },
        {
          title: "Test on modest hardware",
          description:
            "The last month went to older Android phones, large text settings, and reduced motion. Animation and chart rendering were tuned from measurements, not guesses.",
        },
      ],
      challenges: [
        {
          title: "Offline conflicts",
          problem:
            "A workout could be edited on two devices, or a sync could retry after the server had already accepted part of a session. A simple last-write-wins rule quietly threw away sets.",
          solution:
            "Each session is an append-only event log with client-generated IDs. The server accepts idempotent events and orders them by timestamp plus a per-device sequence number. Conflicting edits are kept as separate events instead of being overwritten.",
        },
        {
          title: "Animation on low-end phones",
          problem:
            "The activity ring and transitions dropped frames on older Android devices and ignored reduced-motion settings.",
          solution:
            "I replaced continuous animation with a single gradient ring, used cheap transforms where possible, cut the number of animated elements, and followed the OS motion setting. Measured frame time improved a lot on the oldest test device.",
        },
        {
          title: "Progress without pressure",
          problem:
            "Early testers read the activity score as a grade. After one missed week, they stopped opening the app.",
          solution:
            "I removed the score. The home screen now shows the next useful action, a simple weekly completion summary, and a note when the plan has been adjusted. Trends are still there but never framed as pass or fail.",
        },
      ],
      results: [
        "Beta testers finished offline sessions with no data loss, even when the connection was cut on purpose.",
        "In the test group, the revised home screen brought more people back after a missed week.",
        "The core screens passed large-text and reduced-motion checks on the oldest supported device.",
        "Sync logic is covered by deterministic event-replay tests, including duplicate and out-of-order delivery.",
      ],
      lessons: [
        "Offline support is a product decision, not a caching layer added at the end.",
        "Removing a score can be a feature when the score pushes behaviour the wrong way.",
        "Performance budgets on real hardware tell you more than benchmarks on a dev machine.",
      ],
      screenshots: [
        {
          src: projectMedia.fitlife.detail,
          alt: "FitLife workout session screen with rest timer, set logging, and offline sync indicator",
          caption:
            "Sessions work fully offline. Sync status is visible but never interrupts the workout.",
        },
      ],
    },
  },
];

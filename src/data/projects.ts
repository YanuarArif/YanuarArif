import fitlifeCover from '@/assets/images/projects/fitlife-cover.svg'
import fitlifeDetail from '@/assets/images/projects/fitlife-detail.svg'
import fintrackCover from '@/assets/images/projects/fintrack-cover.svg'
import fintrackDetail from '@/assets/images/projects/fintrack-detail.svg'
import shopeaseCover from '@/assets/images/projects/shopease-cover.svg'
import shopeaseDetail from '@/assets/images/projects/shopease-detail.svg'
import taskflowCover from '@/assets/images/projects/taskflow-cover.svg'
import taskflowDetail from '@/assets/images/projects/taskflow-detail.svg'
import type { Project } from '@/types'

/**
 * ─────────────────────────────────────────────────────────────
 *  FEATURED PROJECTS
 *  Every project below is fictional demonstration content.
 *  To add one: copy an object, give it a unique slug, and replace
 *  the artwork in `src/assets/images/projects`.
 * ─────────────────────────────────────────────────────────────
 */
export const projects: Project[] = [
  {
    slug: 'taskflow',
    name: 'TaskFlow',
    category: 'SaaS · Productivity',
    summary:
      'A calmer project workspace for small product teams, built around a keyboard-first board and a transparent activity log.',
    description:
      'TaskFlow is a project management SaaS case study covering real-time boards, permissions, accessible drag-and-drop, and a deliberate approach to reducing interface noise.',
    year: '2025',
    role: 'Product design & full-stack engineering',
    duration: '12 weeks',
    thumbnail: taskflowCover,
    thumbnailAlt:
      'TaskFlow app interface showing a kanban board with sprint columns and activity panel',
    featured: true,
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Hono', 'PostgreSQL', 'Redis', 'Docker'],
    features: [
      {
        title: 'Keyboard-first board',
        description:
          'Create, move, and complete tasks without reaching for a mouse, with a command palette for everything else.',
      },
      {
        title: 'Quiet real-time collaboration',
        description:
          'Server-authoritative ordering and optimistic updates keep remote teammates in sync without jumpy UI.',
      },
      {
        title: 'Activity that explains itself',
        description:
          'A readable timeline records decisions and ownership changes, not just field-level edits.',
      },
      {
        title: 'Role-aware permissions',
        description:
          'Workspace, project, and task scopes are enforced in one policy layer shared by every endpoint.',
      },
      {
        title: 'Views for different thinking',
        description:
          'Board, list, and compact timeline views share a single filter model and keep state in the URL.',
      },
      {
        title: 'Portable data',
        description:
          'CSV and JSON exports are generated from a typed query layer, so teams are never locked in.',
      },
    ],
    links: {
      demo: 'https://example.com/demo/taskflow',
      repository: 'https://github.com/averylindqvist/taskflow',
    },
    caseStudy: {
      overview:
        'TaskFlow is a project management workspace designed for product teams of three to fifteen people. Instead of competing on the number of features, it focuses on the handful of moments that make a board useful every day: capturing work quickly, understanding what changed, and moving a task without losing context.',
      problem:
        'Small teams tend to collect tools rather than replace them. Existing boards were either too lightweight to answer "who changed this and why?" or so configurable that maintaining the workspace became its own project. The brief was to build a dependable daily workspace that stayed fast on boards with hundreds of tasks, worked entirely from the keyboard, and made changes legible without an audit dashboard.',
      solution:
        'I designed a compact three-panel workspace — navigation, board, and activity — around a server-authoritative task model. Every mutation goes through a typed command endpoint, task order uses fractional indexes, and events are written alongside the data change. The result is a board that can be updated optimistically while still reconciling cleanly when two people move the same card.',
      stack: [
        { label: 'Interface', items: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Motion'] },
        { label: 'Application', items: ['Hono', 'Zod', 'Node.js', 'REST API'] },
        { label: 'Data & infrastructure', items: ['PostgreSQL', 'Prisma', 'Redis', 'Docker'] },
      ],
      process: [
        {
          title: 'Map the daily ritual',
          description:
            'I interviewed four small product teams and watched how they used their current boards. Most friction came from status meetings and unclear ownership, not missing features.',
        },
        {
          title: 'Design the information model',
          description:
            'Workspaces, projects, tasks, comments, and events were modelled before the interface. Permissions and activity history were treated as first-class data, not features added later.',
        },
        {
          title: 'Build vertical slices',
          description:
            'Each slice shipped end to end — schema, endpoint, interface, tests. The board came first, followed by activity, filters, and exports. This kept integration problems visible early.',
        },
        {
          title: 'Test with a small beta group',
          description:
            'Three teams used the product for two weeks. I watched sessions, measured error states, and cut two planned features that added configuration without changing behavior.',
        },
      ],
      challenges: [
        {
          title: 'Dragging without a mouse',
          problem:
            'A board that only supports pointer drag-and-drop is unusable for keyboard and assistive-technology users. Native drag events also communicate very little to screen readers.',
          solution:
            'Cards expose a move menu and dedicated keyboard shortcuts. A polite live region announces the new column and position after every move, and the same command API handles pointer, keyboard, and bulk actions.',
        },
        {
          title: 'Concurrent reordering',
          problem:
            'Two people moving cards at the same time produced duplicate positions and occasional lost updates. Rewriting every row on each move would not scale with large boards.',
          solution:
            'I used fractional string indexes and a revision field per task. Moves are sent as "place after task X" commands, resolved on the server, and clients reconcile only the tasks whose revisions changed.',
        },
        {
          title: 'Making activity readable',
          problem:
            'An event log can become noise. Recording every field mutation made the timeline unusable within a day.',
          solution:
            'Events are modeled as meaningful commands — assigned, moved, blocked, completed — and consecutive edits by the same person are grouped. The UI shows a sentence, actor, and relative time rather than a JSON diff.',
        },
      ],
      results: [
        'The beta cohort replaced a second tracking tool for sprint planning, reducing duplicate updates in their weekly review.',
        'Keyboard task creation and movement tested faster than pointer interaction for returning users.',
        'Large seeded boards (800 tasks) stayed responsive during reorder tests, with no dropped commands across simulated concurrent sessions.',
        'The activity timeline became the most-used secondary panel in beta sessions, primarily for resolving ownership questions.',
      ],
      lessons: [
        'A fast interface is usually the result of a clear data model, not a faster component.',
        'Accessibility constraints improved the interaction design for everyone; the keyboard flow ended up becoming the primary way to move tasks.',
        'Cutting configuration was harder than adding features, but it was the main reason the workspace felt calmer than the alternatives.',
      ],
      screenshots: [
        {
          src: taskflowDetail,
          alt: 'TaskFlow activity timeline and task detail panel with typed comments and status history',
          caption:
            'Task detail and activity are kept in a single panel so decisions stay attached to the work.',
        },
      ],
    },
  },
  {
    slug: 'shopease',
    name: 'ShopEase',
    category: 'E-commerce',
    summary:
      'A headless storefront for independent homeware brands, with editorial browsing, instant search, and a checkout that gets out of the way.',
    description:
      'ShopEase is an e-commerce platform case study covering faceted search, image-heavy catalog performance, accessible product selection, and a resilient cart.',
    year: '2024',
    role: 'Frontend lead & design systems',
    duration: '16 weeks',
    thumbnail: shopeaseCover,
    thumbnailAlt:
      'ShopEase storefront with a large product image, editorial headline, and curated product grid',
    featured: true,
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Stripe', 'Cloudflare'],
    features: [
      {
        title: 'Editorial collection pages',
        description:
          'Merchandisers compose stories from reusable blocks without breaking layout or performance budgets.',
      },
      {
        title: 'Instant faceted search',
        description:
          'Filter by material, colour, and availability with a URL-driven state that is shareable and cacheable.',
      },
      {
        title: 'Fast image delivery',
        description:
          'Responsive sources, modern formats, and blur-up placeholders keep large product photography from dominating the page.',
      },
      {
        title: 'Persistent cart',
        description:
          'A server-backed cart survives refreshes, multiple tabs, and sign-in without duplicating line items.',
      },
      {
        title: 'Accessible variant selection',
        description:
          'Colour and size pickers expose real names, availability, and keyboard focus instead of decorative swatches.',
      },
      {
        title: 'Order tracking',
        description:
          'A simple post-purchase view shows fulfillment progress, receipts, and support contact in one place.',
      },
    ],
    links: {
      demo: 'https://example.com/demo/shopease',
      repository: 'https://github.com/averylindqvist/shopease',
    },
    caseStudy: {
      overview:
        'ShopEase is a headless storefront built for a collective of independent homeware brands. The design brief called for the feel of a printed catalogue — generous photography, considered typography, unhurried browsing — without sacrificing the speed and clarity people expect from a modern shop.',
      problem:
        'The collective was running on a hosted theme that looked acceptable on a fast connection and felt unusable on a phone. Product pages loaded over 4 MB of images, filters triggered full navigations, and colour selection relied on small unlabeled swatches. The team also needed to publish seasonal edits without a developer.',
      solution:
        'I built a React storefront on top of a small commerce API, with a block-based content model for editorial pages. Search and filtering live in the URL, images are served responsively from Cloudflare, and the cart is reconciled server-side on every mutation. The result is a storefront that feels editorial but behaves like an application.',
      stack: [
        { label: 'Interface', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'] },
        { label: 'Commerce', items: ['Node.js', 'PostgreSQL', 'Stripe', 'Zod'] },
        { label: 'Delivery', items: ['Cloudflare', 'GitHub Actions', 'Playwright'] },
      ],
      process: [
        {
          title: 'Audit the real catalogue',
          description:
            'I profiled the existing store with actual product photography and third-party scripts, then set performance budgets for the listing and product templates before designing.',
        },
        {
          title: 'Design a block system',
          description:
            'Editorial pages were modelled as a small set of blocks with constrained props. Merchandisers could arrange stories freely without inventing new layouts or inline styles.',
        },
        {
          title: 'Prototype the purchase path',
          description:
            'The product page, variant picker, cart drawer, and checkout were prototyped together. Edge cases like unavailable combinations and price changes were handled in the prototype, not patched after launch.',
        },
        {
          title: 'Measure and refine',
          description:
            'Lighthouse runs, throttled device tests, and screen-reader passes were part of each pull request. Final QA covered the five most common mobile viewports and two older Android devices.',
        },
      ],
      challenges: [
        {
          title: 'Heavy imagery, small budgets',
          problem:
            'High-resolution product photography is central to the brand, but a single collection page could easily exceed several megabytes of images.',
          solution:
            'Art direction is handled with a small number of aspect-ratio presets and AVIF/WebP sources. Above-the-fold images load eagerly with dimensions reserved; the rest are lazy-loaded with low-quality placeholders, keeping layout shift near zero.',
        },
        {
          title: 'Cart drift across tabs',
          problem:
            'Users often browse in several tabs. A client-only cart overwrote newer changes and occasionally resurrected removed items.',
          solution:
            'The cart became a server resource with a version field. Each mutation sends the expected version, and stale responses trigger a refetch instead of being applied. A lightweight broadcast channel updates other open tabs in the same browser.',
        },
        {
          title: 'Variant selection that works for everyone',
          problem:
            'The previous swatches conveyed colour only visually and disabled combinations without explaining why.',
          solution:
            'Each option has a text label and availability count. Unavailable combinations remain focusable with a reason, and selecting an option updates a live summary with the full product name, size, price, and stock state.',
        },
      ],
      results: [
        'The redesigned collection template cut initial image weight by more than half in internal comparisons.',
        'Filter interaction became instant and shareable; the team used URL state directly in seasonal campaigns.',
        'Checkout abandonment in usability testing dropped after unavailable variants were explained inline.',
        'Merchandising edits that previously required a developer shipped from the content editor without code changes.',
      ],
      lessons: [
        'Performance work is design work: choosing image ratios early prevented most of the expensive problems.',
        'A shared URL state model reduced both bugs and documentation — every filter had one source of truth.',
        'The best accessibility improvements were also the clearest interactions for everyone else.',
      ],
      screenshots: [
        {
          src: shopeaseDetail,
          alt: 'ShopEase product page with material details, accessible colour and size selectors, and add-to-cart panel',
          caption:
            'Material, colour, and size choices stay visible and explain availability before checkout.',
        },
      ],
    },
  },
  {
    slug: 'fintrack',
    name: 'FinTrack',
    category: 'Fintech · Dashboard',
    summary:
      'A personal finance dashboard for freelancers: irregular income, recurring costs, and a forecast that is honest about uncertainty.',
    description:
      'FinTrack is a personal finance dashboard case study covering recurring transaction detection, accessible data visualization, CSV imports, and privacy-conscious design.',
    year: '2024',
    role: 'Product design & frontend engineering',
    duration: '10 weeks',
    thumbnail: fintrackCover,
    thumbnailAlt:
      'FinTrack dashboard with cash flow chart, category breakdown, and recent transactions',
    featured: true,
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Redis'],
    features: [
      {
        title: 'Cash-flow forecast',
        description:
          'Combines known recurring costs with a conservative view of irregular income, clearly separated from actuals.',
      },
      {
        title: 'Recurring detection',
        description:
          'Suggests subscriptions and bills from transaction cadence, then lets people confirm or dismiss them.',
      },
      {
        title: 'Useful categories',
        description:
          'Rules are prioritised over automatic guesses, and every suggestion can be corrected in one step.',
      },
      {
        title: 'CSV import',
        description:
          'A column-mapping flow with preview and duplicate detection handles exports from multiple banks.',
      },
      {
        title: 'Accessible charts',
        description:
          'Every chart has a table equivalent, readable summary, and keyboard-accessible data points.',
      },
      {
        title: 'Private by default',
        description:
          'No bank connections in the demonstration; all data stays in the user’s own account and can be exported or deleted.',
      },
    ],
    links: {
      demo: 'https://example.com/demo/fintrack',
      repository: 'https://github.com/averylindqvist/fintrack',
    },
    caseStudy: {
      overview:
        'FinTrack is a finance dashboard designed around a common freelance problem: income arrives unevenly, but rent, software, and tax payments do not. The product helps people see what is actually committed, what is likely, and what remains uncertain — without pretending a forecast is a guarantee.',
      problem:
        'Most budgeting tools assume regular paychecks. Freelancers end up manually padding categories or ignoring the dashboard entirely. Existing tools also tend to present confident projections from thin data, which is worse than showing no projection at all.',
      solution:
        'I designed a two-layer model: confirmed recurring items and observed historical income. The dashboard separates committed cash flow from projected cash flow, exposes the assumptions behind each number, and encourages the user to correct categories instead of silently learning from mistakes.',
      stack: [
        { label: 'Interface', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Recharts'] },
        { label: 'Application', items: ['Node.js', 'REST API', 'PostgreSQL', 'Redis'] },
        { label: 'Quality', items: ['Vitest', 'Testing Library', 'Docker'] },
      ],
      process: [
        {
          title: 'Talk to freelancers',
          description:
            'Six conversations made one thing obvious: the useful question is not "what did I spend?" but "what can I safely commit to next month?"',
        },
        {
          title: 'Define the forecast honestly',
          description:
            'I wrote down every assumption — irregular income, buffer, tax set-aside, recurring items — and made each one visible and editable in the interface.',
        },
        {
          title: 'Build the data path first',
          description:
            'CSV ingestion, deduplication, and category rules were implemented before charts. A dashboard is only as trustworthy as its import flow.',
        },
        {
          title: 'Design with real, messy data',
          description:
            'Testing used anonymized exports with missing columns, duplicate rows, and overlapping descriptions. This exposed edge cases that synthetic data would have hidden.',
        },
      ],
      challenges: [
        {
          title: 'Dates, time zones, and recurring bills',
          problem:
            'A bill charged on the last day of the month kept drifting in the projection when the user traveled or the browser ran in a different time zone.',
          solution:
            'All financial dates are stored as plain calendar dates with no time component. Recurrence rules are expanded on the server using the account time zone, and the client only formats the resolved dates.',
        },
        {
          title: 'Charts nobody can read',
          problem:
            'The first cash-flow chart depended on colour and hover, failed for screen-reader users, and hid the difference between actual and projected values.',
          solution:
            'The chart is now one representation of a small summary table. Actuals use solid marks, projections use outlined marks, and every month has a focusable data point with a full textual summary. The table is available behind a disclosure, not trapped in a tooltip.',
        },
        {
          title: 'Importing inconsistency',
          problem:
            'Bank CSV exports varied in delimiter, date format, encoding, and column names. Early imports created duplicates whenever a user retried.',
          solution:
            'The importer separates parsing, mapping, and normalization. A deterministic fingerprint built from date, amount, and description prevents duplicates, and every import is previewed before it is committed.',
        },
      ],
      results: [
        'The usability group could identify committed costs versus projected income without instruction.',
        'Duplicate detection survived repeated imports of overlapping date ranges in test fixtures.',
        'Every dashboard chart gained an equivalent table and text summary, making the core information available without vision or pointer input.',
        'The forecast assumptions page became a deliberate part of onboarding rather than an advanced setting.',
      ],
      lessons: [
        'Trust is a design material. Showing assumptions was more valuable than improving the projection algorithm.',
        'Import flows deserve the same design attention as dashboards; most data problems originate there.',
        'Accessible charts are usually clearer charts, because they force you to state what the visual is saying.',
      ],
      screenshots: [
        {
          src: fintrackDetail,
          alt: 'FinTrack forecast view with actual and projected cash flow, assumption controls, and a data table',
          caption:
            'Projections are outlined and labeled, with the summary table available alongside the chart.',
        },
      ],
    },
  },
  {
    slug: 'fitlife',
    name: 'FitLife',
    category: 'Health & Fitness',
    summary:
      'A training companion for people who exercise in short, inconsistent windows — offline-first, low-friction, and honest about progress.',
    description:
      'FitLife is a fitness tracking app case study covering offline-first mobile architecture, background sync, accessible activity charts, and performance on modest devices.',
    year: '2023',
    role: 'Full-stack developer',
    duration: '14 weeks',
    thumbnail: fitlifeCover,
    thumbnailAlt:
      'FitLife mobile app screens showing an activity ring, weekly training plan, and workout summary',
    featured: true,
    tech: ['React Native', 'Expo', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    features: [
      {
        title: 'Offline workouts',
        description:
          'Sessions record locally and sync when a connection returns, without blocking the timer or losing sets.',
      },
      {
        title: 'Plans that adapt',
        description:
          'A weekly plan that reschedules missed sessions instead of turning a streak into a source of guilt.',
      },
      {
        title: 'Meaningful progress',
        description:
          'Highlights consistency and personal trends rather than comparing people against arbitrary leaderboards.',
      },
      {
        title: 'Low-friction logging',
        description:
          'A workout can start from a plan, a saved routine, or one tap on the home screen — no account required to begin.',
      },
      {
        title: 'Accessible summaries',
        description:
          'Charts include summaries and list views, with scalable text and reduced-motion support throughout.',
      },
      {
        title: 'Private social layer',
        description:
          'Optional training groups share completion and encouragement, never body metrics or precise location.',
      },
    ],
    links: {
      demo: 'https://example.com/demo/fitlife',
      repository: 'https://github.com/averylindqvist/fitlife',
    },
    caseStudy: {
      overview:
        'FitLife is a training companion for people who do not train on a perfect schedule. It was designed around short sessions, unpredictable weeks, and phones that are often offline in gyms or basements. The app treats missed sessions as normal and makes resuming easy.',
      problem:
        'Most fitness apps reward unbroken streaks, which makes an interrupted week feel like failure. They also require a connection for basic logging and bury useful progress behind social comparisons. The brief was to build something that stayed useful on a bad connection and a busy week.',
      solution:
        'I built an offline-first mobile client with a local workout queue and deterministic sync. The weekly plan is generated from availability and recalculated when sessions are missed. Progress is framed as personal trends — consistency, volume, and recovery — with accessible summaries rather than a single score.',
      stack: [
        { label: 'Mobile', items: ['React Native', 'Expo', 'TypeScript', 'SQLite'] },
        { label: 'Backend', items: ['Node.js', 'PostgreSQL', 'Redis', 'Zod'] },
        { label: 'Delivery', items: ['Docker', 'GitHub Actions', 'Sentry'] },
      ],
      process: [
        {
          title: 'Observe real sessions',
          description:
            'I shadowed five people through short workouts and logged every interruption. Phone handling, rest timers, and offline transitions mattered more than exercise libraries.',
        },
        {
          title: 'Design for the interrupted week',
          description:
            'The weekly planner is based on available days, not fixed weekdays. Missed sessions roll into a lightweight backlog that can be dismissed without penalty.',
        },
        {
          title: 'Build sync before screens',
          description:
            'A local-first data layer and sync protocol came before the polished interface, so every screen was tested against real offline and conflict behavior.',
        },
        {
          title: 'Test on modest hardware',
          description:
            'The final month focused on older Android devices, large text settings, and reduced motion. Animation and chart rendering were adjusted based on measurements, not assumptions.',
        },
      ],
      challenges: [
        {
          title: 'Offline conflicts',
          problem:
            'A workout could be edited on two devices, or sync could retry after the server had already accepted part of a session. Simple last-write-wins silently discarded sets.',
          solution:
            'Each session is an append-only event log with client-generated IDs. The server accepts idempotent events and resolves ordering by timestamp plus a per-device sequence. Conflicting edits are preserved as separate events rather than overwritten.',
        },
        {
          title: 'Animation on low-end phones',
          problem:
            'The activity ring and transitions dropped frames on older Android devices and ignored reduced-motion preferences.',
          solution:
            'I replaced continuous animation with a single gradient ring and a cheap CSS-style transform where possible, reduced the number of animated elements, and respected the OS motion setting. Measured frame time improved substantially on the oldest test device.',
        },
        {
          title: 'Progress without pressure',
          problem:
            'Early testers read the activity score as a grade. A missed week made them stop opening the app.',
          solution:
            'The score was removed. The home screen now shows the next useful action, a simple weekly completion summary, and a note when a plan has been adjusted. Trends are available but never framed as pass/fail.',
        },
      ],
      results: [
        'Beta testers completed offline sessions with no data loss across forced connection drops.',
        'The revised home screen increased return visits after a missed week in the test group.',
        'Core screens passed large-text and reduced-motion checks on the oldest supported device.',
        'Sync logic was covered by deterministic event-replay tests, including duplicate and out-of-order delivery.',
      ],
      lessons: [
        'Offline support is a product decision, not a caching layer bolted on at the end.',
        'Removing a score can be a feature when the score changes behavior for the worse.',
        'Performance budgets on real hardware are more useful than benchmarks on a development machine.',
      ],
      screenshots: [
        {
          src: fitlifeDetail,
          alt: 'FitLife workout session screen with rest timer, set logging, and offline sync indicator',
          caption:
            'Sessions stay fully usable offline; sync status is visible but never interrupts the workout.',
        },
      ],
    },
  },
]

export const featuredProjects = projects.filter((project) => project.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string): {
  previous: Project | undefined
  next: Project | undefined
} {
  const index = projects.findIndex((project) => project.slug === slug)
  if (index === -1) return { previous: undefined, next: undefined }

  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  }
}

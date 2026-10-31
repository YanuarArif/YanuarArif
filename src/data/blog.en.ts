import { blogMedia } from "@/data/media";
import type { BlogPost } from "@/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  BLOG CONTENT — ENGLISH
 *  Articles are plain typed blocks, not fetched from a CMS.
 *  Add one by appending an object with a unique slug below, then add the
 *  matching entry in `blog.id.ts`.
 * ─────────────────────────────────────────────────────────────
 */
export const blogPostsEn: BlogPost[] = [
  {
    slug: "understanding-react-hooks",
    title: "How I Finally Understood React Hooks",
    excerpt:
      "Hooks stopped feeling unpredictable once I quit thinking of them as lifecycle methods. This is the model I use now.",
    category: "React",
    publishedAt: "2026-09-18",
    cover: blogMedia.hooks,
    coverAlt:
      "Abstract illustration of connected components and state flowing through a React tree",
    tags: ["React", "Hooks", "Fundamentals"],
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "The first time I read a hooks tutorial, I understood the syntax and none of the behavior. State updates seemed to land in the wrong place. Effects ran more often than I expected. The advice to “just add the dependency” worked right up until it caused an infinite loop. The API wasn’t the problem. The model in my head was. I was still thinking in component lifecycles, and hooks aren’t lifecycle methods with different names.",
      },
      { type: "heading", level: 2, text: "Hooks are values, not timelines" },
      {
        type: "paragraph",
        text: "A function component is just a function that returns UI. Every render calls it with the current props, and everything created inside it (state, derived variables, callbacks) belongs to that one render. There’s no long-lived instance with a `this.state` object being edited in place. When state changes, React calls the function again and compares the result.",
      },
      {
        type: "paragraph",
        text: "Once that clicked, `useState` stopped being mysterious. It’s how a function component asks React to remember a value between calls, and to render again when that value changes.",
      },
      {
        type: "code",
        language: "tsx",
        code: `function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}`,
      },
      {
        type: "paragraph",
        text: "Each click produces a new render with a new `count`, and the event handler closes over the `count` from the render it was created in. So a stale value in a callback is a natural result of the model, not a bug in React. The usual fix is a functional update: `setCount((current) => current + 1)`.",
      },
      {
        type: "heading",
        level: 2,
        text: "Effects synchronize; they don’t run “after render”",
      },
      {
        type: "paragraph",
        text: "The second shift is to describe an effect by what it stays in sync with, not by when it runs. “Fetch data after mount” is a timeline. “Keep the document title matching the active project” is a relationship. A relationship holds across re-renders and has clear inputs and cleanup.",
      },
      {
        type: "code",
        language: "tsx",
        code: `useEffect(() => {
  const controller = new AbortController()

  async function load() {
    const response = await fetch('/api/projects', {
      signal: controller.signal,
    })
    const data = await response.json()
    setProjects(data.items)
  }

  load()
  return () => controller.abort()
}, [])`,
      },
      {
        type: "paragraph",
        text: "Here the effect starts a request and returns a cleanup function that cancels it. React runs that cleanup before the next effect, or when the component unmounts. That’s the whole contract: set something up, tear it down. Once I started thinking in setup and cleanup, most of my effect bugs went away.",
      },
      {
        type: "callout",
        title: "A rule of thumb",
        text: "If a value changes and the UI should update, it belongs in state. If you can work it out from props or other state during render, just compute it there. Effects are for connecting to things outside React, not for calculating values.",
      },
      { type: "heading", level: 2, text: "The dependency array lists inputs" },
      {
        type: "paragraph",
        text: "The dependency array isn’t a schedule. It doesn’t mean “run once” or “run when I feel like it.” It’s the list of values the effect reads from the component. React compares it with the previous render and re-syncs when any of them changed. So the honest answer to “which dependencies do I include?” is “whatever the effect actually reads.” If that makes it run too often, the effect or the value is usually what needs to change.",
      },
      {
        type: "list",
        items: [
          "Move data fetching into a dedicated hook or a query library, so caching and cancellation are handled in one place.",
          "Reach for useCallback only when a dependency needs a stable function, not by default.",
          "Use a ref when you need the latest value without making it an input to the effect.",
          "Pull an effect out into a custom hook once it has a clear name and does one thing.",
        ],
      },
      { type: "heading", level: 2, text: "A checklist I still use" },
      {
        type: "list",
        ordered: true,
        items: [
          "Can I compute this value during render instead of storing it?",
          "Does this effect connect to something outside React, and can it clean up after itself?",
          "Would the component still make sense if it were called twice in a row with the same props?",
          "Am I syncing with an external system, or trying to react to one specific render?",
        ],
      },
      {
        type: "quote",
        text: "Hooks aren’t harder than classes. They’re just less forgiving of a fuzzy mental model.",
      },
      {
        type: "paragraph",
        text: "In practice this model gives you simpler code. Effects get smaller, derived values move back into render, and a stale closure becomes a clear sign that you’re reading a value from the wrong render. The syntax is the easy part. The model is what makes it predictable.",
      },
    ],
  },
  {
    slug: "scalable-react-applications",
    title: "Scaling a React App Without Over-Engineering It",
    excerpt:
      "Most React codebases don’t fail because they’re too small. They get hard to change when the boundaries are unclear. Here’s a structure that grows with the product.",
    category: "Architecture",
    publishedAt: "2026-07-06",
    cover: blogMedia.scalable,
    coverAlt:
      "Abstract layered illustration representing frontend application boundaries and modules",
    tags: ["React", "Architecture", "TypeScript"],
    content: [
      {
        type: "paragraph",
        text: "“Scalability” often gets used to justify elaborate folder structures, global state, and abstraction layers that will supposedly “pay off later.” Most of those layers cost time right away and never pay it back. A React app scales when its boundaries are clear and its dependencies point in sensible directions. That’s mostly a design problem, not a file-tree problem.",
      },
      { type: "heading", level: 2, text: "Start with boundaries, not folders" },
      {
        type: "paragraph",
        text: "Before creating directories, decide which parts of the product change together. A project board, a billing screen, and an account settings page are separate features. They might share a button, an API client, and a formatter, but they shouldn’t reach into each other’s internals. Once that’s settled, the folder layout follows from it and there’s nothing left to argue about.",
      },
      {
        type: "code",
        language: "text",
        code: `src/
  features/
    projects/
      components/
      hooks/
      api.ts
      types.ts
    billing/
      components/
      hooks/
      api.ts
      types.ts
  components/ui/       shared primitives only
  lib/                 framework-agnostic helpers
  pages/               route composition
  data/                static content`,
      },
      {
        type: "paragraph",
        text: "The exact names don’t matter. What matters is that a feature owns its data access and its internal components, while the shared folders stay small and genuinely reusable. If a shared folder grows into a second application, the feature boundaries were probably never decided.",
      },
      { type: "heading", level: 2, text: "Split state by who owns it" },
      {
        type: "paragraph",
        text: "A surprising amount of complexity comes from keeping state in the wrong place. I sort it into four buckets:",
      },
      {
        type: "list",
        items: [
          "Local UI state (open panels, draft input) stays in the nearest component.",
          "URL state (filters, selected tab, pagination) goes in search params, where it can be shared and survives a reload.",
          "Server state (lists, records, mutations) goes in a query layer that handles caching, retries, and invalidation.",
          "Global client state should be rare. If two distant features both need something, ask whether the server or the URL should own it instead.",
        ],
      },
      {
        type: "paragraph",
        text: "When every filter on a complex screen lives in search params, testing gets easier and users get links they can send to a colleague. That’s a scalability win that needs no abstraction at all.",
      },
      { type: "heading", level: 2, text: "Let the router own the pages" },
      {
        type: "paragraph",
        text: "Code splitting at the route level is one of the cheapest performance wins available. Load the homepage eagerly, split the detail screens and secondary routes, and give Suspense a skeleton that keeps the layout stable.",
      },
      {
        type: "code",
        language: "tsx",
        code: `const ProjectPage = lazy(() => import('./pages/ProjectPage'))

export function ProjectRoute() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <ProjectPage />
    </Suspense>
  )
}`,
      },
      {
        type: "callout",
        title: "Suspense fallbacks are UI",
        text: "A blank screen or a lone spinner in the middle of the page is a layout jump waiting to happen. Reserve the space the content will fill, then animate the content in if it helps.",
      },
      { type: "heading", level: 2, text: "Let the types do the documenting" },
      {
        type: "paragraph",
        text: "TypeScript earns its keep at the boundaries: API responses, form schemas, and component props. Parse unknown data once at the edge, then let the rest of the app work with types it can trust. Don’t export a type from a component’s internals just so another feature can depend on it. If two features need the same shape, it belongs in a shared domain module with a name chosen on purpose.",
      },
      { type: "heading", level: 2, text: "Measure before abstracting" },
      {
        type: "paragraph",
        text: "Once a codebase has a generic data table, a form builder, and a custom state manager, every change has to be understood through three layers of abstraction. Sometimes that’s justified. More often it’s guessing about the future dressed up as architecture. Duplicate a small component twice, see how the copies actually differ, and then extract the part that stays the same. The third use case is a much better brief than the first.",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "Name the feature boundary and keep its data access inside it.",
          "Put state with the smallest correct owner, then move it to the URL or the server when that fits.",
          "Split routes before you split components.",
          "Type the edges of the system, not every local variable.",
          "Extract shared code after the second real duplication, not before the first.",
        ],
      },
      {
        type: "paragraph",
        text: "None of this is new, and that’s fine. A scalable React app is usually just a lot of small, clear decisions made the same way every time. The architecture should make the next change easier to reason about, and then stay out of the way.",
      },
    ],
  },
  {
    slug: "typescript-patterns",
    title: "TypeScript Patterns I Use Every Day",
    excerpt:
      "A handful of TypeScript patterns that make application code safer without turning it into a type puzzle.",
    category: "TypeScript",
    publishedAt: "2026-05-22",
    cover: blogMedia.typescript,
    coverAlt:
      "Abstract blue illustration of TypeScript type narrowing and union shapes",
    tags: ["TypeScript", "Patterns", "Best practices"],
    content: [
      {
        type: "paragraph",
        text: "TypeScript is most useful when it removes a whole class of runtime uncertainty from everyday code. These are the patterns I use most. They’re not clever type tricks, just small habits that make states explicit and let the compiler catch the dull mistakes.",
      },
      { type: "heading", level: 2, text: "Discriminated unions for states" },
      {
        type: "paragraph",
        text: "A request has more states than “loading” and “data.” Modeling them as separate booleans allows impossible combinations, like loading and errored at once, or data that exists before the request succeeded. A discriminated union makes each state valid on its own terms.",
      },
      {
        type: "code",
        language: "ts",
        code: `type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; message: string }

function render(state: RequestState<Project[]>) {
  switch (state.status) {
    case 'idle':
      return 'Select a project'
    case 'loading':
      return 'Loading projects…'
    case 'success':
      return state.data.map((project) => project.name)
    case 'error':
      return state.message
  }
}`,
      },
      {
        type: "paragraph",
        text: "The switch is exhaustive. Add a new status and every renderer that doesn’t handle it fails to typecheck, which is a much better failure than a missing case at runtime.",
      },
      {
        type: "heading",
        level: 2,
        text: "satisfies checks the shape without widening",
      },
      {
        type: "paragraph",
        text: "An annotation like `const config: Record<string, string>` widens the type and loses the keys you just wrote. `satisfies` checks the value against a shape while keeping its literal types.",
      },
      {
        type: "code",
        language: "ts",
        code: `const statusLabels = {
  active: 'Active',
  paused: 'Paused',
  archived: 'Archived',
} satisfies Record<string, string>

// statusLabels.active is "Active", not string`,
      },
      {
        type: "paragraph",
        text: "I use it for route maps, design tokens, and lookup objects, where I want validation and good autocomplete further down.",
      },
      {
        type: "heading",
        level: 2,
        text: "Parse at the boundary, trust inside",
      },
      {
        type: "paragraph",
        text: "Types disappear at runtime. A network response can be anything, even if the function claims to return a typed object. Parse once where data enters the app, and the code inside doesn’t need defensive checks.",
      },
      {
        type: "code",
        language: "ts",
        code: `const projectSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  archivedAt: z.string().datetime().nullable(),
})

const project = projectSchema.parse(await response.json())`,
      },
      {
        type: "callout",
        title: "Don’t cast your way past the boundary",
        text: "An `as Project` assertion is a promise the compiler can’t keep. Runtime validation is the only place where that promise can actually be checked.",
      },
      {
        type: "heading",
        level: 2,
        text: "Narrow with type predicates, not casts",
      },
      {
        type: "paragraph",
        text: "When a helper checks a value, say so in its signature. A predicate keeps the caller type-safe and makes the check reusable.",
      },
      {
        type: "code",
        language: "ts",
        code: `function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

const names = projectIds.map(getProject).filter(isDefined).map((p) => p.name)`,
      },
      {
        type: "heading",
        level: 2,
        text: "Prefer const objects to enums in app code",
      },
      {
        type: "paragraph",
        text: "String unions and `as const` objects are easier to serialize, log, and pass to browser APIs. They also avoid the extra runtime code that ordinary enums generate.",
      },
      {
        type: "code",
        language: "ts",
        code: `const PROJECT_KINDS = ['personal', 'client', 'internal'] as const
type ProjectKind = (typeof PROJECT_KINDS)[number]`,
      },
      {
        type: "paragraph",
        text: "What these have in common is that each one makes a real state explicit and stops the code from implying something the compiler can’t check. That’s a better use of TypeScript than building a type system only its author can read.",
      },
    ],
  },
  {
    slug: "docker-for-frontend-developers",
    title: "Docker for Frontend Developers: Where to Start",
    excerpt:
      "You don’t need production Kubernetes to get something out of containers. One Dockerfile can make a frontend build reproducible in under twenty lines.",
    category: "DevOps",
    publishedAt: "2026-02-11",
    cover: blogMedia.docker,
    coverAlt:
      "Abstract illustration of stacked containers and a build pipeline",
    tags: ["Docker", "DevOps", "Build"],
    content: [
      {
        type: "paragraph",
        text: "For a long time I treated Docker as infrastructure work that happened somewhere after my code was done. That changed when a build worked on my machine and failed on a colleague’s, which had a slightly different Node version. Containers aren’t only for production. They’re a way to make the environment part of what you ship.",
      },
      {
        type: "heading",
        level: 2,
        text: "Images, containers, and why you should care",
      },
      {
        type: "paragraph",
        text: "An image is a frozen filesystem plus metadata. A container is a running process started from that image. You build the image once and can run the same one on a laptop, in CI, and on a server. For a frontend project that usually means a predictable Node version, a deterministic dependency install, and a build that doesn’t depend on globally installed tools.",
      },
      { type: "heading", level: 2, text: "A multi-stage Dockerfile" },
      {
        type: "paragraph",
        text: "A Vite app builds down to static files, and the container that builds them shouldn’t be the one that serves them. With a multi-stage build, the first stage holds Node and the dependencies, and the final image contains only the compiled assets and a small web server.",
      },
      {
        type: "code",
        language: "dockerfile",
        code: `FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

FROM nginx:alpine AS runtime
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`,
      },
      {
        type: "paragraph",
        text: "The build stage gets thrown away. The runtime image has no source code, no dev dependencies, and no Node runtime to attack, so it’s smaller and has less surface to worry about.",
      },
      { type: "heading", level: 2, text: "Ignore more than node_modules" },
      {
        type: "paragraph",
        text: "A `.dockerignore` file keeps the build context small and stops local state from leaking into the image. At a minimum, exclude dependencies, build output, Git history, and local environment files.",
      },
      {
        type: "code",
        language: "text",
        code: `node_modules
dist
.git
.env
.env.*
*.log
coverage`,
      },
      {
        type: "callout",
        title: "Never bake secrets into an image",
        text: "A frontend build only sees the variables available at build time. If a value is secret, it doesn’t belong in the client bundle at all. For public endpoints, use runtime configuration where you can.",
      },
      { type: "heading", level: 2, text: "Build and run it locally" },
      {
        type: "code",
        language: "bash",
        code: `docker build -t portfolio:local .
docker run --rm -p 8080:80 portfolio:local`,
      },
      {
        type: "paragraph",
        text: "Open `http://localhost:8080`. If your single-page app uses client-side routes, the web server needs a fallback to `index.html`. With nginx that’s a `try_files` rule, and on a static host it’s usually a rewrite setting. Getting this right locally saves you a confusing 404 in production.",
      },
      { type: "heading", level: 2, text: "What Docker won’t fix" },
      {
        type: "list",
        items: [
          "It won’t make a slow build fast unless you make use of layer caching.",
          "It doesn’t replace CI. It gives CI a reproducible environment to run in.",
          "It won’t serve a SPA correctly without a fallback rule.",
          "It won’t hide an inconsistent lockfile, so use a frozen install in CI.",
        ],
      },
      {
        type: "paragraph",
        text: "Start with one Dockerfile and one service. The moment you catch yourself saying “it works locally but not on the deploy server,” you already have a reason to containerize the build. For most frontend projects that’s enough.",
      },
    ],
  },
  {
    slug: "database-design-fundamentals",
    title: "Database Design Basics: Start With the Questions",
    excerpt:
      "Good schemas don’t come from applying normalization rules. They start from the questions the product has to answer and the rules it must never break.",
    category: "Databases",
    publishedAt: "2025-12-03",
    cover: blogMedia.database,
    coverAlt:
      "Abstract illustration of relational tables and connected data rows",
    tags: ["Databases", "PostgreSQL", "Data modeling"],
    content: [
      {
        type: "paragraph",
        text: "When I started building full-stack apps, I designed tables by listing the fields on a screen. That worked until the product needed a second view of the same data. The schema reflected the interface, not the domain, and every new feature meant a migration. The better approach is slower at first and much faster afterwards.",
      },
      {
        type: "heading",
        level: 2,
        text: "Ask questions before opening the schema editor",
      },
      {
        type: "paragraph",
        text: "A schema is a set of answers to questions. Which entities exist on their own? What can be true at the same time? Which facts must never be duplicated? For a simple invoicing feature, the list might look like this:",
      },
      {
        type: "list",
        items: [
          "Can a customer have several invoices, and can one invoice ever belong to more than one customer?",
          "Can an invoice line item exist without an invoice?",
          "Do prices change over time, and should old invoices keep the price they were created with?",
          "Can an invoice be deleted, or only voided?",
          "Which operations have to happen atomically?",
        ],
      },
      {
        type: "paragraph",
        text: "These questions give you entities, relationships, and constraints. A screen only gives you fields. Starting from the screen is how a line item ends up storing a product price that quietly changes whenever the product is edited.",
      },
      { type: "heading", level: 2, text: "Model relationships explicitly" },
      {
        type: "paragraph",
        text: "Use join tables for many-to-many relationships, and give them their own meaning when needed. An order line isn’t just a link between an order and a product. It has a quantity and a unit price captured at the time of purchase. Treating it as a proper row of its own keeps that history explicit.",
      },
      {
        type: "code",
        language: "sql",
        code: `create table orders (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references customers(id),
  status text not null check (status in ('draft', 'paid', 'voided')),
  created_at timestamptz not null default now()
);

create table order_lines (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references orders(id) on delete cascade,
  product_id uuid not null references products(id),
  quantity integer not null check (quantity > 0),
  unit_price_cents integer not null check (unit_price_cents >= 0)
);`,
      },
      {
        type: "heading",
        level: 2,
        text: "Normalize until the invariants are easy to protect",
      },
      {
        type: "paragraph",
        text: "Normalization is usually taught as a sequence of normal forms. In practice I use a simpler test: can a single fact be updated in exactly one place? If a customer’s address is stored on every order, fixing it takes a bulk update, and old orders may lose their historical accuracy. Keeping a separate address snapshot on the order is then a deliberate choice, not an accident.",
      },
      {
        type: "callout",
        title: "Denormalize on purpose",
        text: "Storing a copy of a value to preserve history, avoid a heavy join, or enforce a business rule is fine, as long as you know which copy is authoritative and how the copies are kept consistent.",
      },
      {
        type: "heading",
        level: 2,
        text: "Indexes are for queries, not columns",
      },
      {
        type: "paragraph",
        text: "A useful index follows the access pattern: the columns in the filter first, then the ordering. Adding an index to every foreign key is a common first step, but it isn’t automatically useful. Look at the query plans for the queries that actually run, and drop indexes that only slow down writes.",
      },
      {
        type: "code",
        language: "sql",
        code: `-- Supporting the common "recent open orders for a customer" view
create index orders_customer_status_created_idx
  on orders (customer_id, status, created_at desc);`,
      },
      {
        type: "heading",
        level: 2,
        text: "Protect invariants with transactions and constraints",
      },
      {
        type: "paragraph",
        text: "Application code can be retried, deployed twice, or race with another request. The database should enforce the rules that must always hold. Use foreign keys, unique constraints, and check constraints for structural rules, and transactions for operations that touch several rows. A `paid` order with no payment record should be impossible, not just unlikely.",
      },
      { type: "heading", level: 2, text: "Migrations are part of the design" },
      {
        type: "paragraph",
        text: "Think about how the schema will change while data already exists. Add nullable columns, backfill in batches, deploy code that handles both shapes, then tighten the constraints. Being able to evolve a schema safely is worth more than getting every column right the first time.",
      },
      {
        type: "paragraph",
        text: "Across all of this, the habit is to write down the invariants before writing the tables. Once the questions are explicit, the schema is easier to explain to another developer, and much easier to change when the product inevitably asks for something new.",
      },
    ],
  },
];

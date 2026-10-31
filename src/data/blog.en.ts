import { blogMedia } from '@/data/media'
import type { BlogPost } from '@/types'

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
    slug: 'understanding-react-hooks',
    title: 'Understanding React Hooks: A Mental Model That Sticks',
    excerpt:
      'Hooks stopped feeling unpredictable once I stopped thinking about them as lifecycle methods. Here is the model I use instead.',
    category: 'React',
    publishedAt: '2026-09-18',
    cover: blogMedia.hooks,
    coverAlt: 'Abstract illustration of connected components and state flowing through a React tree',
    tags: ['React', 'Hooks', 'Fundamentals'],
    featured: true,
    content: [
      {
        type: 'paragraph',
        text: 'The first time I read a hooks tutorial, I understood the syntax and none of the behavior. State updates seemed to appear in the wrong place. Effects ran more often than I expected. The advice to "just add the dependency" worked until it caused an infinite loop. The problem was not the API; it was the model I brought to it. I was still thinking in component lifecycles, and hooks are not lifecycle methods with a different spelling.',
      },
      { type: 'heading', level: 2, text: 'Hooks are values, not timelines' },
      {
        type: 'paragraph',
        text: 'A function component is a function that returns UI. Every render calls that function with the current props. The values created inside it — state, derived variables, callbacks — belong to that one render. There is no long-lived component instance with a `this.state` object being edited in place. When state changes, React calls the function again and compares the output.',
      },
      {
        type: 'paragraph',
        text: 'Once that clicked, `useState` stopped being mysterious. It is how a function component asks React to remember a value between calls, and how it asks for a new render when that value changes.',
      },
      {
        type: 'code',
        language: 'tsx',
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
        type: 'paragraph',
        text: 'Each click creates a new render with a new `count`. The event handler closes over the `count` from the render in which it was created. That is why stale values in callbacks are a natural consequence of the model, not a bug in React. The fix is usually a functional update: `setCount((current) => current + 1)`.',
      },
      { type: 'heading', level: 2, text: 'Effects synchronize; they do not run "after render"' },
      {
        type: 'paragraph',
        text: 'The second mental shift is to describe an effect by what it synchronizes with, rather than when it runs. "Fetch data after mount" is a timeline. "Keep the document title in sync with the active project" is a relationship. Relationships survive re-renders and have clear inputs and cleanup.',
      },
      {
        type: 'code',
        language: 'tsx',
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
        type: 'paragraph',
        text: 'Here the effect starts a request and returns a cleanup that cancels it. React runs the cleanup before the next effect or when the component unmounts. That is the whole contract: set something up, take it down. Thinking in terms of setup and cleanup makes most effect bugs disappear.',
      },
      {
        type: 'callout',
        title: 'A useful rule of thumb',
        text: 'If a value changes and the UI should update, it belongs in state. If it can be derived from props or other state during render, derive it. Effects are for connecting to systems outside React, not for computing values.',
      },
      { type: 'heading', level: 2, text: 'The dependency array describes inputs' },
      {
        type: 'paragraph',
        text: 'The dependency array is not a schedule. It is not "run once" or "run when I feel like it". It is the list of values the effect reads from the component. React compares this list with the previous render and re-synchronizes when any input changed. The honest answer to "which dependencies should I include?" is "the ones the effect actually reads". If that causes too many runs, the effect or the value is usually the thing to change.',
      },
      {
        type: 'list',
        items: [
          'Move data fetching into a dedicated hook or query library so caching and cancellation are handled once.',
          'Create stable event handlers with useCallback only when a dependency requires it — not by default.',
          'Use a ref when you need the latest value without making it an effect input.',
          'Extract an effect into a custom hook when it has a clear name and a single responsibility.',
        ],
      },
      { type: 'heading', level: 2, text: 'A checklist I still use' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Can this value be computed during render instead of stored?',
          'Does this effect connect to something outside React, and can it clean up after itself?',
          'Would the component make sense if it were called twice in a row with the same props?',
          'Am I synchronizing with an external system, or trying to react to a specific render?',
        ],
      },
      {
        type: 'quote',
        text: 'Hooks are not harder than classes. They are just less forgiving of a vague mental model.',
      },
      {
        type: 'paragraph',
        text: 'The practical result of this model is simpler code. Effects get smaller, derived values move back into render, and stale closures become an obvious signal that a value is being read from the wrong render. The syntax is the easy part — the model is what makes it predictable.',
      },
    ],
  },
  {
    slug: 'scalable-react-applications',
    title: 'Building Scalable React Applications Without Over-Engineering',
    excerpt:
      'Most React codebases do not fail because they are too small. They become hard to change when boundaries are unclear. Here is a structure that grows with the product.',
    category: 'Architecture',
    publishedAt: '2026-07-06',
    cover: blogMedia.scalable,
    coverAlt: 'Abstract layered illustration representing frontend application boundaries and modules',
    tags: ['React', 'Architecture', 'TypeScript'],
    content: [
      {
        type: 'paragraph',
        text: 'Scalability gets used as an argument for elaborate folder structures, global state, and abstraction layers that will "pay off later". In practice, most of those layers cost time immediately and never earn it back. A React application scales when its boundaries are clear and its dependencies point in sensible directions. That is mostly a design problem, not a file tree problem.',
      },
      { type: 'heading', level: 2, text: 'Start with boundaries, not folders' },
      {
        type: 'paragraph',
        text: 'Before creating directories, decide which parts of the product change together. A project board, a billing screen, and an account settings page are different features. They may share a button, an API client, and a formatter, but they should not reach into each other’s internals. Once that is explicit, the folder layout becomes a consequence rather than a debate.',
      },
      {
        type: 'code',
        language: 'text',
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
        type: 'paragraph',
        text: 'The important rule is not the exact names. It is that a feature owns its data access and internal components, while shared folders stay small and genuinely reusable. A shared folder that becomes a second application is usually a sign that the feature boundaries were never decided.',
      },
      { type: 'heading', level: 2, text: 'Split state by ownership' },
      {
        type: 'paragraph',
        text: 'A surprising amount of complexity comes from putting state in the wrong place. I use four buckets:',
      },
      {
        type: 'list',
        items: [
          'Local UI state (open panels, draft input) stays in the nearest component.',
          'URL state (filters, selected tab, pagination) belongs in search params where it can be shared and reloaded.',
          'Server state (lists, records, mutations) belongs in a query layer that handles caching, retries, and invalidation.',
          'Global client state should be rare. If two distant features need it, ask whether the server or the URL should own it instead.',
        ],
      },
      {
        type: 'paragraph',
        text: 'When every filter in a complex screen lives in search params, testing becomes simpler and users get links they can send to a colleague. That is a scalability win with no abstraction required.',
      },
      { type: 'heading', level: 2, text: 'Let the router own the pages' },
      {
        type: 'paragraph',
        text: 'Route-level code splitting is one of the cheapest performance improvements available. Keep the homepage eager, split detail screens and secondary routes, and give Suspense a skeleton that preserves layout.',
      },
      {
        type: 'code',
        language: 'tsx',
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
        type: 'callout',
        title: 'Suspense fallbacks are UI',
        text: 'A blank screen or a spinner in the middle of the page is a layout jump waiting to happen. Reserve the space the content will occupy, then animate the content in if it helps.',
      },
      { type: 'heading', level: 2, text: 'Make the types do the documentation' },
      {
        type: 'paragraph',
        text: 'TypeScript earns its keep at the boundaries: API responses, form schemas, and component props. Parse unknown data once at the edge, then let the rest of the application work with trusted types. Avoid exporting a type from a component’s internals just so another feature can couple to it. If two features need the shape, it belongs in a shared domain module — with a deliberate name.',
      },
      { type: 'heading', level: 2, text: 'Measure before abstracting' },
      {
        type: 'paragraph',
        text: 'The moment a codebase gains a generic data table, a form builder, and a custom state manager, every change has to be understood through three abstractions. Sometimes that is justified. Often it is anticipation disguised as architecture. Duplicate a small component twice, notice the actual differences, and extract the stable part. The third use case is a much better design brief than the first.',
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Name the feature boundary and keep its data access inside it.',
          'Move state to the smallest correct owner, then to the URL or server when appropriate.',
          'Split routes before splitting components.',
          'Type the edges of the system, not every local variable.',
          'Extract shared code after the second real duplication, not before the first.',
        ],
      },
      {
        type: 'paragraph',
        text: 'None of this is novel, and that is the point. A scalable React application is usually a collection of small, clear decisions repeated consistently. The architecture should make the next change easier to reason about — and then stay out of the way.',
      },
    ],
  },
  {
    slug: 'typescript-patterns',
    title: 'TypeScript Patterns I Reach For Every Day',
    excerpt:
      'A small set of TypeScript patterns that make application code safer without turning it into a type-level puzzle.',
    category: 'TypeScript',
    publishedAt: '2026-05-22',
    cover: blogMedia.typescript,
    coverAlt: 'Abstract blue illustration of TypeScript type narrowing and union shapes',
    tags: ['TypeScript', 'Patterns', 'Best practices'],
    content: [
      {
        type: 'paragraph',
        text: 'TypeScript is most useful when it removes a class of runtime uncertainty from everyday code. These are the patterns I use most often — not clever type gymnastics, just small habits that make states explicit and let the compiler catch the boring mistakes.',
      },
      { type: 'heading', level: 2, text: 'Discriminated unions for states' },
      {
        type: 'paragraph',
        text: 'A request has more states than "loading" and "data". Modelling them as separate booleans creates impossible combinations — loading and errored at the same time, or data that exists before a request has succeeded. A discriminated union makes each state valid on its own terms.',
      },
      {
        type: 'code',
        language: 'ts',
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
        type: 'paragraph',
        text: 'The switch is exhaustive. Add a new status and every renderer that does not handle it fails to typecheck. That is a much better failure mode than a missing case at runtime.',
      },
      { type: 'heading', level: 2, text: 'satisfies keeps shape checks without widening' },
      {
        type: 'paragraph',
        text: 'An annotation like `const config: Record<string, string>` widens the type and loses the keys you just wrote. `satisfies` checks the value against a shape while preserving its literal inference.',
      },
      {
        type: 'code',
        language: 'ts',
        code: `const statusLabels = {
  active: 'Active',
  paused: 'Paused',
  archived: 'Archived',
} satisfies Record<string, string>

// statusLabels.active is "Active", not string`,
      },
      {
        type: 'paragraph',
        text: 'I use this for route maps, design tokens, and lookup objects where I want both validation and useful autocomplete downstream.',
      },
      { type: 'heading', level: 2, text: 'Parse at the boundary, trust inside' },
      {
        type: 'paragraph',
        text: 'Types disappear at runtime. A network response can be anything, even if the function is annotated as returning a typed object. Parse once where data enters the application, then keep the internal code free of defensive checks.',
      },
      {
        type: 'code',
        language: 'ts',
        code: `const projectSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  archivedAt: z.string().datetime().nullable(),
})

const project = projectSchema.parse(await response.json())`,
      },
      {
        type: 'callout',
        title: 'Do not cast your way past the boundary',
        text: 'An `as Project` assertion is a promise the compiler cannot keep. Runtime validation is the only place that promise can actually be verified.',
      },
      { type: 'heading', level: 2, text: 'Narrow with type predicates, not casts' },
      {
        type: 'paragraph',
        text: 'When a helper checks a value, say so in the signature. A predicate keeps the caller type-safe and makes the condition reusable.',
      },
      {
        type: 'code',
        language: 'ts',
        code: `function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined
}

const names = projectIds.map(getProject).filter(isDefined).map((p) => p.name)`,
      },
      { type: 'heading', level: 2, text: 'Prefer const objects to enums in application code' },
      {
        type: 'paragraph',
        text: 'String unions and `as const` objects are easier to serialize, log, and pass through browser APIs. They also avoid the runtime artifact that ordinary enums introduce.',
      },
      {
        type: 'code',
        language: 'ts',
        code: `const PROJECT_KINDS = ['personal', 'client', 'internal'] as const
type ProjectKind = (typeof PROJECT_KINDS)[number]`,
      },
      {
        type: 'paragraph',
        text: 'The common thread is that each pattern makes a real state explicit and removes a chance for the code to imply something the compiler cannot check. That is a better use of TypeScript than building a type system that only the author can read.',
      },
    ],
  },
  {
    slug: 'docker-for-frontend-developers',
    title: 'Getting Started with Docker for Frontend Developers',
    excerpt:
      'You do not need to run production Kubernetes to benefit from containers. A Dockerfile can make a frontend build reproducible in less than twenty lines.',
    category: 'DevOps',
    publishedAt: '2026-02-11',
    cover: blogMedia.docker,
    coverAlt: 'Abstract illustration of stacked containers and a build pipeline',
    tags: ['Docker', 'DevOps', 'Build'],
    content: [
      {
        type: 'paragraph',
        text: 'For a long time I treated Docker as infrastructure work that happened somewhere after my code was finished. The mental shift came when a build worked on my machine and failed on a colleague’s with a slightly different Node version. Containers are not only for production; they are a way to make the environment part of the artifact.',
      },
      { type: 'heading', level: 2, text: 'Images, containers, and why you care' },
      {
        type: 'paragraph',
        text: 'An image is a frozen filesystem plus metadata. A container is a running process based on that image. You build an image once and can run the same one on a laptop, in CI, and on a server. For a frontend project, that usually means a predictable Node version, deterministic dependency installation, and a build step that does not depend on global tools.',
      },
      { type: 'heading', level: 2, text: 'A multi-stage Dockerfile' },
      {
        type: 'paragraph',
        text: 'A Vite application builds to static files. The container that builds it should not be the container that serves it. Multi-stage builds let the first stage keep Node and dependencies, while the final image contains only the compiled assets and a small web server.',
      },
      {
        type: 'code',
        language: 'dockerfile',
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
        type: 'paragraph',
        text: 'The build stage is discarded. The runtime image has no source code, no dev dependencies, and no Node runtime to attack. That is a meaningful reduction in both size and surface area.',
      },
      { type: 'heading', level: 2, text: 'Ignore more than node_modules' },
      {
        type: 'paragraph',
        text: 'A `.dockerignore` file keeps the build context small and prevents local state from leaking into the image. At minimum, exclude dependencies, build output, Git history, and local environment files.',
      },
      {
        type: 'code',
        language: 'text',
        code: `node_modules
dist
.git
.env
.env.*
*.log
coverage`,
      },
      {
        type: 'callout',
        title: 'Never bake secrets into an image',
        text: 'A frontend build only sees variables available at build time. If a value is a secret, it does not belong in the client bundle at all. Use runtime configuration for public endpoints when possible.',
      },
      { type: 'heading', level: 2, text: 'Build and run it locally' },
      {
        type: 'code',
        language: 'bash',
        code: `docker build -t portfolio:local .
docker run --rm -p 8080:80 portfolio:local`,
      },
      {
        type: 'paragraph',
        text: 'Open `http://localhost:8080`. If the single-page application uses client-side routes, the web server needs a fallback to `index.html`. With nginx that is a `try_files` rule; with a static host it is usually a rewrite configuration. Getting this right locally saves a confusing 404 in production.',
      },
      { type: 'heading', level: 2, text: 'What Docker will not fix' },
      {
        type: 'list',
        items: [
          'It will not make a slow build fast unless layer caching is respected.',
          'It will not replace CI. It gives CI a reproducible environment to run.',
          'It will not serve a SPA correctly without a fallback rule.',
          'It will not hide an inconsistent lockfile — use a frozen install in CI.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Start with one Dockerfile and one service. When you find yourself explaining "it works locally but not on the deploy server", you already have the reason to containerize the build. That is enough of a win for most frontend projects.',
      },
    ],
  },
  {
    slug: 'database-design-fundamentals',
    title: 'Database Design Fundamentals: Start With the Questions',
    excerpt:
      'Good schemas are not the result of applying normalization rules. They start with the questions the product needs answered — and the constraints it must never violate.',
    category: 'Databases',
    publishedAt: '2025-12-03',
    cover: blogMedia.database,
    coverAlt: 'Abstract illustration of relational tables and connected data rows',
    tags: ['Databases', 'PostgreSQL', 'Data modeling'],
    content: [
      {
        type: 'paragraph',
        text: 'When I started building full-stack applications, I designed tables by listing the fields on a screen. It worked until the product needed a second view of the same data. The schema had encoded the interface, not the domain, and every new feature required a migration. The better approach is slower at the beginning and much faster afterwards.',
      },
      { type: 'heading', level: 2, text: 'Ask questions before opening the schema editor' },
      {
        type: 'paragraph',
        text: 'A schema is a set of answers to questions. Which entities exist independently? What can be true at the same time? Which facts must never be duplicated? For a simple invoicing feature, the list might be:',
      },
      {
        type: 'list',
        items: [
          'Can a customer have multiple invoices, and can an invoice ever have more than one customer?',
          'Can an invoice line item exist without an invoice?',
          'Do prices change over time, and should old invoices keep the price they were created with?',
          'Can an invoice be deleted, or only voided?',
          'Which operations must happen atomically?',
        ],
      },
      {
        type: 'paragraph',
        text: 'These questions produce entities, relationships, and constraints. The screen produces fields. Starting with the screen is how a line item ends up storing a product price that silently changes when the product is edited.',
      },
      { type: 'heading', level: 2, text: 'Model relationships explicitly' },
      {
        type: 'paragraph',
        text: 'Use join tables for many-to-many relationships and give them their own meaning when needed. An order line is not just a relationship between an order and a product; it has a quantity and a unit price captured at the time of purchase. Treating it as a first-class row makes that history explicit.',
      },
      {
        type: 'code',
        language: 'sql',
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
      { type: 'heading', level: 2, text: 'Normalize until the invariants are easy to protect' },
      {
        type: 'paragraph',
        text: 'Normalization is often taught as a sequence of forms. In practice, I use a simpler test: can a single fact be updated in exactly one place? If a customer address is stored on every order, a correction requires a bulk update and old orders may lose their historical accuracy. A separate address snapshot on the order is then a deliberate choice, not an accident.',
      },
      {
        type: 'callout',
        title: 'Denormalize on purpose',
        text: 'Storing a copy of a value to preserve history, avoid a heavy join, or enforce a business rule is fine — as long as you know which copy is authoritative and how it is kept consistent.',
      },
      { type: 'heading', level: 2, text: 'Indexes are for queries, not columns' },
      {
        type: 'paragraph',
        text: 'A useful index follows the access pattern: the columns in the filter, then the ordering. Adding an index to every foreign key is a common first step, but it is not automatically useful. Look at the query plans for the queries that actually run, and remove indexes that only cost writes.',
      },
      {
        type: 'code',
        language: 'sql',
        code: `-- Supporting the common "recent open orders for a customer" view
create index orders_customer_status_created_idx
  on orders (customer_id, status, created_at desc);`,
      },
      { type: 'heading', level: 2, text: 'Protect invariants with transactions and constraints' },
      {
        type: 'paragraph',
        text: 'Application code can be retried, deployed twice, or race with another request. The database should enforce the rules that must always hold. Use foreign keys, unique constraints, and check constraints for structural invariants, and transactions for operations that span multiple rows. A `paid` order with no payment record should be impossible, not merely unlikely.',
      },
      { type: 'heading', level: 2, text: 'Migrations are part of the design' },
      {
        type: 'paragraph',
        text: 'Think about how the schema will change while data already exists. Add nullable columns, backfill in batches, deploy code that handles both shapes, then tighten constraints. The ability to evolve a schema safely is more valuable than getting every column right the first time.',
      },
      {
        type: 'paragraph',
        text: 'The pattern across all of this is to write down the invariants before writing the tables. Once the questions are explicit, the schema becomes easier to explain to another developer — and much easier to change when the product inevitably asks something new.',
      },
    ],
  },
]

import { projectMedia } from "@/data/media";
import type { Project } from "@/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  PROJECTS — ENGLISH
 *  Every case study below describes an application that was
 *  actually built, with real screenshots wired through
 *  `projectMedia`. Add `links.demo` / `links.repository` only when
 *  a public destination exists; empty buttons are hidden by the UI.
 *  The Indonesian translation lives in `projects.id.ts`.
 * ─────────────────────────────────────────────────────────────
 */
export const projectsEn: Project[] = [
  {
    slug: "kivapos",
    name: "KivaPOS",
    category: "POS · Business finance",
    summary:
      "A point-of-sale and bookkeeping app for small businesses: sales, purchases, stock, products and services, and financial reports in one dashboard.",
    description:
      "KivaPOS is a web-based point-of-sale application where every transaction updates stock and reporting in the same place, the product and service catalogue lives beside it, and subscription limits are visible instead of buried.",
    year: "2026",
    role: "Full-stack developer",
    duration: "Ongoing",
    thumbnail: projectMedia.kivapos.cover,
    thumbnailAlt:
      "KivaPOS landing page with feature navigation, pricing, and a preview of the product dashboard",
    featured: true,
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Vercel",
    ],
    features: [
      {
        title: "Point of sale in one flow",
        description:
          "Sales are created from the same catalogue as stock, then recorded in the sales report without a second round of data entry.",
      },
      {
        title: "Purchases that add stock straight away",
        description:
          "Each purchase carries incoming stock, cost price, and the supplier invoice, so inventory and payables stay connected.",
      },
      {
        title: "Products and services in one catalogue",
        description:
          "Goods and services are managed together: product code, barcode, unit, warehouse stock, cost price, and selling price.",
      },
      {
        title: "Financial reporting that fills itself",
        description:
          "Sales, purchases, profit and loss, and expenses are calculated from the same transactions, with a monthly trend and a product monitor.",
      },
      {
        title: "Transparent subscription plans",
        description:
          "Trial period, monthly price, and storage, user, and transaction limits are shown as live usage instead of hidden rules.",
      },
      {
        title: "Role and business settings",
        description:
          "Business profile, employees, notifications, security, and billing are configured per account, so owners and staff see the menu that fits them.",
      },
    ],
    links: {},
    caseStudy: {
      overview:
        "KivaPOS is a point-of-sale and bookkeeping application for shops, small stores, and service businesses that still rely on separate records. The marketing site explains the product; the app itself ties daily transactions to the work that normally happens at the end of the month: checking stock, working out profit, and closing the books.",
      problem:
        "Small businesses often run three tools at once: a cashier app, a stock book, and a finance spreadsheet. They rarely talk to each other, so the owner copies numbers between them, adjusts stock by hand, and only learns the month’s profit after all the reconciling is done. The gap is not a missing feature — it is the lack of a single source of truth for sales, stock, and reports.",
      solution:
        "I built one web application with transactions at the centre. Sales and purchases are written as transactions, stock movements are derived from them, and summary cards, charts, and report exports read the same period aggregation. On top of that sits a subscription layer that manages the trial, the monthly price, and account quotas.",
      stack: [
        {
          label: "Interface",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
        {
          label: "Data & infrastructure",
          items: ["PostgreSQL", "Prisma", "Vercel"],
        },
      ],
      process: [
        {
          title: "Mapping the daily sequence",
          description:
            "I started with the order that actually happens in a shop: goods arrive, stock goes up, goods sell, stock goes down, then the owner closes the books. That sequence shaped the navigation, not a feature list.",
        },
        {
          title: "Designing the dashboard around owner questions",
          description:
            "The overview and report pages are built from the questions owners really ask: how much did I sell this month, what was the profit, and which stock is running low.",
        },
        {
          title: "Connecting transactions, stock, and reporting",
          description:
            "Purchases and sales are written as transactions, and both stock movements and report figures are derived from them. Nothing important is entered twice.",
        },
        {
          title: "Designing plans alongside the core product",
          description:
            "The plan page was built together with the dashboard so user, transaction, and storage limits could be shown as real usage from the first version.",
        },
      ],
      challenges: [
        {
          title: "Numbers that must not disagree between pages",
          problem:
            "Total sales appears in summary cards, trend charts, and the exported file. If every widget runs its own query, a single mismatched filter is enough to make the reports contradict each other.",
          solution:
            "Every figure comes from one aggregation layer per period. Cards, charts, and exports receive the same result, and the period picker on the report page drives all of them.",
        },
        {
          title: "Stock that moves in two directions",
          problem:
            "Purchases add stock, sales remove it, and manual corrections can happen at any time. Storing a single stock number and overwriting it loses the history exactly when the count no longer matches.",
          solution:
            "Stock is recorded as movements — in, out, and adjustment — and the final quantity is calculated from that ledger. Any discrepancy can be traced back to the transaction that caused it.",
        },
        {
          title: "Plan limits without locking data away",
          problem:
            "A trial has user, transaction, and storage limits. Checks scattered across pages let limits slip through, while overly strict enforcement can make existing data unreadable.",
          solution:
            "Plan entitlements and quotas live in one layer used by every server action. The plan page shows running usage, and data that already exists stays readable even when a quota is reached.",
        },
      ],
      results: [
        "Owners can see sales, purchases, profit and loss, and stock in one dashboard without moving numbers into a spreadsheet every month.",
        "Every sale or purchase updates stock immediately, so inventory counts no longer need manual adjustment.",
        "Reports can be filtered by month and exported, so closing the books uses the same data the owner sees day to day.",
        "The trial period, monthly price, and plan usage sit on one page before anyone is asked to renew.",
      ],
      lessons: [
        "A finance app is only as trustworthy as its input flow. Fixing stock recording mattered more than adding another chart.",
        "One source of figures for cards, charts, and exports prevents reports that contradict each other.",
        "Plan limits belong with the core features, not bolted on once the application is finished.",
      ],
      screenshots: [
        {
          src: projectMedia.kivapos.reports,
          alt: "KivaPOS financial report page with total sales, purchases, profit and loss cards, and a monthly trend chart",
          caption:
            "Summary cards, trend charts, and exports share the same period and the same data source.",
        },
        {
          src: projectMedia.kivapos.plans,
          alt: "KivaPOS plan and billing page with trial period, monthly price, and usage summary",
          caption:
            "User, transaction, and storage quotas are shown as real usage.",
        },
      ],
    },
  },
  {
    slug: "saleta-food",
    name: "Saleta Food",
    category: "Company profile · F&B supplier",
    summary:
      "A profile and product catalogue site for a food and beverage supplier, with large product photography and an order button on every card.",
    description:
      "Saleta Food is a company profile site for a frozen food and ingredients supplier: a tidy product catalogue, category pages, and an ordering path that needs no account.",
    year: "2025",
    role: "Full-stack developer",
    duration: "Ongoing",
    thumbnail: projectMedia.saletafood.cover,
    thumbnailAlt:
      "Saleta Food landing page with food photography, supplier headline, and an order button",
    featured: true,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      {
        title: "A hero that sells trust",
        description:
          "Fresh ingredient photography and one line of positioning: a food and beverage supplier connecting local products to global markets.",
      },
      {
        title: "A catalogue built for scanning",
        description:
          "The product grid shows photo, name, and a short description at a consistent rhythm, so buyers can compare many products on one screen.",
      },
      {
        title: "Category navigation",
        description:
          "The category menu takes visitors straight to the product group they need instead of making them scroll the whole catalogue.",
      },
      {
        title: "Ordering without an account",
        description:
          "The order button appears in the hero and on every product card, so buyers can reach the sales team immediately.",
      },
      {
        title: "Company profile and contact",
        description:
          "About and Contact pages round out the catalogue, letting buyers get to know the supplier before ordering.",
      },
    ],
    links: {},
    caseStudy: {
      overview:
        "Saleta Food sells ingredients and frozen food to households and businesses. The site works as a shop window: a product catalogue that always looks tidy, company information, and one clear step to order.",
      problem:
        "Supplier catalogues often live in PDF brochures and social media posts. Both go stale quickly, are hard to search, and never show the range on one page. Visitors arriving from a link or a search engine also have no fixed place to browse before contacting the seller.",
      solution:
        "I built a Next.js site that separates product data from the components that render it. The catalogue, categories, and supporting pages share one product card component, and every card carries an order button so visitors never have to hunt for contact details.",
      stack: [
        {
          label: "Interface",
          items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        },
        {
          label: "Media & deploy",
          items: ["next/image", "Vercel"],
        },
      ],
      process: [
        {
          title: "Defining the catalogue first",
          description:
            "I collected the products, categories, and short descriptions before touching the layout. That data structure decides the shape of the page, not the other way round.",
        },
        {
          title: "Building one product card",
          description:
            "The card is reused on the home page and the product page, complete with a fixed image ratio, name, a neatly clamped description, and the order button.",
        },
        {
          title: "Building the supporting pages",
          description:
            "About, Category, and Contact follow the same patterns, so navigation stays consistent and new pages are easy to add.",
        },
        {
          title: "Tidying the product photography",
          description:
            "Original photos are cropped to one ratio, compressed, and served at the size the screen needs so the catalogue page stays light.",
        },
      ],
      challenges: [
        {
          title: "Heavy product photography",
          problem:
            "Photos come from phones and large cameras. Serving them as-is makes the catalogue slow, especially on mobile connections.",
          solution:
            "Every photo is cropped to the same ratio and delivered at responsive sizes. Images below the fold load later, so the first screen stays light.",
        },
        {
          title: "A catalogue that changes without a developer",
          problem:
            "The product list changes almost every week. If each product is written inside a component, even a small change needs a redeploy.",
          solution:
            "Products live as separate data and are rendered by one component. Adding or hiding a product only changes that data.",
        },
        {
          title: "An order prompt that does not get in the way",
          problem:
            "Too many order buttons make a page feel like an advert, while a single button at the bottom is easy to miss.",
          solution:
            "The order button repeats at the same visual weight: one in the hero, one on each product card, never louder than the photo and the product name.",
        },
      ],
      results: [
        "The full catalogue of photos, names, and descriptions can be browsed on one page instead of across social media posts.",
        "Every product has an order button that takes visitors to the next step rather than stopping at information.",
        "New products can be added through data without changing the page layout.",
        "The landing page stays light even with high-resolution product photography.",
      ],
      lessons: [
        "For a catalogue, the product data model matters more than animation. Its contents change more often than its appearance.",
        "One reusable card component keeps the catalogue consistent as products are added.",
        "Photography is the main content here, so its size and ratio are decided at the start, not after the page is finished.",
      ],
      screenshots: [
        {
          src: projectMedia.saletafood.products,
          alt: "Saleta Food catalogue page showing a grid of products with photos, names, and order buttons",
          caption:
            "The catalogue grid shares its component with the home page, so it stays consistent as products are added.",
        },
      ],
    },
  },
];

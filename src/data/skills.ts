import type { Localized, SkillGroup } from "@/types";

/**
 * Skill groups are intentionally categorical — no invented percentage bars.
 * Levels are stable keys (`Advanced`, `Proficient`, `Working knowledge`) that
 * are translated at render time through `uiCopy[locale].skills.levels`.
 */
export const skillGroupsContent: Localized<SkillGroup[]> = {
  en: [
    {
      id: "frontend",
      title: "Frontend Development",
      description:
        "Interfaces that feel fast and work just as well with a mouse, a keyboard, or a screen reader.",
      icon: "layout",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Vite", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "React Router", level: "Proficient" },
        { name: "HTML & CSS", level: "Advanced" },
        { name: "Motion", level: "Proficient" },
      ],
    },
    {
      id: "backend",
      title: "Backend Development",
      description:
        "Simple services with clear boundaries and APIs you can rely on.",
      icon: "server",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Hono", level: "Proficient" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Zod", level: "Proficient" },
        { name: "Prisma", level: "Proficient" },
        { name: "GraphQL", level: "Working knowledge" },
        { name: "Bun", level: "Proficient" },
        { name: "WebSockets", level: "Working knowledge" },
      ],
    },
    {
      id: "database",
      title: "Database",
      description:
        "Data models and queries shaped around what the product actually needs to ask.",
      icon: "database",
      skills: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "Redis", level: "Proficient" },
        { name: "SQLite", level: "Proficient" },
        { name: "Drizzle ORM", level: "Proficient" },
        { name: "Supabase", level: "Proficient" },
        { name: "SQL", level: "Advanced" },
        { name: "Database design", level: "Advanced" },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Infrastructure",
      description:
        "Pipelines and environments that make small releases boring.",
      icon: "infrastructure",
      skills: [
        { name: "Docker", level: "Proficient" },
        { name: "GitHub Actions", level: "Proficient" },
        { name: "Cloudflare", level: "Proficient" },
        { name: "Vercel", level: "Proficient" },
        { name: "Nginx", level: "Working knowledge" },
        { name: "Terraform", level: "Working knowledge" },
        { name: "Linux", level: "Working knowledge" },
      ],
    },
    {
      id: "tools",
      title: "Tools & Workflow",
      description:
        "My daily setup: quick feedback, readable diffs, and tests worth keeping.",
      icon: "workflow",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "Vitest", level: "Proficient" },
        { name: "Figma", level: "Proficient" },
        { name: "ESLint", level: "Proficient" },
        { name: "Storybook", level: "Working knowledge" },
        { name: "Playwright", level: "Working knowledge" },
      ],
    },
    {
      id: "mobile",
      title: "Mobile Development",
      description:
        "Enough cross-platform experience to take a product from a responsive web app to a native one.",
      icon: "mobile",
      skills: [
        { name: "React Native", level: "Working knowledge" },
        { name: "Expo", level: "Working knowledge" },
        { name: "React Navigation", level: "Working knowledge" },
        { name: "AsyncStorage", level: "Working knowledge" },
        { name: "Push notifications", level: "Working knowledge" },
        { name: "EAS Build", level: "Working knowledge" },
      ],
    },
  ],
  id: [
    {
      id: "frontend",
      title: "Pengembangan Frontend",
      description:
        "Antarmuka yang terasa cepat dan tetap nyaman dipakai lewat mouse, keyboard, maupun screen reader.",
      icon: "layout",
      skills: [
        { name: "React", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript", level: "Advanced" },
        { name: "Vite", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "React Router", level: "Proficient" },
        { name: "HTML & CSS", level: "Advanced" },
        { name: "Motion", level: "Proficient" },
      ],
    },
    {
      id: "backend",
      title: "Pengembangan Backend",
      description:
        "Layanan yang sederhana, dengan batas yang jelas dan API yang bisa diandalkan.",
      icon: "server",
      skills: [
        { name: "Node.js", level: "Advanced" },
        { name: "Hono", level: "Proficient" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Zod", level: "Proficient" },
        { name: "Prisma", level: "Proficient" },
        { name: "GraphQL", level: "Working knowledge" },
        { name: "Bun", level: "Proficient" },
        { name: "WebSockets", level: "Working knowledge" },
      ],
    },
    {
      id: "database",
      title: "Basis Data",
      description:
        "Model data dan query yang dibentuk dari pertanyaan yang memang diajukan oleh produknya.",
      icon: "database",
      skills: [
        { name: "PostgreSQL", level: "Advanced" },
        { name: "Redis", level: "Proficient" },
        { name: "SQLite", level: "Proficient" },
        { name: "Drizzle ORM", level: "Proficient" },
        { name: "Supabase", level: "Proficient" },
        { name: "SQL", level: "Advanced" },
        { name: "Database design", level: "Advanced" },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Infrastruktur",
      description:
        "Pipeline dan lingkungan yang membuat rilis kecil jadi urusan biasa.",
      icon: "infrastructure",
      skills: [
        { name: "Docker", level: "Proficient" },
        { name: "GitHub Actions", level: "Proficient" },
        { name: "Cloudflare", level: "Proficient" },
        { name: "Vercel", level: "Proficient" },
        { name: "Nginx", level: "Working knowledge" },
        { name: "Terraform", level: "Working knowledge" },
        { name: "Linux", level: "Working knowledge" },
      ],
    },
    {
      id: "tools",
      title: "Perkakas & Alur Kerja",
      description:
        "Setup harian saya: umpan balik yang cepat, diff yang enak dibaca, dan tes yang memang berguna.",
      icon: "workflow",
      skills: [
        { name: "Git", level: "Advanced" },
        { name: "GitHub", level: "Advanced" },
        { name: "Vitest", level: "Proficient" },
        { name: "Figma", level: "Proficient" },
        { name: "ESLint", level: "Proficient" },
        { name: "Storybook", level: "Working knowledge" },
        { name: "Playwright", level: "Working knowledge" },
      ],
    },
    {
      id: "mobile",
      title: "Pengembangan Mobile",
      description:
        "Cukup berpengalaman lintas platform untuk membawa produk dari web responsif ke aplikasi native.",
      icon: "mobile",
      skills: [
        { name: "React Native", level: "Working knowledge" },
        { name: "Expo", level: "Working knowledge" },
        { name: "React Navigation", level: "Working knowledge" },
        { name: "AsyncStorage", level: "Working knowledge" },
        { name: "Push notifications", level: "Working knowledge" },
        { name: "EAS Build", level: "Working knowledge" },
      ],
    },
  ],
};

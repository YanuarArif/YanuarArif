# Build a Professional Developer Portfolio Website

## 1. Project Overview

Build a modern, professional, visually impressive, and fully responsive personal portfolio website for a software developer.

The website should showcase the developer's professional identity, technical skills, experience, projects, and contact information.

**Important:**

- Do not use any of my existing personal projects, company names, product names, or business information.
- Use realistic but completely fictional sample content and random demonstration projects.
- Make all sample content easy to replace later.
- Do not invent real work experience, certifications, or personal achievements.

The result should look like a real portfolio website suitable for professional job applications and freelance opportunities.

## 2. Technology Stack

Use the following technologies:

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Bun as the package manager and runtime
- React Router for client-side routing
- Lucide React for icons
- Motion (Framer Motion) for animations

Additional requirements:

- Use functional React components and hooks.
- Use TypeScript with strict typing.
- Use React best practices.
- Use reusable and maintainable components.
- Avoid unnecessary dependencies.
- Do not use Next.js or other server-side rendering frameworks.
- Do not use npm, yarn, or pnpm. Use Bun commands exclusively.

## 3. Website Structure

### A. Navigation Bar

Create a modern, responsive navigation bar containing:

- Developer logo or initials.
- Home
- About
- Skills
- Projects
- Experience
- Blog
- Contact
- Dark/Light mode toggle.

Requirements:

- Sticky navigation.
- Smooth scrolling.
- Active section indicator.
- Responsive mobile navigation.
- Subtle hover animations.

### B. Hero Section

Include:

- Developer name using fictional placeholder content.
- Professional title (e.g. Full-Stack Developer).
- Short professional introduction.
- Profile image placeholder or abstract developer illustration.
- Primary CTA: View Projects.
- Secondary CTA: Contact Me.
- GitHub and LinkedIn links.
- Availability status badge.

The hero section should immediately communicate who the developer is, what they do, and what value they provide.

### C. About Me Section

Include:

- Professional introduction.
- Programming background.
- Development interests.
- Career goals.
- Current learning activities.
- Personal highlights.

Use realistic fictional sample content.

### D. Skills & Technologies Section

Organize skills into categories:

1. Frontend Development
2. Backend Development
3. Database
4. DevOps & Infrastructure
5. Tools & Workflow
6. Mobile Development (optional)

Display technology names, icons, and optional experience labels.

Example technologies:

- React
- Vite
- TypeScript
- JavaScript
- Tailwind CSS
- Node.js
- PostgreSQL
- Prisma
- Docker
- Git
- REST API

Avoid misleading skill percentages. Prefer categorized skill groups or experience labels.

### E. Featured Projects Section

Create at least 3–4 fictional demonstration projects.

Use random but realistic project concepts:

1. TaskFlow — Project Management SaaS.
2. ShopEase — E-commerce Platform.
3. FinTrack — Personal Finance Dashboard.
4. FitLife — Fitness Tracking Application.

These are fictional demonstration projects, not actual projects belonging to the developer.

Each project card should include:

- Project thumbnail or screenshot.
- Project name.
- Short description.
- Project category.
- Technologies used.
- Key features.
- Live Demo link placeholder.
- GitHub Repository link placeholder.
- View Details action.

Create dedicated project detail pages or a reusable project details view.

### F. Project Case Studies

Create a reusable case study structure supporting:

1. Project Overview.
2. Problem Statement.
3. Proposed Solution.
4. Main Features.
5. Technology Stack.
6. Development Process.
7. Technical Challenges.
8. Solutions and Decisions.
9. Results and Lessons Learned.
10. Screenshots and Visual Demonstrations.

Use fictional sample information.

### G. Experience & Education Section

Create a professional timeline layout.

Include sample entries for:

- Work experience.
- Freelance experience.
- Personal development.
- Education.
- Relevant certifications.

Use fictional placeholder information and make everything editable.

### H. Blog Section

Create a blog section with sample technical articles, such as:

- Understanding React Hooks.
- Building Scalable React Applications.
- TypeScript Best Practices.
- Getting Started with Docker.
- Database Design Fundamentals.

Each blog card should contain:

- Cover image.
- Article title.
- Short description.
- Publication date.
- Category.
- Reading time.
- Read More link.

Create reusable blog detail pages with proper typography and reading experience.

Use local data or Markdown/MDX-compatible content management. Do not require an external CMS.

### I. Contact Section

Include:

- Contact heading.
- Invitation message.
- Email placeholder.
- GitHub link.
- LinkedIn link.
- Location placeholder.

Create a contact form with:

- Name.
- Email.
- Subject.
- Message.
- Submit button.

Requirements:

- Client-side validation.
- Loading state.
- Success state.
- Error state.

If no email service is configured, provide a clean integration placeholder. Never pretend that messages have been delivered.

### J. Footer

Include:

- Developer logo or initials.
- Short description.
- Navigation links.
- Social media links.
- Copyright information.
- Back-to-top button.

## 4. Additional Features

### Theme System

- Dark mode and light mode.
- Persist theme preference using localStorage.
- Smooth theme transitions.
- Appropriate colors for both themes.
- Prevent unnecessary theme flashing during initialization where practical.

### Responsive Design

Ensure proper layouts on:

- Desktop.
- Laptop.
- Tablet.
- Mobile phones.

Pay special attention to mobile navigation, project cards, typography, spacing, and images.

### Animations

Use subtle professional animations:

- Scroll reveal.
- Section entrance animations.
- Hover effects.
- Button interactions.
- Card animations.
- Smooth transitions.

Respect prefers-reduced-motion.

### SEO

Since this is a Vite SPA, implement SEO using appropriate client-side metadata and static HTML metadata.

Include:

- Page titles and descriptions.
- Open Graph metadata.
- Twitter Card metadata.
- Semantic HTML.
- Proper heading hierarchy.
- Sitemap.xml.
- Robots.txt.
- Canonical URLs where appropriate.

Use React Helmet Async or an equivalent lightweight solution for route-specific metadata.

Do not assume Next.js metadata APIs are available.

### Accessibility

Follow accessibility best practices:

- Keyboard navigation.
- Proper ARIA attributes.
- Sufficient color contrast.
- Visible focus indicators.
- Accessible forms.
- Reduced-motion support.

### Performance

Optimize:

- Image loading.
- Font loading.
- Component rendering.
- Bundle size.
- Code splitting.
- Lazy loading.
- Core Web Vitals.

Use React.lazy and Suspense where appropriate.

## 5. Design Direction

Create a premium developer portfolio with a modern minimalist aesthetic.

Guidelines:

- Clean and sophisticated layout.
- Strong typography hierarchy.
- Generous whitespace.
- Consistent spacing.
- Subtle borders and shadows.
- Rounded cards.
- Carefully selected accent colors.
- Professional dark theme.
- Beautiful light theme.

Avoid:

- Excessive gradients.
- Too many decorative elements.
- Unnecessary glassmorphism.
- Excessive animations.
- Oversized text that harms usability.
- Inconsistent spacing.
- Generic unfinished template designs.

Prioritize visual consistency and excellent user experience.

## 6. Architecture & Code Quality

Use a clean and maintainable project structure.

Suggested architecture:

src/

- assets/
  - images/
  - icons/
- components/
  - layout/
  - sections/
  - projects/
  - blog/
  - ui/
- pages/
  - HomePage.tsx
  - ProjectDetailPage.tsx
  - BlogPage.tsx
  - BlogDetailPage.tsx
  - NotFoundPage.tsx
- data/
  - profile.ts
  - skills.ts
  - projects.ts
  - experience.ts
  - education.ts
  - blog.ts
- hooks/
- lib/
- types/
- App.tsx
- main.tsx
- index.css

Additional root files:

- index.html
- vite.config.ts
- tsconfig.json
- package.json

You may adjust the structure when there is a clear architectural reason.

Important requirements:

- Keep portfolio content separate from UI components.
- Use strongly typed data structures.
- Make projects, skills, experience, and blog entries easy to add, edit, or remove.
- Avoid duplicated components.
- Keep components focused and maintainable.
- Avoid unnecessary abstractions.

## 7. Routing

Use React Router.

Suggested routes:

- `/` — Homepage with all main portfolio sections.
- `/projects/:slug` — Project case study.
- `/blog` — Blog listing.
- `/blog/:slug` — Blog article detail.
- `*` — Custom 404 page.

Requirements:

- Use proper navigation links.
- Support direct access to nested routes.
- Configure SPA fallback/rewrite rules for production hosting.
- Avoid full-page reloads during internal navigation.
- Implement route-specific document titles and metadata.

## 8. Development Rules

Before implementing:

1. Inspect the existing project structure.
2. Check installed dependencies and existing configurations.
3. Understand existing conventions before modifying files.
4. Create an implementation plan.
5. Avoid overwriting existing configurations unnecessarily.

During implementation:

- Build the website section by section.
- Ensure all navigation links work.
- Ensure all buttons have meaningful actions.
- Do not leave broken links or nonfunctional UI elements.
- Use fictional placeholder content consistently.
- Keep implementation clean and maintainable.
- Check potential side effects when modifying shared components or styles.

## 9. Quality Assurance

After implementation:

1. Run TypeScript validation using `bunx tsc --noEmit`.
2. Run the available lint command.
3. Run the production build using `bun run build`.
4. Fix errors introduced by your changes.
5. Check responsive layouts.
6. Verify dark and light themes.
7. Test navigation and interactive components.
8. Verify nested routes work correctly.
9. Check browser console errors where possible.

Do not run database migrations, database resets, destructive database operations, or Prisma generation commands.

## 10. Final Deliverables

When finished, provide:

1. Summary of implemented features.
2. Project folder structure.
3. List of reusable components.
4. List of dependencies added.
5. Instructions for running the project using Bun.
6. Explanation of where to edit personal information.
7. Explanation of where to add, edit, or remove projects.
8. Explanation of how to add blog articles.
9. Any remaining integrations or configurations requiring manual setup.

## Final Objective

Deliver a complete, polished, production-quality developer portfolio website using Vite, React, and TypeScript.

Prioritize design quality, maintainability, responsiveness, accessibility, and realistic fictional demonstration content.

Do not use any real personal information or existing personal projects. Everything must be editable so I can replace the sample content with my own information later.

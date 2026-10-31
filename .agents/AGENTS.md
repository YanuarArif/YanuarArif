# 🚀 AI Agent Rules for Software Engineering & Coding

This document defines the rules, principles, and best practices the AI agent must follow when assisting with software development across any programming language, framework, or ecosystem.

---

## 1. General Principles

1. **Clarity First**: Provide step-by-step explanations that are easy to follow.
2. **Simplicity Before Complexity**: Offer the simplest working solution before suggesting optimizations.
3. **Correctness > Creativity**: Ensure the code compiles, passes tests, and follows language/framework conventions before experimenting.
4. **Consistency**: Maintain consistent naming, file structure, design patterns, and formatting matching the target project.
5. **Error Awareness**: Anticipate common language-specific pitfalls (memory leaks, type issues, race conditions, edge cases, scope leaks).

---

## 2. Code Writing Rules

1. Always provide **complete, runnable code snippets** (modules, classes, functions, or files).
2. Follow **ecosystem idiomatic conventions**:
   - Adhere to the standard file/folder structure of the active framework or standard project layout.
   - Separate concerns cleanly (e.g., UI, business logic, data access, controller/handler layers).
   - Follow standard style guides (PEP 8 for Python, Standard/Prettier for JS/TS, Effective Go, Rust API guidelines, etc.).
3. Use **UI & Styling best practices** (when applicable):
   - Prefer utility classes or standard design system patterns over arbitrary inline or global overrides.
   - Keep styles readable, modular, and reusable.
4. Use **Component Libraries & UI Frameworks** correctly:
   - Follow proper design system import paths and lifecycle conventions.
   - Follow accessibility (a11y) and responsive design standards.
   - Extend existing components or modular interfaces instead of rewriting from scratch.
5. Always use **standard package management and build tools**:
   - Use the appropriate package manager and dependency toolchain for the language (e.g., `npm`/`pnpm`/`yarn`, `pip`/`poetry`/`uv`, `cargo`, `go mod`, `maven`/`gradle`).
   - Standardize CLI commands for dependency installation, script execution, and tool execution.
6. Prefer **modern practices**:
   - Asynchronous/non-blocking programming (`async/await`, routines, threads) where appropriate.
   - Type safety, static analysis, and proper interfaces/structs where supported.
   - Standard navigation, routing, or dispatching mechanisms.

---

## 3. Debugging & Problem-Solving Rules

1. When fixing errors, always:
   - Show **the cause of the problem**.
   - Provide a **fixed version of the code**.
   - Explain why the fix works.
2. After writing or fixing code, **check possible side effects**:
   - Could this change break or affect other components or modules?
   - Does it modify shared state, props, global context, or database schemas?
   - Does it require updating related files (e.g., routes, layouts, API endpoints, config files)?
3. Suggest **debugging tools**:
   - Official language/framework dev tools or debuggers.
   - Static analysis tools, linters, and type checkers.
   - Logging, profiling, and performance auditing tools.

---

## 4. Verification Rules

1. After every change, **simulate static analysis / type check / build check**:
   - Run the appropriate language tool (e.g., `npx tsc --noEmit`, `mypy`, `cargo check`, `go vet`).
   - Ensure **no compilation or type errors** remain.
2. If errors exist, **report them with explanations and fixes**.
3. Always assume the project must remain in a **buildable, testable, and error-free state**.

---

## 5. Task Completion Summary Rules

After completing any task (writing code, fixing errors, refactoring):

1. Provide a **summary section** that includes:
   - ✅ **What was done** (new code, bug fix, refactor, etc.).
   - 📊 **Before/After comparison table** (showing key changes in functionality, behavior, or code structure).
   - 🔄 **Possible side effects** (other components, modules, routes, or states that may be impacted).
   - 🛠 **Verification result** (e.g., standard static check command or build check output).
   - 💡 **Next suggestions** (improvements, optimizations, or testing ideas).
   - 📝 **Commit message** (ready-to-use Git commit message following conventional commits format).

### Before/After Comparison Table:

Always include a **comparison table** that clearly shows what changed:

**Table Format:**

| Aspect             | Before ❌        | After ✅         |
| ------------------ | ---------------- | ---------------- |
| [Feature/Behavior] | [Old state/code] | [New state/code] |

**Example Tables:**

**Bug Fix Example:**
| Aspect | Before ❌ | After ✅ |
|--------|----------|---------|
| Event discount on edit | Lost when editing sales | Preserved using 3-tier fallback |
| Data source | Only from form | DB snapshot → form → existing data |
| Historical data | ❌ Not preserved | ✅ Fully preserved |

**What to Include in the Table:**

- **Functionality changes**: What behavior changed
- **Code structure**: How the code organization improved
- **Performance metrics**: Load times, bundle sizes, query counts, execution speed
- **Data handling**: How data flows changed
- **Error handling**: What error cases are now covered
- **User experience**: How UX/DX improved
- **Type safety & Quality**: Type system, linter, or safety improvements

### Commit Message Format:

Follow the **Conventional Commits** specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**

- `feat`: New feature
- `fix`: Bug fix
- `refactor`: Code refactoring
- `perf`: Performance improvement
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `docs`: Documentation changes
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, build config, etc.)

**Example Commit Messages:**

```bash
# Simple fix
fix(penjualan): preserve event discount data on edit

# Feature with body
feat(event-discounts): add fallback mechanism for historical data

- Add existingItemsMap for backup data
- Implement 3-tier fallback: snapshot → form → existing
- Ensure historical discount data is preserved

# Refactor
refactor(api): optimize database queries in sales endpoint
```

**Rules:**

- Keep subject line under 72 characters
- Use imperative mood ("add" not "added" or "adds")
- Capitalize first letter of subject
- No period at the end of subject
- Provide context in body for complex changes

---

## 6. Flow Proses (Process Flow Diagrams)

After completing complex features or workflows, **always include a "Flow Proses" section** that visually documents the data flow and logic:

### Format Requirements:

1. Use **numbered steps** with clear descriptions
2. Use **arrow symbols** (↓) to show flow direction
3. Include **decision points** and **data transformations**
4. Mark **successful outcomes** with emojis (✅, 🎉)
5. Highlight **fallback mechanisms** and **error handling**

### Example Flow Proses:

```
1. User Edit Penjualan
   ↓
2. System ambil data existing items → Buat existingItemsMap
   ↓
3. Fetch event discount aktif dari database
   ↓
4. Saat save, untuk setiap item:
   - Coba gunakan data dari eventDiscountSnapshot (DB) ✅
   - Jika tidak ada, gunakan item.eventDiscountName (form) ✅
   - Jika tidak ada, gunakan existingEventData (backup) ✅
   - Jika semua tidak ada, null
   ↓
5. Data historis TERJAGA! 🎉
```

### When to Include Flow Proses:

- Complex CRUD operations with multiple data sources
- Multi-step form submissions with validation
- Data synchronization between database and UI
- Authentication/authorization flows
- Payment processing workflows
- Any feature involving 3+ sequential steps

### Benefits:

- Makes complex logic **easy to understand**
- Helps future developers **quickly grasp** the system
- Serves as **documentation** for code reviews
- Identifies **potential edge cases** early

---

## 7. Learning & Improvement Rules

1. Whenever introducing a new concept (e.g., architecture pattern, design pattern, new framework feature), give a **short explanation + example**.
2. Encourage **best practices**:
   - Clean folder and modular structure.
   - Separation of concerns and component/module reusability.
   - Clean separation of UI/Interface and business logic.
3. Suggest **useful resources**: Official framework documentation, language specifications, standard tools, and best-practice repositories.
4. Show **refactor examples** when code can be cleaner, faster, or more reusable.

---

## 8. Communication Rules

1. Adapt explanations to the **user's skill level**.
2. Ask clarifying questions before writing complex code.
3. Provide **examples relevant to the project** (modules, services, endpoints, scripts).
4. Suggest **next steps** after solving a problem (e.g., add auth, improve UI/UX, optimize queries, implement caching).

---

## 9. Security & Safety Rules

1. Never expose **secrets** (API keys, tokens, credentials) in code.
2. Use **environment variables** or secure secret managers (`.env`, config files, environment-based configuration).
3. Sanitize and validate **user inputs** across all API routes, endpoints, and input mechanisms.
4. Use **secure, industry-standard authentication & authorization flows**.
5. Avoid unsafe dynamic evaluation or unescaped output for sensitive operations.

---

## 10. Database Safety Rules

1. The agent **must never run** destructive database commands automatically (e.g., schema drops, full resets, unverified force migrations, or data deletion commands).
2. The agent **may only read** from existing ORM schemas, migration files, or database definitions — no automatic destructive schema modifications or migrations.
3. If a migration, generation, or schema update is needed, the agent should:
   - **Explain what needs to be done**,
   - **Show the exact command**,
   - But **not execute it** automatically.
4. Always confirm database safety and data persistence before suggesting any schema-related operations.

---

## 11. Continuous Improvement Rules

1. Suggest improvements after solving (e.g., accessibility, performance, SEO, memory optimization).
2. Encourage **reusability**:
   - Extract generic components/functions.
   - Use global configuration for design token or theme customization.
   - Extend existing structures instead of duplicating code.
3. Stay updated with **latest language specifications, frameworks, and ecosystem tool releases**.
4. Encourage **testing** with the standard testing stack for the ecosystem (e.g., Jest/Vitest, Pytest, Go testing, Cargo test).

---

✅ Following these rules, the AI agent will provide **smart, language-agnostic, reliable, and production-ready help** for software projects — always with a final **task summary** and **flow proses** for clarity.

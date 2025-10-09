[8 tools called]

### Project Structure & Tech Stack Analysis

**Main Technologies, Frameworks, and Libraries:**

- **Framework:** Next.js (v15.4.5) — React-based, supports SSR/SSG, modern app directory.
- **Language:** TypeScript (with strict settings, JSX support, and path aliases).
- **UI Libraries:** Ant Design (antd v5), Ant Design icons, Lucide React, Phosphor Icons.
- **State/Data:** React Query (TanStack), Axios (HTTP), Supabase (auth/data).
- **Charts:** Recharts, custom chart libs.
- **PDF:** @pdf-viewer/react.
- **Date:** dayjs.
- **Internationalization:** next-intl.
- **Styling:** Tailwind CSS (with PostCSS).
- **Linting:** ESLint (with Next.js and TypeScript plugins).
- **Other:** Vercel deployment ready, optimized fonts (Geist), modular component structure.

**Project Structure:**

- `app/` — Next.js app directory (routing, pages, API, etc.)
- `components/` — Modular, reusable UI components (dashboard, layouts, shared, skeletons)
- `libs/` — Utility libraries (charts, supabase integration)
- `services/` — Constants, context, hooks (state, API, etc.)
- `i18n/`, `messages/` — Internationalization/localization
- `public/`, `assets/` — Static files, images, fonts
- Config files: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`
- Package management: npm, yarn, pnpm, bun supported

---

## README.md (Proposed)

````markdown
# dash-stack

**dash-stack** is a modern, customizable dashboard template built with Next.js and TypeScript. It empowers developers to rapidly build responsive, interactive web dashboards—ideal for analytics, admin panels, or project management interfaces. With a clean UI, modular components, and robust integrations, dash-stack provides a solid foundation for scalable web applications.

---

## 🚀 Features

- **Next.js 15 & React 19:** Fast, scalable, and SEO-friendly with SSR/SSG support.
- **TypeScript:** Strictly typed for reliability and maintainability.
- **Ant Design UI:** Beautiful, customizable components and icons.
- **Tailwind CSS:** Utility-first styling for rapid UI development.
- **Internationalization:** Built-in i18n with next-intl.
- **Data & State:** React Query, Axios, and Supabase integration.
- **Charts & Visualization:** Recharts and custom chart libraries.
- **PDF Support:** Inline PDF viewing with @pdf-viewer/react.
- **Responsive Design:** Mobile-first, works on all devices.
- **Vercel Ready:** Seamless deployment and global CDN.
- **Optimized Fonts:** Uses Geist for sleek, performant typography.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15, React 19
- **Language:** TypeScript
- **UI:** Ant Design, Lucide React, Phosphor Icons
- **Styling:** Tailwind CSS, PostCSS
- **State/Data:** React Query, Axios, Supabase
- **Charts:** Recharts, custom chart libs
- **PDF:** @pdf-viewer/react
- **Date:** dayjs
- **i18n:** next-intl
- **Linting:** ESLint, TypeScript ESLint
- **Deployment:** Vercel

---

## ⚡ Getting Started

### Prerequisites

- Node.js (v16+)
- npm, yarn, pnpm, or bun
- (Optional) Vercel account for deployment

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/MohammedAmr04/dash-stack.git
   cd dash-stack
   ```
````

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open** [http://localhost:3000](http://localhost:3000) **to view the dashboard.**

---

## 💡 Example Usage

- Build analytics dashboards, admin panels, or project management tools.
- Easily extend with new components or integrate with your backend.
- Deploy instantly to Vercel for global performance.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and new features.

---

## 📄 License

This project is licensed under the MIT License.

---

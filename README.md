# Cloudflare Aura Starter Template

[cloudflarebutton]

This project is a comprehensive full-stack starter template designed for building modern web applications on the Cloudflare ecosystem. It leverages Cloudflare Workers for a powerful serverless backend and Cloudflare Pages for a blazing-fast frontend, all integrated seamlessly.

## Features

*   **Full-stack Cloudflare Integration**: Develop and deploy your entire application on Cloudflare's global network.
*   **React 18 & Vite**: A fast, modern frontend built with React and powered by Vite for an excellent developer experience.
*   **Hono API Backend**: A lightweight, high-performance API layer using Hono on Cloudflare Workers.
*   **TypeScript Everywhere**: Enjoy type safety and improved developer productivity across both frontend and backend.
*   **Shadcn UI**: Beautiful, accessible, and customizable UI components for a polished user interface.
*   **Tailwind CSS**: Utility-first CSS framework for rapid UI development and consistent styling.
*   **Dark/Light Theme Toggle**: Built-in theming capabilities for user preference.
*   **Client-Side Error Reporting**: Robust error handling that reports frontend issues directly to your Worker logs.
*   **React Router DOM**: Declarative routing for a smooth single-page application experience.
*   **TanStack Query (React Query)**: Powerful data fetching, caching, and state management for your frontend.
*   **Bun**: An incredibly fast JavaScript runtime, package manager, bundler, and test runner, used for all project scripts.

## Technology Stack

### Frontend
*   **Framework**: React 18
*   **Build Tool**: Vite
*   **Styling**: Tailwind CSS, Shadcn UI
*   **Routing**: `react-router-dom`
*   **State Management/Data Fetching**: `zustand`, `@tanstack/react-query`
*   **UI Components**: `lucide-react`, `sonner`, `framer-motion`

### Backend
*   **Platform**: Cloudflare Workers
*   **Framework**: Hono
*   **Language**: TypeScript

### Tooling
*   **Runtime & Package Manager**: Bun
*   **Cloudflare CLI**: Wrangler
*   **Linting**: ESLint
*   **Type Checking**: TypeScript

## Getting Started

Follow these steps to get your development environment set up.

### Prerequisites

*   [Bun](https://bun.sh/docs/installation) installed on your system.
*   [Cloudflare Account](https://dash.cloudflare.com/sign-up)
*   [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-update/) installed and authenticated (`bunx wrangler login`).

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/aura-landing-k7ahelw7gnhsgq5apjx4u.git
    cd aura-landing-k7ahelw7gnhsgq5apjx4u
    ```

2.  **Install dependencies**:
    ```bash
    bun install
    ```

## Development

To start the development server, which includes both the React frontend and the Cloudflare Worker:

```bash
bun run dev
```

This command will:
*   Start the Vite development server for the React frontend.
*   Automatically integrate and hot-reload your Cloudflare Worker.

You can then access your application at `http://localhost:3000` (or the port indicated in your terminal).

### Worker Development

All custom API routes should be added to `worker/userRoutes.ts`. This file is designed to be modified without affecting the core Worker setup in `worker/index.ts`.

Example:
```typescript
// worker/userRoutes.ts
import { Hono } from "hono";
import { Env } from './core-utils';

export function userRoutes(app: Hono<{ Bindings: Env }>) {
    app.get('/api/test', (c) => c.json({ success: true, data: { message: 'Hello from Cloudflare Worker!' }}));

    app.post('/api/items', async (c) => {
      const item = await c.req.json();
      // Logic to save item
      return c.json({ success: true, data: item, message: 'Item created' }, 201);
    });
}
```

### Frontend Development

Modify React components in the `src/` directory. The `src/pages/HomePage.tsx` file is the main entry point for your application's UI and should be replaced with your actual content.

```typescript
// src/pages/HomePage.tsx
import { AppLayout } from '@/components/layout/AppLayout';

export function HomePage() {
  return (
    <AppLayout container>
      <div className="center-col min-h-[calc(100vh-6rem)]">
        <h1 className="text-display text-gradient mb-4">Welcome to Aura!</h1>
        <p className="text-body max-w-2xl text-center">
          This is your starting point. Begin building amazing things with Cloudflare, React, and Hono.
        </p>
        {/* Your application content goes here */}
      </div>
    </AppLayout>
  );
}
```

## Building for Production

To create a production-ready build of your application:

```bash
bun run build
```

This command compiles your frontend assets and prepares your Worker for deployment.

## Deployment

This project is optimized for deployment on Cloudflare Pages, which automatically connects to your Cloudflare Workers.

[cloudflarebutton]

1.  **Configure Wrangler**: Ensure your `wrangler.jsonc` file is correctly configured for your project. The provided `wrangler.jsonc` is set up for a Cloudflare Pages project with a Worker.

2.  **Deploy via Wrangler**:
    ```bash
    bun run deploy
    ```
    This command will deploy your Worker to Cloudflare. For Cloudflare Pages, you would typically connect your Git repository, and Cloudflare Pages will handle the build and deployment process automatically upon pushes to your main branch.

    *   **For Cloudflare Pages**: Connect your Git repository (e.g., GitHub, GitLab) to Cloudflare Pages. Cloudflare will detect the `package.json` scripts and run `bun run build` followed by deploying the static assets and the associated Worker.
    *   **For Cloudflare Workers**: The `wrangler deploy` command specifically deploys your Worker. Ensure your `wrangler.jsonc` has the correct `name` and `main` entry for your Worker.

## Project Structure

```
.
├── src/                      # Frontend (React) source code
│   ├── components/           # UI components (Shadcn UI, custom)
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── pages/                # Application pages
│   ├── App.css
│   ├── index.css
│   ├── main.tsx              # React entry point
│   └── vite-env.d.ts
├── worker/                   # Cloudflare Worker source code
│   ├── core-utils.ts         # Core Worker utilities (DO NOT MODIFY)
│   ├── index.ts              # Main Worker entry point (DO NOT MODIFY)
│   └── userRoutes.ts         # Your custom Worker API routes
├── .gitignore
├── bun.lockb                 # Bun lockfile
├── components.json           # Shadcn UI configuration
├── package.json              # Project dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configurations
├── vite.config.ts            # Vite configuration
└── wrangler.jsonc            # Cloudflare Wrangler configuration
```

## Contributing

Contributions are welcome! If you find a bug or have an enhancement idea, please open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
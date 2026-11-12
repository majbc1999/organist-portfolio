// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const pagesBasePath = process.env.PAGES_BASE_PATH ?? "/";
const routerBasepath =
  pagesBasePath === "/" ? "/" : pagesBasePath.replace(/\/$/, "");

export default defineConfig({
  vite: {
    base: pagesBasePath,
  },
  tanstackStart: {
    router: { basepath: routerBasepath },
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: true,
      failOnError: true,
    },
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: process.env.PAGES_BASE_PATH ? false : undefined,
});

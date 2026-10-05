import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type PluginOption } from "vite";
import viteTsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(async (env) => {
  const { command, mode } = env;

  // Vercel sets the `VERCEL` env var during builds. Use the `vercel` preset
  // there (Build Output API → `.vercel/output`); keep the Cloudflare Workers
  // preset for local/wrangler builds.
  const deployingToVercel = Boolean(process.env["VERCEL"]);
  const nitroPlugin =
    command === "build"
      ? (await import("nitro/vite")).nitro({
          preset: deployingToVercel ? "vercel" : "cloudflare-module",
          ...(deployingToVercel
            ? {}
            : {
                output: {
                  dir: "dist",
                  serverDir: "dist/server",
                  publicDir: "dist/client",
                },
                cloudflare: { nodeCompat: true, deployConfig: true },
              }),
        })
      : undefined;

  const plugins: PluginOption[] = [
    ...tanstackStart({
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    tailwindcss(),
    viteTsConfigPaths({ projects: ["./tsconfig.json"] }),
    react(),
    nitroPlugin,
  ].filter(Boolean) as PluginOption[];

  const loadedEnv = loadEnv(mode, process.cwd(), "VITE_");
  const define = Object.fromEntries(
    Object.entries(loadedEnv).map(([key, value]) => [
      `import.meta.env.${key}`,
      JSON.stringify(value),
    ]),
  );

  return {
    define,
    css: { transformer: "lightningcss" },
    resolve: {
      alias: { "@": `${process.cwd()}/src` },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    optimizeDeps: {
      include: [
        "react",
        "react-dom",
        "react-dom/client",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
      ],
      ignoreOutdatedRequests: true,
    },
    server: { host: "::", port: 8080 },
    plugins,
  };
});

import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: boolean; message?: string };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

/**
 * Legacy URLs from the old PHP site (e.g. /about.php, /schedule.php?page=schedule)
 * still rank in Google and 404 today. Map known ones to their clean routes and
 * send anything else *.php to home — permanent 301s, query strings dropped.
 * Runs in the server entry, so every deployment path (dev, Cloudflare, Vercel
 * Build Output `__server` catch-all) applies it before SSR.
 */
const LEGACY_PHP_ROUTES: Record<string, string> = {
  "/about": "/about",
  "/schedule": "/schedule",
  "/classes": "/classes",
  "/trainers": "/trainers",
  "/trainer": "/trainers",
  "/packages": "/packages",
  "/gallery": "/gallery",
  "/blog": "/blog",
  "/contact": "/contact",
  "/privacy-policy": "/privacy-policy",
  "/terms": "/terms",
  "/terms-and-conditions": "/terms-and-conditions",
  "/index": "/",
  "/home": "/",
  "/main": "/",
};

function legacyPhpRedirect(request: Request): Response | null {
  if (request.method !== "GET" && request.method !== "HEAD") return null;
  const url = new URL(request.url);
  const match = /^(.*?)\.php\/?$/i.exec(url.pathname);
  if (!match) return null;
  const base = (match[1] || "/").toLowerCase();
  const destination = LEGACY_PHP_ROUTES[base] ?? "/";
  return new Response(null, {
    status: 301,
    headers: { location: destination },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const redirect = legacyPhpRedirect(request);
    if (redirect) return redirect;

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};

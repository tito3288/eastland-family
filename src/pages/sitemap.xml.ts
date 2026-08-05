import type { APIRoute } from "astro";
import { publicRoutes } from "../lib/site-routes";

export const prerender = true;

const siteOrigin = "https://www.eastlandfamilydental.com";
const escapeXml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");

export const GET: APIRoute = () => {
  const entries = publicRoutes
    .map((route) => `  <url><loc>${escapeXml(new URL(route, siteOrigin).toString())}</loc></url>`)
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};

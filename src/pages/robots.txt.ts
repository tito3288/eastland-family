import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: https://www.eastlandfamilydental.com/sitemap.xml\n`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};

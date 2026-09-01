import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "dist");
const siteOrigin = "https://www.eastlandfamilydental.com";
const failures = [];

const record = (condition, message) => {
  if (!condition) failures.push(message);
};

const walk = (directory) =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });

const outputFileForPathname = (pathname) => {
  const cleanPath = decodeURIComponent(pathname).replace(/^\/+/, "");
  if (!cleanPath) return path.join(outputRoot, "index.html");
  if (path.extname(cleanPath)) return path.join(outputRoot, cleanPath);
  return path.join(outputRoot, cleanPath, "index.html");
};

const routeForFile = (file) => {
  const relative = path.relative(outputRoot, file).split(path.sep).join("/");
  if (relative === "index.html") return "/";
  if (relative.endsWith("/index.html")) return `/${relative.slice(0, -"index.html".length)}`;
  return `/${relative}`;
};

const countMatches = (value, pattern) => [...value.matchAll(pattern)].length;
const htmlFiles = walk(outputRoot).filter((file) => file.endsWith(".html"));
const htmlByRoute = new Map(htmlFiles.map((file) => [routeForFile(file), fs.readFileSync(file, "utf8")]));

const sitemap = fs.readFileSync(path.join(outputRoot, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
const sitemapPaths = sitemapUrls.map((url) => new URL(url).pathname);
const hasNoindexDirective = (html) => /<meta\b[^>]*\bname=["']robots["'][^>]*\bcontent=["'][^"']*\bnoindex\b/i.test(html);
const indexableHtmlRoutes = [...htmlByRoute.entries()]
  .filter(([route, html]) => route !== "/404.html" && !hasNoindexDirective(html))
  .map(([route]) => route);

record(sitemapUrls.length === indexableHtmlRoutes.length, `Expected ${indexableHtmlRoutes.length} sitemap URLs; found ${sitemapUrls.length}.`);
record(new Set(sitemapUrls).size === sitemapUrls.length, "The sitemap contains duplicate URLs.");
for (const route of indexableHtmlRoutes) {
  record(sitemapPaths.includes(route), `Generated indexable page is missing from the sitemap: ${route}`);
}

const titles = new Map();
const descriptions = new Map();
const prioritySeo = new Map([
  ["/", {
    title: "Dentist Independence, MO | Eastland Family Dental | Near You",
    description: "Eastland Family Dental is a family dentist located in Independence, MO. We are welcoming new patients, contact our team today!",
    h1: "Dentist Independence, MO.",
  }],
  ["/our-practice/meet-the-doctor/", {
    title: "Meet the Doctor: Dr. Glenn Ashworth | Eastland Family Dental",
    description: "Meet Dr. Glenn Ashworth, dentist at Eastland Family Dental in Independence, MO.",
    h1: "Dr. Glenn Ashworth",
  }],
  ["/our-practice/meet-the-team/", {
    title: "Meet Our Team | Eastland Family Dental",
    description: "Meet the team at Eastland Family Dental! We are your choice for a family dentist in Independence, MO. We are accepting new patients!",
    h1: "Meet the Team at Eastland Family Dental",
  }],
  ["/procedures/endodontics/", {
    title: "Endodontics in Independence, MO | Eastland Family Dental",
    description: "Our team of dentists at Eastland Family Dental proudly offer endodontics. We are located in Independence, MO. Contact our office today!",
    h1: "Endodontics in Independence, MO",
  }],
  ["/our-practice/", {
    title: "Our Practice | Eastland Family Dental",
    description: "Learn about Eastland Family Dental’s family-focused care, modern dental technology, and Independence, MO office.",
    h1: "Get to Know Our Independence Family Dental Practice",
  }],
  ["/procedures/", {
    title: "Dentist Independence MO | Eastland Family Dental | Procedures",
    description: "Explore preventive, cosmetic, restorative, surgical, children’s, endodontic, and sedation dentistry at Eastland Family Dental in Independence, MO.",
    h1: "Dental Procedures in Independence, MO",
  }],
  ["/procedures/sedation-dentistry/", {
    title: "Medicaid Sedation Dentistry | Independence, MO",
    description: "Eastland Family Dental accepts Medicaid for sedation dentistry in Independence, MO. Ask about comfort options for root canal treatment; benefits are verified.",
    h1: "Medicaid Sedation Dentistry in Independence, MO",
  }],
  ["/contact/", {
    title: "Contact Eastland Family Dental | Independence, MO",
    description: "Call, email, or visit Eastland Family Dental in Independence, MO. View office hours, directions, and appointment information.",
    h1: "Contact Eastland Family Dental",
  }],
]);

for (const [index, url] of sitemapUrls.entries()) {
  const pathname = sitemapPaths[index];
  const file = outputFileForPathname(pathname);
  record(fs.existsSync(file), `Sitemap URL has no generated page: ${url}`);
  if (!fs.existsSync(file)) continue;

  const html = fs.readFileSync(file, "utf8");
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  const h1 = html
    .match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1]
    ?.replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&rsquo;/g, "’")
    .replace(/\s+/g, " ")
    .trim();

  record(countMatches(html, /<title>/g) === 1, `${pathname} must have exactly one title.`);
  record(Boolean(title), `${pathname} is missing a title.`);
  record(Boolean(description), `${pathname} is missing a meta description.`);
  record(canonical === url, `${pathname} canonical does not match its sitemap URL.`);
  record(countMatches(html, /<h1\b/g) === 1, `${pathname} must have exactly one H1.`);
  record(/<meta property="og:title"/.test(html), `${pathname} is missing og:title.`);
  record(/<meta property="og:description"/.test(html), `${pathname} is missing og:description.`);
  record(/<meta property="og:image"/.test(html), `${pathname} is missing og:image.`);
  record(/<meta name="twitter:card"/.test(html), `${pathname} is missing Twitter card metadata.`);

  const expectedSeo = prioritySeo.get(pathname);
  if (expectedSeo) {
    record(title === expectedSeo.title, `${pathname} priority title changed: ${title ?? "missing"}`);
    record(description === expectedSeo.description, `${pathname} priority description changed: ${description ?? "missing"}`);
    record(h1 === expectedSeo.h1, `${pathname} priority H1 changed: ${h1 ?? "missing"}`);
  }

  if (title) titles.set(title, [...(titles.get(title) ?? []), pathname]);
  if (description) descriptions.set(description, [...(descriptions.get(description) ?? []), pathname]);
}

for (const [title, routes] of titles) {
  record(routes.length === 1, `Duplicate title on ${routes.join(", ")}: ${title}`);
}
for (const [description, routes] of descriptions) {
  record(routes.length === 1, `Duplicate meta description on ${routes.join(", ")}: ${description}`);
}

for (const [route, html] of htmlByRoute) {
  for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>/g)) {
    const href = match[1];
    if (/^(?:mailto:|tel:|javascript:)/i.test(href)) continue;

    let target;
    try {
      target = new URL(href, `${siteOrigin}${route}`);
    } catch {
      failures.push(`${route} has an invalid link: ${href}`);
      continue;
    }
    if (target.origin !== siteOrigin) continue;

    const targetFile = outputFileForPathname(target.pathname);
    record(fs.existsSync(targetFile), `${route} links to a missing page: ${href}`);

    if (target.hash && fs.existsSync(targetFile) && targetFile.endsWith(".html")) {
      const targetHtml = fs.readFileSync(targetFile, "utf8");
      const id = decodeURIComponent(target.hash.slice(1)).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      record(new RegExp(`\\bid=["']${id}["']`).test(targetHtml), `${route} links to a missing fragment: ${href}`);
    }
  }

  for (const match of html.matchAll(/<(?:img|script)\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/g)) {
    const source = match[1];
    if (!source.startsWith("/") || source.startsWith("//")) continue;
    const assetPath = source.split("?")[0].split("#")[0];
    record(fs.existsSync(path.join(outputRoot, assetPath)), `${route} references a missing asset: ${source}`);
  }

  for (const match of html.matchAll(/<img\b([^>]*)>/g)) {
    record(/\balt=["'][^"']*["']/.test(match[1]), `${route} contains an image without alt text.`);
  }
}

const combinedHtml = [...htmlByRoute.values()].join("\n");
const appointmentHtml = htmlByRoute.get("/contact/appointment-request/") ?? "";
const bookAppointmentHtml = htmlByRoute.get("/book-appointment/") ?? "";
const robots = fs.readFileSync(path.join(outputRoot, "robots.txt"), "utf8");
const routesConfig = JSON.parse(fs.readFileSync(path.join(outputRoot, "_routes.json"), "utf8"));

record(!combinedHtml.includes('id="appointment-form"'), "Dormant build unexpectedly renders the appointment form.");
record(!combinedHtml.includes('action="/api/appointment"'), "Dormant build unexpectedly exposes the appointment form action.");
record(appointmentHtml.includes("Online appointment requests are not currently available."), "Appointment URL is missing the contact-only status message.");
record(bookAppointmentHtml.includes("Online appointment requests are not currently available."), "Book Appointment URL is missing the contact-only status message.");

for (const match of combinedHtml.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/g)) {
  const label = match[2].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (!/^(?:Book Appointment|Request an appointment|Appointment information)$/.test(label)) continue;
  const href = match[1].match(/\bhref=["']([^"']+)["']/)?.[1];
  record(href === "/contact/", `Dormant appointment action points to ${href ?? "no URL"}: ${label}`);
}

record(/noindex/i.test(htmlByRoute.get("/404.html") ?? ""), "404 page is missing noindex.");
record(robots.includes(`Sitemap: ${siteOrigin}/sitemap.xml`), "robots.txt is missing the canonical sitemap URL.");
record(routesConfig.version === 1, "Cloudflare routes file has an unexpected version.");
record(JSON.stringify(routesConfig.include) === JSON.stringify(["/api/*"]), "Cloudflare Function routes must include only /api/*.");

if (failures.length) {
  console.error(`Site audit failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Site audit passed: ${sitemapUrls.length} indexable URLs, ${htmlFiles.length} HTML outputs, zero broken internal links or referenced assets.`);

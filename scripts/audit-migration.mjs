import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { expectedLegacyRedirects, legacyPublicRoutes } from "./legacy-routes.mjs";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputRoot = path.join(projectRoot, "dist");
const failures = [];

const record = (condition, message) => {
  if (!condition) failures.push(message);
};

const sitemap = fs.readFileSync(path.join(outputRoot, "sitemap.xml"), "utf8");
const currentRoutes = new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname),
);

const redirectsText = fs.readFileSync(path.join(outputRoot, "_redirects"), "utf8");
const redirectRules = redirectsText
  .split(/\r?\n/)
  .map((line) => line.trim())
  .filter((line) => line && !line.startsWith("#"))
  .map((line) => {
    const [source, destination, status = "302"] = line.split(/\s+/);
    return { source, destination, status };
  });
const exactRedirects = new Map(redirectRules.filter((rule) => !rule.source.includes("*")).map((rule) => [rule.source, rule]));

const preservedRoutes = legacyPublicRoutes.filter((route) => currentRoutes.has(route));
const redirectedRoutes = legacyPublicRoutes.filter((route) => !currentRoutes.has(route));

record(new Set(legacyPublicRoutes).size === legacyPublicRoutes.length, "Legacy route inventory contains duplicates.");
record(preservedRoutes.length === 60, `Expected 60 preserved legacy routes; found ${preservedRoutes.length}.`);
record(redirectedRoutes.length === 33, `Expected 33 redirected legacy routes; found ${redirectedRoutes.length}.`);
record(expectedLegacyRedirects.size === redirectedRoutes.length, "Redirect inventory does not cover every removed legacy route.");

for (const route of redirectedRoutes) {
  const expectedDestination = expectedLegacyRedirects.get(route);
  const rule = exactRedirects.get(route);
  record(Boolean(expectedDestination), `Removed legacy route has no expected destination: ${route}`);
  record(Boolean(rule), `Removed legacy route has no exact redirect rule: ${route}`);
  if (!rule || !expectedDestination) continue;

  record(rule.status === "301", `Legacy redirect must be permanent: ${route} uses ${rule.status}.`);
  record(rule.destination === expectedDestination, `Legacy redirect has the wrong destination: ${route} -> ${rule.destination}`);
  record(currentRoutes.has(rule.destination), `Legacy redirect destination is not indexable: ${route} -> ${rule.destination}`);
}

const sitemapRedirect = exactRedirects.get("/sitemap_index.xml");
record(sitemapRedirect?.destination === "/sitemap.xml" && sitemapRedirect.status === "301", "Legacy Yoast sitemap endpoint must redirect permanently to /sitemap.xml.");
record(redirectRules.some((rule) => rule.source === "/team/*" && rule.destination === "/our-practice/meet-the-team/" && rule.status === "301"), "Legacy team fallback redirect is missing.");
record(redirectRules.some((rule) => rule.source === "/category/*" && rule.destination === "/blog/" && rule.status === "301"), "Legacy blog-category fallback redirect is missing.");
record(redirectRules.some((rule) => rule.source === "/author/*" && rule.destination === "/blog/" && rule.status === "301"), "Legacy author-archive fallback redirect is missing.");
record(redirectRules.some((rule) => rule.source === "/product/*" && rule.destination === "/procedures/cleanings-prevention/home-care/" && rule.status === "301"), "Legacy product fallback redirect is missing.");
record(redirectRules.some((rule) => rule.source === "/product-category/*" && rule.destination === "/procedures/cleanings-prevention/home-care/" && rule.status === "301"), "Legacy product-category fallback redirect is missing.");
record(redirectRules.some((rule) => rule.source === "/product-tag/*" && rule.destination === "/procedures/cleanings-prevention/home-care/" && rule.status === "301"), "Legacy product-tag fallback redirect is missing.");

if (failures.length) {
  console.error(`Migration audit failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Migration audit passed: ${legacyPublicRoutes.length} known legacy URLs; ${preservedRoutes.length} preserved in place and ${redirectedRoutes.length} covered by exact 301 redirects.`);

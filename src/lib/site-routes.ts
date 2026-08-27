import { blogPosts } from "./blog";
import { procedureCategories } from "./procedures";
import { procedureDetails } from "./procedure-details";

const coreRoutes = [
  "/",
  "/our-practice/",
  "/our-practice/meet-the-doctor/",
  "/our-practice/meet-the-team/",
  "/blog/",
  "/book-appointment/",
  "/contact/appointment-request/",
  "/contact/",
  "/financing/",
  "/patient-information/",
  "/patient-information/new-patient-forms/",
  "/patient-information/frequently-asked-questions/",
  "/patient-information/dental-videos/",
  "/patient-information/referring-doctors/",
  "/pay-your-bill/",
  "/procedures/",
  "/procedures/sedation-dentistry/",
  "/review/",
  "/review/testimonials/",
];

const categoryRoutes = procedureCategories.map((category) => `/procedures/${category.slug}/`);
const procedureRoutes = procedureDetails.map((detail) => `/procedures/${detail.categorySlug}/${detail.slug}/`);
const articleRoutes = blogPosts.map((post) => `/${post.slug}/`);

export const publicRoutes = [...coreRoutes, ...categoryRoutes, ...procedureRoutes, ...articleRoutes];

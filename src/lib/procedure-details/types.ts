export interface DetailSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface ProcedureDetail {
  categorySlug: string;
  slug: string;
  title: string;
  eyebrow: string;
  heading: string;
  intro: string;
  overviewTitle: string;
  overview: string[];
  keyPoints: string[];
  sections: DetailSection[];
  sources: { label: string; href: string }[];
}

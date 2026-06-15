# Eastland Family — Design Blueprint

## Overall direction & vibe
A warm, boutique-style dental practice site that feels calm, premium, and family-oriented. The mood balances clinical trust (deep navy, clean whites) with soft, residential warmth (sand, air-blue, eucalyptus accents) — think modern wellness brand rather than traditional dental clinic. The audience is families and adults in Independence, MO who want a long-term, comfort-minded dental home.

## Section-by-section breakdown

### Header (sticky)
- Floating pill-shaped navigation bar with a max width of 7xl, rounded corners (2rem), porcelain background at 95% opacity with backdrop blur, and a soft navy drop shadow (`glow`).
- Left: logo (large, contained height ~14–16 on desktop, 20–24 on mobile).
- Center: horizontal nav with bold, small-caps-feeling slate-600 links (Our Practice, Procedures, Patient Information, Leave a Review, Contact, Payment Methods). Links use a rounded-full hover state in pale air-blue.
- Right: navy pill CTA "Book Appointment" in white text.
- Mobile: hamburger button in an air-blue circular pad; expands a porcelain pill panel with stacked nav links plus phone CTA and book CTA.

### Hero
- Three-column asymmetric grid on desktop (`1.05fr .8fr .7fr`): left text block, center tall portrait image with arched top (rounded-t-full + rounded-b-3rem), right white "appointment card."
- Decorative air-blue circle bleeds off the top-right corner as a background blob.
- Left column: sand-colored pill eyebrow tag, oversized serif headline (up to 7xl, tight tracking, near-1.0 line-height: "Healthy smiles, cared for gently."), supporting paragraph in slate-600, two CTAs (blue primary + white-with-border secondary).
- Center image: tall (~560px) arched portrait with `glow` shadow, scales-in on reveal.
- Right card: "Appointment card" eyebrow in eucalyptus uppercase tracking, serif headline, navy primary CTA, air-blue secondary call CTA, divider, hours + office location.

### Trust marquee strip
- Full-width navy pill (rounded-full on desktop, 2rem corners on mobile) containing 4 short trust phrases separated by bullets: "Family-friendly care • Advanced capabilities • Gentle appointments • Comprehensive treatment."

### Services / "Choose your care"
- Centered eyebrow (eucalyptus uppercase, wide tracking) + large serif headline.
- 3-column grid of 6 oversized rounded cards (rounded-5xl, min-height ~175px). Cards alternate background colors in a deliberate pattern: air, sand, powder, powder, air, navy. Last card (Cosmetic) is navy with white text and 70% white body.
- Each card: bold 2xl title + slate-600 description.

### Story / "The Eastland approach"
- Two-column layout. Left: large rounded-5xl portrait image with a smaller overlapping rounded image bottom-right, framed by an 8px porcelain border for a polaroid-like layering effect.
- Right: eyebrow, large serif headline, intro paragraph mentioning Dr. Glenn Ashworth, and a 2-column mini grid of two small white feature cards ("Clear choices," "Comfort-minded") with `glow`.

### Testimonials / "Patient words"
- Full-width air-blue band. Two-column layout: left intro (eyebrow + serif headline), right 2-column grid of two white testimonial cards with blue star rows, large quote text, and small slate-500 attribution.

### FAQ / "Before your first visit"
- Narrow centered column (max-w-4xl), large centered serif headline.
- Stacked `<details>` accordions: white rounded-3xl cards with `glow`, bold summary, slate-600 answer body.

### Contact CTA
- Large navy rounded panel (up to 3.5rem corners) with two columns: left intro (eyebrow in pale air, serif headline, white/70 paragraph); right white inner card containing blue Book Appointment button, air-blue phone button, and hours.

### Footer
- Sand-colored rounded-5xl panel.
- Top row: logo + address block on the left; 2 pill CTAs on the right (porcelain phone CTA + navy book CTA).
- Bottom row: thin navy/10 divider, then small slate-600 text with tagline and hours.

## Typography
- Headings: Georgia serif stack (`'Georgia', serif`). Used at very large sizes (4xl up to 7xl), tight tracking (`tracking-tight`), and near-1.0 line-height on the hero (`leading-[.96]`) for an editorial feel.
- Body: Inter sans-serif (`'Inter', ui-sans-serif, system-ui`). Base 16–20px, relaxed line-height.
- Eyebrows: Inter, bold, uppercase, wide letter-spacing (~0.22em), small (xs/sm), colored eucalyptus or pale air on dark backgrounds.
- Nav links and CTAs: Inter, bold, often small (11–14px) on desktop.
- Cards typically use bold 2xl titles and slate-600 body copy.

## Color palette
- Primary navy: `#023a66` — buttons, dark CTA panel, primary text.
- Accent blue: `#0f7fd3` — primary action buttons, star ratings.
- Air (pale blue surface): `#e4f4fe` — secondary buttons, background blob, testimonial band, accent cards.
- Porcelain (background): `#fffdf8` — page background, header pill, photo borders.
- Sand (warm accent surface): `#efe6d7` — hero eyebrow pill, footer panel, accent cards.
- Eucalyptus (muted accent text): `#7d9a94` — eyebrow labels.
- Powder (cool neutral surface): `#edf3f6` — card backgrounds, button borders.
- Foreground text: navy `#023a66` for headings; slate-600 (~`#475569`) for body; slate-500 (~`#64748b`) for captions.
- White: `#ffffff` — cards on colored backgrounds.

## Spacing & layout
- Container: `max-w-7xl` (1280px) centered with horizontal padding `px-4` (mobile) up to `px-7` inside header pill.
- Vertical rhythm: sections use `py-14` to `py-16` (56–64px) with hero a bit taller; inner stacks use `mt-4` / `mt-6` / `mt-8` for headline-to-body progression.
- Grid systems: hero uses a custom 3-track grid (`1.05fr .8fr .7fr` xl, `1fr .82fr .68fr` lg). Services use `sm:grid-cols-2 lg:grid-cols-3` with `gap-5`. Story and contact use 2-column splits with weighted fractions. Testimonials use `.8fr 1.2fr`.
- Breakpoints follow Tailwind defaults: `sm` 640, `md` 768, `lg` 1024, `xl` 1280. Mobile collapses everything to single column, swaps full nav for hamburger panel, reduces rounded corner sizes (e.g., 2rem instead of 3rem) and image heights.
- Scroll padding top of 140px to clear the sticky header on in-page anchors.

## Unique visual treatments
- Floating, pill-shaped sticky header with backdrop blur and soft navy shadow.
- `glow` custom shadow: `0 28px 80px rgba(2,58,102,.13)` used on cards, images, and the header for a soft, premium lift.
- Oversized rounded radii: custom `4xl` (2rem) and `5xl` (3rem), plus rounded-full pills and a hero image with `rounded-t-full rounded-b-[3rem]` arch.
- Decorative air-blue circular blob bleeding off the hero corner as background ambience.
- Layered "polaroid" image composition in the story section: a smaller image overlapping a larger one with an 8px porcelain border.
- Color-blocked service grid alternating air / sand / powder / navy tiles for editorial rhythm.
- Reveal-on-scroll animations using IntersectionObserver: fade + translate variants (`reveal`, `reveal-left`, `reveal-right`, `reveal-zoom`) with staggered `--reveal-delay` custom property; respects `prefers-reduced-motion`.
- Smooth scroll behavior site-wide.
- Eyebrow labels in eucalyptus with wide uppercase tracking signal section starts consistently.
- Bullet-separated trust marquee in a full navy pill provides a strong horizontal rhythm break between hero and services.

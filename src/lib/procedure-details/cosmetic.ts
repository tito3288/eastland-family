import type { ProcedureDetail } from "./types";

export const cosmeticDetails = [
  {
    categorySlug: "cosmetic-dentistry",
    slug: "porcelain-veneers",
    title: "Porcelain Veneers",
    eyebrow: "Smile design",
    heading: "A custom front surface for selected cosmetic concerns.",
    intro: "Porcelain veneers can change the visible color, shape, or proportion of teeth after their health, enamel, and bite have been carefully evaluated.",
    overviewTitle: "A veneer covers the front of a tooth—not the entire tooth.",
    overview: [
      "A porcelain veneer is a thin, custom-made covering bonded to the front surface of a tooth. It may be considered for selected teeth that are chipped, stained, worn, misshapen, or separated by a small space.",
      "Veneers are different from crowns, which cover more of the tooth. Placement generally requires removing some enamel, so porcelain veneer treatment is not reversible. Existing decay and gum disease should be treated before the veneer is placed.",
    ],
    keyPoints: ["Treatment is customized to the surrounding smile", "Enamel removal makes porcelain veneers irreversible", "The tooth can still develop decay around or beneath a veneer"],
    sections: [
      {
        heading: "Planning the appearance and the bite",
        paragraphs: [
          "The consultation begins with your goals and an examination of the teeth, gums, enamel, and bite. Photographs, digital scans or impressions, and a preview model may be used to plan proportions and show how the proposed result relates to the rest of the smile.",
          "Veneers may not be the best choice when a tooth is significantly weakened, when active disease is present, or when clenching, grinding, or the bite would place excessive force on the porcelain. The dentist can compare veneers with bonding, whitening, orthodontics, or crowns when more than one approach is possible.",
        ],
      },
      {
        heading: "From preparation to placement",
        paragraphs: [
          "A small amount of enamel is prepared so the veneer can fit naturally. A scan or impression records the tooth, and a dental laboratory creates the porcelain restoration. A temporary veneer may be used while the final one is being made.",
          "At placement, the fit, shape, color, and bite are checked before the veneer is bonded. Continue brushing with fluoride toothpaste, clean between the teeth, avoid using teeth as tools, and tell the office if the bite feels different or the veneer becomes loose or damaged.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Veneers", href: "https://www.mouthhealthy.org/all-topics-a-z/veneers" },
    ],
  },
  {
    categorySlug: "cosmetic-dentistry",
    slug: "teeth-whitening",
    title: "Professional Teeth Whitening",
    eyebrow: "Color improvement",
    heading: "Brighten eligible natural teeth with a dentist-guided plan.",
    intro: "Eastland Family Dental lists both in-office Philips Zoom whitening and a Philips Zoom DayWhite take-home option for patients whose teeth and gums are suitable for bleaching.",
    overviewTitle: "Whitening works on natural tooth structure—not every type of discoloration.",
    overview: [
      "Whitening gels use peroxide-based ingredients to break up color compounds within natural enamel and dentin. Results vary with the cause and depth of discoloration, the starting shade, and how the teeth respond to treatment.",
      "Crowns, veneers, bridges, and fillings do not whiten. A dental examination is therefore important before treatment, especially when one tooth is darker than the others, decay or gum irritation is present, or existing restorations are visible in the smile.",
    ],
    keyPoints: ["Professional options include in-office and take-home treatment", "Restorations keep their existing color", "Temporary tooth or gum sensitivity can occur"],
    sections: [
      {
        heading: "Choosing between the office and home options",
        paragraphs: [
          "In-office whitening is performed under the team’s supervision and is intended to create a noticeable color change during the visit. Protective steps are used around the gums, and the gel is applied according to the product protocol.",
          "The take-home system uses custom or prescribed trays and whitening gel on a schedule provided by the practice. Use only the amount and timing directed; more gel or longer wear does not guarantee a better result and may increase sensitivity or gum irritation.",
        ],
      },
      {
        heading: "Keeping the result in perspective",
        bullets: [
          "Color can gradually change again with time, foods, drinks, and tobacco exposure.",
          "Rinse with water after strongly pigmented foods or drinks and maintain normal oral hygiene.",
          "Do not brush immediately after acidic foods or beverages; give saliva time to neutralize the acid.",
          "Ask before repeating or touching up treatment, particularly if sensitivity develops.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Teeth Whitening", href: "https://www.mouthhealthy.org/all-topics-a-z/teeth-whitening" },
    ],
  },
  {
    categorySlug: "cosmetic-dentistry",
    slug: "composite-fillings",
    title: "Composite Fillings",
    eyebrow: "Tooth-colored restorations",
    heading: "Repair selected cavities or damage with material matched to the tooth.",
    intro: "Composite resin can restore small- to mid-sized areas while blending more naturally than a metal-colored filling.",
    overviewTitle: "Composite resin is placed and shaped directly in the tooth.",
    overview: [
      "A composite filling uses a tooth-colored resin material to replace tooth structure affected by decay, a small fracture, wear, or an old restoration that needs replacement. The material can be selected to coordinate with the surrounding tooth color.",
      "No filling material is best for every situation. The size and location of the defect, moisture control, biting forces, cosmetic priorities, and insurance coverage can all affect the recommendation. Larger or more heavily loaded areas may require an inlay, onlay, or crown instead.",
    ],
    keyPoints: ["Composite can be used on front or back teeth", "The tooth must stay clean and dry during placement", "Like every filling, it may eventually need repair or replacement"],
    sections: [
      {
        heading: "How a composite filling is placed",
        paragraphs: [
          "The tooth is numbed when needed, and the decayed or damaged material is removed. After the area is cleaned and isolated, the tooth is prepared for bonding. Composite is placed in layers, hardened with a curing light, shaped, and polished.",
          "Before the visit ends, the dentist checks how the filling meets the opposing teeth. Contact the office if the bite continues to feel high, the tooth is becoming more painful, or the restoration feels rough or loose.",
        ],
      },
      {
        heading: "Caring for the restored tooth",
        bullets: [
          "Brush twice daily with fluoride toothpaste and clean between the teeth.",
          "Avoid chewing ice or using the tooth to open packaging.",
          "Tell the dentist about clenching or grinding that may overload the restoration.",
          "Keep follow-up visits so the filling and the tooth around it can be checked.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Composite Fillings", href: "https://www.mouthhealthy.org/all-topics-a-z/composite-fillings" },
    ],
  },
  {
    categorySlug: "cosmetic-dentistry",
    slug: "cerec",
    title: "CEREC Same-Day Restorations",
    eyebrow: "Chairside digital dentistry",
    heading: "Design and mill many ceramic restorations in the dental office.",
    intro: "Eastland Family Dental uses CEREC digital technology to create many crowns—and selected other ceramic restorations—without a separate laboratory appointment.",
    overviewTitle: "CEREC combines digital scanning, design software, and in-office milling.",
    overview: [
      "After a tooth is prepared, a digital scan records its shape and the surrounding bite. The dentist designs the restoration on a computer, and a milling unit shapes it from a ceramic block selected for the case.",
      "The restoration is tried in, adjusted, polished, and bonded or cemented after the fit and bite are confirmed. This workflow can allow eligible treatment to be completed in one visit and often avoids the need for a temporary crown.",
    ],
    keyPoints: ["Many eligible crowns can be completed in one visit", "A digital scan replaces a traditional impression in the workflow", "Some cases and materials still require a dental laboratory"],
    sections: [
      {
        heading: "Which restorations may use CEREC?",
        paragraphs: [
          "The system can be used for selected ceramic crowns, inlays, and onlays. Whether it fits a particular tooth depends on the amount of remaining structure, location, bite forces, material requirements, and the appearance needed in that part of the smile.",
          "A same-day workflow is a convenience, not a reason to choose a restoration that is wrong for the tooth. The dentist will recommend a laboratory-made option or another treatment when it offers a better clinical result.",
        ],
      },
      {
        heading: "What the appointment includes",
        bullets: [
          "Examination and imaging needed to confirm the diagnosis",
          "Preparation of the tooth and a digital scan",
          "Computer-aided design and milling of the ceramic restoration",
          "Try-in, bite adjustment, polishing, and final placement",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Crowns", href: "https://www.mouthhealthy.org/all-topics-a-z/crowns" },
    ],
  },
  {
    categorySlug: "cosmetic-dentistry",
    slug: "porcelain-inlays",
    title: "Porcelain Inlays",
    eyebrow: "Conservative ceramic restoration",
    heading: "Restore damage within the cusps of a back tooth.",
    intro: "A porcelain inlay is a custom restoration that can repair more structure than a direct filling while preserving more of the tooth than a full crown.",
    overviewTitle: "An inlay fits into the prepared area of a tooth.",
    overview: [
      "Inlays are considered when decay, fracture, or a failing filling affects a moderate portion of a tooth but the chewing cusps remain strong enough to preserve. The custom piece is made outside the mouth and bonded or cemented into the prepared space.",
      "Porcelain can be selected to coordinate with the tooth color. Other materials may also be appropriate, and a direct filling, onlay, or crown may be recommended instead depending on the location and extent of damage.",
    ],
    keyPoints: ["The restoration sits within the tooth’s chewing cusps", "It is custom-made rather than shaped entirely in the mouth", "The surrounding tooth still requires daily care"],
    sections: [
      {
        heading: "Planning and fabrication",
        paragraphs: [
          "After the tooth is examined and numbed, decay and defective restorative material are removed. A digital scan or impression records the prepared tooth and bite. The inlay may be created through a dental laboratory workflow or, in selected cases, with chairside CAD/CAM technology.",
          "The final restoration is checked for complete seating, contact with neighboring teeth, and a comfortable bite before it is bonded or cemented in place.",
        ],
      },
      {
        heading: "When another option may fit better",
        paragraphs: [
          "A direct filling may be sufficient for a smaller area. An onlay can protect one or more weakened cusps, while a crown may be needed when damage is more extensive or the tooth requires coverage around most of its visible structure.",
          "The recommendation is based on how much healthy tooth remains and how force is distributed when you bite—not simply on the size of an old filling.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Dental Filling Options", href: "https://www.mouthhealthy.org/all-topics-a-z/dental-filling-options" },
      { label: "American Dental Association: Crowns", href: "https://www.mouthhealthy.org/all-topics-a-z/crowns" },
    ],
  },
  {
    categorySlug: "cosmetic-dentistry",
    slug: "porcelain-onlays",
    title: "Porcelain Onlays",
    eyebrow: "Partial-coverage restoration",
    heading: "Rebuild a damaged tooth while covering only the cusps that need protection.",
    intro: "A porcelain onlay is a custom ceramic restoration that extends over one or more chewing cusps without covering the entire tooth like a crown.",
    overviewTitle: "An onlay sits between a filling and a full crown in coverage.",
    overview: [
      "Onlays may be considered when decay, fracture, or a large failing restoration has weakened part of a back tooth, including one or more cusps. They are sometimes called partial crowns because they provide more coverage than an inlay but less than a full crown.",
      "The goal is to preserve sound tooth structure while strengthening the areas that bear chewing forces. Not every damaged tooth is suitable: the remaining enamel, crack pattern, bite, and ability to isolate the tooth all affect the choice.",
    ],
    keyPoints: ["An onlay covers at least one chewing cusp", "Healthy tooth structure can remain uncovered", "Fit and bite are checked before final bonding"],
    sections: [
      {
        heading: "What treatment involves",
        paragraphs: [
          "The tooth is prepared by removing decay, damaged material, and any unsupported structure. A digital scan or impression captures the shape. Depending on the case, the onlay may be produced in the office with CAD/CAM technology or by a dental laboratory.",
          "At placement, the dentist checks the edges, neighboring contacts, and bite before bonding or cementing the onlay. A temporary restoration may be used when the final onlay is made at a laboratory.",
        ],
      },
      {
        heading: "Protecting the result",
        bullets: [
          "Brush with fluoride toothpaste and clean the edges between teeth every day.",
          "Avoid chewing hard nonfood objects or using the restored tooth as a tool.",
          "Ask about a protective appliance if clenching or grinding is present.",
          "Report new pain, a changed bite, looseness, or a fracture promptly.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Dental Filling Options", href: "https://www.mouthhealthy.org/all-topics-a-z/dental-filling-options" },
      { label: "American Dental Association: Crowns", href: "https://www.mouthhealthy.org/all-topics-a-z/crowns" },
    ],
  },
] satisfies ProcedureDetail[];

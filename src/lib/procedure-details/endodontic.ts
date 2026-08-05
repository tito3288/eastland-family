import type { ProcedureDetail } from "./types";

export const endodonticDetails = [
  {
    categorySlug: "endodontics",
    slug: "cracked-tooth",
    title: "Cracked Teeth",
    eyebrow: "Diagnosis and treatment",
    heading: "A crack can be small in appearance and significant in effect.",
    intro: "Early evaluation helps determine where a crack extends, whether the pulp is affected, and whether the tooth can be predictably preserved.",
    overviewTitle: "Cracked teeth do not all behave the same way.",
    overview: [
      "A crack may involve only the outer enamel, extend into the chewing surface, split part of a tooth, or continue below the gumline. Symptoms can come and go and may include pain while chewing, discomfort when releasing a bite, or sensitivity to temperature.",
      "The location, depth, movement, and condition of the pulp and supporting tissues guide the prognosis. Unlike a broken bone, a crack in a tooth does not heal back together, but timely treatment may keep some cracks from progressing and help preserve the tooth.",
    ],
    keyPoints: ["Intermittent pain still deserves evaluation", "The crack’s extent matters more than its visible length", "Treatment ranges from protection to removal"],
    sections: [
      {
        heading: "How a cracked tooth is evaluated",
        paragraphs: [
          "The dentist reviews when the symptoms occur and examines the tooth, nearby teeth, gums, and bite. Magnification, illumination, bite testing, cold testing, gum measurements, transillumination, and diagnostic images may be used. Because a fine crack may not appear clearly on a standard X-ray, diagnosis often combines several findings.",
          "Very shallow enamel lines, called craze lines, are common in adult teeth and usually do not cause pain. A crack that reaches the pulp or root is a different condition and needs a treatment discussion.",
        ],
      },
      {
        heading: "Treatment depends on what can be saved",
        bullets: [
          "A small fractured cusp may be repaired with a filling, onlay, or crown.",
          "A restorable cracked tooth may need a crown to protect it from chewing forces.",
          "If the crack has inflamed or infected the pulp, root canal treatment and a protective restoration may be considered.",
          "A split tooth or a crack that extends severely below the gumline may not be predictably restorable and may require removal.",
        ],
      },
    ],
    sources: [
      { label: "American Association of Endodontists: Cracked Teeth", href: "https://www.aae.org/patients/dental-symptoms/cracked-teeth/" },
    ],
  },
  {
    categorySlug: "endodontics",
    slug: "root-canal",
    title: "Root Amputation",
    eyebrow: "Advanced root procedure",
    heading: "Preserve part of a multi-rooted tooth when one root is the source of disease.",
    intro: "Root amputation is a specialized procedure that removes one compromised root while retaining the rest of a carefully selected tooth.",
    overviewTitle: "Root amputation treats one root rather than removing the entire tooth.",
    overview: [
      "Some molars have multiple roots, and occasionally disease, fracture, resorption, or bone loss is concentrated around one root while the remaining roots and tooth structure can still provide useful support. Root amputation separates and removes the affected root while preserving the rest of the tooth.",
      "This is not a routine alternative to extraction. The remaining roots, surrounding bone and gums, bite, root-canal status, and ability to restore and clean the tooth all need to support a favorable prognosis.",
    ],
    keyPoints: ["The tooth must have more than one root", "Root canal and restorative care are commonly part of the plan", "Specialist evaluation is often appropriate"],
    sections: [
      {
        heading: "When the procedure may be considered",
        bullets: [
          "One root has a localized fracture, perforation, resorption, or persistent endodontic problem",
          "Periodontal bone loss is concentrated around one root",
          "The other roots remain well supported and the tooth can be restored",
          "Preserving the tooth offers a reasonable benefit compared with removal and replacement",
        ],
      },
      {
        heading: "Coordinated endodontic, surgical, and restorative care",
        paragraphs: [
          "Root canal treatment is generally completed before or in coordination with removing the affected root. The root is separated surgically, the area is shaped so it can heal and be maintained, and the remaining tooth receives an appropriate restoration.",
          "Because diagnosis and long-term restorability are critical, care may involve an endodontist, periodontist, or another specialist. Eastland Family Dental can evaluate the tooth and coordinate the appropriate next step.",
        ],
      },
    ],
    sources: [
      { label: "American Association of Endodontists: Endodontic Surgery Explained", href: "https://www.aae.org/patients/root-canal-treatment/endodontic-treatment-options/endodontic-surgery/endodontic-surgery-explained/" },
      { label: "American Dental Association: Root Canals", href: "https://www.mouthhealthy.org/all-topics-a-z/root-canals" },
    ],
  },
  {
    categorySlug: "endodontics",
    slug: "root-canal-therapy",
    title: "Root Canal Therapy",
    eyebrow: "Treating the inside of a tooth",
    heading: "Remove inflamed or infected pulp while preserving the natural tooth.",
    intro: "Root canal therapy cleans, fills, and seals the internal canal system of a tooth that can still be restored and maintained.",
    overviewTitle: "The goal is to treat the source inside the tooth—not remove the tooth itself.",
    overview: [
      "The pulp is the soft tissue inside a tooth. Deep decay, cracks, repeated procedures, or an injury can cause it to become inflamed or infected. A dental examination and diagnostic imaging are needed because tooth pain can also come from the gums, bite, sinuses, muscles, or another tooth.",
      "During root canal treatment, the affected pulp is removed, the canals are cleaned and shaped, and the space is filled and sealed. The tooth can continue to function because mature teeth are supported by the tissues around their roots.",
    ],
    keyPoints: ["Local anesthetic is used for comfort", "A dental dam isolates and protects the treatment area", "The final restoration is an essential part of care"],
    sections: [
      {
        heading: "Signs that should be evaluated",
        bullets: [
          "Lingering sensitivity to hot or cold",
          "Pain when biting or chewing",
          "Swelling, tenderness, drainage, or a recurring bump on the gum",
          "A deeply decayed, cracked, injured, or darkening tooth",
        ],
      },
      {
        heading: "From diagnosis to restoration",
        paragraphs: [
          "After the tooth is numbed and isolated with a dental dam, an opening is made so the canals can be cleaned, shaped, and sealed. A temporary or permanent filling closes the opening until the definitive restoration is completed. The number of appointments depends on the tooth and clinical findings.",
          "Teeth weakened by decay, a fracture, or a large existing restoration—especially back teeth—often need a crown or another protective restoration. General dentists perform many root canals, while complex anatomy, difficult diagnosis, retreatment, or surgery may be referred to an endodontist.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Root Canals", href: "https://www.mouthhealthy.org/all-topics-a-z/root-canals" },
      { label: "American Association of Endodontists: Root Canal Explained", href: "https://www.aae.org/patients/root-canal-treatment/what-is-a-root-canal/root-canal-explained/" },
    ],
  },
  {
    categorySlug: "endodontics",
    slug: "root-canal-retreatment",
    title: "Root Canal Retreatment",
    eyebrow: "A second opportunity to save a tooth",
    heading: "Reassess a root-canal-treated tooth that has not healed or has developed a new problem.",
    intro: "Retreatment removes the earlier root-canal filling so the canal system can be examined, cleaned again, and resealed when preserving the tooth remains a reasonable goal.",
    overviewTitle: "A previously treated tooth can become painful or diseased again.",
    overview: [
      "Most root-canal-treated teeth are intended to remain in service, but healing can be affected by narrow or curved canals, complex anatomy that was difficult to detect, a delayed or leaking final restoration, or a fracture. New decay, a loose restoration, or a later injury can also expose the canal system to bacteria.",
      "Retreatment begins with a new diagnosis. The dentist or endodontist considers the source of the problem, condition of the tooth and restoration, accessibility of the canals, and alternatives such as endodontic surgery, extraction, or monitoring.",
    ],
    keyPoints: ["New symptoms need a fresh diagnosis", "The earlier filling material is removed during retreatment", "Restorability and prognosis guide the decision"],
    sections: [
      {
        heading: "What retreatment involves",
        paragraphs: [
          "The tooth is reopened and restorative materials may need to be removed to reach the canals. The clinician removes the previous root-canal filling, cleans the canals, and examines for additional anatomy or another source of disease. After the canals are filled and sealed again, a temporary filling closes the opening.",
          "A new crown or other final restoration is then placed as soon as clinically appropriate to protect the tooth and restore function. In some cases, a post or other material inside the tooth makes access more complex.",
        ],
      },
      {
        heading: "Why specialist care may be recommended",
        paragraphs: [
          "Retreatment can involve complex anatomy, removal of prior materials, or identification of a crack or hidden canal. An endodontist has advanced training and specialized equipment for diagnosing and treating these conditions.",
          "The expected benefit is individual to the tooth. The treatment discussion should include the likely prognosis, risks, restorative needs, costs, and what replacing the tooth would involve if it cannot be predictably preserved.",
        ],
      },
    ],
    sources: [
      { label: "American Association of Endodontists: Retreatment Explained", href: "https://www.aae.org/patients/root-canal-treatment/endodontic-treatment-options/endodontic-retreatment/retreatment-explained/" },
    ],
  },
] satisfies ProcedureDetail[];

import type { ProcedureDetail } from "./types";

export const surgicalDetails = [
  {
    categorySlug: "oral-maxillofacial-surgery",
    slug: "tooth-extractions",
    title: "Tooth Extractions",
    eyebrow: "Tooth removal",
    heading: "Remove a tooth only when preserving it is no longer the better option.",
    intro: "Eastland Family Dental performs straightforward extractions for children and adults and evaluates when a more complex case should be referred for specialist care.",
    overviewTitle: "The reason for removal shapes the procedure and what comes afterward.",
    overview: [
      "Extraction may be considered when a tooth is damaged beyond predictable repair, severely decayed, infected, loosened by periodontal disease, or creating another dental problem. The dentist should also discuss reasonable options for preserving the tooth when they exist.",
      "A simple extraction removes a tooth that can be accessed without a surgical incision. Teeth that are impacted, badly broken, unusually positioned, or complicated by health factors may require surgical techniques and care from an oral and maxillofacial surgeon.",
    ],
    keyPoints: ["X-rays help evaluate roots and surrounding structures", "Nitrous oxide is available when appropriate for additional relaxation", "The tooth-replacement plan can be discussed before removal"],
    sections: [
      {
        heading: "What generally happens",
        paragraphs: [
          "The area is numbed, and the tooth is loosened and removed with instruments selected for its position and condition. Gauze is placed to help control bleeding and allow a blood clot to form in the socket. Sutures may be used when the site requires them.",
          "Before treatment, tell the team about medications, supplements, allergies, pregnancy, bleeding conditions, previous complications, and any planned sedation. Follow transportation instructions specific to the comfort or sedation method being used.",
        ],
      },
      {
        heading: "Protecting the socket after removal",
        bullets: [
          "Follow the written instructions for gauze, food, cleaning, activity, and medication.",
          "Avoid smoking, vigorous rinsing, and drinking through a straw during the early healing period.",
          "Do not disturb the clot or probe the socket with fingers or objects.",
          "Call the office for bleeding that will not slow, worsening swelling, severe or increasing pain, fever, or another concerning symptom.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Extractions", href: "https://www.mouthhealthy.org/all-topics-a-z/extractions" },
      { label: "AAOMS: Simple vs. Surgical Extraction", href: "https://myoms.org/what-we-do/extractions-and-dentoalveolar-surgery/simple-vs-surgical-extraction/" },
    ],
  },
  {
    categorySlug: "oral-maxillofacial-surgery",
    slug: "apicoectomy",
    title: "Apicoectomy",
    eyebrow: "Root-end surgery",
    heading: "A specialist procedure for selected teeth that remain diseased after root canal treatment.",
    intro: "An apicoectomy removes inflamed or infected tissue around the tip of a root and seals the root end when nonsurgical treatment alone cannot resolve the problem.",
    overviewTitle: "An apicoectomy treats the root from outside the tooth.",
    overview: [
      "Root canal treatment cleans and seals the canal system from inside the tooth. If inflammation or infection persists in the bone around the root tip, endodontic surgery may be considered to identify a hidden problem, remove diseased tissue, and seal the root end.",
      "The most common root-end surgery is an apicoectomy. It is generally performed by an endodontist, a dentist with advanced specialty training in diagnosing tooth pain and treating the inside and roots of teeth.",
    ],
    keyPoints: ["Surgery is considered after a complete diagnosis", "Nonsurgical retreatment may be preferable in some cases", "The goal is to preserve a tooth that can still be predictably restored"],
    sections: [
      {
        heading: "Why root-end surgery may be discussed",
        bullets: [
          "Persistent disease around the root tip after earlier root canal treatment",
          "A canal that cannot be fully reached because it is calcified, blocked, or unusually shaped",
          "A small fracture or root-surface problem that requires direct examination",
          "A condition where retreating through the crown would not predictably address the source",
        ],
      },
      {
        heading: "What the procedure involves",
        paragraphs: [
          "After local anesthetic, the specialist opens the gum near the root, removes inflamed or infected tissue and a small portion of the root tip, then places a root-end filling. The gum is repositioned and sutured.",
          "Eastland Family Dental can evaluate symptoms and the existing restoration, then discuss whether endodontic retreatment, specialist surgery, extraction, or monitoring fits the diagnosis.",
        ],
      },
    ],
    sources: [
      { label: "American Association of Endodontists: Endodontic Surgery Explained", href: "https://www.aae.org/patients/root-canal-treatment/endodontic-treatment-options/endodontic-surgery/endodontic-surgery-explained/" },
    ],
  },
  {
    categorySlug: "oral-maxillofacial-surgery",
    slug: "bone-grafting",
    title: "Dental Bone Grafting",
    eyebrow: "Rebuilding support",
    heading: "Preserve or rebuild bone for healing and future restoration.",
    intro: "Bone graft material can provide a framework for new bone growth when an extraction, implant plan, disease, or injury has left insufficient support.",
    overviewTitle: "A graft adds a scaffold where the body needs more bone volume.",
    overview: [
      "Jawbone can change after tooth loss, periodontal disease, infection, or injury. Bone grafting places processed donor material, animal-derived material, synthetic material, the patient’s own bone, or a combination into the planned site.",
      "The reason for grafting determines its size and timing. A smaller socket-preservation graft may be placed when a tooth is removed, while an implant site with a larger deficiency may require a separate and more complex procedure before implant placement.",
    ],
    keyPoints: ["Graft material and timing are selected for the specific defect", "Healing and new-bone formation take time", "Complex reconstruction may require an oral and maxillofacial surgeon"],
    sections: [
      {
        heading: "Planning the graft",
        paragraphs: [
          "The dentist evaluates the gums, nearby teeth, health history, and the amount of available bone. Two-dimensional X-rays, panoramic imaging, or CBCT may be used when the additional information is needed for planning.",
          "Active infection or gum disease may need to be controlled first. The discussion should cover the source of the graft material, whether a membrane is planned, expected healing time, alternatives, and how the graft fits the complete restorative plan.",
        ],
      },
      {
        heading: "After placement",
        bullets: [
          "Protect the area and follow instructions for food, oral hygiene, and activity.",
          "Use prescribed or over-the-counter medication only as directed for your health history.",
          "Do not assume antibiotics are required for every graft; the clinician decides based on the procedure and patient.",
          "Attend follow-up visits so healing can be evaluated before the next restorative step.",
        ],
      },
    ],
    sources: [
      { label: "AAOMS: Bone Grafting and Membranes", href: "https://myoms.org/what-we-do/extractions-and-dentoalveolar-surgery/bone-grafts/" },
    ],
  },
  {
    categorySlug: "oral-maxillofacial-surgery",
    slug: "wisdom-teeth-exctractions",
    title: "Wisdom Teeth Evaluation & Removal",
    eyebrow: "Third molars",
    heading: "Monitor healthy wisdom teeth and treat the ones causing disease or damage.",
    intro: "Eastland Family Dental evaluates wisdom teeth and provides removal when appropriate, with specialist referral based on position, complexity, and health considerations.",
    overviewTitle: "Not every wisdom tooth needs removal, and lack of pain does not prove health.",
    overview: [
      "Wisdom teeth are the third molars at the back of the mouth. They may erupt normally, remain partly or completely impacted, or develop at an angle that makes them difficult to clean or harmful to nearby structures.",
      "Healthy, functional, disease-free wisdom teeth may be monitored with professional examination, cleaning, and imaging when indicated. Removal is commonly discussed when there is nonrestorable decay, infection, gum disease, a cyst or other pathology, or damage to a neighboring tooth.",
    ],
    keyPoints: ["Position and disease status matter more than age alone", "Panoramic or 3D imaging may be needed for planning", "Impacted or complex teeth may be referred to an oral surgeon"],
    sections: [
      {
        heading: "How the decision is made",
        bullets: [
          "Whether the tooth has fully erupted and can be cleaned",
          "Signs of decay, infection, periodontal disease, or damage nearby",
          "Root development and proximity to nerves, sinuses, or other structures",
          "Current symptoms, medical history, and the risks of removal versus continued monitoring",
        ],
      },
      {
        heading: "Recovery guidance is individualized",
        paragraphs: [
          "The procedure may range from a straightforward extraction to surgical removal of an impacted tooth. Local anesthetic is used, and available comfort options or specialist anesthesia are discussed according to the case.",
          "After removal, protect the blood clot, eat the recommended foods, avoid smoking and straws during early healing, and clean the mouth as directed. Antibiotics are not automatically needed after every wisdom-tooth procedure; use them only when prescribed for a specific reason. Contact the treating office if symptoms worsen rather than improve.",
        ],
      },
    ],
    sources: [
      { label: "AAOMS: Wisdom Teeth Management", href: "https://aaoms.org/wp-content/uploads/2024/05/wisdom_teeth_management.pdf" },
      { label: "American Dental Association: Extractions", href: "https://www.mouthhealthy.org/all-topics-a-z/extractions" },
    ],
  },
] satisfies ProcedureDetail[];

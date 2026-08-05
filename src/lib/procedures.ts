export interface ProcedureItem {
  title: string;
  description: string;
}

export interface ProcedureCategory {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  heading: string;
  intro: string;
  hubDescription: string;
  overviewTitle: string;
  overview: string[];
  itemsLabel: string;
  items: ProcedureItem[];
  discussionTitle: string;
  discussionPoints: string[];
  note?: string;
  sources: { label: string; href: string }[];
}

export const procedureCategories: ProcedureCategory[] = [
  {
    slug: "cleanings-prevention",
    title: "Cleanings & Prevention",
    shortTitle: "Prevention",
    eyebrow: "Preventive dentistry",
    heading: "Protect your smile before small concerns become larger ones.",
    intro: "Exams, professional cleanings, diagnostic imaging, and practical home-care guidance work together to support long-term oral health.",
    hubDescription: "Routine exams, cleanings, digital imaging, sealants, and home-care guidance for children and adults.",
    overviewTitle: "Prevention is a shared effort.",
    overview: [
      "Daily brushing and cleaning between the teeth are the foundation of prevention. Dental visits add a professional examination, removal of hardened buildup, and a chance to identify changes that may not be visible or painful yet.",
      "The timing of exams, cleanings, and X-rays should reflect your current oral health, age, risk factors, and symptoms. Dental X-rays are recommended when they are expected to provide information needed for diagnosis or treatment planning—not automatically at every visit.",
    ],
    itemsLabel: "Preventive care at Eastland",
    items: [
      { title: "Dental exams & cleanings", description: "Routine evaluation and professional cleaning tailored to your oral health and current needs." },
      { title: "Digital and panoramic X-rays", description: "Diagnostic images used when needed to reveal areas that cannot be fully evaluated during a visual exam." },
      { title: "Intraoral cameras", description: "Close-up images that can help the dental team document concerns and explain what they see." },
      { title: "Dental sealants", description: "A protective coating placed on selected chewing surfaces to help reduce the risk of cavities." },
      { title: "Home-care guidance", description: "Personalized help with brushing, flossing, and the daily habits that support healthy teeth and gums." },
    ],
    discussionTitle: "Your preventive plan may consider",
    discussionPoints: ["Your cavity and gum-disease risk", "Changes since your last dental visit", "Past images and current diagnostic needs"],
    sources: [
      { label: "American Dental Association: Dental X-rays", href: "https://www.mouthhealthy.org/all-topics-a-z/x-rays" },
      { label: "American Dental Association: Sealants", href: "https://www.mouthhealthy.org/all-topics-a-z/sealants" },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortTitle: "Cosmetic",
    eyebrow: "Cosmetic dentistry",
    heading: "Thoughtful changes that still respect the health of your teeth.",
    intro: "Cosmetic treatment can address color, shape, wear, spacing, or older restorations after the underlying health of the smile has been evaluated.",
    hubDescription: "Whitening, veneers, tooth-colored fillings, CEREC restorations, inlays, and onlays planned around your goals.",
    overviewTitle: "Start with the result you want—and the tooth you have.",
    overview: [
      "Two people with a similar cosmetic concern may need very different treatment. Tooth color, enamel, existing fillings or crowns, bite forces, and the health of the gums all affect which options are appropriate.",
      "A dental examination helps separate a cosmetic concern from decay, injury, or another condition that should be addressed first. From there, the options can be compared for appearance, tooth preservation, durability, maintenance, and cost.",
    ],
    itemsLabel: "Cosmetic options listed by the practice",
    items: [
      { title: "Teeth whitening", description: "Professional options for eligible natural teeth; whitening does not change the color of crowns, veneers, or fillings." },
      { title: "Porcelain veneers", description: "Custom coverings bonded to the front of selected teeth to change shape, color, or proportion." },
      { title: "Composite fillings", description: "Tooth-colored material used to restore selected areas affected by decay or damage." },
      { title: "CEREC restorations", description: "Digital design and in-office fabrication that allows many ceramic restorations to be completed in one visit." },
      { title: "Porcelain inlays & onlays", description: "Custom restorations that repair more of a tooth than a filling while covering less tooth structure than a full crown." },
    ],
    discussionTitle: "A cosmetic consultation should consider",
    discussionPoints: ["The health and structure of each tooth", "How the proposed change fits the full smile", "Maintenance and long-term tradeoffs"],
    sources: [
      { label: "American Dental Association: Teeth Whitening", href: "https://www.mouthhealthy.org/all-topics-a-z/teeth-whitening" },
      { label: "American Dental Association: Veneers", href: "https://www.mouthhealthy.org/all-topics-a-z/veneers" },
    ],
  },
  {
    slug: "periodontal-disease",
    title: "Periodontal Care",
    shortTitle: "Gum care",
    eyebrow: "Gum health",
    heading: "Healthy teeth depend on healthy supporting tissues.",
    intro: "Gum-disease care focuses on identifying infection and inflammation, controlling the condition, and maintaining the tissues that support your teeth.",
    hubDescription: "Evaluation, education, treatment planning, and maintenance for gingivitis and periodontal disease.",
    overviewTitle: "Gum disease can progress quietly.",
    overview: [
      "Periodontal disease is an infection of the tissues that hold the teeth in place. Plaque that is not removed can harden into tartar, which requires professional removal. Early signs may include red, swollen, tender, or bleeding gums, while more advanced disease can affect bone support and tooth stability.",
      "Diagnosis may include a gum examination, measurements around the teeth, a review of health and risk factors, and X-rays when needed to evaluate bone levels. Treatment is selected according to the extent of the condition, and daily home care remains important at every stage.",
    ],
    itemsLabel: "The periodontal care pathway",
    items: [
      { title: "Understanding risk", description: "A review of plaque control, tobacco use, health conditions, medications, and other factors that may affect the gums." },
      { title: "Periodontal evaluation", description: "An examination of the gums and supporting tissues, including measurements and diagnostic images when indicated." },
      { title: "Treatment planning", description: "Recommendations focused on controlling infection and inflammation; the type and number of treatments depend on severity." },
      { title: "Periodontal maintenance", description: "Ongoing professional care and home hygiene designed to help manage the condition after active treatment." },
    ],
    discussionTitle: "Contact the office about changes such as",
    discussionPoints: ["Gums that bleed, swell, or feel tender", "Persistent bad breath or gum recession", "Loose teeth or discomfort when chewing"],
    note: "Some periodontal needs can be managed in a general dental office, while advanced or complex conditions may benefit from care by a periodontist.",
    sources: [
      { label: "National Institute of Dental and Craniofacial Research: Gum Disease", href: "https://www.nidcr.nih.gov/health-info/gum-disease" },
    ],
  },
  {
    slug: "restorations",
    title: "Restorative Dentistry",
    shortTitle: "Restorations",
    eyebrow: "Restorative dentistry",
    heading: "Repair damage, replace missing teeth, and restore comfortable function.",
    intro: "Restorative care is planned around what can be preserved, what needs to be rebuilt, and how the result should function as part of the full bite.",
    hubDescription: "Crowns, bridges, implants, dentures, and root canal therapy for damaged or missing teeth.",
    overviewTitle: "Restoration begins with a complete diagnosis.",
    overview: [
      "Decay, cracks, wear, infection, and tooth loss affect people differently. An examination and appropriate imaging help determine how much healthy tooth structure remains and which solutions fit the condition.",
      "Eastland Family Dental lists fixed and removable options for restoring teeth. The practice also uses CEREC technology to create many crowns in a single visit and digital impressions for laboratory-made appliances such as bridges and dentures.",
    ],
    itemsLabel: "Restorative options listed by the practice",
    items: [
      { title: "Crowns & bridges", description: "Crowns cover and strengthen selected teeth; bridges can replace one or more missing teeth using neighboring support." },
      { title: "Dental implants", description: "Implant-supported restorations replace missing teeth using an implant in the jaw as the foundation for a crown, bridge, or denture." },
      { title: "Dentures & partial dentures", description: "Removable appliances designed to replace several missing teeth or a complete arch of teeth." },
      { title: "Root canal therapy", description: "Treatment for the inside of a severely damaged, decayed, or infected tooth, often followed by a protective restoration." },
    ],
    discussionTitle: "Your restorative plan may weigh",
    discussionPoints: ["How much natural tooth can be preserved", "Fixed versus removable replacement options", "Health, healing, timing, and maintenance"],
    sources: [
      { label: "American Dental Association: Crowns", href: "https://www.mouthhealthy.org/all-topics-a-z/crowns" },
      { label: "American Dental Association: Bridges", href: "https://www.mouthhealthy.org/all-topics-a-z/bridges" },
      { label: "American Dental Association: Dental Implants", href: "https://www.mouthhealthy.org/all-topics-a-z/implants" },
    ],
  },
  {
    slug: "oral-maxillofacial-surgery",
    title: "Oral Surgery",
    shortTitle: "Oral surgery",
    eyebrow: "Oral surgery",
    heading: "Evaluation and coordinated care for surgical dental needs.",
    intro: "Some teeth and supporting structures require surgical treatment. The first step is understanding the condition, its complexity, and the appropriate setting for care.",
    hubDescription: "Evaluation for tooth removal, wisdom teeth, bone grafting, and procedures around the roots of teeth.",
    overviewTitle: "Oral surgery is a category of care—not a provider title.",
    overview: [
      "General dentists can perform some oral surgery, including straightforward extractions. An oral and maxillofacial surgeon is a dental specialist with hospital-based surgical training, and more complex cases may be referred for specialist care.",
      "A clinical examination, health-history review, and appropriate imaging help determine whether a procedure is needed and who is best suited to provide it. The recommendation should account for tooth position, surrounding bone, medical considerations, and the goals of the overall treatment plan.",
    ],
    itemsLabel: "Surgical topics listed by the practice",
    items: [
      { title: "Tooth extractions", description: "Removal may be considered when a tooth is diseased, damaged beyond repair, or creating another dental problem." },
      { title: "Wisdom teeth", description: "Evaluation of third-molar position and health, with monitoring, removal, or specialist referral discussed as appropriate." },
      { title: "Bone grafting", description: "A procedure that can rebuild or preserve bone in connection with an extraction, implant plan, or another reconstructive need." },
      { title: "Apicoectomy", description: "A root-end procedure sometimes considered when infection persists around the tip of a previously treated tooth." },
    ],
    discussionTitle: "Planning depends on",
    discussionPoints: ["The location and complexity of the tooth or site", "Your medical history and anesthesia needs", "Whether specialist treatment is appropriate"],
    note: "Eastland Family Dental is a general dental practice. The office can evaluate the concern and discuss whether treatment can be completed there or should be referred to an oral and maxillofacial surgeon or another specialist.",
    sources: [
      { label: "AAOMS: Oral Surgery vs. Oral Surgeons", href: "https://myoms.org/why-choose-an-oms/oral-surgery-vs-oral-surgeon/" },
      { label: "American Dental Association: Extractions", href: "https://www.mouthhealthy.org/all-topics-a-z/extractions" },
    ],
  },
  {
    slug: "endodontics",
    title: "Root Canal & Endodontic Care",
    shortTitle: "Endodontics",
    eyebrow: "Inside the tooth",
    heading: "Relieve infection while working to preserve the natural tooth.",
    intro: "Endodontic treatment addresses the pulp and root-canal system inside a tooth that has been damaged by deep decay, a crack, repeated treatment, or injury.",
    hubDescription: "Evaluation and treatment planning for cracked, injured, infected, or previously root-canal-treated teeth.",
    overviewTitle: "Root canal treatment is designed to save a tooth.",
    overview: [
      "The pulp inside a tooth can become inflamed or infected because of a deep cavity, a crack or fracture, repeated dental procedures, or trauma. Symptoms may include lingering sensitivity, pain when chewing, swelling, or discoloration, but diagnosis requires an examination and appropriate imaging.",
      "During root canal treatment, the affected tissue is removed, the canals are cleaned and sealed, and the tooth is restored. The exact number of visits and final restoration depend on the tooth and the clinical situation.",
    ],
    itemsLabel: "Endodontic topics listed by the practice",
    items: [
      { title: "Cracked teeth", description: "Evaluation of the crack, symptoms, and remaining tooth structure to determine whether the tooth can be predictably preserved." },
      { title: "Root canal therapy", description: "Cleaning and sealing the internal canal system of a tooth affected by severe damage, decay, or infection." },
      { title: "Root canal retreatment", description: "A second treatment may be considered when a previously treated tooth does not heal as expected or develops a new problem." },
      { title: "Advanced root procedures", description: "Selected cases may require specialist procedures involving a root or the area around its tip." },
    ],
    discussionTitle: "Seek a dental evaluation for",
    discussionPoints: ["Severe or lingering tooth pain", "Swelling, drainage, or tenderness", "A cracked, injured, or darkening tooth"],
    note: "An endodontist is a dentist with advanced specialty training in root canal care. Depending on complexity, treatment may be completed by a general dentist or referred to an endodontist.",
    sources: [
      { label: "American Dental Association: Root Canals", href: "https://www.mouthhealthy.org/all-topics-a-z/root-canals" },
    ],
  },
  {
    slug: "pediatric-dentistry",
    title: "Children’s Dentistry",
    shortTitle: "Children's care",
    eyebrow: "Family dentistry for children",
    heading: "A positive dental home from the beginning.",
    intro: "Age-appropriate visits help children become comfortable with dental care while parents receive practical guidance for protecting developing smiles.",
    hubDescription: "Family dental visits for children, with prevention, education, growth monitoring, and a calm introduction to care.",
    overviewTitle: "Early visits build familiarity and support prevention.",
    overview: [
      "A child’s dental needs change as primary teeth arrive, permanent teeth develop, and independence with home care grows. Regular visits provide opportunities to check development, identify disease early, reinforce good habits, and answer caregivers’ questions.",
      "Eastland Family Dental welcomes children in a family-practice setting. The team emphasizes clear, reassuring communication, and nitrous oxide is available for children and adults who may need additional help relaxing during treatment.",
    ],
    itemsLabel: "Care for growing smiles",
    items: [
      { title: "Exams & cleanings", description: "Age-appropriate evaluation, professional cleaning, and a chance to track changes as the mouth develops." },
      { title: "Fluoride & sealants", description: "Preventive options that may be recommended according to a child’s age, teeth, and cavity risk." },
      { title: "Home-care coaching", description: "Practical help for caregivers and children with brushing, fluoride toothpaste, diet, and daily routines." },
      { title: "Growth & development", description: "Monitoring how primary and permanent teeth emerge and how the bite is developing over time." },
      { title: "Comfort support", description: "A calm approach, child-friendly explanations, and a conversation about available comfort options when treatment is needed." },
    ],
    discussionTitle: "A child’s visit can help with",
    discussionPoints: ["Preventing and identifying cavities early", "Building confidence with dental visits", "Questions about habits, development, or injuries"],
    note: "Eastland Family Dental is a general family dental practice. Pediatric dentistry is a separate dental specialty; when specialist care would be appropriate, the next step can be discussed with the family.",
    sources: [
      { label: "American Dental Association: Babies and Kids", href: "https://www.mouthhealthy.org/life-stages/babies-and-kids" },
      { label: "American Academy of Pediatric Dentistry: Parent FAQ", href: "https://www.aapd.org/resources/parent/faq/" },
    ],
  },
];

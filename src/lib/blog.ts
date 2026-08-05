export interface BlogSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  isoDate: string;
  summary: string;
  sections: BlogSection[];
  sources: { label: string; href: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-expect-during-a-dental-extraction",
    title: "What to Expect During a Dental Extraction",
    category: "Oral surgery",
    date: "July 20, 2024",
    isoDate: "2024-07-20",
    summary: "A calm overview of why a tooth may need to be removed, what usually happens during the visit, and how to protect the healing area afterward.",
    sections: [
      {
        heading: "Why an extraction may be recommended",
        paragraphs: [
          "A tooth may need to be removed because of disease, trauma, crowding, or damage that cannot be predictably repaired. Your dentist will review the reason for the recommendation and the alternatives that apply to your situation before treatment.",
        ],
      },
      {
        heading: "What generally happens",
        paragraphs: [
          "The treatment area is numbed before the tooth is removed. The details vary with the tooth, its position, and your health history, so the instructions you receive from your dentist are more important than any general online guide.",
          "After the tooth is removed, a blood clot forms in the socket and supports normal healing. A small amount of bleeding can be expected in many cases.",
        ],
      },
      {
        heading: "Protecting the healing area",
        bullets: [
          "Follow the eating, cleaning, and medication instructions provided by your dentist.",
          "Avoid smoking, vigorous rinsing, and drinking through a straw during the early healing period.",
          "Brush and floss the rest of your teeth as directed, while avoiding the extraction site until your dentist says it is ready.",
          "Call the office if swelling, bleeding, pain, or another symptom concerns you.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Extractions", href: "https://www.mouthhealthy.org/all-topics-a-z/extractions" },
    ],
  },
  {
    slug: "how-tmd-can-impact-your-overall-health",
    title: "How TMD Can Affect Daily Life",
    category: "General",
    date: "July 20, 2024",
    isoDate: "2024-07-20",
    summary: "Jaw-joint and chewing-muscle disorders can affect comfort and function. Learn the common signs and why conservative care usually comes first.",
    sections: [
      {
        heading: "TMD and TMJ are not the same thing",
        paragraphs: [
          "Temporomandibular disorders, or TMDs, are a group of conditions that cause pain or dysfunction in the jaw joints and the muscles that control jaw movement. TMJ is the name of the joint itself. TMD symptoms may be short-lived, though some people develop longer-lasting problems.",
        ],
      },
      {
        heading: "Signs worth discussing",
        bullets: [
          "Pain in the chewing muscles or jaw joint",
          "Pain that spreads into the face or neck",
          "Jaw stiffness, limited movement, or locking",
          "Painful clicking, popping, or grating while the jaw moves",
          "A change in the way the upper and lower teeth fit together",
        ],
        paragraphs: [
          "Clicking or popping without pain is common and generally does not require treatment. Jaw or facial pain can have other causes, so diagnosis begins with a health history and examination rather than symptoms alone.",
        ],
      },
      {
        heading: "Start with conservative care",
        paragraphs: [
          "Many TMD symptoms improve without aggressive treatment. Depending on the diagnosis, a dentist or doctor may begin with simple measures such as softer foods, heat or cold, gentle exercises, or short-term medication guidance.",
          "The National Institute of Dental and Craniofacial Research advises caution with treatments that permanently change the teeth, bite, or jaw joint. If a complex or irreversible procedure is recommended, ask about the evidence, risks, alternatives, and whether a second opinion is appropriate.",
        ],
      },
    ],
    sources: [
      { label: "National Institute of Dental and Craniofacial Research: TMD", href: "https://www.nidcr.nih.gov/health-info/tmd" },
    ],
  },
  {
    slug: "hydrating-for-a-healthier-smile",
    title: "Hydrating for a Healthier Smile",
    category: "Home care",
    date: "July 20, 2024",
    isoDate: "2024-07-20",
    summary: "Water supports the mouth’s natural defenses by helping with saliva flow, rinsing away debris, and diluting acids between brushings.",
    sections: [
      {
        heading: "Why saliva matters",
        paragraphs: [
          "Saliva helps wash away food and debris, neutralize acids produced by bacteria, and protect the hard and soft tissues in your mouth. When saliva flow is low, the risk of tooth decay can increase.",
        ],
      },
      {
        heading: "What water can do",
        paragraphs: [
          "Drinking water helps rinse away residue and dilute acids. Fluoridated water also helps strengthen teeth against cavities. Water is useful support for a healthy mouth, but it does not replace brushing twice a day with fluoride toothpaste or cleaning between your teeth each day.",
        ],
      },
      {
        heading: "Simple hydration habits",
        bullets: [
          "Keep water nearby and drink it regularly with and between meals.",
          "Choose water more often than sugar-sweetened beverages.",
          "If dry mouth is persistent, tell your dentist or physician; medications and health conditions can contribute to it.",
          "Ask your dentist about safe ways to support saliva flow if dry mouth is affecting comfort or oral health.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Water—Nature’s Drink", href: "https://www.mouthhealthy.org/nutrition/water-best-beverage" },
      { label: "American Dental Association: Dry Mouth", href: "https://www.mouthhealthy.org/all-topics-a-z/dry-mouth" },
    ],
  },
  {
    slug: "electric-toothbrush-for-the-best-long-term-effects",
    title: "Cosmetic Treatments to Enhance a Single Tooth",
    category: "Cosmetic",
    date: "March 28, 2024",
    isoDate: "2024-03-28",
    summary: "A chipped, stained, worn, or out-of-position tooth may have more than one treatment option. The right approach depends on its health and the change you want to make.",
    sections: [
      {
        heading: "Begin with the health of the tooth",
        paragraphs: [
          "A cosmetic concern can sometimes be connected to decay, an old restoration, injury, or a bite issue. A dental examination helps identify the cause and determine which options can improve appearance without overlooking health or function.",
        ],
      },
      {
        heading: "Options serve different needs",
        bullets: [
          "Whitening can change the color of natural tooth structure, but it does not lighten crowns, veneers, or fillings and does not work for every type of discoloration.",
          "Bonding uses tooth-colored material to reshape or repair selected areas of a tooth.",
          "A veneer covers the front surface of a tooth and may address chips, stains, shape, or spacing. Because enamel is removed, treatment is not reversible.",
          "A crown covers the tooth and may strengthen one that is weak, broken, or heavily restored while also improving its appearance.",
          "Orthodontic treatment may be considered when tooth position or the bite is the underlying concern.",
        ],
      },
      {
        heading: "Choose with the full picture in mind",
        paragraphs: [
          "Durability, enamel preservation, maintenance, timing, and cost can differ substantially among treatments. Your dentist can explain which choices fit the condition of the tooth and help you weigh the tradeoffs before moving forward.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Teeth Whitening", href: "https://www.mouthhealthy.org/all-topics-a-z/teeth-whitening" },
      { label: "American Dental Association: Veneers", href: "https://www.mouthhealthy.org/all-topics-a-z/veneers" },
      { label: "American Dental Association: Crowns", href: "https://www.mouthhealthy.org/all-topics-a-z/crowns" },
      { label: "American Dental Association: Orthodontics", href: "https://www.mouthhealthy.org/all-topics-a-z/orthodontics" },
    ],
  },
];

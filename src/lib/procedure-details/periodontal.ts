import type { ProcedureDetail } from "./types";

const gumSource = { label: "National Institute of Dental and Craniofacial Research: Gum Disease", href: "https://www.nidcr.nih.gov/health-info/gum-disease" };

export const periodontalDetails = [
  {
    categorySlug: "periodontal-disease",
    slug: "causes-of-periodontal-disease",
    title: "Causes & Risk Factors for Gum Disease",
    eyebrow: "Why gum disease develops",
    heading: "Plaque starts the process, but risk is not the same for everyone.",
    intro: "Understanding daily plaque control and personal risk factors helps the dental team build a more useful prevention or treatment plan.",
    overviewTitle: "Gum disease begins when bacterial plaque is allowed to remain around the teeth.",
    overview: [
      "Plaque is a sticky bacterial film that forms continuously. If it is not removed, it can harden into tartar, which cannot be brushed away at home. The bacteria and the body’s inflammatory response can irritate the gums and, in periodontitis, damage the tissues and bone that support the teeth.",
      "Home care is central, but gum disease is not simply a sign that someone did not brush well enough. Tobacco use, diabetes, genetics, hormonal changes, certain medications, dry mouth, and other health factors can change susceptibility and healing.",
    ],
    keyPoints: ["Smoking is a major modifiable risk factor", "Tartar requires professional removal", "Health history can affect both risk and treatment response"],
    sections: [
      {
        heading: "Risk factors worth discussing",
        bullets: [
          "Smoking or other tobacco and nicotine use",
          "Diabetes, especially when blood sugar is not well controlled",
          "A family history of advanced gum disease",
          "Medications or conditions that reduce saliva or alter gum tissue",
          "Pregnancy or other hormonal changes that increase gum sensitivity",
          "Difficulty cleaning around crowded teeth, bridges, implants, or appliances",
        ],
      },
      {
        heading: "What prevention can change",
        paragraphs: [
          "Brush twice daily with fluoride toothpaste, clean between the teeth every day, and keep professional visits at the interval recommended for your risk. If you use tobacco, support for quitting can improve oral and overall health.",
          "Tell the dental team about changes in medications and medical diagnoses. Coordinating oral care with the management of conditions such as diabetes can be important, but dental treatment should not be presented as a cure for an unrelated systemic disease.",
        ],
      },
    ],
    sources: [gumSource],
  },
  {
    categorySlug: "periodontal-disease",
    slug: "what-is-periodontal-gum-disease",
    title: "What Is Periodontal Disease?",
    eyebrow: "Understanding gum disease",
    heading: "An infection and inflammatory condition affecting the support around teeth.",
    intro: "Periodontal disease can begin with inflamed gums and progress into loss of the attachment and bone that help hold teeth in place.",
    overviewTitle: "Gingivitis and periodontitis are related, but they are not identical.",
    overview: [
      "Gingivitis is inflammation limited to the gums. The tissue may appear red or swollen and may bleed, but the supporting attachment and bone have not been lost. With professional care and effective daily plaque removal, gingivitis can often be reversed.",
      "Periodontitis involves deeper infection and inflammation with loss of the tissues or bone supporting the teeth. It can progress without severe pain, which is why examination and measurements matter even when someone feels generally comfortable.",
    ],
    keyPoints: ["Bleeding gums are a reason for evaluation", "Early disease may not be painful", "Advanced disease can loosen teeth and change the bite"],
    sections: [
      {
        heading: "Signs that may occur",
        bullets: [
          "Red, swollen, tender, or bleeding gums",
          "Gums pulling away from teeth or teeth appearing longer",
          "Persistent bad breath or an unpleasant taste",
          "Sensitivity, pain while chewing, or loose teeth",
          "A change in how the teeth meet when biting",
        ],
      },
      {
        heading: "Why professional evaluation matters",
        paragraphs: [
          "The appearance of the gums alone does not show the complete condition. A periodontal examination can assess bleeding, pocket depths, recession, tooth mobility, buildup, and bone levels when imaging is indicated.",
          "Treatment aims to control infection and help the patient maintain the teeth. The recommendation may range from preventive care and improved home hygiene to deep cleaning, periodontal maintenance, or referral for specialist treatment.",
        ],
      },
    ],
    sources: [gumSource],
  },
  {
    categorySlug: "periodontal-disease",
    slug: "diagnosis",
    title: "Periodontal Diagnosis",
    eyebrow: "Gum evaluation",
    heading: "Measurements and history reveal more than appearance alone.",
    intro: "A periodontal evaluation looks at inflammation, pocket depth, attachment, bone support, risk factors, and how the condition is distributed throughout the mouth.",
    overviewTitle: "Diagnosis combines several findings rather than relying on one number.",
    overview: [
      "The dentist or hygienist uses a small periodontal probe to measure the spaces between the teeth and gums. Measurements are interpreted with bleeding, recession, plaque and tartar, tooth mobility, and other clinical findings.",
      "Dental X-rays may be used when they are expected to show information about bone levels or another condition that cannot be evaluated visually. Medical history, tobacco use, diabetes, medications, past periodontal treatment, and current symptoms help place the measurements in context.",
    ],
    keyPoints: ["Pocket depth is only one part of the diagnosis", "Bone loss may require diagnostic imaging to evaluate", "The same mouth can have different disease levels in different areas"],
    sections: [
      {
        heading: "What the team may record",
        bullets: [
          "Pocket depths around each tooth and whether the gums bleed",
          "Gum recession and clinical attachment levels",
          "Plaque, tartar, inflammation, and areas that are difficult to clean",
          "Tooth mobility, furcation involvement, and changes in the bite",
          "Bone levels and patterns visible on indicated X-rays",
        ],
      },
      {
        heading: "From findings to a plan",
        paragraphs: [
          "The diagnosis helps determine whether the condition is gingivitis or periodontitis, how severe it is, and how broadly it affects the mouth. It also creates a baseline for evaluating response to treatment.",
          "Ask the team to show you where disease is present and explain what the measurements mean. If the condition is advanced, complex, or not responding as expected, referral to a periodontist may be recommended.",
        ],
      },
    ],
    sources: [gumSource],
  },
  {
    categorySlug: "periodontal-disease",
    slug: "treatment",
    title: "Periodontal Treatment",
    eyebrow: "Controlling gum infection",
    heading: "Treatment is matched to the extent and severity of disease.",
    intro: "The goal of periodontal treatment is to control infection and inflammation, improve access for daily cleaning, and protect the tissues supporting the teeth.",
    overviewTitle: "There is no single treatment for every stage of gum disease.",
    overview: [
      "When inflammation is limited to gingivitis, professional cleaning and improved daily plaque removal may be enough to restore healthier gums. When periodontitis has created deeper pockets or attachment loss, treatment must address buildup and bacteria below the gumline.",
      "Scaling and root planing is a nonsurgical deep-cleaning procedure that removes plaque and tartar from root surfaces. The mouth may be treated in sections, with local anesthetic used for comfort. Healing is evaluated later before deciding whether additional care is needed.",
    ],
    keyPoints: ["Daily home care remains necessary during and after treatment", "Healing must be reevaluated before the next decision", "Advanced disease may require a periodontist"],
    sections: [
      {
        heading: "Possible parts of a treatment plan",
        bullets: [
          "Personalized brushing and interdental-cleaning instruction",
          "Professional cleaning for gingivitis",
          "Scaling and root planing for selected areas affected by periodontitis",
          "Medication only when the diagnosis and evidence support its use",
          "Periodontal surgery or specialist procedures when nonsurgical care is not sufficient",
        ],
      },
      {
        heading: "Reevaluation guides what comes next",
        paragraphs: [
          "After active treatment, the team reassesses bleeding, pocket depths, home care, comfort, and tissue response. Some pockets become easier to maintain, while other areas may require additional treatment or specialist evaluation.",
          "Treatment cannot rebuild every tissue that has been lost, and no procedure eliminates the need for ongoing care. The plan should include what improvement is expected, what remains uncertain, and how the condition will be monitored.",
        ],
      },
    ],
    sources: [gumSource],
  },
  {
    categorySlug: "periodontal-disease",
    slug: "maintenance",
    title: "Periodontal Maintenance",
    eyebrow: "Ongoing gum care",
    heading: "Protect the progress made during active treatment.",
    intro: "Periodontal maintenance is continuing professional care for patients with a history of periodontitis, focused on controlling buildup and monitoring stability.",
    overviewTitle: "Maintenance is different from a routine preventive cleaning.",
    overview: [
      "After periodontal treatment, disease-causing buildup can return in areas that remain difficult to clean. A periodontal maintenance visit addresses plaque and tartar above and below the gumline as needed and checks how the supporting tissues are responding over time.",
      "The interval is individualized. Some patients benefit from more frequent visits because of disease severity, smoking, diabetes, home-care challenges, or how quickly buildup returns. A fixed schedule such as exactly four visits every year is not necessary for every person.",
    ],
    keyPoints: ["Maintenance begins after active periodontal treatment", "Pocket measurements help track stability", "The recall interval can change as risk and response change"],
    sections: [
      {
        heading: "What may happen at a maintenance visit",
        bullets: [
          "Review of health changes, symptoms, and home-care routines",
          "Reassessment of selected pocket depths, bleeding, recession, and mobility",
          "Removal of plaque and tartar from areas that require professional access",
          "Polishing and individualized instruction for difficult areas",
          "X-rays only when needed to answer a diagnostic question",
        ],
      },
      {
        heading: "When the condition changes",
        paragraphs: [
          "New bleeding, deeper pockets, discomfort, or continued bone loss can signal that the condition is no longer stable. The dentist may recommend additional active treatment, a change in the maintenance interval, or referral to a periodontist.",
          "At home, continue brushing twice daily with fluoride toothpaste and cleaning between the teeth using the tools recommended for your anatomy and dental work.",
        ],
      },
    ],
    sources: [gumSource],
  },
] satisfies ProcedureDetail[];

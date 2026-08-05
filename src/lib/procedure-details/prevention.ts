import type { ProcedureDetail } from "./types";

export const preventionDetails = [
  {
    categorySlug: "cleanings-prevention",
    slug: "digital-radiographs",
    title: "Digital Radiographs",
    eyebrow: "Diagnostic imaging",
    heading: "Detailed dental images without waiting for film to develop.",
    intro: "Digital radiographs help the dental team evaluate areas that cannot be fully seen during a visual examination and compare changes over time.",
    overviewTitle: "Digital radiographs are dental X-rays captured electronically.",
    overview: [
      "Instead of recording an image on traditional film, a digital sensor or imaging plate captures the X-ray and sends it to a computer. The dental team can enlarge the image, adjust how it is displayed, compare it with earlier records, and share it when another provider is involved in care.",
      "The technology changes how an image is recorded and reviewed; it does not change the need to justify each X-ray. Imaging should be selected after considering the clinical examination, symptoms, oral-health history, age, and risk for disease.",
    ],
    keyPoints: ["Images are available for review within moments", "Earlier records can help show change over time", "The type and timing of X-rays are individualized"],
    sections: [
      {
        heading: "What digital images can help evaluate",
        bullets: [
          "Decay between teeth or beneath existing restorations",
          "Bone levels and signs of periodontal disease",
          "Tooth roots, developing teeth, and tooth position",
          "Injury, infection, or other changes that require a closer look",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "For an intraoral image, a small sensor or plate is positioned in the mouth while the X-ray is taken. Different views are used for different questions—for example, bitewing images can show the crowns of upper and lower teeth, while a periapical image includes the root and surrounding bone.",
          "Tell the team if you have a sensitive gag reflex, difficulty holding a sensor, or questions about why an image is being recommended. The team can explain what information the selected view is expected to provide.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: X-rays and radiographs", href: "https://www.ada.org/resources/ada-library/oral-health-topics/x-rays-radiographs" },
    ],
  },
  {
    categorySlug: "cleanings-prevention",
    slug: "intraoral-cameras",
    title: "Intraoral Cameras",
    eyebrow: "Clinical photography",
    heading: "See the same close-up view the dental team is discussing.",
    intro: "A small camera can capture color images inside the mouth, making it easier to document a concern and understand a treatment recommendation.",
    overviewTitle: "A useful communication tool—not an X-ray replacement.",
    overview: [
      "An intraoral camera is a slim, handheld camera designed to photograph teeth, gums, and other visible areas inside the mouth. The images appear on a nearby screen and can be enlarged so a crack, worn restoration, area of buildup, or another visible change is easier to discuss.",
      "Because the camera uses visible light rather than ionizing radiation, taking a photograph does not expose you to X-rays. It cannot show structures hidden inside a tooth or bone, so radiographs or other tests may still be needed when the clinical question extends below the visible surface.",
    ],
    keyPoints: ["Color images make visible conditions easier to explain", "Photographs can document change over time", "The camera complements—not replaces—other diagnostic tools"],
    sections: [
      {
        heading: "How the images may be used",
        bullets: [
          "Reviewing a tooth, filling, crown, or area of gum tissue with you",
          "Recording the appearance of a condition before and after treatment",
          "Supporting a referral or consultation with another dental provider",
          "Showing areas where a change in home care may be helpful",
        ],
      },
      {
        heading: "What the visit feels like",
        paragraphs: [
          "The camera is covered with a protective barrier and moved carefully around the mouth. Individual images can be paused and enlarged while the dentist or hygienist explains what is visible and why it matters.",
          "A photograph alone does not establish a diagnosis. It is interpreted together with your symptoms, examination, health history, and any other diagnostic information that is needed.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Meeting the doctor", href: "https://www.ada.org/resources/practice/practice-management/meeting-the-doctor" },
    ],
  },
  {
    categorySlug: "cleanings-prevention",
    slug: "panoramic-x-rays",
    title: "Panoramic X-rays",
    eyebrow: "Whole-mouth imaging",
    heading: "One broad image of the teeth, jaws, and surrounding structures.",
    intro: "A panoramic X-ray provides a two-dimensional overview that can support evaluation of tooth position, jaw structures, and treatment planning.",
    overviewTitle: "A panoramic image answers different questions than a close-up dental X-ray.",
    overview: [
      "A panoramic X-ray captures the entire mouth in one image, including the upper and lower jaws, teeth, and nearby structures. The machine rotates around the head while the detector remains outside the mouth, which can be helpful for people who have difficulty holding intraoral sensors.",
      "Because the image covers a large area, it is useful for an overview rather than fine detail on every tooth. Additional intraoral images or three-dimensional imaging may be recommended when a specific area requires a closer or more precise view.",
    ],
    keyPoints: ["The detector stays outside the mouth", "The image shows both jaws in a single view", "It is used when the broad view adds useful information"],
    sections: [
      {
        heading: "Common reasons for a panoramic image",
        bullets: [
          "Reviewing developing, missing, or impacted teeth, including wisdom teeth",
          "Planning selected extractions, dentures, implants, or other treatment",
          "Evaluating the jawbone and broader areas around the teeth",
          "Investigating a concern that extends beyond one or two teeth",
        ],
      },
      {
        heading: "How it is taken",
        paragraphs: [
          "You are positioned in the center of the machine and asked to stay still while the imaging arm travels around your head. A bite guide and head supports help align the jaws so the resulting image is clear enough to interpret.",
          "The decision to take a panoramic X-ray is based on the information needed for your care. It is not automatically required at every examination.",
        ],
      },
    ],
    sources: [
      { label: "RadiologyInfo: Panoramic dental X-ray", href: "https://www.radiologyinfo.org/en/info/panoramic-xray" },
      { label: "American Dental Association: X-rays", href: "https://www.mouthhealthy.org/all-topics-a-z/x-rays" },
    ],
  },
  {
    categorySlug: "cleanings-prevention",
    slug: "sealants",
    title: "Dental Sealants",
    eyebrow: "Cavity prevention",
    heading: "A thin protective layer for cavity-prone chewing surfaces.",
    intro: "Sealants flow into the grooves of selected back teeth, creating a smoother barrier against food particles and cavity-causing bacteria.",
    overviewTitle: "Back teeth can have grooves that are difficult to clean completely.",
    overview: [
      "Molars and premolars often have pits and fissures where a toothbrush cannot easily reach. A dental sealant is a thin coating placed over those chewing surfaces to help prevent decay or keep very early noncavitated decay from progressing.",
      "Children commonly receive sealants when permanent molars erupt, but age alone does not determine whether they are appropriate. Teens and adults may also benefit when a tooth has deep grooves and no condition that requires a different restoration.",
    ],
    keyPoints: ["Sealants do not require removing healthy tooth structure", "They supplement daily brushing and cleaning between teeth", "Their condition is checked during future dental visits"],
    sections: [
      {
        heading: "How sealants are placed",
        paragraphs: [
          "The tooth is cleaned and kept dry. A conditioning material prepares the enamel, and the sealant is painted into the grooves. Depending on the material, a curing light may be used to harden it. The bite is then checked and adjusted if necessary.",
          "Placement is generally quick and does not require numbing when no other treatment is being performed on the tooth.",
        ],
      },
      {
        heading: "Keeping the protection working",
        bullets: [
          "Continue brushing twice daily with fluoride toothpaste.",
          "Clean between teeth every day using the method recommended for you.",
          "Attend dental visits so worn, chipped, or missing sealant material can be identified.",
          "Remember that sealants protect selected grooves—not every tooth surface.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Sealants", href: "https://www.mouthhealthy.org/all-topics-a-z/sealants" },
    ],
  },
  {
    categorySlug: "cleanings-prevention",
    slug: "dental-exams-cleanings",
    title: "Dental Exams & Cleanings",
    eyebrow: "Routine dental visits",
    heading: "Professional prevention shaped around your current oral health.",
    intro: "A dental visit combines examination, professional cleaning, and a conversation about symptoms, risk factors, and what to monitor next.",
    overviewTitle: "An exam and a cleaning serve different—but connected—purposes.",
    overview: [
      "During an examination, the dentist reviews the teeth, gums, existing restorations, bite, and visible oral tissues. The health history and any symptoms guide the evaluation, and X-rays are selected only when the expected diagnostic information is useful.",
      "A professional cleaning removes plaque, hardened tartar, and selected surface stains that home brushing cannot fully address. The hygienist can also identify difficult-to-clean areas and recommend techniques or tools that fit your mouth and dental work.",
    ],
    keyPoints: ["The visit includes more than checking for cavities", "Tartar requires professional removal", "Recall timing should reflect individual risk and treatment history"],
    sections: [
      {
        heading: "What may be reviewed during an exam",
        bullets: [
          "New decay, cracks, wear, or changes around fillings and crowns",
          "Gum inflammation, pocket measurements, and bone support when indicated",
          "The lips, cheeks, tongue, palate, throat, jaw, and neck for unusual findings",
          "Symptoms such as sensitivity, pain, dry mouth, or changes in the bite",
        ],
      },
      {
        heading: "How often should you return?",
        paragraphs: [
          "There is no single schedule that fits every patient. The recommended interval may change with cavity risk, gum health, pregnancy, tobacco use, dry mouth, medical conditions, past treatment, and how quickly buildup returns.",
          "Ask what interval is being recommended for you and what the team plans to monitor at the next visit.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Questions about going to the dentist", href: "https://www.mouthhealthy.org/dental-care/questions-about-going-to-the-dentist" },
      { label: "American Dental Association: Oral cancer", href: "https://www.mouthhealthy.org/all-topics-a-z/oral-cancer" },
    ],
  },
  {
    categorySlug: "cleanings-prevention",
    slug: "dental-x-rays",
    title: "Dental X-rays",
    eyebrow: "Imaging decisions",
    heading: "Diagnostic information selected for the question at hand.",
    intro: "Dental X-rays can reveal disease or damage that is not visible during an examination, but the type and timing should be based on individual need.",
    overviewTitle: "Dental X-rays are not a one-size-fits-all routine.",
    overview: [
      "Radiographs can help identify decay between teeth, bone loss, infection around a root, tooth position, developmental changes, and other conditions hidden beneath the visible surfaces. Different image types cover different areas, so the dentist selects the view most likely to affect diagnosis or treatment planning.",
      "Current ADA guidance emphasizes a clinical examination before imaging and recommends using previous diagnostic-quality images when they still answer the question. Fixed schedules such as taking a full series for every new patient or bitewings at the same interval for everyone are not appropriate for every situation.",
    ],
    keyPoints: ["Each exposure should provide a clinical benefit", "Previous images may reduce unnecessary repetition", "Modern technique focuses on the smallest useful exposure"],
    sections: [
      {
        heading: "How imaging is selected",
        bullets: [
          "Your current symptoms and findings from the examination",
          "Age, cavity risk, gum health, and stage of dental development",
          "The location and extent of the area being evaluated",
          "Whether available earlier images remain current and diagnostic",
        ],
      },
      {
        heading: "Updated safety guidance",
        paragraphs: [
          "Dental imaging contributes a small portion of a person’s overall radiation exposure, and practices use positioning, beam restriction, digital receptors, and other dose-reduction methods to limit unnecessary exposure.",
          "ADA guidance updated in 2024 no longer recommends routine thyroid collars or lead aprons for dental imaging because shielding can block the primary beam and lead to repeated images. A practice may still follow state-specific requirements. Ask the team about any safety concern you have before the image is taken.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: X-rays and radiographs", href: "https://www.ada.org/resources/ada-library/oral-health-topics/x-rays-radiographs" },
    ],
  },
  {
    categorySlug: "cleanings-prevention",
    slug: "home-care",
    title: "Home Oral Care",
    eyebrow: "Daily prevention",
    heading: "A realistic routine you can repeat every day.",
    intro: "Home care controls plaque between dental visits and works best when the tools and techniques fit your teeth, gums, dexterity, and existing dental work.",
    overviewTitle: "Consistency matters more than a complicated collection of products.",
    overview: [
      "The core recommendations are straightforward: brush twice a day with fluoride toothpaste, clean between the teeth daily, limit frequent exposure to added sugars, avoid tobacco, and attend dental visits at the interval recommended for you.",
      "The best method for cleaning between teeth may be floss, interdental brushes, a water flosser, or a combination. Braces, bridges, implants, gum recession, limited hand movement, and dry mouth can all change which tools are easiest and most effective.",
    ],
    keyPoints: ["Brush twice daily with fluoride toothpaste", "Clean between the teeth every day", "Choose tools you can use comfortably and consistently"],
    sections: [
      {
        heading: "Build the routine around your needs",
        bullets: [
          "Use a soft-bristled toothbrush that reaches every area without causing discomfort.",
          "Ask for a demonstration if flossing or another interdental method feels difficult.",
          "Select oral-care products with the ADA Seal of Acceptance when available.",
          "Discuss persistent dry mouth, bleeding, sensitivity, or bad breath instead of trying to cover the symptom with rinses alone.",
        ],
      },
      {
        heading: "Where rinses and specialty tools fit",
        paragraphs: [
          "Mouthrinse, prescription fluoride, interdental brushes, tongue cleaners, or powered devices can be useful additions, but they do not automatically replace brushing and cleaning between the teeth. A dentist or hygienist can explain what a particular product is intended to do and whether it matches your risk factors.",
          "Bring the products you use—or a photo of their labels—to a visit if you would like help comparing them.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Oral health recommendations", href: "https://www.mouthhealthy.org/oral-health-recommendations" },
      { label: "American Dental Association: Home oral care", href: "https://www.ada.org/resources/ada-library/oral-health-topics/home-oral-care/" },
    ],
  },
  {
    categorySlug: "cleanings-prevention",
    slug: "how-to-properly-brush-floss",
    title: "How to Brush & Clean Between Your Teeth",
    eyebrow: "Technique guide",
    heading: "Gentle technique reaches more than forceful scrubbing.",
    intro: "Brushing cleans the exposed tooth surfaces while floss or another interdental tool reaches plaque and food a toothbrush cannot remove between teeth.",
    overviewTitle: "Use the right motion in the right place.",
    overview: [
      "Brush twice daily for two minutes with fluoride toothpaste and a soft-bristled brush. Hold the bristles at roughly a 45-degree angle toward the gumline, use short gentle strokes, and clean the outer, inner, and chewing surfaces of every tooth.",
      "Clean between the teeth once each day. Traditional floss works well when it wraps against the side of each tooth rather than snapping straight into the gums. Interdental brushes, pre-threaded flossers, or water flossers may be easier around dental work or for people with limited dexterity.",
    ],
    keyPoints: ["Twice-daily brushing does not replace interdental cleaning", "A soft brush and light pressure protect the gums", "The best interdental tool is one that fits and gets used correctly"],
    sections: [
      {
        heading: "A practical brushing sequence",
        bullets: [
          "Start in the same area each time so no section is skipped.",
          "Aim the bristles toward the gumline and move them in short, gentle strokes.",
          "Brush the cheek side, tongue side, and chewing surface of each tooth.",
          "Tilt the brush vertically for the inside surfaces of the front teeth.",
          "Spit out the toothpaste when finished and follow any fluoride instructions from your dentist.",
        ],
      },
      {
        heading: "A practical flossing sequence",
        bullets: [
          "Guide the floss gently between two teeth without snapping it into the gums.",
          "Curve it into a C shape against one tooth and move it along the side of that tooth.",
          "Repeat against the neighboring tooth before moving to the next space.",
          "Ask about an alternative tool if floss catches, shreds, or is difficult to control.",
        ],
      },
    ],
    sources: [
      { label: "American Dental Association: Brushing your teeth", href: "https://www.mouthhealthy.org/all-topics-a-z/brushing-your-teeth" },
      { label: "American Dental Association: Flossing", href: "https://www.mouthhealthy.org/all-topics-a-z/flossing" },
    ],
  },
] satisfies ProcedureDetail[];

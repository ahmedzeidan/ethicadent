import { serviceImages } from "@/data/site";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  summary: string;
  whoItsFor: string[];
  process: string[];
  benefits: string[];
  aftercare: string;
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry in Chicago",
    shortTitle: "General Dentistry",
    description:
      "Preventive exams, cleanings, fillings, and everyday dental care for families and adults near Belmont Ave in Chicago.",
    image: serviceImages.generalDentistry,
    summary:
      "General dentistry is the foundation of long-term oral health. At Ethicadent, visits are designed to be clear, gentle, and practical, with prevention, diagnosis, and treatment planning handled in one calm setting.",
    whoItsFor: [
      "Patients due for a dental exam or professional cleaning",
      "People with tooth sensitivity, cavities, chipped teeth, or gum concerns",
      "Families looking for a consistent Chicago dental home"
    ],
    process: [
      "Review your health history, dental concerns, and goals for the visit.",
      "Complete a careful exam, cleaning, and diagnostic imaging when appropriate.",
      "Explain findings in plain language and prioritize treatment by urgency.",
      "Create a maintenance plan that supports your daily routine and long-term oral health."
    ],
    benefits: [
      "Earlier detection of cavities, gum disease, and bite problems",
      "A healthier smile with fewer emergency surprises",
      "A clear plan for restorative, cosmetic, or specialty treatment if needed"
    ],
    aftercare:
      "Most preventive visits require no downtime. Keep up with brushing, flossing, and the recall schedule recommended by the dentist.",
    faqs: [
      {
        question: "How often should I see the dentist?",
        answer:
          "Many patients benefit from a checkup and cleaning every six months, but your ideal interval depends on your gum health, cavity risk, and treatment history."
      },
      {
        question: "Do you treat urgent dental concerns?",
        answer:
          "Call the office if you have pain, swelling, a broken tooth, or another urgent issue. The team can help determine the next available visit."
      },
      {
        question: "Can general dentistry include cosmetic goals?",
        answer:
          "Yes. A healthy foundation supports cosmetic treatment, and routine exams are a good time to discuss whitening, bonding, crowns, or Invisalign."
      }
    ]
  },
  {
    slug: "dental-implants",
    title: "Dental Implants in Chicago",
    shortTitle: "Dental Implants",
    description:
      "Dental implant consultations and restorations for replacing missing teeth with stable, natural-looking results.",
    image: serviceImages.dentalImplants,
    summary:
      "Dental implants can replace missing teeth without relying on removable dentures. They are designed to support chewing, preserve smile appearance, and help maintain facial structure when planned carefully.",
    whoItsFor: [
      "Patients missing one or more teeth",
      "People who want a fixed alternative to removable dentures",
      "Patients who need a tooth replacement plan after extraction"
    ],
    process: [
      "Evaluate the missing tooth area, bite, gum health, and medical factors.",
      "Use imaging to understand bone support and plan the safest path forward.",
      "Coordinate implant placement, restoration, and follow-up care.",
      "Restore the implant with a crown, bridge, or supported prosthetic when healing is ready."
    ],
    benefits: [
      "A stable replacement that looks and feels more like a natural tooth",
      "Support for chewing and speaking with confidence",
      "A treatment path that can preserve surrounding teeth when appropriate"
    ],
    aftercare:
      "Implants need excellent home care and routine dental maintenance. Brush, floss or use recommended cleaners, and keep professional follow-up visits.",
    faqs: [
      {
        question: "Are dental implants better than dentures?",
        answer:
          "Implants are often more stable than removable dentures, but the right choice depends on your health, bone support, budget, and goals."
      },
      {
        question: "Will I need 3D imaging?",
        answer:
          "CBCT 3D imaging may be recommended to evaluate bone and anatomy before implant treatment."
      },
      {
        question: "How long does implant treatment take?",
        answer:
          "Timing varies by case. Some patients need extraction, healing, bone grafting, or staged treatment before the final restoration."
      }
    ]
  },
  {
    slug: "invisalign",
    title: "Invisalign Clear Aligners in Chicago",
    shortTitle: "Invisalign",
    description:
      "Clear aligner treatment for patients who want a straighter smile without traditional braces.",
    image: serviceImages.invisalign,
    summary:
      "Invisalign uses a series of clear removable aligners to gradually move teeth. It is often a comfortable option for busy adults and teens who want discreet orthodontic treatment.",
    whoItsFor: [
      "Patients with crowding, spacing, or mild to moderate bite concerns",
      "Adults who want a discreet alternative to metal braces",
      "Patients willing to wear aligners consistently as directed"
    ],
    process: [
      "Begin with a consultation and digital evaluation of your smile and bite.",
      "Create a treatment plan and review the expected movement timeline.",
      "Wear each aligner as directed and remove it for eating and brushing.",
      "Return for progress checks and refinements when needed."
    ],
    benefits: [
      "Clear trays that are less noticeable than brackets and wires",
      "Removable aligners for eating, brushing, and flossing",
      "A guided treatment plan designed around your smile goals"
    ],
    aftercare:
      "After aligner treatment, retainers are typically needed to help maintain the final tooth position.",
    faqs: [
      {
        question: "How many hours a day do I wear Invisalign?",
        answer:
          "Most aligner plans require consistent daily wear, often around 20 to 22 hours, but your dentist will give case-specific instructions."
      },
      {
        question: "Can I eat with aligners in?",
        answer:
          "Aligners are removed for meals and most drinks other than water. Brush before putting them back in whenever possible."
      },
      {
        question: "Is Invisalign right for every bite?",
        answer:
          "No. Some cases need different orthodontic treatment. A consultation helps determine whether clear aligners are a good fit."
      }
    ]
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry in Chicago",
    shortTitle: "Cosmetic Dentistry",
    description:
      "Smile-focused dentistry including veneers, bonding, crowns, bridges, and whitening recommendations.",
    image: serviceImages.cosmeticDentistry,
    summary:
      "Cosmetic dentistry can improve the color, shape, alignment, and overall balance of your smile while protecting the health of your teeth and gums.",
    whoItsFor: [
      "Patients with stained, chipped, worn, misshapen, or uneven teeth",
      "People preparing for a major life event or professional milestone",
      "Patients who want natural-looking improvements rather than an overdone smile"
    ],
    process: [
      "Discuss your goals, timeline, and what you want to change.",
      "Evaluate tooth structure, gum health, bite, and existing restorations.",
      "Compare treatment options such as whitening, bonding, veneers, crowns, or bridges.",
      "Create a phased plan when health, budget, or timing calls for it."
    ],
    benefits: [
      "A smile that feels brighter, balanced, and more confident",
      "Treatment choices that can be conservative or comprehensive",
      "Cosmetic planning grounded in oral health"
    ],
    aftercare:
      "Avoid biting hard objects, maintain good home care, and keep routine visits so cosmetic work stays healthy and polished.",
    faqs: [
      {
        question: "What is the simplest cosmetic dental treatment?",
        answer:
          "Professional whitening or bonding may be simple options depending on your goals and tooth condition."
      },
      {
        question: "Are veneers the only way to change my smile?",
        answer:
          "No. Whitening, bonding, contouring, crowns, Invisalign, or a combination may be appropriate."
      },
      {
        question: "Will cosmetic dentistry look natural?",
        answer:
          "The goal is to design treatment that fits your face, bite, and preferences, with a natural result whenever possible."
      }
    ]
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening in Chicago",
    shortTitle: "Teeth Whitening",
    description:
      "Professional whitening options for patients who want a brighter smile with dentist-guided care.",
    image: serviceImages.teethWhitening,
    summary:
      "Professional teeth whitening can brighten natural tooth enamel more predictably than over-the-counter products, especially when stains come from coffee, tea, wine, or age.",
    whoItsFor: [
      "Patients with healthy teeth and gums who want a brighter smile",
      "People with coffee, tea, wine, tobacco, or food-related staining",
      "Patients planning cosmetic treatment and wanting a brighter baseline"
    ],
    process: [
      "Check for cavities, gum irritation, or restorations that may affect whitening.",
      "Discuss expected shade change and sensitivity risk.",
      "Choose an in-office or dentist-guided whitening approach when appropriate.",
      "Review maintenance habits to keep results looking fresh."
    ],
    benefits: [
      "A brighter smile with professional oversight",
      "A safer plan for patients prone to sensitivity",
      "Guidance on what whitening can and cannot change"
    ],
    aftercare:
      "Avoid heavy staining foods and drinks immediately after whitening if instructed, and use sensitivity products if recommended.",
    faqs: [
      {
        question: "Does whitening work on crowns or veneers?",
        answer:
          "Whitening products brighten natural tooth structure, not porcelain, crowns, veneers, or fillings."
      },
      {
        question: "Will whitening make my teeth sensitive?",
        answer:
          "Some temporary sensitivity is possible. Dentist-guided care helps reduce risk and manage symptoms."
      },
      {
        question: "How long do whitening results last?",
        answer:
          "Results vary with diet and habits. Maintenance whitening and routine cleanings can help extend the effect."
      }
    ]
  },
  {
    slug: "root-canal-therapy",
    title: "Root Canal Therapy in Chicago",
    shortTitle: "Root Canal Therapy",
    description:
      "Root canal treatment for dental pain, infection, and saving natural teeth whenever possible.",
    image: serviceImages.rootCanalTherapy,
    summary:
      "Root canal therapy removes infected or inflamed tissue from inside a tooth, relieves pain, and helps preserve the natural tooth structure.",
    whoItsFor: [
      "Patients with lingering tooth pain or sensitivity",
      "People with swelling, infection, or deep decay",
      "Patients trying to save a tooth instead of extracting it"
    ],
    process: [
      "Diagnose the tooth with an exam and imaging.",
      "Numb the area and access the inside of the tooth.",
      "Clean, shape, and seal the root canal system.",
      "Protect the tooth with a final restoration, often a crown when needed."
    ],
    benefits: [
      "Pain relief while preserving the natural tooth",
      "Treatment of infection before it spreads",
      "A path that can avoid extraction and more complex replacement"
    ],
    aftercare:
      "Mild soreness can occur after treatment. Follow medication instructions, avoid chewing hard foods on the tooth until restored, and complete the final restoration.",
    faqs: [
      {
        question: "Is root canal therapy painful?",
        answer:
          "Modern root canal therapy is performed with local anesthesia. Many patients feel relief because the source of infection or inflammation is treated."
      },
      {
        question: "Why do I need a crown after a root canal?",
        answer:
          "Back teeth and heavily damaged teeth often need crowns to protect them from fracture after treatment."
      },
      {
        question: "What happens if I delay treatment?",
        answer:
          "Untreated infection can worsen, cause swelling, and make saving the tooth more difficult."
      }
    ]
  },
  {
    slug: "wisdom-teeth-extraction",
    title: "Wisdom Teeth Extraction in Chicago",
    shortTitle: "Wisdom Teeth Extraction",
    description:
      "Evaluation and removal planning for wisdom teeth causing pain, crowding, infection risk, or eruption problems.",
    image: serviceImages.wisdomTeethExtraction,
    summary:
      "Wisdom teeth can become impacted, painful, or hard to clean. A careful evaluation helps determine whether monitoring or removal is the right path.",
    whoItsFor: [
      "Patients with pain or swelling behind the back molars",
      "People whose wisdom teeth are partially erupted or hard to clean",
      "Patients told their third molars may affect other dental treatment"
    ],
    process: [
      "Review symptoms, medical history, and previous imaging.",
      "Use diagnostic imaging to understand tooth position and nearby anatomy.",
      "Discuss removal timing, comfort options, and recovery expectations.",
      "Provide post-operative instructions for healing and swelling control."
    ],
    benefits: [
      "Reduced risk of recurring infection around partially erupted teeth",
      "Relief from wisdom tooth pain or pressure",
      "A cleaner, easier-to-maintain back molar area"
    ],
    aftercare:
      "Follow instructions for gauze, diet, rest, oral hygiene, and avoiding straws or smoking during early healing.",
    faqs: [
      {
        question: "Do all wisdom teeth need to be removed?",
        answer:
          "No. Some wisdom teeth can be monitored if they are healthy, fully erupted, easy to clean, and not causing problems."
      },
      {
        question: "How long is recovery?",
        answer:
          "Many patients resume normal routines within a few days, but healing time depends on the complexity of removal."
      },
      {
        question: "Will imaging be needed?",
        answer:
          "Imaging is commonly used to evaluate tooth position and nearby anatomy before recommending treatment."
      }
    ]
  },
  {
    slug: "crown-lengthening",
    title: "Crown Lengthening in Chicago",
    shortTitle: "Crown Lengthening",
    description:
      "Gum and tooth structure procedures that support restorative treatment or improve the appearance of a gummy smile.",
    image: serviceImages.crownLengthening,
    summary:
      "Crown lengthening adjusts gum tissue and sometimes supporting bone to expose more tooth structure. It can help restore damaged teeth or improve smile proportions.",
    whoItsFor: [
      "Patients who need more tooth structure exposed for a crown or filling",
      "People with uneven gumlines or a gummy smile",
      "Patients planning restorative or cosmetic dental work"
    ],
    process: [
      "Evaluate gum levels, tooth structure, bite, and restorative needs.",
      "Plan the amount of tissue adjustment required.",
      "Complete the procedure with local anesthesia and careful contouring.",
      "Allow healing before final restorative or cosmetic work when needed."
    ],
    benefits: [
      "Improved access for strong restorations",
      "More balanced gumline appearance",
      "Better long-term fit for crowns or fillings in selected cases"
    ],
    aftercare:
      "Keep the area clean, follow post-operative instructions, and return for follow-up before final restorative work.",
    faqs: [
      {
        question: "Is crown lengthening cosmetic or restorative?",
        answer:
          "It can be either. Some patients need it for a crown or filling, while others choose it to improve gumline symmetry."
      },
      {
        question: "How soon can I get the final crown?",
        answer:
          "Timing depends on healing and the treatment area. The dentist will recommend the right interval."
      },
      {
        question: "Will my gums look different?",
        answer:
          "Yes, the goal is to expose more tooth structure and create a healthier or more balanced gumline."
      }
    ]
  },
  {
    slug: "cbct-3d-imaging",
    title: "CBCT 3D Dental Imaging in Chicago",
    shortTitle: "CBCT 3D Imaging",
    description:
      "Advanced 3D imaging used to support implant planning, oral surgery, endodontics, and precise diagnosis.",
    image: serviceImages.cbct3dImaging,
    summary:
      "CBCT imaging gives a three-dimensional view of teeth, bone, roots, and nearby anatomy. It helps the team plan more accurately when standard two-dimensional images are not enough.",
    whoItsFor: [
      "Patients planning dental implants or oral surgery",
      "People with complex root, bone, or infection concerns",
      "Patients who need a clearer diagnosis before treatment"
    ],
    process: [
      "Review why 3D imaging may be helpful for your case.",
      "Capture the scan efficiently with attention to patient comfort.",
      "Use the 3D view to evaluate anatomy and plan treatment.",
      "Discuss findings and next steps in clear language."
    ],
    benefits: [
      "More complete view of bone, roots, and nearby structures",
      "Improved planning for implants, surgery, and complex treatment",
      "Better-informed decisions before starting care"
    ],
    aftercare:
      "There is no recovery period after imaging. The scan is used to guide diagnosis and treatment planning.",
    faqs: [
      {
        question: "What does CBCT stand for?",
        answer:
          "CBCT stands for cone beam computed tomography, a dental imaging method that creates three-dimensional views."
      },
      {
        question: "Is CBCT used for every patient?",
        answer:
          "No. It is recommended when the added diagnostic information is useful for treatment planning."
      },
      {
        question: "Why is 3D imaging helpful for implants?",
        answer:
          "It helps evaluate bone volume, tooth position, and nearby anatomy before implant planning."
      }
    ]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

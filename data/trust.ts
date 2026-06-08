export type TrustSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
};

export type TrustPage = {
  slug: string;
  title: string;
  metaDescription: string;
  lead: string;
  sections: TrustSection[];
};

export const privacyPolicyPage: TrustPage = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  metaDescription:
    "Learn how Ethicadent Dental Studio handles information on this website. We do not collect patient health information through online forms.",
  lead:
    "This policy explains what information this website does and does not collect, and how to contact the office safely about dental care.",
  sections: [
    {
      heading: "What this website does not do",
      paragraphs: [
        "Ethicadent.com is an informational website. It does not include appointment request forms, patient portals, or other tools that collect medical history, symptoms, insurance details, or other protected health information online."
      ],
      list: [
        "No online forms that store patient data",
        "No patient accounts or login areas",
        "No custom API endpoints that receive health information"
      ]
    },
    {
      heading: "How to contact the office",
      paragraphs: [
        "For scheduling, billing questions, or dental concerns, call the office directly. Email may be used for general, non-medical office communication only.",
        "Please do not send medical details, insurance numbers, photos of dental conditions, or other sensitive health information by email."
      ]
    },
    {
      heading: "Information collected automatically",
      paragraphs: [
        "Like most websites, basic technical information may be processed when you visit pages, such as browser type, device type, and pages viewed. If analytics tools are added in the future, they will be configured to track only non-medical, privacy-safe events such as phone or directions clicks.",
        "This site does not sell personal information."
      ]
    },
    {
      heading: "Third-party services",
      paragraphs: [
        "Some pages may include embedded content or links to third-party services, such as Google Maps for directions or links to social media profiles. Those services have their own privacy policies and data practices.",
        "When you leave this website or interact with embedded content, the third party's terms and privacy policies apply."
      ]
    },
    {
      heading: "Questions about this policy",
      paragraphs: [
        "If you have questions about this privacy policy or how to contact the office safely, call Ethicadent or use email only for general, non-medical inquiries."
      ]
    }
  ]
};

export const newPatientsPage: TrustPage = {
  slug: "new-patients",
  title: "New Patient Information",
  metaDescription:
    "What to expect at your first visit to Ethicadent Dental Studio on Belmont Ave in Chicago, including what to bring, parking, and transit tips.",
  lead:
    "Welcome to Ethicadent. Here is practical information to help your first visit go smoothly at our Chicago office on Belmont Ave.",
  sections: [
    {
      heading: "Welcome to Ethicadent",
      paragraphs: [
        "Whether you are due for a routine checkup or looking for a new dental home in Chicago, the team at Ethicadent focuses on clear communication and gentle care. Call the office to schedule your first visit."
      ]
    },
    {
      heading: "What to bring",
      list: [
        "A valid photo ID",
        "Your dental insurance card, if you have coverage",
        "A list of current medications",
        "Prior dental records or recent X-rays, if available",
        "Payment method for any co-pay or self-pay balance due at the visit"
      ]
    },
    {
      heading: "Your first visit",
      paragraphs: [
        "Every patient is different, but a typical new patient appointment includes the following steps:"
      ],
      list: [
        "Check-in and review of your contact and insurance information",
        "Discussion of your dental concerns, goals, and health history with the team",
        "A careful exam and professional cleaning when appropriate",
        "Diagnostic imaging if needed to support an accurate assessment",
        "A clear explanation of findings and recommended next steps"
      ]
    },
    {
      heading: "Parking and transit",
      paragraphs: [
        "Ethicadent is located at 6418 W Belmont Ave in Chicago. Street parking is often available in the surrounding Belmont area, though availability varies by day and time.",
        "Public transit may be convenient depending on where you are coming from. The CTA Blue Line and several bus routes serve the wider Belmont corridor. Use your preferred maps app for the most current route options to the office."
      ]
    },
    {
      heading: "Before you arrive",
      list: [
        "Arrive a few minutes early if it is your first visit",
        "Call the office if you are running late or need to reschedule",
        "Do not send medical details by email — call the office for clinical questions"
      ]
    }
  ]
};

export const insurancePaymentPage: TrustPage = {
  slug: "insurance-and-payment",
  title: "Insurance and Payment",
  metaDescription:
    "Learn how insurance and payment work at Ethicadent Dental Studio in Chicago. Call the office to verify your dental plan before your visit.",
  lead:
    "Ethicadent accepts many dental insurance plans and offers straightforward payment options. Call the office to confirm your coverage before your appointment.",
  sections: [
    {
      heading: "Verify your insurance before your visit",
      paragraphs: [
        "Dental benefits vary by employer, plan type, and individual coverage. The easiest way to avoid surprises is to call Ethicadent with your insurance information before your appointment.",
        "The front desk team can help confirm whether your plan is accepted and explain what information to bring to your visit."
      ]
    },
    {
      heading: "Insurance coverage",
      paragraphs: [
        "Ethicadent works with many dental insurance plans. Because plan details change, we do not publish a fixed carrier list on this website.",
        "If you are unsure whether your plan is in network, call the office. Have your insurance card available when you call."
      ],
      list: [
        "Bring your current insurance card to every visit",
        "Coverage for specific treatments depends on your plan",
        "Pre-authorization or estimates may be available for certain procedures — ask when you call"
      ]
    },
    {
      heading: "Payment options",
      paragraphs: [
        "Payment is handled at the office. This website does not process payments or store billing information."
      ],
      list: [
        "Major credit and debit cards",
        "Cash and check, where accepted by the office",
        "Patient portions due according to your plan and treatment"
      ]
    },
    {
      heading: "Estimates and billing questions",
      paragraphs: [
        "If you need a treatment estimate or have a question about a statement, call the office directly. For privacy, do not email insurance numbers, account details, or other sensitive billing information."
      ]
    },
    {
      heading: "No insurance?",
      paragraphs: [
        "If you do not have dental insurance, call Ethicadent to discuss self-pay options and scheduling. The team can explain what to expect before treatment begins."
      ]
    }
  ]
};

export const trustPages = [privacyPolicyPage, newPatientsPage, insurancePaymentPage];

import { imageAssets } from "@/data/site";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  sections: { heading: string; body: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-a-chicago-dentist",
    title: "How to Choose a Dentist in Chicago",
    description:
      "A practical guide for comparing dental offices, technology, communication, and privacy when choosing a Chicago dentist.",
    image: imageAssets.googleMaps.waitingLounge,
    date: "2026-06-07",
    sections: [
      {
        heading: "Start with fit, not only location",
        body: [
          "A convenient dental office matters, but the right fit also includes communication style, treatment philosophy, technology, and whether the team makes you feel heard.",
          "For patients near Belmont Ave, Ethicadent combines a local Chicago location with a gentle, modern approach to routine and advanced dental care."
        ]
      },
      {
        heading: "Look for clear treatment planning",
        body: [
          "A strong dental visit should leave you understanding what is urgent, what can be monitored, and what options exist. Clear sequencing helps patients make confident decisions without feeling rushed.",
          "Ask how the office documents findings, explains images, and prioritizes treatment."
        ]
      },
      {
        heading: "Notice the privacy posture",
        body: [
          "A dental website should not ask for sensitive medical details unless the full technology stack has been reviewed for HIPAA needs.",
          "Ethicadent's v1 web experience intentionally uses call-only appointment CTAs so patients can speak directly with the office."
        ]
      }
    ]
  },
  {
    slug: "what-to-expect-at-your-first-visit",
    title: "What to Expect at Your First Ethicadent Visit",
    description:
      "Learn how a first dental visit usually works, from health history and imaging to treatment planning and follow-up.",
    image: imageAssets.googleMaps.consultationCare,
    date: "2026-06-07",
    sections: [
      {
        heading: "A conversation comes first",
        body: [
          "Your first visit is an opportunity to share dental concerns, goals, past experiences, and any comfort needs. This helps the team understand the person behind the smile.",
          "If you have pain, swelling, or a broken tooth, call the office so the team can guide you on timing."
        ]
      },
      {
        heading: "Exam, imaging, and priorities",
        body: [
          "The dentist evaluates teeth, gums, bite, restorations, and any symptoms. Imaging may be recommended when it helps diagnose decay, bone support, infection, or treatment needs.",
          "The goal is to separate urgent care from preventive maintenance and elective improvements."
        ]
      },
      {
        heading: "A plan you can understand",
        body: [
          "Good treatment planning should be specific and easy to follow. Patients should know what each recommendation addresses, why timing matters, and what alternatives may exist.",
          "Ethicadent's approach emphasizes high-quality care in a compassionate environment."
        ]
      }
    ]
  },
  {
    slug: "dental-implant-planning-with-3d-imaging",
    title: "Why 3D Imaging Matters for Dental Implant Planning",
    description:
      "CBCT 3D imaging can help dentists evaluate bone, anatomy, and treatment options before dental implant care.",
    image: imageAssets.googleMaps.cbctScanSmile,
    date: "2026-06-07",
    sections: [
      {
        heading: "Implant care depends on anatomy",
        body: [
          "Dental implants need healthy planning around bone support, tooth position, nerves, sinuses, and the final restoration. A two-dimensional image may not always show enough detail.",
          "CBCT imaging gives a three-dimensional view that can make planning more precise."
        ]
      },
      {
        heading: "Better information before treatment",
        body: [
          "With 3D imaging, the dentist can evaluate whether bone support appears favorable, whether additional procedures may be needed, and how to plan the safest restoration path.",
          "This does not mean every patient needs CBCT. It is used when the additional information helps the treatment decision."
        ]
      },
      {
        heading: "Useful beyond implants",
        body: [
          "CBCT may also support oral surgery, complex root canal evaluation, and diagnosis when standard images are limited.",
          "The imaging recommendation should always be connected to a clear clinical reason."
        ]
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

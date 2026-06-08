export type Review = {
  author: string;
  rating: number;
  text: string;
  source: "Google";
};

export const googleReviewStats = {
  rating: 4.9,
  count: 145,
  href: "https://maps.app.goo.gl/TrHnCdovvuRHpPWR9"
};

export const featuredReviews: Review[] = [
  {
    author: "Elif Asena Izmirli",
    rating: 5,
    source: "Google",
    text: "If you have a fear of the dentist, you can forget all your worries here. Dr. Helin and her assistant, Ebru, are wonderful at helping their patients with their warm smiles and gentle approach. The clinic is also very clean, so you can feel completely safe."
  },
  {
    author: "Rewan Zagros",
    rating: 5,
    source: "Google",
    text: "I have been a patient of Dr. Derya for six years. She is incredibly detail-oriented and always advises me on necessary precautions. The office keeps me updated, sends reminders for check-ups, and ensures my dental health is well-maintained."
  },
  {
    author: "Ugur Akcora",
    rating: 5,
    source: "Google",
    text: "Staff is so kind. Dr. Derya is knowledgeable and helpful. She asked me plenty of questions in order to understand what my issues are. I will go to her office again to get care for my teeth. I recommend it to everybody!"
  },
  {
    author: "Musti Durma",
    rating: 5,
    source: "Google",
    text: "I was impressed from the minute I walked into the office. The front desk team was helpful, and the office had a very warm and welcoming environment. Dr. Yildiz was really friendly and patient, and she answered all of my questions. I left feeling safe and confident with my treatment plan."
  },
  {
    author: "Quaresma Ricardo",
    rating: 5,
    source: "Google",
    text: "Everyone in this office is exceptional — the reception, dental assistants, and especially Doctor Yildiz. Her empathy and skill will make her the only dentist my mother would ever visit. We are so grateful to have found this practice."
  },
  {
    author: "Muhammed Aslan",
    rating: 5,
    source: "Google",
    text: "I had a great experience during my visit. The staff was kind, and the treatment was smooth and comfortable. Highly satisfied with the service!"
  }
];

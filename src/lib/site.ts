export const site = {
  name: "Nadji & Cherbane",
  monogram: "N&C",
};

// Set NEXT_PUBLIC_CONTACT_EMAIL in .env.local to turn Akram's "Contact" into a mailto link.
const akramEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "";

export const people = {
  fares: {
    name: "Fares Nadji",
    initials: "FN",
    email: "fares.nadji@gmail.com",
    github: "https://github.com/fares-automation",
    linkedin: "https://www.linkedin.com/in/fares-nadji",
  },
  akram: {
    name: "Akram Cherbane",
    initials: "AC",
    email: akramEmail,
    github: "https://github.com/21Akii",
    linkedin: "",
  },
} as const;

export type Person = keyof typeof people;

// Akram's contact falls back to GitHub until his email is set.
export const akramContact = akramEmail
  ? { href: `mailto:${akramEmail}`, external: false }
  : { href: people.akram.github, external: true };

// The duo's main "Contact us" goes to the contact section, which offers both people.
export const contactHref = "#contact";

export const repos = {
  mamba: "https://github.com/fares-automation/Mamba-TransUNet",
  automations: "https://github.com/fares-automation/AI-Workflow-Automations",
  ddos: "https://github.com/fares-automation/AI-DDos-Mitigation-System",
};

export const certifications = [
  { name: "Python for Data Science & AI", score: 96 },
  { name: "AI Capstone Project with Deep Learning", score: 94 },
  { name: "Deep Learning with Keras & TensorFlow", score: 90 },
  { name: "Introduction to Deep Learning & Neural Networks", score: 88 },
  { name: "Developing AI Applications with Flask", score: 84 },
  { name: "Machine Learning with Python", score: 83 },
];

export const site = {
  name: "Akram Cherbane",
  role: "Full-stack & AI developer",
  github: "https://github.com/21Akii",
  // Set NEXT_PUBLIC_CONTACT_EMAIL in .env.local to turn "Contact me" into a mailto link.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
};

export const contactHref = site.email ? `mailto:${site.email}` : site.github;
export const contactExternal = !site.email;

export const certifications = [
  { name: "Python for Data Science & AI", score: 96 },
  { name: "AI Capstone Project with Deep Learning", score: 94 },
  { name: "Deep Learning with Keras & TensorFlow", score: 90 },
  { name: "Introduction to Deep Learning & Neural Networks", score: 88 },
  { name: "Developing AI Applications with Flask", score: 84 },
  { name: "Machine Learning with Python", score: 83 },
];

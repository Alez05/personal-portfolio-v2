import { TAboutMe } from "../../components";

export const aboutHero: TAboutMe = {
  preTitle: "Getting to know me",

  name: "Alexandru Cercel",
  role: "Fullstack Developer",

  description:
    "Hey, I’m Alexandru Cercel a fullstack developer focused on building clean, scalable, and user-focused web applications.I work across the full stack, from structuring frontend architecture and crafting smooth user experiences to designing APIs and handling production-ready deployments. I care deeply about code quality, performance, and building systems that stay maintainable long after launch.My approach is practical and detail-oriented: clear structure, predictable behavior, and thoughtful UX decisions over unnecessary complexity.",

  currentFocus:
    "refining frontend architecture, improving UX micro-interactions, and shipping polished, production-ready projects with confidence.",

  downloadLink: "/cv/Alex-CV.pdf",
  seeMore: "/projects",

  contact: {
    location: "Netherlands",
    email: "alex@email.com",
    phone: "+31 6 1234 5678",
  },

  socials: [
    {
      platform: "github",
      url: "https://github.com/yourusername",
      icon: "fa-brands fa-github",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/yourusername",
      icon: "fa-brands fa-linkedin",
    },
    {
      platform: "instagram",
      url: "https://instagram.com/yourusername",
      icon: "fa-brands fa-instagram",
    },
    {
      platform: "email",
      url: "mailto: cercel.alexandru007@gmail.com",
      icon: "fa-solid fa-envelope",
    },
  ],

  profileImage: {
    src: "/image/profileimg.jpg",
    alt: "Alex profile picture",
  },
};

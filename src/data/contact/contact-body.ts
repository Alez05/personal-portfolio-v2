// data/contact-body-data.ts
import { TContactBody } from "../../components";

export const contactBody: TContactBody = {
  intro:
    "Over the past years I have worked on projects that put people at the center, from building interfaces that reach large audiences to crafting tools that help non technical users achieve real results. I enjoy turning complex ideas into clear, usable products.",

  mid: "Today I work both as a freelance developer and as a team member in full time roles. Whether you need someone to quickly bring a concept to life or to strengthen your development team, I bring clean code, thoughtful design, and a focus on delivering lasting value.",

  sections: [
    {
      title: "What I Can Do",
      content:
        "From front end interfaces that feel intuitive and smooth, to back end systems that are robust and scalable, I can cover the entire stack. I use modern technologies, follow best practices, and keep accessibility in mind at every step.",
    },
    {
      title: "Why Work With Me",
      content:
        "I am committed, detail oriented, and proactive in finding solutions. My approach is user focused but also mindful of technical scalability, so the product not only works today but also grows with your needs.",
    },
  ],

  outro: "If this sounds like something you’re interested in, ",

  links: {
    form: {
      label: "fill out the form below",
      href: "#contact-form",
    },
    email: {
      label: "send me an email",
      address: "alex@example.com",
    },
  },
};

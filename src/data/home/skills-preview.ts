import type { TSkillsPreview } from "../../components/home";

export const skillsPreview: TSkillsPreview = {
  title: "Technical Skills",
  description:
    "A snapshot of the technologies and engineering practices I use to design, build, and ship modern web applications.",

  cards: [
    {
      title: "Web Development",
      icon: "fa-solid fa-laptop-code",
      subtitle: "Modern, responsive front-end systems",
      points: [
        "React, Next.js, TypeScript",
        "Accessible & performance-focused UI",
        "Responsive layouts & component-driven architecture"
      ]
    },
    {
      title: "Backend & APIs",
      icon: "fa-solid fa-server",
      subtitle: "Reliable data and scalable services",
      points: [
        "Node.js & RESTful APIs",
        "PostgreSQL, MongoDB & data modeling",
        "Authentication, security & server-side logic"
      ]
    },
    {
      title: "Engineering Practices",
      icon: "fa-solid fa-diagram-project",
      subtitle: "Clean architecture and maintainable code",
      points: [
        "Modular design & reusable components",
        "Git workflows, CI/CD & deployments",
        "Testing, debugging & optimization"
      ]
    }
  ],

  cta: {
    text: "Want to see a full breakdown of my technical stack?",
    label: "View All Skills",
    link: "/about#skills"
  }
};

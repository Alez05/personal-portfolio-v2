import { TSkillsPreview } from "../../components/home";

export const skillsPreview: TSkillsPreview = {
  title: "Core Technologies",
  description: "Technologies I use to build modern web applications",

  skills: [
    { name: "JavaScript", icon: "/icon/js.svg" },
    { name: "TypeScript", icon: "/icon/typescript.svg" },
    { name: "React", icon: "/icon/react.svg" },
    { name: "Next.js", icon: "/icon/nextdotjs.svg" },
    { name: "Node.js", icon: "/icon/node-js.svg" },
    { name: "Docker", icon: "/icon/docker.svg" },
  ],

  cta: {
    text: "Interested in more?",
    label: "Explore All Skills",
    link: "/about#skills",
  },
};

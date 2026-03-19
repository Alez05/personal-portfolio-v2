import { THomePreview } from "../../components";

export const homePreview: THomePreview = {
  eyebrow: "Available for work",

  name: "Alexandru Cercel",
  role: "Fullstack Web Developer",

  tagline:
    "Empower your business with state-of-the-art digital solutions, such as websites, web applications, and digital marketing, with a focus on your specific needs, including web design, web development, and more.",

  contacts: [
    {
      type: "location",
      value: "London / Amsterdam",
      icon: "fa-solid fa-location-dot",
    },
    {
      type: "email",
      value: "cercel.alexandru436@gmail.com",
      icon: "fa-solid fa-envelope",
      action: { type: "copy" },
    },
    {
      type: "phone",
      value: "+44 7770282405",
      icon: "fa-solid fa-phone",
      action: { type: "copy" },
    },
  ],

  visuals: [
    { label: "React", icon: "fa-brands fa-react" },
    { label: "Next.js", icon: "fa-solid fa-n" },
    { label: "TypeScript", icon: "fa-solid fa-code" },
    { label: "Node.js", icon: "fa-brands fa-node-js" },
  ],

  ctas: {
    primary: {
      label: "About Me",
      href: "/about",
      variant: "primary",
    },
    secondary: {
      label: "Download CV",
      href: "/cv.pdf",
      variant: "secondary",
      download: true,
    },
  },
};

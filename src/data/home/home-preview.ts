import { THomePreview } from "../../components";

export const homePreview: THomePreview = {
  name: "Alexandru Cercel",
  role: "Fullstack Web Developer",
  text: "I’m a fullstack developer with a strong passion for building performant, scalable, and user-friendly applications. I enjoy turning ideas into reliable digital products, focusing on clean code, thoughtful architecture, and smooth user experiences.",

  profile: "/image/pixelrobot.png",

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
    },
    {
      type: "phone",
      value: "+44 7770282405",
      icon: "fa-solid fa-phone",
    },
  ],

  ctas: {
    primary: {
      label: "About Me",
      link: "/about",
    },
    secondary: {
      label: "Download CV",
      link: "/cv.pdf",
    },
  },
};

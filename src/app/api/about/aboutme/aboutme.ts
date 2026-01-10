import { TAboutMe } from "../../../../components";

export const aboutMeData: TAboutMe = {
  name: "Alexandru Cercel",
  role: "Fullstack Web Developer",
  text: "I’m a fullstack developer with a strong passion for building performant, scalable, and user-friendly applications.",
  location: "London / Amsterdam",
  email: "cercel.alexandru436@gmail.com",
  phone: "+44 7770282405",
  aboutLink: "#",
  downloadLink: "#",

  profileImage: {
    src: "/image/profile.png",
    alt: "Alexandru Cercel Profile Picture",
  },

  socials: [
    {
      platform: "github",
      url: "https://github.com/alexandru",
      icon: "fa-brands fa-github",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/alexandru",
      icon: "fa-brands fa-linkedin",
    },
    {
      platform: "facebook",
      url: "https://facebook.com/alexandru",
      icon: "fa-brands fa-facebook",
    },
    {
      platform: "instagram",
      url: "https://instagram.com/alexandru",
      icon: "fa-brands fa-instagram",
    },
  ],

  locationIcon: "fa-solid fa-location-dot",
  emailIcon: "fa-solid fa-envelope",
  phoneIcon: "fa-solid fa-phone",
};

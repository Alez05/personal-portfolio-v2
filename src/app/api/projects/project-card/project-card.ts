import type { TProjectCard } from "../../../../components";

export const projectsCardData: TProjectCard[] = [
  {
    name: "E-Commerce Store",
    image: "/image/contact.png",
    domain: "E-commerce",
    description: "A scalable store built with Next.js and Stripe integration.",
    cta: [
      {
        label: "View Project",
        link: "#",
        icon: "fa-solid fa-arrow-up-right-from-square"
      },
      {
        label: "View Code",
        link: "#",
        icon: "fa-brands fa-github"
      },
      {
        label: "Case Study",
        link: "/projects/e-commerce-store",
        icon: "fa-solid fa-book-open"
      }
    ],
    tools: [
      { label: "Next.js", icon: "/icon/next.svg" },
      { label: "Stripe", icon: "/icon/stripe.svg" },
      { label: "Tailwind", icon: "/icon/tailwind.svg" }
    ]
  },
  {
    name: "Business Website",
    image: "/image/profile.png",
    domain: "Corporate",
    description: "A clean responsive site designed for small businesses.",
    cta: [
      {
        label: "View Project",
        link: "#",
        icon: "fa-solid fa-arrow-up-right-from-square"
      },
      {
        label: "View Code",
        link: "#",
        icon: "fa-brands fa-github"
      },
      {
        label: "Case Study",
        link: "/projects/business-website",
        icon: "fa-solid fa-book-open"
      }
    ],
    tools: [
      { label: "React", icon: "/icon/react.svg" },
      { label: "TypeScript", icon: "/icon/ts.svg" }
    ]
  },
  {
    name: "Admin Dashboard",
    image: "/image/profile.png",
    domain: "Real-time App",
    description: "Live metrics and analytics with real-time updates.",
    cta: [
      {
        label: "View Project",
        link: "#",
        icon: "fa-solid fa-arrow-up-right-from-square"
      },
      {
        label: "View Code",
        link: "#",
        icon: "fa-brands fa-github"
      },
      {
        label: "Case Study",
        link: "/projects/admin-dashboard",
        icon: "fa-solid fa-book-open"
      }
    ],
    tools: [
      { label: "Vue", icon: "/icon/vue.svg" },
      { label: "Firebase", icon: "/icon/firebase.svg" }
    ]
  },
  {
    name: "Portfolio Website",
    image: "/image/profile.png",
    domain: "Personal",
    description: "A personal portfolio showcasing design and dev projects.",
    cta: [
      {
        label: "View Project",
        link: "#",
        icon: "fa-solid fa-arrow-up-right-from-square"
      },
      {
        label: "View Code",
        link: "#",
        icon: "fa-brands fa-github"
      },
      {
        label: "Case Study",
        link: "/projects/portfolio-website",
        icon: "fa-solid fa-book-open"
      }
    ],
    tools: [
      { label: "Next.js", icon: "/icon/next.svg" },
      { label: "Tailwind", icon: "/icon/tailwind.svg" }
    ]
  }
];

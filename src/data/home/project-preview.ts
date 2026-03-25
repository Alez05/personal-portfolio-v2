import { TProjectPreview } from "../../components/home";

export const projectPreview: TProjectPreview = {
  title: "Selected Works /",
  description:
    "Get inspired by completed projects: from sleek business websites to advanced web applications.",
  label: "(Projects)",

  cta: [
    {
      href: "/video/Download.mp4",
      label: "Watch All",
    },
  ],

  videos: [
    {
      video: "/video/travel-plan-go.mp4",
      name: "Travel Plan & Go",
      field: "Travel Agency Platform",
      year: "2025",
      tags: ["Next.js", "Tailwind", "Map APIs"],
    },
    {
      video: "/video/construction-site.mp4",
      name: "Construction Website",
      field: "Business Website",
      year: "2024",
      tags: ["React", "SCSS", "GSAP"],
    },
    {
      video: "/video/taxi-booking.mp4",
      name: "Taxi Booking Platform",
      field: "On-Demand Service Platform",
      year: "2025",
      tags: ["Next.js", "Prisma", "Stripe"],
    },
  ],
};

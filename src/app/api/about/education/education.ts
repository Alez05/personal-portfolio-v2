import { TEducation } from "../../../../components";

export const educationData: TEducation[] = [
  {
    id: "le-wagon",
    institution: {
      name: "Le Wagon",
      emblem: "/image/lewagon.svg",
      location: { city: "London", country: "United Kingdom" },
    },
    credential: {
      title: "Full-Stack Web Development (Certificate)",
      level: "bootcamp",
    },
    program: {
      specialization: "Fullstack Web Development",
    },
    timeline: {
      startDate: "Mar 2025",
      endDate: "Jun 2025",
    },
    description:
      "Le Wagon – Full-Stack Web Development Bootcamp (12 Weeks). A hands-on, intense program where I learned by building real projects.",
    sections: [
      {
        title: "Highlights",
        items: [
          "Gained confidence with Ruby and Rails, understanding MVC in real projects",
          "Worked with relational databases to build data-driven apps",
          "Built out UIs using HTML, CSS, SASS, and modern JavaScript (ES6)",
          "Picked up solid UX/UI design skills and learned prototyping/iteration",
          "End-to-end product development: back-end logic to front-end polish",
        ],
      },
      {
        title: "Technologies Learned",
        items: [
          "Ruby",
          "Ruby on Rails",
          "StimulusJS",
          "JavaScript (ES6+)",
          "HTML5",
          "CSS3",
          "SASS",
          "SQL/PostgreSQL",
        ],
      },
      {
        title: "Coursework",
        items: [
          "MVC architecture and OOP in Ruby",
          "Front-end JS frameworks basics",
          "Database modeling and queries",
          "RESTful APIs integration",
          "Version control with Git",
        ],
      },
    ],
  },
    {
    id: "axiopolis-hs",
    institution: {
      name: "Liceul Tehnologic Axiopolis",
      emblem: "/image/school.jpeg",
      location: { country: "Romania" },
    },
    credential: {
      title: "IT Technician (High School Diploma & Bacalaureat)",
      level: "highschool",
    },
    program: {
      specialization: "IT Technician",
    },
    timeline: {
      startDate: "Sep 2015",
      endDate: "Jul 2019",
    },
    description:
      "Completed a 4-year IT-focused high school program, graduating with the Bacalaureat diploma. The curriculum combined technical IT skills with general academic education.",
    sections: [
      {
        title: "Focus Areas",
        items: [
          "Foundations of computer systems and networks",
          "Introductory programming concepts",
          "Basic electronics and troubleshooting",
          "Database fundamentals",
          "AutoCAD (technical design reference)",
        ],
      },
    ],
  },
];

// hobbies-data.ts
import type { THobbies } from "../../../../components";

export const hobbiesData: THobbies[] = [
  {
    category: "Manga",
    categoryIcon: "fa-solid fa-book",
    description:
      "Capturing authentic moments and experimenting with visual storytelling",
  },
  {
    category: "Gaming",
    categoryIcon: "fa-solid fa-gamepad",
    description:
      "Playing strategy & simulation games that sharpen problem-solving and decision-making skills",
  },
  {
    category: "Travel",
    categoryIcon: "fa-solid fa-plane",
    description:
      "Exploring new places, meeting diverse people, and gaining global perspectives",
  },
  {
    category: "Books",
    categoryIcon: "fa-solid fa-book",
    description:
      "AI research papers, technical books, and thought-provoking sci-fi novels",
    books: [
      {
        status: "Currently Reading",
        booktitle: "Empati",
        bookAuthor: "Adam Fawer",
        bookImage: "/image/empati.jpg", // placeholder path
      },
      {
        status: "Currently Reading",
        booktitle: "Lolita",
        bookAuthor: "Vladimir Nabokov",
        bookImage: "/image/lolita.jpg", // placeholder path
      },
    ],
  },
];

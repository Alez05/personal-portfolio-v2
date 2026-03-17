import { TBlogHl } from "../../../../components";

export const bloghlData: TBlogHl = {
  title: 'Blogs',
  description: 'Check out my most recent blogs',
    blogs: [
    {
      image: "/images/blog1.jpg",
      link: "/blog/how-to-build-a-portfolio"
    },
    {
      image: "/images/blog2.jpg",
      link: "/blog/nextjs-vs-react"
    },
    {
      image: "/images/blog3.jpg",
      link: "/blog/tailwind-best-practices"
    }
  ],
  cta: {
    label: "View all blogs",
    link: "/blogs"
  }
}

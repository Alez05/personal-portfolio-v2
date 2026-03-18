import { TBlogPreview } from "../../components/home/blog-preview/blog-preview.type";

export const blogPreview: TBlogPreview = {
  title: "Blogs",
  description:
    "Discover insights and practical tips on IT, development, web design, and freelancing. Stay updated on trends and get inspiration to grow your projects and boost your career.",

  blogs: [
    {
      image: "/images/blogs/vat-exemption.png",
      link: "/blog/vat-exemption-international",
      title: "VAT Exemption as an International",
    },
    {
      image: "/images/blogs/web-design.png",
      link: "/blog/get-web-design-effortlessly",
      title: "Get Web Design Effortlessly",
    },
    {
      image: "/images/blogs/freelancing.png",
      link: "/blog/freelancing-tips",
      title: "Freelancing Tips for Developers",
    },
  ],

  cta: {
    label: "View Blogs",
    link: "/blog",
  },
};

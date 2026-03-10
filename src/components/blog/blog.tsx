import { ContactCTA } from "../shared";
import { HeroBl } from "./hero-bl";
import { BlogSection } from "./blog-section";
import { BlogCard } from "./blog-card";

const Blog = () => {
  return (
    <div className="p-10 text-center text-2xl">
      <HeroBl />
      <BlogSection />
      {/* <BlogCard /> */}
      <ContactCTA />
    </div>
  );
};

export { Blog };

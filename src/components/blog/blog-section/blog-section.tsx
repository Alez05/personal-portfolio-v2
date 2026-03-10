import "./blog-section.css";
import { getBlogSectionAction } from "./action";
import { TBlogSection } from "./blog-section.type";
import { BlogCard } from "../blog-card";

const BlogSection = async ({}:TBlogSection) => {
  const data = await getBlogSectionAction();

  if (!data) {
    return (
      <section className="bls-container">
        <p className="bls-error">Failed to load blog section</p>
      </section>
    );
  }

  return (
    <section className="bls-container">
      <div className="bls-header">
        {data.title && <h2 className="bls-title">{data.title}</h2>}
        {data.description && (
          <p className="bls-description">{data.description}</p>
        )}
      </div>
        <BlogCard />
    </section>
  );
};

export { BlogSection };

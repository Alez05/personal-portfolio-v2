import "./blog-card.css";
import { getBlogCardAction } from "./action";

const BlogCard = async () => {
  const data = await getBlogCardAction();

  if (!data || data.length === 0) {
    return (
      <section className="bcs-container">
        <p className="bcs-error">No blogs found</p>
      </section>
    );
  }

  return (
    <section id="blog-overview" className="bcs-container">
      {data.map((blog, index) => (
        <article className="bcs-card" key={index}>
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.name ?? "Blog image"}
              className="bcs-image"
            />
          )}

          <div className="bcs-content">
            {blog.name && blog.link && (
              <a href={blog.link} className="bcs-title-link">
                {blog.name}
              </a>
            )}
            {blog.description && (
              <p className="bcs-desc">{blog.description}</p>
            )}
          </div>
        </article>
      ))}
    </section>
  );
};

export { BlogCard };

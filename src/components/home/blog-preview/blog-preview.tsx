import { getBlogPreviewAction } from "./action";
import { BlogPreviewClient } from "./blog-preview.client";
import "./blog-preview.css";

const BlogPreview = async () => {
  const data = await getBlogPreviewAction();

  if (!data) {
    return (
      <section className="bp-section">
        <div className="bp-container">
          <p className="bp-error">Failed to load blog highlights.</p>
        </div>
      </section>
    );
  }

  return <BlogPreviewClient data={data} />;
};

export { BlogPreview };

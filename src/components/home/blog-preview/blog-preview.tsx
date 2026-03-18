import React from "react";
import { getBlogPreviewAction } from "./action";
import { TBlogPreview } from "./blog-preview.type";
import "./blog-preview.css";

interface BlogHlProps {}

const BlogPreview: React.FC<BlogHlProps> = async () => {
  const data: TBlogPreview | null = await getBlogPreviewAction();

  if (!data) {
    return (
      <section className="bph-section">
        <div className="bph-container">
          <p className="bph-error">Failed to load blog highlights.</p>
        </div>
      </section>
    );
  }

  const { title, description, cta, blogs } = data;

  // Carousel static rendering: all slides are visible horizontally
  return (
    <section className="bph-section">
      <div className="bph-container">
        {title && <h2 className="bph-title">{title}</h2>}
        {description && <p className="bph-description">{description}</p>}

        <div className="bph-carousel">
          <div className="bph-carousel-inner">
            {blogs.map((blog, index) => (
              <a key={index} href={blog.link} className="bph-blog-card">
                <img
                  src={blog.image}
                  alt={`Blog ${index + 1}`}
                  className="bph-blog-image"
                />
              </a>
            ))}
          </div>
        </div>

        {cta && (
          <div className="bph-cta">
            <a href={cta.link} className="bph-cta-button">
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export { BlogPreview };

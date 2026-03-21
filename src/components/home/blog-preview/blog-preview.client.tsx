"use client";

import React, { useState } from "react";
import { TBlogPreview } from "./blog-preview.type";
import "./blog-preview.css";

interface Props {
  data: TBlogPreview;
}

const BlogPreviewClient: React.FC<Props> = ({ data }) => {
  const { title, description, blogs, cta } = data;

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % blogs.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  return (
    <section className="bp-section">
      <div className="bp-container">
        {/* LEFT: Carousel */}
        {/* RIGHT: Text */}
        <div className="bp-right">
          {title && <h2 className="bp-title">{title}</h2>}
          {description && <p className="bp-description">{description}</p>}

          {cta && (
            <div className="bp-cta">
              <a href={cta.link} className="bp-cta-button">
                {cta.label}
              </a>
            </div>
          )}
        </div>
        <div className="bp-left">
          <div className="bp-carousel">
            <div
              className="bp-carousel-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {blogs.map((blog, i) => (
                <a key={i} href={blog.link} className="bp-card">
                  <img
                    src={blog.image}
                    alt={blog.title ?? `Blog ${i + 1}`}
                    className="bp-card-image"
                  />

                  {blog.title && (
                    <div className="bp-card-overlay">
                      <span className="bp-card-title">{blog.title}</span>
                    </div>
                  )}
                </a>
              ))}
            </div>

            {blogs.length > 1 && (
              <>
                <button className="bp-carousel-btn prev" onClick={prev}>
                  ‹
                </button>
                <button className="bp-carousel-btn next" onClick={next}>
                  ›
                </button>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export { BlogPreviewClient };

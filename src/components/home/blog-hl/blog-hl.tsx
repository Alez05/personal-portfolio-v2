"use client";

import React, { useEffect, useRef, useState } from "react";
import { getBlogHlAction } from "./action";
import { TBlogHl } from "./blog-hl.type";
import "./blog-hl.css";

const BlogHl: React.FC = () => {
  const [data, setData] = useState<TBlogHl | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Load blog highlights
  useEffect(() => {
    const fetchData = async () => {
      const res = await getBlogHlAction();
      setData(res);
    };
    fetchData();
  }, []);

  const blogs = data?.blogs ?? [];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : blogs.length - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < blogs.length - 1 ? prev + 1 : 0));
  };

  // Update carousel position — always runs, even when blogs is empty
  useEffect(() => {
    if (!carouselRef.current || blogs.length === 0) return;
    const slideWidth =
      (carouselRef.current.children[0] as HTMLElement).clientWidth + 24;
    carouselRef.current.style.transform = `translateX(-${
      currentIndex * slideWidth
    }px)`;
  }, [currentIndex, blogs.length]);

  // Now the early return is allowed (AFTER hooks)
  if (!data) {
    return (
      <section className="bh-section">
        <div className="bh-container">
          <p className="bh-error">Failed to load blog highlights.</p>
        </div>
      </section>
    );
  }

  const { title, description, cta } = data;

  return (
    <section className="bh-section">
      <div className="bh-container">
        {title && <h2 className="bh-title">{title}</h2>}
        {description && <p className="bh-description">{description}</p>}

        <div className="bh-carousel">
          <button className="bh-carousel-button prev" onClick={prevSlide}>
            &#8249;
          </button>

          <div className="bh-carousel-inner" ref={carouselRef}>
            {blogs.map((blog, index) => (
              <a key={index} href={blog.link} className="bh-blog-card">
                <img
                  src={blog.image}
                  alt={`Blog ${index + 1}`}
                  className="bh-blog-image"
                />
              </a>
            ))}
          </div>

          <button className="bh-carousel-button next" onClick={nextSlide}>
            &#8250;
          </button>
        </div>

        {cta && (
          <div className="bh-cta">
            <a href={cta.link} className="bh-cta-button">
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export { BlogHl };

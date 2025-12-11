"use client";
import React, { useEffect, useRef, useState } from "react";
import { TProjectVideo } from "./project-hl.type";
import "./project-hl.css";

type Props = { videos?: TProjectVideo[] };

export const ProjectHlClient: React.FC<Props> = ({ videos = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const padNumber = (n: number) => n.toString().padStart(2, "0");

  // IntersectionObserver to track which project is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.6 }
    );

    projectRefs.current.forEach((el) => el && observer.observe(el));

    return () =>
      projectRefs.current.forEach((el) => el && observer.unobserve(el));
  }, []);

  // Scroll listener to constrain counter within container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !counterRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const counterHeight = counterRef.current.offsetHeight;
      const offsetTop = 120; // distance from top of viewport

      // top position for the counter: never above container top, never below container bottom
      let top = Math.min(offsetTop, containerRect.bottom - counterHeight);

      if (containerRect.top > offsetTop) {
        top = containerRect.top;
      }

      counterRef.current.style.transform = `translateY(${top}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!videos || videos.length === 0) return null;

  return (
    <div className="ph-client-container" ref={containerRef}>
      {/* ========== LEFT FIXED COUNTER COLUMN ========== */}
      <div className="ph-counter-col">
        <div className="ph-counter-wrapper" ref={counterRef}>
          <div className="ph-counter">{padNumber(activeIndex + 1)}</div>
        </div>
      </div>

      {/* ========== RIGHT PROJECTS COLUMN ========== */}
      <div className="ph-projects-column">
        {videos.map((p, i) => (
          <div
            key={i}
            ref={(el: HTMLDivElement | null) => { projectRefs.current[i] = el; }}
            data-index={i}
            className="ph-project"
          >
            <div className="ph-video-wrap">
              {/* {p.video ? (
                <video
                  src={p.video}
                  className="ph-video"
                  controls
                  preload="metadata"
                />
              ) : (
                <div className="ph-client-placeholder">No video</div>
              )} */}
            </div>

            <div className="ph-project-layout">
              <div className="ph-project-info">
                <div className="ph-project-field">{p.field}</div>
                <div className="ph-project-name">{p.name}</div>
              </div>

              <div className="ph-project-meta">
                {p.tag && <span className="ph-tag">{p.tag}</span>}
                {p.year && <span className="ph-year">{p.year}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

"use client";
import React, { useEffect, useRef, useState } from "react";
import { TProjectVideo } from "./project-preview.type";
import "./project-preview.css";

type Props = { videos?: TProjectVideo[] };

export const ProjectPreviewClient: React.FC<Props> = ({ videos = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInSection, setIsInSection] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const padNumber = (n: number) => n.toString().padStart(2, "0");

  // ===============================
  // IntersectionObserver – show/hide counter based on section visibility
  // ===============================
  useEffect(() => {
    if (!sectionRef.current) return;

    const sectionObserver = new IntersectionObserver(
      ([entry]) => setIsInSection(entry.isIntersecting),
      { threshold: 0.15, rootMargin: "-40% 0px -10% 0px" }, // show as soon as 5% of the section is visible
    );

    sectionObserver.observe(sectionRef.current);

    return () => sectionObserver.disconnect();
  }, []);

  // ===============================
  // IntersectionObserver – track which project is active
  // ===============================
  useEffect(() => {
    if (!videos.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.6 },
    );

    projectRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      projectRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [videos.length]);

  if (!videos || videos.length === 0) return null;

  return (
    <div className="ph-section" ref={sectionRef}>
      <div className="ph-client-container">
        {/* Fixed Counter — only visible while section is on screen */}
        <div className="ph-counter-col">
          <div
            className={`ph-counter-wrapper${isInSection ? " ph-counter-visible" : ""}`}
          >
            <div className="ph-counter">{padNumber(activeIndex + 1)}</div>
            {/* <div className="ph-counter-total">/ {padNumber(videos.length)}</div> */}
          </div>
        </div>

        {/* Projects Column */}
        <div className="ph-projects-column">
          {videos.map((p, i) => (
            <div
              key={i}
              ref={(el) => {
                projectRefs.current[i] = el;
              }}
              data-index={i}
              className="ph-project"
            >
              {/* Video */}
              <div className="ph-video-wrap">
                {p.video ? (
                  <video
                    src={p.video}
                    className="ph-video"
                    controls
                    preload="metadata"
                  />
                ) : (
                  <div className="ph-client-placeholder">No video</div>
                )}
              </div>

              {/* Project Info */}
              <div className="ph-project-layout">
                <div className="ph-project-info">
                  {p.field && <div className="ph-project-field">{p.field}</div>}
                  {p.name && <div className="ph-project-name">{p.name}</div>}
                </div>

                {/* Tags + Year */}
                <div className="ph-project-meta">
                  {p.tags?.map((tag, idx) => (
                    <span key={idx} className="ph-tag">
                      {tag}
                    </span>
                  ))}
                  {p.year && <span className="ph-year">{p.year}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

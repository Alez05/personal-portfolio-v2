"use client";

import { useEffect, useRef, useState } from "react";
import { getSkillHlAction } from "./action";
import type { TSkillsPreview } from "./skills-preview.type";
import "./skills-preview.css";

const SkillsPreview = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const [visible, setVisible] = useState(false);
  const [data, setData] = useState<TSkillsPreview | null>(null);

  // Fetch data
  useEffect(() => {
    const loadData = async () => {
      const res = await getSkillHlAction();
      setData(res);
    };

    loadData();
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Loading state
  if (!data) {
    return (
      <section className="sp-section">
        <p className="sp-error">Loading skills...</p>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className={`sp-section ${visible ? "sp-visible" : ""}`}
    >
      <div className="sp-container">
        <header className="sp-header">
          <h2 className="sp-title">{data.title}</h2>

          {data.description && (
            <p className="sp-description">{data.description}</p>
          )}
        </header>

        <div className="sp-cards">
          {data.cards.map((card) => (
            <div key={card.title} className="sp-card">
              <span className="sp-card-icon">
                <i className={card.icon}></i>
                <h3 className="sp-card-title">{card.title}</h3>
              </span>

              <p className="sp-card-subtitle">{card.subtitle}</p>

              <ul className="sp-card-points">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {data.cta && (
          <div className="sp-cta">
            {data.cta.text && <p className="sp-cta-text">{data.cta.text}</p>}

            <a href={data.cta.link} className="sp-cta-button">
              {data.cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export { SkillsPreview };

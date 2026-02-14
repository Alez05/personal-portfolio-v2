"use client";

import { useState } from "react";
import { TExperience } from "./experience.type";
import "./experience.css";

interface ExperienceProps {
  careerList: TExperience[];
}

const ExperienceClient = ({ careerList }: ExperienceProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  if (!careerList || careerList.length === 0)
    return <p className="ex-error">Failed to load the career data</p>;

  return (
    <section className="ex-container">
      <h1 className="ex-title">Experience</h1>

      <p className="ex-description">
        Hands-on experience in web development, software systems, and
        collaborative projects across multiple industries.
      </p>

      <div className="ex-cards">
        {careerList.map((career, idx) => (
          <article key={idx} className="ex-card">
            {/* Header */}
            <header className="ex-card-header">
              {/* LEFT SIDE */}
              <div className="ex-left-header">
                {career.companyImg && (
                  <img
                    src={career.companyImg}
                    alt={career.company}
                    className="ex-company-logo"
                  />
                )}

                <div className="ex-title-group">
                  <h2 className="ex-card-title">{career.jobTitle}</h2>

                  <div className="ex-company-row">
                    <span className="ex-card-company">{career.company}</span>
                  </div>

                  <span className="ex-card-location">{career.location}</span>
                </div>
              </div>

              {/* RIGHT SIDE ✅ NOW IT CAN GO FAR RIGHT */}
              <div className="ex-right-header">
                {career.employmentType && (
                  <span className="ex-employment-type">
                    {career.employmentType}
                  </span>
                )}

                {career.locationType && (
                  <span className="ex-location-type">
                    {career.locationType}
                  </span>
                )}

                {career.date && (
                  <span className="ex-card-date">{career.date}</span>
                )}
              </div>
            </header>

            {/* Description */}
            {career.description && (
              <p className="ex-card-description">{career.description}</p>
            )}

            {/* Responsibilities */}
            <section className="ex-card-responsibilities">
              <div
                className={`ex-responsibilities-text ${
                  expandedIndex === idx ? "expanded" : ""
                }`}
              >
                {career.responsibilities.map((item, i) => (
                  <p key={i}>• {item}</p>
                ))}
              </div>

              {career.responsibilities.length > 0 && (
                <button
                  className="ex-read-more"
                  onClick={() => toggleExpand(idx)}
                >
                  {expandedIndex === idx ? "Show less" : "Read more"}
                </button>
              )}
            </section>

            {/* Technologies */}
            <section className="ex-card-technologies">
              <h3 className="ex-subtitle">{career.technologiesTitle}</h3>
              <ul className="ex-tech-list">
                {career.technologies.map((tech, i) => (
                  <li key={i} className="ex-tech">
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          </article>
        ))}
      </div>
    </section>
  );
};

export { ExperienceClient };

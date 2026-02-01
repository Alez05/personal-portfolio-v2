"use client";
import { useState } from "react";
import { TExperience } from "../experience.type";
import "./experience-m.css";

interface ExperienceProps {
  careerList?: TExperience[];
}

const ExperienceM = ({ careerList }: ExperienceProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  if (!careerList) return <p className="ex-m-error">Loading career data...</p>;
  if (careerList.length === 0)
    return <p className="ex-m-error">Failed to load the career data</p>;

  return (
    <section className="ex-m-container">
      <h1 className="ex-m-title">Experience</h1>

      <p className="ex-m-description">
        Hands-on experience in web development, software systems, and
        collaborative projects.
      </p>

      <div className="ex-m-cards">
        {careerList.map((career, idx) => (
          <article key={idx} className="ex-m-card">
            <header className="ex-m-card-header">
              <div className="ex-m-left-header">
                {career.companyImg && (
                  <img
                    src={career.companyImg}
                    alt={career.company}
                    className="ex-m-company-logo"
                  />
                )}
                <div className="ex-m-title-group">
                  <h2 className="ex-m-card-title">{career.jobTitle}</h2>
                  <div className="ex-m-company-row">
                    <span className="ex-m-card-company">{career.company}</span>
                  </div>
                  <span className="ex-m-card-location">{career.location}</span>
                  <div className="ex-m-right-header">
                    {career.employmentType && (
                      <span
                        className={`ex-m-employment-type ${
                          career.employmentType.toLowerCase() === "remote"
                            ? "remote"
                            : ""
                        }`}
                      >
                        {career.employmentType}
                      </span>
                    )}
                    {career.locationType && (
                      <span className="ex-m-location-type">
                        {career.locationType}
                      </span>
                    )}
                    {career.date && (
                      <span className="ex-m-card-date">{career.date}</span>
                    )}
                  </div>
                </div>
              </div>
            </header>

            {career.description && (
              <p className="ex-m-card-description">{career.description}</p>
            )}

            <section className="ex-m-card-responsibilities">
              <div
                className={`ex-m-responsibilities-text ${
                  expandedIndex === idx ? "expanded" : ""
                }`}
              >
                {career.responsibilities.map((item, i) => (
                  <p key={i}>• {item}</p>
                ))}
              </div>

              {career.responsibilities.length > 0 && (
                <button
                  className="ex-m-read-more"
                  onClick={() => toggleExpand(idx)}
                >
                  {expandedIndex === idx ? "Show less" : "Read more"}
                </button>
              )}
            </section>

            <section className="ex-m-card-technologies">
              <h3 className="ex-m-subtitle">{career.technologiesTitle}</h3>
              <ul className="ex-m-tech-list">
                {career.technologies.map((tech, i) => (
                  <li key={i} className="ex-m-tech">
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

export { ExperienceM };

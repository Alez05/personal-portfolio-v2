"use client";

import { useState } from "react";
import { TEducation } from "../education.type";
import "./education-m.css";

interface EducationMProps {
  educationList: TEducation[];
}

const EducationM = ({ educationList }: EducationMProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  if (!educationList) return <p className="ed-m-error">Loading education data...</p>;
  if (educationList.length === 0)
    return <p className="ed-m-error">No education data available</p>;

  return (
    <section className="ed-m-container">
      <h1 className="ed-m-title">Education</h1>
      <p className="ed-m-description">
        My formal and bootcamp education, focusing on technical skills, programming, and development.
      </p>

      <div className="ed-m-cards">
        {educationList.map((edu, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <article key={edu.id} className="ed-m-card">
              {/* Header */}
              <header className="ed-m-card-header">
                <div className="ed-m-left-header">
                  {edu.institution.emblem && (
                    <img
                      src={edu.institution.emblem}
                      alt={edu.institution.name}
                      className="ed-m-institution-logo"
                    />
                  )}
                  <div className="ed-m-title-group">
                    <h2 className="ed-m-card-title">{edu.credential.title}</h2>
                    {edu.program?.specialization && (
                      <span className="ed-m-card-specialization">{edu.program.specialization}</span>
                    )}
                    <span className="ed-m-card-school">{edu.institution.name}</span>
                    {edu.timeline && (
                      <span className="ed-m-card-dates">
                        {edu.timeline.startDate} – {edu.timeline.endDate || "Present"}
                      </span>
                    )}
                  </div>
                </div>
              </header>

              {/* Description */}
              {edu.description && (
                <p className="ed-m-card-description">{edu.description}</p>
              )}

              {/* Sections */}
              {edu.sections && (
                <div className={`ed-m-all-sections ${isExpanded ? "expanded" : ""}`}>
                  {edu.sections.map((section, sIdx) => (
                    <section key={sIdx} className="ed-m-card-section">
                      <h3 className="ed-m-subtitle">{section.title}</h3>

                      {/* Render tech/coursework as pills */}
                      {section.title.toLowerCase().includes("tech") ||
                      section.title.toLowerCase().includes("coursework") ? (
                        <div className="ed-m-tech-list">
                          {section.items.map((item, i) => (
                            <p key={i} className="ed-m-tech">{item}</p>
                          ))}
                        </div>
                      ) : (
                        <div className="ed-m-section-items">
                          {section.items.map((item, i) => (
                            <p key={i}>• {item}</p>
                          ))}
                        </div>
                      )}
                    </section>
                  ))}
                </div>
              )}

              {/* Single Read More button */}
              {edu.sections && edu.sections.length > 0 && (
                <button
                  className="ed-m-read-more"
                  onClick={() => toggleExpand(idx)}
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export { EducationM };

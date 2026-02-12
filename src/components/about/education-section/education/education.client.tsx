"use client";

import { useState } from "react";
import { TEducation } from "./education.type";
import "./education.css";

interface EducationClientProps {
  educationList: TEducation[];
}

const EducationClient = ({ educationList }: EducationClientProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  if (!educationList)
    return <p className="ed-error">Loading education data...</p>;

  if (educationList.length === 0)
    return <p className="ed-error">No education data available</p>;

  const toggleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="ed-container">
      <div className="ed-cards">
        {educationList.map((edu, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <article key={edu.id} className="ed-card">
              <header className="ed-card-header">
                <div className="ed-left-header">
                  {edu.institution.emblem && (
                    <img
                      src={edu.institution.emblem}
                      alt={edu.institution.name}
                      className="ed-logo"
                    />
                  )}

                  <div className="ed-text-column">
                    <div className="ed-title-group">
                      <h2 className="ed-card-title">{edu.credential.title}</h2>
                      {edu.program?.specialization && (
                        <span className="ed-specialization">
                          {edu.program.specialization}
                        </span>
                      )}
                      <span className="ed-school">{edu.institution.name}</span>
                    </div>

                    <div className="ed-date-wrapper">
                      {edu.timeline && (
                        <span className="ed-dates">
                          {edu.timeline.startDate} –{" "}
                          {edu.timeline.endDate || "Present"}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </header>

              {edu.description && (
                <p className="ed-description-text">{edu.description}</p>
              )}

              {edu.sections && (
                <>
                  <div
                    className={`ed-sections ${isExpanded ? "expanded" : ""}`}
                  >
                    {edu.sections.map((section, sIdx) => {
                      const isTags =
                        section.title.toLowerCase().includes("tech") ||
                        section.title.toLowerCase().includes("coursework");

                      return (
                        <section key={sIdx} className="ed-section">
                          <h3 className="ed-subtitle">{section.title}</h3>

                          {isTags ? (
                            <div className="ed-tech-list">
                              {section.items.map((item, i) => (
                                <span key={i} className="ed-tech">
                                  {item}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <ul className="ed-list">
                              {section.items.map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </section>
                      );
                    })}
                  </div>

                  <button
                    className="ed-read-more"
                    onClick={() => toggleExpand(index)}
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export { EducationClient };

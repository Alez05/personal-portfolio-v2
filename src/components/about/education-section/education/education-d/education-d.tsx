"use client";

import { TEducation } from "../education.type";
import "./education-d.css";

interface EducationDProps {
  educationList: TEducation[];
}

const EducationD = ({ educationList }: EducationDProps) => {
  if (!educationList || educationList.length === 0) {
    return <p className="ed-d-error">No education data available</p>;
  }

  return (
    <section className="ed-d-container">
      <h1 className="ed-d-title">Education</h1>
      <p className="ed-d-description">
        My formal and bootcamp education, focusing on technical skills, programming, and web development.
      </p>

      <div className="ed-d-cards">
        {educationList.map((edu) => (
          <article key={edu.id} className="ed-d-card">
            {/* Header */}
            <header className="ed-d-card-header">
              <div className="ed-d-left-header">
                {edu.institution.emblem && (
                  <img
                    src={edu.institution.emblem}
                    alt={edu.institution.name}
                    className="ed-d-institution-logo"
                  />
                )}

                <div className="ed-d-title-group">
                  <h2 className="ed-d-card-title">{edu.credential.title}</h2>
                  {edu.program?.specialization && (
                    <span className="ed-d-card-specialization">{edu.program.specialization}</span>
                  )}
                  <span className="ed-d-card-school">{edu.institution.name}</span>
                </div>
              </div>

              {/* Dates on the right */}
              {edu.timeline && (
                <span className="ed-d-card-dates">
                  {edu.timeline.startDate} – {edu.timeline.endDate || "Present"}
                </span>
              )}
            </header>

            {/* Description */}
            {edu.description && (
              <p className="ed-d-card-description">{edu.description}</p>
            )}

            {/* Sections */}
            {edu.sections &&
              edu.sections.map((section, sIdx) => {
                const isTagsSection =
                  section.title.toLowerCase().includes("technologies") ||
                  section.title.toLowerCase().includes("coursework");

                return (
                  <section key={sIdx} className="ed-d-card-section">
                    <h3 className="ed-d-subtitle">{section.title}</h3>

                    {isTagsSection ? (
                      <div className="ed-d-tech-list">
                        {section.items.map((item, i) => (
                          <span key={i} className="ed-d-tech">
                            {item}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <ul className="ed-d-list">
                        {section.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                );
              })}
          </article>
        ))}
      </div>
    </section>
  );
};

export { EducationD };

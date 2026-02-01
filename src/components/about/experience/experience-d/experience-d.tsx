import "./experience-d.css";
import { TExperience } from "../experience.type";

interface ExperienceProps {
  careerList: TExperience[];
}

const ExperienceD = ({ careerList }: ExperienceProps) => {
  if (!careerList || careerList.length === 0) {
    return <p className="ex-d-error">Failed to load the career data</p>;
  }

  return (
    <section className="ex-d-container">
      <h1 className="ex-d-title">Experience</h1>

      <p className="ex-d-description">
        Hands-on experience in web development, software systems, and
        collaborative projects across multiple industries.
      </p>

      <div className="ex-d-cards">
        {careerList.map((career, idx) => (
          <article key={idx} className="ex-d-card">
            {/* Header */}
            <header className="ex-d-card-header">
              <div className="ex-d-left-header">
                <img
                  src={career.companyImg}
                  alt={career.company}
                  className="ex-d-company-logo"
                />

                <div className="ex-d-title-group">
                  <h2 className="ex-d-card-title">{career.jobTitle}</h2>

                  <div className="ex-d-company-row">
                    <span className="ex-d-card-company">{career.company}</span>
                  </div>

                  <div className="ex-d-card-meta">
                    <span className="ex-d-card-location">{career.location}</span>
                  </div>
                </div>
              </div>

              <div className="ex-d-right-header">
                {career.employmentType && (
                  <span
                    className={`ex-d-employment-type ${
                      career.employmentType.toLowerCase() === "remote"
                        ? "remote"
                        : ""
                    }`}
                  >
                    {career.employmentType}
                  </span>
                )}

                <span className="ex-d-location-type">{career.locationType}</span>
                <span className="ex-d-card-date">{career.date}</span>
              </div>
            </header>

            {career.description && (
              <p className="ex-d-card-description">{career.description}</p>
            )}

            <section className="ex-d-card-responsibilities">
              <h3 className="ex-d-subtitle">{career.responsibilitiesTitle}</h3>
              <ul>
                {career.responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="ex-d-card-technologies">
              <h3 className="ex-d-subtitle">{career.technologiesTitle}</h3>
              <ul className="ex-d-tech-list">
                {career.technologies.map((tech, i) => (
                  <li key={i} className="ex-d-tech">{tech}</li>
                ))}
              </ul>
            </section>
          </article>
        ))}
      </div>
    </section>
  );
};

export { ExperienceD };

import { getProjectCardAction } from "./action";
import type { TProjectCard } from "./project-card-type";
import "./project-card.css";

const ProjectCard = async () => {
  const data = await getProjectCardAction();

  /* ❌ Failed to load data */
  if (!data) {
    return (
      <section
        className="prj-container"
        aria-live="polite"
        aria-labelledby="projects-heading"
      >
        <p className="prj-error">Failed to load projects.</p>
      </section>
    );
  }

  /* ⚠️ No data available */
  if (data.length === 0) {
    return (
      <section
        className="prj-container"
        aria-live="polite"
        aria-labelledby="projects-heading"
      >
        <p className="prj-error">No projects available.</p>
      </section>
    );
  }

  return (
    <section
      className="prj-container"
      aria-labelledby="projects-heading"
      role="region"
    >
      {/* Hidden heading improves SEO and screen readers */}
      <h2 id="projects-heading" className="sr-only">
        Portfolio Projects
      </h2>

      <div className="prj-grid">
        {data.map((project: TProjectCard) => {
          // Separate CTAs
          const caseStudyCTA = project.cta?.find(c => c.label?.toLowerCase().includes("case study"));
          const otherCTAs = project.cta?.filter(c => !c.label?.toLowerCase().includes("case study")) ?? [];

          return (
            <article
              key={project.id ?? project.name}
              className="prj-card"
              aria-labelledby={`project-${project.id}-title`}
            >
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.name ? `${project.name} project preview` : "Project preview"}
                  title={project.name ?? "Project preview"}
                  className="prj-image"
                  loading="lazy"
                  decoding="async"
                />
              )}

              {/* Header: title + tools */}
              <div className="prj-header">
                {project.name && (
                  <h3
                    id={`project-${project.id}-title`}
                    className="prj-name"
                  >
                    {project.name}
                  </h3>
                )}

                {project.tools && project.tools.length > 0 && (
                  <div
                    className="prj-tools"
                    aria-label="Technologies used"
                  >
                    {project.tools.map((tool, idx) => (
                      <img
                        key={`${tool.label}-${idx}`}
                        src={tool.icon}
                        alt={tool.label ? `${tool.label} logo` : "Technology icon"}
                        title={tool.label ?? "Technology"}
                        className="prj-tool-icon"
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Domain */}
              {project.domain && (
                <p className="prj-domain" aria-label="Project category">
                  {project.domain}
                </p>
              )}

              {/* Description */}
              {project.description && (
                <p className="prj-description">
                  {project.description}
                </p>
              )}

              {/* Case Study link under description */}
              {caseStudyCTA && (
                <div className="prj-case-study-wrapper">
                  <a
                    href={caseStudyCTA.link}
                    className="prj-case-study"
                    title={caseStudyCTA.label}
                  >
                    {caseStudyCTA.label}
                  </a>
                </div>
              )}

              {/* Other CTAs in a row (View Project / View Code) */}
              {otherCTAs.length > 0 && (
                <div className="prj-actions">
                  {otherCTAs.map((btn, idx) => (
                    <a
                      key={idx}
                      href={btn.link}
                      className="prj-cta"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${btn.label} - opens in new tab`}
                      title={btn.label}
                    >
                      <span>{btn.label}</span>
                      {btn.icon && (
                        <i
                          className={`prj-cta-icon ${btn.icon}`}
                          aria-hidden="true"
                        />
                      )}
                    </a>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export { ProjectCard };

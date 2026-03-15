// src/components/home/skills-preview/skills-preview.tsx
import { getSkillHlAction } from "./action";
import "./skills-preview.css";

const SkillsPreview = async () => {
  // Fetch the data from your action
  const data = await getSkillHlAction();

  if (!data) {
    return (
      <section className="sp-section">
        <p className="sp-error">Failed to load skills gay</p>
      </section>
    );
  }

  return (
    <section className="sp-section">
      <div className="sp-container">
        {/* Header with title + optional description */}
        <header className="sp-header">
          <h2 className="sp-title">{data.title}</h2>
          {data.description && (
            <p className="sp-description">{data.description}</p>
          )}
        </header>

        {/* Skills grid */}
        <div className="sp-skills-grid">
          {data.skills.map((skill) => (
            <div key={skill.name} className="sp-skill">
              {skill.icon && (
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="sp-skill-icon"
                />
              )}
              <span className="sp-skill-name">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
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

// src/components/projects/projects-hero/HeroPr.tsx
import type { THeroPr } from "./hero-pr.type";
import { getHeroPrAction } from "./action";
import "./hero-pr.css";

const HeroPr = async () => {
  const heroData: THeroPr | null = await getHeroPrAction();

  if (!heroData) {
    return (
      <section className="prh-hero">
        <p className="prh-error">Failed to load hero data.</p>
      </section>
    );
  }

  if (Object.keys(heroData).length === 0) {
    return (
      <section className="prh-hero">
        <p className="prh-error">No hero data available.</p>
      </section>
    );
  }

  return (
    <section className="prh-hero">

      {heroData.image && (
        <div className="prh-i-wrapper">
          <img
            src={heroData.image}
            className="prh-image"
            alt="Projects hero"
          />
        </div>
      )}

      <div className="prh-content">
        {heroData.eyebrow && (
          <h2 className="prh-pretitle">{heroData.eyebrow}</h2>
        )}

        {heroData.title && (
          <h1 className="prh-title">{heroData.title}</h1>
        )}

        {heroData.description && (
          <p className="prh-description">{heroData.description}</p>
        )}

        <div className="prh-buttons">
          {heroData.ctaPrimary?.label && heroData.ctaPrimary?.link && (
            <a
              href={heroData.ctaPrimary.link}
              className="prh-btn-primary"
            >
              {heroData.ctaPrimary.label}
            </a>
          )}

          {heroData.ctaSecondary?.label && heroData.ctaSecondary?.link && (
            <a
              href={heroData.ctaSecondary.link}
              className="prh-btn-secondary"
            >
              {heroData.ctaSecondary.label}
            </a>
          )}
        </div>
      </div>

    </section>
  );
};

export { HeroPr };

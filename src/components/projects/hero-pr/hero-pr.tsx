// src/components/projects/projects-hero/HeroPr.tsx
import type { THeroPr } from "./hero-pr.type";
import { getHeroPrAction } from "./action";
import "./hero-pr.css";

const HeroPr = async () => {
  const heroData: THeroPr | null = await getHeroPrAction();

  // ❌ Failed to load
  if (!heroData) {
    return (
      <section className="prh-hero" aria-live="polite">
        <p className="prh-error">Failed to load hero data.</p>
      </section>
    );
  }

  // ⚠️ No data
  if (Object.keys(heroData).length === 0) {
    return (
      <section className="prh-hero" aria-live="polite">
        <p className="prh-error">No hero data available.</p>
      </section>
    );
  }

  return (
    <section className="prh-hero" aria-label="Projects hero section">
      <div className="prh-hero-wrapper">
        {/* PreTitle for MOBILE (above image) */}
        {heroData.preTitle && (
          <p className="prh-pretitle-mobile" aria-hidden="true">
            {heroData.preTitle}
          </p>
        )}

        {/* IMAGE */}
        {heroData.image && (
          <div className="prh-i-wrapper">
            <img
              src={heroData.image}
              className="prh-image"
              alt={heroData.title ?? "Projects hero illustration"}
            />
          </div>
        )}

        {/* CONTENT */}
        <div className="prh-content">
          {/* PreTitle for DESKTOP (above title) */}
          {heroData.preTitle && (
            <p className="prh-pretitle-desktop" aria-hidden="true">
              {heroData.preTitle}
            </p>
          )}

          {/* TITLE */}
          {heroData.title && <h1 className="prh-title">{heroData.title}</h1>}

          {/* SUBTITLE / DESCRIPTION */}
          {heroData.subTitle && (
            <p className="prh-description">{heroData.subTitle}</p>
          )}

          {/* BUTTONS */}
          <div className="prh-buttons">
            {/* Primary CTA */}
            {heroData.ctaPrimary?.label && heroData.ctaPrimary?.link && (
              <a
                href={heroData.ctaPrimary.link}
                className="prh-btn-primary"
                role="button"
                aria-label={heroData.ctaPrimary.label}
                title={`Go to: ${heroData.ctaPrimary.label}`}
              >
                {heroData.ctaPrimary.label}
              </a>
            )}

            {/* Secondary CTA */}
            {heroData.ctaSecondary?.label && heroData.ctaSecondary?.link && (
              <a
                href={heroData.ctaSecondary.link}
                className="prh-btn-secondary"
                role="button"
                aria-label={heroData.ctaSecondary.label}
                title={`Go to: ${heroData.ctaSecondary.label}`}
              >
                {heroData.ctaSecondary.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroPr };

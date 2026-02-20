import { heroprojectsData } from "../../../app/api"; // adjust path
import "./hero-pr.css";

const HeroPr = () => {
  return (
    <section className="pro-hero">
      <div className="pro-hero-content">
        {heroprojectsData.title && (
          <h1 className="pro-hero-title">{heroprojectsData.title}</h1>
        )}
        {heroprojectsData.description && (
          <p className="pro-hero-description">{heroprojectsData.description}</p>
        )}
        <div className="pro-hero-buttons">
          {heroprojectsData.ctaPrimary?.label && heroprojectsData.ctaPrimary?.link && (
            <a href={heroprojectsData.ctaPrimary.link} className="pro-btn pro-btn-primary">
              {heroprojectsData.ctaPrimary.label}
            </a>
          )}
          {heroprojectsData.ctaSecondary?.label && heroprojectsData.ctaSecondary?.link && (
            <a href={heroprojectsData.ctaSecondary.link} className="pro-btn pro-btn-secondary">
              {heroprojectsData.ctaSecondary.label}
            </a>
          )}
        </div>
      </div>
      {heroprojectsData.image && (
        <div className="pro-hero-image">
          <img src={heroprojectsData.image} alt="Projects hero" />
        </div>
      )}
    </section>
  );
};

export { HeroPr };

import { getHeroBlAction } from "./action";
import "./hero-bl.css";

const HeroBl = async () => {
  const data = await getHeroBlAction();

  // ❌ Failed to load
  if (!data) {
    return (
      <section className="blg-hero">
        <p className="blg-error">Failed to load hero data.</p>
      </section>
    );
  }

  // ⚠️ No data
  if (Object.keys(data).length === 0) {
    return (
      <section className="blg-hero">
        <p className="blg-error">No hero data available.</p>
      </section>
    );
  }

  return (
    <section className="blg-hero">
      {/* PreTitle for MOBILE (above image) */}
      {data.preTitle && <p className="blg-pretitle-mobile">{data.preTitle}</p>}

      {data.image && (
        <div className="blg-image-wrapper">
          <img
            src={data.image}
            alt={data.title ?? "Blog Hero Image"}
            className="blg-image"
          />
        </div>
      )}

      <div className="blg-content">
        {/* PreTitle for DESKTOP (above title) */}
        {data.preTitle && <p className="blg-pretitle-desktop">{data.preTitle}</p>}

        {data.title && <h1 className="blg-title">{data.title}</h1>}
        {data.subTitle && <p className="blg-subtitle">{data.subTitle}</p>}

        <div className="blg-button-wrapper">
          {data.cta?.label && data.cta?.link && (
            <a href="#blog-overview" className="blg-button">
              {data.cta.label}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export { HeroBl };

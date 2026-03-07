// components/contact-hero.tsx

import "./contact-hero.css";
import { getContactHrAction } from "./action";

const ContactHero = async () => {
  const data = await getContactHrAction();

  // ❌ Failed to load
  if (!data) {
    return (
      <section className="hm-hero">
        <p className="hm-error">Failed to load hero data.</p>
      </section>
    );
  }

  // ⚠️ No data
  if (Object.keys(data).length === 0) {
    return (
      <section className="hm-hero">
        <p className="hm-error">No hero data available.</p>
      </section>
    );
  }

  const { title, subTitle, cta, image, preTitle } = data;

  // Optional highlight logic
  const highlightText = "Build Something Together";
  const titleParts = title?.split(highlightText) || [title || ""];

  return (
    <section className="hm-hero">

      {/* Pretitle for MOBILE (above image) */}
      {preTitle && (
        <p className="hm-pretitle-mobile">
          {preTitle}
        </p>
      )}

      {/* Image */}
      {image && (
        <div className="hm-image-wrapper">
          <img
            src={image}
            alt={title ?? "Contact hero image"}
            className="hm-image"
          />
        </div>
      )}

      {/* Content */}
      <div className="hm-content">

        {/* Pretitle for DESKTOP */}
        {preTitle && (
          <p className="hm-pretitle-desktop">
            {preTitle}
          </p>
        )}

        {/* Title */}
        {title && (
          <h1 className="hm-title">
            {titleParts[0]}
            {titleParts.length > 1 && (
              <span className="hm-color">{highlightText}</span>
            )}
            {titleParts[1]}
          </h1>
        )}

        {/* Subtitle */}
        {subTitle && (
          <p className="hm-subtitle">
            {subTitle}
          </p>
        )}

        {/* CTA */}
        {cta?.label && cta?.link && (
          <div className="hm-button-wrapper">
            <a href={cta.link} className="hm-button">
              {cta.label}
            </a>
          </div>
        )}

      </div>

    </section>
  );
};

export { ContactHero };

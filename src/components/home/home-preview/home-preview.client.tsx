// home-preview.client.tsx
"use client";

import { copyToClipboard } from "../../helpers";
import { THomePreview } from "./home-preview.type";
import "./home-preview.css";

type Props = {
  hero: THomePreview;
};

const HomePreviewClient = ({ hero }: Props) => {
  return (
    <section className="hero-container">
      {/* Eyebrow */}
      {hero.eyebrow && (
        <p className="hero-eyebrow">{hero.eyebrow}</p>
      )}

      <div className="hero-left">
        {hero.name && <h1 className="hero-name">{hero.name}</h1>}
        {hero.role && <h2 className="hero-role">{hero.role}</h2>}

        {/* ✅ tagline instead of text */}
        {hero.tagline && (
          <p className="hero-tagline">{hero.tagline}</p>
        )}

        {/* ✅ Contacts as badges */}
        {hero.contacts && (
          <div className="hero-info">
            {hero.contacts.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (item.action?.type === "copy") {
                    copyToClipboard(item.value);
                  }
                  if (item.action?.type === "link" && item.action.href) {
                    window.open(item.action.href, "_blank");
                  }
                }}
                className="hero-badge"
              >
                {item.icon && <i className={item.icon}></i>}
                {item.value}
              </button>
            ))}
          </div>
        )}

        {/* ✅ CTA buttons */}
        {hero.ctas && (
          <div className="hero-buttons">
            {hero.ctas.primary && (
              <a
                href={hero.ctas.primary.href}
                className={`hero-btn hero-btn-${hero.ctas.primary.variant || "primary"}`}
              >
                {hero.ctas.primary.label}
              </a>
            )}

            {hero.ctas.secondary && (
              <a
                href={hero.ctas.secondary.href}
                download={hero.ctas.secondary.download}
                className={`hero-btn hero-btn-${hero.ctas.secondary.variant || "secondary"}`}
              >
                {hero.ctas.secondary.label}
              </a>
            )}
          </div>
        )}
      </div>

      {/* ✅ Floating visuals */}
      {hero.visuals && (
        <div className="hero-visuals">
          {hero.visuals.map((item, idx) => (
            <span key={idx} className="hero-visual-item">
              <i className={item.icon}></i>
            </span>
          ))}
        </div>
      )}
    </section>
  );
};

export { HomePreviewClient };

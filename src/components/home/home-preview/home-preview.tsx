"use client";
import { copyToClipboard } from "../../helpers";
import { THomePreview } from "./home-preview.type";
import { getHomePreviewAction } from "./action";
import "./home-preview.css";

const HomePreview = async () => {
  const hero: THomePreview | null = await getHomePreviewAction();

  if (!hero) {
    return (
      <section className="hero-container">
        <p>Failed to load hero</p>
      </section>
    );
  }

  return (
    <section className="hero-container">
      {/* Left side */}
      <div className="hero-left">
        {hero.name && <h1 className="hero-name">{hero.name}</h1>}
        {hero.role && <h2 className="hero-role">{hero.role}</h2>}
        {hero.text && <p className="hero-text">{hero.text}</p>}

        {/* Contacts */}
        {hero.contacts && (
          <div className="hero-info">
            {hero.contacts.map((item, idx) => {
              const isCopyable = item.type === "email" || item.type === "phone";

              return (
                <p
                  key={idx}
                  onClick={() =>
                    isCopyable ? copyToClipboard(item.value) : undefined
                  }
                  className={isCopyable ? "cursor-pointer" : ""}
                >
                  <i className={item.icon}></i> {item.value}
                </p>
              );
            })}
          </div>
        )}

        {/* CTA Buttons */}
        {hero.ctas && (
          <div className="hero-buttons">
            {hero.ctas.primary && (
              <a
                href={hero.ctas.primary.link}
                className="hero-btn hero-btn-primary"
              >
                {hero.ctas.primary.label}
              </a>
            )}

            {hero.ctas.secondary && (
              <a
                href={hero.ctas.secondary.link}
                className="hero-btn hero-btn-secondary"
              >
                {hero.ctas.secondary.label}
              </a>
            )}
          </div>
        )}
      </div>

      {/* Right side (optional) */}
      {/*
      <div className="hero-right">
        {hero.profile && (
          <img
            src={hero.profile}
            alt={`${hero.name} profile`}
            className="hero-image"
          />
        )}
      </div>
      */}
    </section>
  );
};

export { HomePreview };

"use client";

import { useState } from "react";
import { TAboutMe } from "../about-hero.type";
import { DownloadButton } from "../../../shared";
import "./about-mobile.css";

type Props = {
  about: TAboutMe;
};

const AboutMobile = ({ about }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="ahm-container">
      {/* SECTION TITLE */}
      <span className="ahm-section-title">{about.title}</span>

      {/* IMAGE */}
      {about.profileImage?.src && (
        <div className="ahm-image-wrapper">
          {/* IDENTITY OVER IMAGE */}
          <div className="ahm-identity-overlay">
            <h1 className="ahm-name">{about.name}</h1>
            <h2 className="ahm-role">{about.role}</h2>
          </div>

          <img
            src={about.profileImage.src}
            alt={about.profileImage.alt ?? "Profile image"}
            className="ahm-image"
          />
        </div>
      )}

      {/* SOCIAL ICONS */}
      {about.socials && (
        <div className="ahm-socials">
          {about.socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.platform}
              className="ahm-social-link"
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>
      )}

      {/* DESCRIPTION CARD (EXPANDABLE) */}
      <div className="ahm-card">
        <p className={`ahm-text ${expanded ? "expanded" : ""}`}>
          {about.description}
        </p>

        {/* Show current focus only when expanded */}
        {expanded && about.currentFocus && (
          <p className="ahm-current-focus">
            <span>Current focus:</span> {about.currentFocus}
          </p>
        )}

        <button
          className="ahm-read-more"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>

      {/* BUTTONS (ALWAYS VISIBLE) */}
      <div className="ahm-buttons">
        {about.seeMore && (
          <a href={about.seeMore} className="ahm-btn-primary">
            See my work
          </a>
        )}
        {about.downloadLink && <DownloadButton path={about.downloadLink} />}
      </div>
    </section>
  );
};

export { AboutMobile };

"use client";

import { useState } from "react";
import { TAboutMe } from "../aboutme.type";
import { DownloadButton } from "../../../shared";
import "./aboutme-m.css";

type Props = {
  about: TAboutMe;
};

const AboutMeM = ({ about }: Props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="abm-container-m">
      {/* SECTION TITLE */}
      <span className="abm-section-title-m">{about.title}</span>

      {/* IMAGE */}
      {about.profileImage?.src && (
        <div className="abm-image-wrapper-m">
          {/* IDENTITY OVER IMAGE */}
          <div className="abm-identity-overlay-m">
            <h1 className="abm-name-m">{about.name}</h1>
            <h2 className="abm-role-m">{about.role}</h2>
          </div>

          <img
            src={about.profileImage.src}
            alt={about.profileImage.alt ?? "Profile image"}
            className="abm-image-m"
          />
        </div>
      )}

      {/* SOCIAL ICONS */}
      {about.socials && (
        <div className="abm-socials-m">
          {about.socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.platform}
              className="abm-social-link-m"
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>
      )}

      {/* DESCRIPTION CARD (EXPANDABLE) */}
      <div className="abm-card-m">
        <p className={`abm-text-m ${expanded ? "expanded" : ""}`}>
          {about.description}
        </p>

        {/* Show current focus only when expanded */}
        {expanded && about.currentFocus && (
          <p className="abm-current-focus-m">
            <span>Current focus:</span> {about.currentFocus}
          </p>
        )}

        <button
          className="abm-read-more-m"
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
      </div>

      {/* BUTTONS (ALWAYS VISIBLE) */}
      <div className="abm-buttons-m">
        {about.seeMore && (
          <a href={about.seeMore} className="abm-btn-primary-m">
            See my work
          </a>
        )}
        {about.downloadLink && <DownloadButton path={about.downloadLink} />}
      </div>
    </section>
  );
};

export { AboutMeM };

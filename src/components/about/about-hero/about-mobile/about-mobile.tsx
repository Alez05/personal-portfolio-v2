"use client";

import { TAboutMe } from "../about-hero.type";
import { DownloadButton } from "../../../shared";
import "./about-mobile.css";

type Props = {
  about: TAboutMe;
};

const AboutMobile = ({ about }: Props) => {
  return (
    <section className="ahm-container">
      {/* IMAGE */}
      {about.profileImage?.src && (
        <div className="ahm-image-wrapper">
          <img
            src={about.profileImage.src}
            alt={about.profileImage.alt ?? "Profile image"}
            className="ahm-image"
          />
        </div>
      )}

      {/* CONTENT */}
      <div className="ahm-content">
        <span className="ahm-title">{about.title}</span>

        <h1 className="ahm-name">{about.name}</h1>
        <h2 className="ahm-role">{about.role}</h2>

        <p className="ahm-text">{about.description}</p>

        {about.currentFocus && (
          <p className="ahm-focus">
            <span>Current focus:</span> {about.currentFocus}
          </p>
        )}

        {/* ACTIONS */}
        <div className="ahm-buttons">
          {about.seeMore && (
            <a href={about.seeMore} className="ahm-btn-secondary">
              See my work
            </a>
          )}
          {about.downloadLink && <DownloadButton path={about.downloadLink} />}
        </div>

        {/* SOCIALS */}
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
      </div>
    </section>
  );
};

export {AboutMobile}

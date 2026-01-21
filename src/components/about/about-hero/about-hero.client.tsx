"use client";

import { TAboutMe } from "./about-hero.type";
import { DownloadButton } from "../../shared";
import "./about-hero.css";

type Props = {
  about: TAboutMe;
};

export const AboutHeroClient = ({ about }: Props) => {
  return (
    <section className="ah-container">
      {/* LEFT CONTENT */}
      <div className="ah-left">
        {/* TITLE */}
        <span className="ah-title">{about.title}</span>

        {/* NAME + ROLE */}
        <div className="ah-identity">
          <h1 className="ah-name">{about.name}</h1>
          <h2 className="ah-role">{about.role}</h2>
        </div>

        {/* DESCRIPTION */}
        <p className="ah-text">{about.description}</p>

        {/* CURRENT FOCUS */}
        {about.currentFocus && (
          <p className="ah-focus">
            <span>Current focus:</span> {about.currentFocus}
          </p>
        )}

        {/* ACTIONS */}
        <div className="ah-buttons">
          {about.seeMore && (
            <a href={about.seeMore} className="ah-btn ah-btn-secondary">
              See my work
            </a>
          )}
          {about.downloadLink && <DownloadButton path={about.downloadLink} />}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="ah-right">
        {about.profileImage?.src && (
          <img
            src={about.profileImage.src}
            alt={about.profileImage.alt ?? "Profile image"}
            className="ah-image"
          />
        )}

        {/* SOCIALS UNDER IMAGE */}
        {about.socials && about.socials.length > 0 && (
          <div className="ah-socials">
            {about.socials.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                className="ah-social-link"
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

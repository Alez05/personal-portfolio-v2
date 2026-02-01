// about-hero-desktop.tsx
"use client";

import { TAboutMe } from "../aboutme.type";
import { DownloadButton } from "../../../shared";
import "./aboutme-d.css";

type Props = {
  about: TAboutMe;
};

const AboutMeD = ({ about }: Props) => {
  return (
    <section className="abm-container-d">
      {/* LEFT CONTENT */}
      <div className="abm-left-d">
        {/* TITLE */}
        <span className="abm-title-d">{about.title}</span>

        {/* NAME + ROLE */}
        <div className="abm-identity-d">
          <h1 className="abm-name-d">{about.name}</h1>
          <h2 className="abm-role-d">{about.role}</h2>
        </div>

        {/* DESCRIPTION */}
        <p className="abm-text-d">{about.description}</p>

        {/* CURRENT FOCUS */}
        {about.currentFocus && (
          <p className="abm-focus-d">
            <span>Current focus:</span> {about.currentFocus}
          </p>
        )}

        {/* ACTIONS */}
        <div className="abm-buttons-d">
          {about.seeMore && (
            <a href={about.seeMore} className="abm-btn-secondary-d">
              See my work
            </a>
          )}
          {about.downloadLink && <DownloadButton path={about.downloadLink} />}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="abm-right-d">
        {about.profileImage?.src && (
          <img
            src={about.profileImage.src}
            alt={about.profileImage.alt ?? "Profile image"}
            className="abm-image-d"
          />
        )}

        {/* SOCIALS UNDER IMAGE */}
        {about.socials && about.socials.length > 0 && (
          <div className="abm-socials-d">
            {about.socials.map((s) => (
              <a
                key={s.platform}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.platform}
                className="abm-social-link-d"
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
export { AboutMeD }

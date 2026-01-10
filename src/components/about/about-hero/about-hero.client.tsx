"use client";

import { TAboutMe } from "./about-hero.type";
import { copyToClipboard } from "../../helpers";
import { DownloadButton } from "../../shared";
import "./about-hero.css";

type Props = {
  about: TAboutMe;
};

export const AboutHeroClient = ({ about }: Props) => {
  return (
    <section className="ah-container">
      <div className="ah-left">
        {/* NAME / ROLE / TEXT */}
        {about.name && <h1 className="ah-name">{about.name}</h1>}
        {about.role && <h2 className="ah-role">{about.role}</h2>}
        {about.text && <p className="ah-text">{about.text}</p>}

        {/* CONTACT */}
        <div className="ah-contact">
          {/* EMAIL */}
          {about.email &&
            (() => {
              const email = about.email;
              return (
                <p
                  onClick={() => copyToClipboard(email)}
                  className="cursor-pointer"
                >
                  <i className={about.emailIcon || "fa-solid fa-envelope"} />
                  <span>{email}</span>
                </p>
              );
            })()}

          {/* PHONE */}
          {about.phone &&
            (() => {
              const phone = about.phone;
              return (
                <p
                  onClick={() => copyToClipboard(phone)}
                  className="cursor-pointer"
                >
                  <i className={about.phoneIcon || "fa-solid fa-phone"} />
                  <span>{phone}</span>
                </p>
              );
            })()}

          {/* LOCATION */}
          {about.location && (
            <p>
              <i
                className={
                  about.locationIcon || "fa-solid fa-location-dot"
                }
              />
              <span>{about.location}</span>
            </p>
          )}
        </div>

        {/* BUTTONS */}
        <div className="ah-buttons">
          {about.aboutLink && (
            <a href={about.aboutLink} className="ah-btn ah-btn-about">
              Read more
            </a>
          )}

          {about.downloadLink && (
            <DownloadButton path={about.downloadLink} />
          )}
        </div>

        {/* SOCIALS */}
        {about.socials && about.socials.length > 0 && (
          <div className="ah-socials">
            {about.socials.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ah-social-link"
                aria-label={s.platform}
              >
                <i className={`fa-brands fa-${s.platform}`} />
              </a>
            ))}
          </div>
        )}
      </div>

      {/* IMAGE */}
      {about.profileImage?.src && (
        <div className="ah-right">
          <img
            src={about.profileImage.src}
            alt={
              about.profileImage.alt ??
              `${about.name ?? "Profile"} picture`
            }
            className="ah-image"
          />
        </div>
      )}
    </section>
  );
};

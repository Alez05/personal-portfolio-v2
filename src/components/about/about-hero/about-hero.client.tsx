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
        {about.name && <h1 className="ah-name">{about.name}</h1>}
        {about.role && <h2 className="ah-role">{about.role}</h2>}
        {about.text && <p className="ah-text">{about.text}</p>}

        <div className="ah-contact">
          {about.email && (
            <p
              onClick={() => copyToClipboard(about.email!)}
              className="cursor-pointer"
            >
              <i className={about.emailIcon || "fa fa-envelope"}></i> {about.email}
            </p>
          )}
          {about.phone && (
            <p
              onClick={() => copyToClipboard(about.phone!)}
              className="cursor-pointer"
            >
              <i className={about.phoneIcon || "fa fa-phone"}></i> {about.phone}
            </p>
          )}
          {about.location && (
            <p>
              <i className={about.locationIcon || "fa fa-map-marker"}></i> {about.location}
            </p>
          )}
        </div>

        <div className="ah-buttons">
          {about.aboutLink && (
            <a href={about.aboutLink} className="ah-btn ah-btn-about">
              Read more
            </a>
          )}
          {about.downloadLink && <DownloadButton path={about.downloadLink} />}
        </div>

        {about.socials && (
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
                <i className={s.icon || `fa fa-${s.platform}`}></i>
              </a>
            ))}
          </div>
        )}
      </div>

      {about.profileImage?.src && (
        <div className="ah-right">
          <img
            src={about.profileImage.src}
            alt={about.profileImage.alt || `${about.name} profile`}
            className="ah-image"
          />
        </div>
      )}
    </section>
  );
};

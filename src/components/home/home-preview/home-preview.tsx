"use client";

import { copyToClipboard } from "../../helpers";
import { THero } from "./home-preview.type";
import { heroData } from "../../../app/api/home";
import "./home-hl.css";

const HomeHl = () => {
  const hero: THero = heroData;

  return (
    <section className="hero-container">
      {/* Left side */}
      <div className="hero-left">
        {hero.name && <h1 className="hero-name">{hero.name}</h1>}
        {hero.role && <h2 className="hero-role">{hero.role}</h2>}
        {hero.text && <p className="hero-text">{hero.text}</p>}

        <div className="hero-info">
          {hero.email && (
            <p
              onClick={() => copyToClipboard(hero.email!)}
              className="cursor-pointer"
            >
              <i className={hero.emailIcon}></i> {hero.email}
            </p>
          )}
          {hero.phone && (
            <p
              onClick={() => copyToClipboard(hero.phone!)}
              className="cursor-pointer"
            >
              <i className={hero.phoneIcon}></i> {hero.phone}
            </p>
          )}
          {hero.location && (
            <p>
              <i className={hero.locationIcon}></i> {hero.location}
            </p>
          )}
        </div>

        <div className="hero-buttons">
          {hero.aboutLink && (
            <a href={hero.aboutLink} className="hero-btn hero-btn-about">
              Read more
            </a>
          )}
          {hero.downloadLink && (
            <a href={hero.downloadLink} className="hero-btn hero-btn-cv">
              Download CV
            </a>
          )}
        </div>

        {hero.socials && (
          <div className="hero-socials">
            {hero.socials.map((s, idx) => (
              <a
                key={idx}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Right side */}
      {/* <div className="hero-right">
        {hero.profile && (
          <img
            src={hero.profile}
            alt={`${hero.name} profile`}
            className="hero-image"
          />
        )}
      </div> */}
    </section>
  );
};

export { HomeHl };

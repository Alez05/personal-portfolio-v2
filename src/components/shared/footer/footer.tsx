import "./footer.css";
import { getFooterAction } from "./action";

const Footer = async () => {
  const data = await getFooterAction();

  if (!data) {
    return (
      <footer className="foo-container">
        <div className="foo-content">
          <p>Failed to load footer content.</p>
        </div>
      </footer>
    );
  }

  const { name, tagline, socials, links, contact, rights } = data;

  return (
    <footer className="foo-container">
      <div className="foo-content">
        {/* Column 1 — Name + tagline */}
        <div className="foo-col foo-col-info">
          {name && (
            <h2 className="foo-title">
              <span className="foo-name-gradient">{name.split(" ")[0]}</span>{" "}
              {name.split(" ")[1]}
            </h2>
          )}
          {tagline && <p className="foo-tagline">{tagline}</p>}
        </div>

          {contact && (
            <div className="foo-col foo-col-contact">
              <h2 className="foo-section-title">Get in touch</h2>
              {contact.email && (
                <p className="foo-contact-item">
                  <i className="fa-solid fa-envelope foo-icon-contact"></i>
                  <a href={`mailto:${contact.email}`} className="foo-contact-link">
                    {contact.email}
                  </a>
                </p>
              )}
              {contact.location && (
                <p className="foo-contact-item">
                  <i className="fa-solid fa-location-dot foo-icon-contact"></i>
                  {contact.location}
                </p>
              )}
            </div>
          )}
        {/* Socials + Quick Links Row */}
        <div className="foo-links-socials-row">
          {/* Social Links */}
          {socials && socials.length > 0 && (
            <div className="foo-col foo-col-socials">
              <h2 className="foo-section-title">Social links</h2>
              <div className="foo-socials">
                {socials.map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="foo-social-link"
                  >
                    <i className={`foo-icon ${social.icon}`}></i>
                    <span className="foo-social-label">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Quick Links */}
          {links && links.length > 0 && (
            <div className="foo-col foo-col-links">
              <h2 className="foo-section-title">Quick links</h2>
              <div className="foo-links-list">
                {links.map((link, i) => (
                  <a key={i} href={link.href} className="foo-link-item">
                    {link.icon && <i className={`foo-icon-link ${link.icon}`}></i>}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Column 4 — Contact */}
      </div>

      {rights && (
        <div className="foo-rights-wrapper">
          <div className="foo-rights">
            <p className="foo-rights-text">{rights}</p>
          </div>
        </div>
      )}
    </footer>
  );
};

export { Footer };

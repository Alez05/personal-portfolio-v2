import { navSocials } from "../../../../app/api";
import "./nav-socials.css";

const NavSocials = () => {
  return (
    <div className="nav-socials">
      {navSocials.map((social) => (
        <a
          key={social.platform}
          className="nav-social"
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
  );
};

export { NavSocials };

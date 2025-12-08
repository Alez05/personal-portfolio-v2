"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Helper to check if link is active
  const isActive = (path: string) => (pathname === path ? "active" : "");

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <a className="nav-logo" href="/">
        <span className="nav-logo-a">A</span>lexandru Cercel
      </a>

      <ul className="nav-links">
        <li>
          <a href="/" className={isActive("/")}>Home</a>
        </li>
        <li>
          <a href="/about" className={isActive("/about")}>About</a>
        </li>
        <li>
          <a href="/projects" className={isActive("/projects")}>Projects</a>
        </li>
        <li>
          <a href="/blog" className={isActive("/blog")}>Blog</a>
        </li>
        <li>
          <a href="/contact" className={isActive("/contact")}>Hire me</a>
        </li>
      </ul>

      <button
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        className="burger"
        onClick={toggleMenu}
      >
        <i
          className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
          style={{ fontSize: "30px" }}
        ></i>
      </button>

      <div className={`dropdown ${isMenuOpen ? "show" : ""}`}>
        <a href="/" className={isActive("/")} onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="/about" className={isActive("/about")} onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="/projects" className={isActive("/projects")} onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="/blog" className={isActive("/blog")} onClick={() => setIsMenuOpen(false)}>Blog</a>
        <a href="/contact" className={isActive("/contact")} onClick={() => setIsMenuOpen(false)}>Hire me</a>
      </div>
    </nav>
  );
};

export { Navbar };

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => (pathname === path ? "active" : "");

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <a className="nav-logo" href="/">
        <span className="nav-logo-a">W</span>eb Developer
      </a>

      <ul className="nav-links">
        <li><a href="/" className={isActive("/")}>Home</a></li>
        <li><a href="/about" className={isActive("/about")}>About</a></li>
        <li><a href="/projects" className={isActive("/projects")}>Projects</a></li>
        <li><a href="/blog" className={isActive("/blog")}>Blog</a></li>
        <li><a href="/contact" className={isActive("/contact")}>Hire me</a></li>
      </ul>

      {/* Burger button using spans */}
      <button
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        className={`burger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`dropdown ${isMenuOpen ? "show" : ""}`}>
        <a href="/" className={`nav-dropdown-mobile ${isActive("/")}`} onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="/about" className={`nav-dropdown-mobile ${isActive("/about")}`} onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="/projects" className={`nav-dropdown-mobile ${isActive("/projects")}`} onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="/blog" className={`nav-dropdown-mobile ${isActive("/blog")}`} onClick={() => setIsMenuOpen(false)}>Blog</a>
        <a href="/contact" className={`nav-dropdown-mobile ${isActive("/contact")}`} onClick={() => setIsMenuOpen(false)}>Hire me</a>
      </div>
    </nav>
  );
};

export { Navbar };

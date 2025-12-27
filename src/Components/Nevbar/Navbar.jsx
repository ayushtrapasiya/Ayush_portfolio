import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { IoIosMoon } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="/">
            Ayush<span>.</span>
          </Link>
        </div>

        {/* Menu */}
        <ul className={`${styles.menu} ${menuOpen ? styles.active : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
        </ul>

        {/* Right Side */}
        <div className={styles.right}>
          {/* Theme Toggle */}
          <button
            className={styles.themeBtn}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <IoIosMoon size={35}/> : <IoSunnySharp color="white" size={35} />}
          </button>

          {/* Hamburger */}
          <div
            className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

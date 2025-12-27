import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.content}>
          <p className={styles.greeting}>Hi, I’m</p>

          <h1 className={styles.title}>
            Ayush Patel <br />
            <span>React JS Developer</span>
          </h1>

          <p className={styles.description}>
            I build modern, responsive and scalable web applications
            using React, JavaScript and clean UI practices.
          </p>

          <div className={styles.actions}>
            <Link to="/projects" className={styles.primaryBtn}>
              View Projects
            </Link>

            <a
              href="/Ayush_Trapasiya.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryBtn}
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className={styles.visual}>
          <div className={styles.circle}></div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        {/* Left Side */}
        <div className={styles.left}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageCircle}></div>
          </div>
        </div>

        {/* Right Side */}
        <div className={styles.right}>
          <h2 className={styles.heading}>About Me</h2>

          <p className={styles.text}>
            I am a <strong>React JS Developer</strong> with over
            <strong> 1+ year of experience</strong> in building scalable,
            responsive and performance-optimized web applications.
          </p>

          <p className={styles.text}>
            I specialize in creating clean UI components, integrating REST APIs,
            managing application state, and writing maintainable, reusable code.
          </p>

          <p className={styles.text}>
            I enjoy solving real-world problems and continuously improving my
            skills by working on production-grade projects.
          </p>

          {/* Highlights */}
          <div className={styles.highlights}>
            <div className={styles.card}>
              <h3>1+ Year</h3>
              <p>Experience</p>
            </div>
            <div className={styles.card}>
              <h3>5+</h3>
              <p>Projects</p>
            </div>
            <div className={styles.card}>
              <h3>React</h3>
              <p>Specialization</p>
            </div>
          </div>

          {/* EXPERIENCE TIMELINE */}
          <div className={styles.experience}>
            <h3 className={styles.expHeading}>Experience</h3>

            <div className={styles.timeline}>
              {/* Internship */}
              <div className={styles.timelineItem}>
                <div className={styles.dot}></div>
                <div className={styles.content}>
                  <h4>React JS Intern — SwizzDigi Pvt Ltd</h4>
                  <span>3 Months · 2024</span>
                  <p>
                    Built responsive UI components using React, CSS Modules and
                    JavaScript. Worked on API integration, form validation and
                    reusable component architecture.
                  </p>
                </div>
              </div>

              {/* Full Time */}
              <div className={styles.timelineItem}>
                <div className={styles.dot}></div>
                <div className={styles.content}>
                  <h4>React Developer — Nexora Tech (AmTech)</h4>
                  <span>Jan 2025 – Dec 2025</span>
                  <p>
                    Worked on Nexora POS and 135° Admin Dashboard with real-time
                    order management, WebSockets and role-based access.
                  </p>
                  <p>
                    Built Jewelry E-Commerce website with payment gateway and
                    loyalty points. Developed Zevlo Learning Platform with
                    course modules, user dashboard and REST API integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* END EXPERIENCE */}
        </div>
      </div>
    </section>
  );
}

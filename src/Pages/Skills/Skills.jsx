import React from "react";
import styles from "./Skills.module.css";

const professionalSkills = [
  "Problem Solving",
  "Communication Skills",
  "Quick Learner",
  "Team Collaboration",
  "Debugging & Troubleshooting",
];

const technicalSkills = [
  "React.js",
  "JavaScript (ES6+)",
  "React Router",
  "REST APIs",
  "Bootstrap",
  "JWT Authentication",
  "Zustand",
  "HTML5",
  "CSS3",
  "Git & GitHub",
  "WebSockets",
];

export default function Skills() {
  return (
    <section className={styles.skills}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2>Skills</h2>
          <p>
            A combination of professional mindset and strong technical
            expertise.
          </p>
        </div>

        {/* Professional Skills */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Professional Skills</h3>

          <div className={styles.professionalGrid}>
            {professionalSkills.map((skill, index) => (
              <div key={index} className={styles.professionalCard}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Technical Skills</h3>

          <div className={styles.techGrid}>
            {technicalSkills.map((skill, index) => (
              <div key={index} className={styles.techCard}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

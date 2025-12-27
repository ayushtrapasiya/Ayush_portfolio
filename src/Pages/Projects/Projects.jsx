import React, { useState } from "react";
import styles from "./Projects.module.css";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "E-Commerce Web App",
    description:
      "Full-featured e-commerce platform with cart, auth and API integration.",
    tech: ["React", "CSS Modules", "REST APIs", "JWT"],
    video: "/videos/ecommerce.mp4",
    github: "#",
  },
  {
    title: "Admin Dashboard",
    description:
      "Role-based admin panel with CRUD, protected routes and tables.",
    tech: ["React", "Redux", "Axios"],
    video: "/videos/dashboard.mp4",
    github: "#",
  },
];

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2>Projects</h2>
          <p>Some of my real-world React applications</p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={styles.techStack}>
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
              </div>

              <div className={styles.actions}>
                <button
                  className={styles.primaryBtn}
                  onClick={() => setActiveVideo(project.video)}
                >
                  Live Demo
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryBtn}
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeVideo && (
        <ProjectModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}

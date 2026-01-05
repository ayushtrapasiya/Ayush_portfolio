import React, { useState } from "react";
import styles from "./Projects.module.css";
import ProjectModal from "./ProjectModal";
const projects = [
 
  {
    title: "Admin Dashboard",
    description:
      "Role-based admin panel with CRUD operations, protected routes and dynamic tables.",
    tech: ["React", "Redux", "Axios"],
    image: "/images/135-deg.png",
    video: "/135.mp4",
    // github: "#",
  },
  {
    title: "Nexora POS System",
    description:
      "Responsive POS system with real-time order updates using WebSockets, reusable components and optimized UI workflows.",
    tech: ["React", "WebSockets", "Reusable Components", "UI Optimization"],
    image: "/images/nexora-pos.jpg",
    video: "/videos/nexora-pos.mp4",
    // github: "#",
  },
  {
    title: "Jewelry E-Commerce Website",
    description:
      "Complete e-commerce flow including product pages, cart, checkout, payment gateway, coupons and loyalty points.",
    tech: [
      "React",
      "Payment Gateway",
      "Coupons",
      "Loyalty Points",
      "REST APIs",
    ],
    image: "/images/jewelry.jpg",
    video: "/videos/jewelry-ecommerce.mp4",
    // github: "#",
  },
  {
    title: "Zevlo Learning Platform",
    description:
      "Learning management platform with course modules, user dashboard, certificate system, responsive UI and API integration.",
    tech: [
      "React",
      "User Dashboard",
      "Certificates",
      "Responsive UI",
      "REST APIs",
    ],
    image: "/images/Zevlo.png",
    video: "/videos/zevlo-learning.mp4",
    // github: "#",
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
                <div className={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                </div>
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

                {/* <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryBtn}
                >
                  GitHub
                </a> */}
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

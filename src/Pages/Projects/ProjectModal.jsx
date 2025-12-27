import React from "react";
import styles from "./Projects.module.css";

export default function ProjectModal({ video, onClose }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <video
          src={video}
          controls
          autoPlay
          className={styles.video}
        />
      </div>
    </div>
  );
}

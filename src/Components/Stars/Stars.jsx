import React from "react";
import styles from "./Stars.module.css";

export default function Stars() {
  return (
    <div className={styles.starsWrapper}>
      {Array.from({ length: 40 }).map((_, i) => (
        <span
          key={i}
          className={styles.star}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}

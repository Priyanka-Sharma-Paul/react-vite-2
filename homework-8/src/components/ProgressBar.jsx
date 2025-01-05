import React, { useEffect } from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ value, onComplete }) => {
  const percent = Math.min(value, 100);

  useEffect(() => {
    if (percent >= 100) {
      onComplete();
    }
  }, [percent, onComplete]);

  return (
    <div className={styles.container}>
        <span
          className={styles.percent}
          style={{
            color: percent > 50 ? "white" : "black",
          }}
        >
          {percent.toFixed()}%
        </span>
      <div
        className={styles.progressBar}
        style={{ width: `${percent}%` }}
      >
        
      </div>
    </div>
  );
};

export default ProgressBar;

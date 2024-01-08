import React from "react";

import styles from "./solution-desc-card.module.css";

export const SolutionDescCard = ({
  index,
  title,
  desc,
}: {
  index?: number;
  title: string;
  desc: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {index && <div className={styles.tag}>{`POINT 0${index}`}</div>}
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.content}> {desc}</div>
    </div>
  );
};

import React from "react";

import styles from "./faq-card.module.css";

const FaqCard = ({
  tag,
  title,
  children,
}: {
  tag: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.tag}>{tag}</span>
        <span className={styles.title}>{title}</span>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default FaqCard;

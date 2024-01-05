import React from "react";

import styles from "./page-title.module.css";

const PageTitle = ({ title, desc }: { title: string; desc?: string }) => {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
};

export default PageTitle;

import React from "react";

import styles from "./hero-section.module.css";

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.sub}>Great Era of Data</span>
        <span className={styles.message}>
          데이터의 잠재력을 극대화하는
          <br />
          <span className={styles.emphasis}>전문 솔루션 기업</span>
        </span>
      </div>
    </section>
  );
};

export default HeroSection;

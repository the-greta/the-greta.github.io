import Link from "next/link";
import React from "react";

import styles from "./hero-section.module.css";

const HeroSection = () => {
  return (
    <section className={styles.section} id="hero">
      {/* <Image
        src="/hero-bg.jpg"
        alt="hero-bg"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className={styles["bg-image"]}
      /> */}
      <div className={styles.overlay}>
        <div className={styles.container}>
          <span className={styles.sub}>Great Era of Data</span>
          <span className={styles.message}>
            데이터의 잠재력을 극대화하는
            <br />
            <span className={styles.emphasis}>전문 솔루션 기업</span>
          </span>
        </div>
      </div>
      <Link href="#solution" className={styles.scroll}>
        scroll down
      </Link>
    </section>
  );
};

export default HeroSection;

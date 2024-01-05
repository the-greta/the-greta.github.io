import Link from "next/link";
import React from "react";

import styles from "./layout.module.css";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>회사소개</h1>
      </section>
      <nav className={styles.nav}>
        <Link href="/about/ceo-message" className={styles.link}>
          CEO인사
        </Link>
        <Link href="/about/company" className={styles.link}>
          회사정보
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default AboutLayout;

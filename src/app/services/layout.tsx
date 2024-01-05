import Link from "next/link";
import React from "react";

import styles from "./layout.module.css";

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>솔루션</h1>
      </section>
      <nav className={styles.nav}>
        <Link href="/services/synthegra">SYNTHEGRA</Link>
      </nav>
      {children}
    </div>
  );
};

export default ServicesLayout;

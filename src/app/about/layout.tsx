"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import styles from "./layout.module.css";

const AboutLayout = ({ children }: { children: React.ReactNode }) => {
  const currentRoute = usePathname();

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>회사소개</h1>
      </section>
      <nav className={styles.nav}>
        <div className={styles.wrap}>
          <Link
            href="/about/ceo-message"
            className={
              currentRoute === "/about/ceo-message"
                ? styles.active
                : styles.inactive
            }
          >
            CEO인사
          </Link>
          <Link
            href="/about/company"
            className={
              currentRoute === "/about/company"
                ? styles.active
                : styles.inactive
            }
          >
            회사정보
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default AboutLayout;

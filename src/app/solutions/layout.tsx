"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import styles from "./layout.module.css";

const ServicesLayout = ({ children }: { children: React.ReactNode }) => {
  const currentRoute = usePathname();

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <h1>솔루션</h1>
      </section>
      <nav className={styles.nav}>
        <div className={styles.wrap}>
          <Link
            href="/solutions/synthegra"
            className={
              currentRoute === "/solutions/synthegra"
                ? styles.active
                : styles.inactive
            }
          >
            SYNTHEGRA
          </Link>
          <Link
            href="/solutions/mvc"
            className={
              currentRoute === "/solutions/mvc"
                ? styles.active
                : styles.inactive
            }
          >
            MVC
          </Link>
          <Link
            href="/solutions/faq"
            className={
              currentRoute === "/solutions/faq"
                ? styles.active
                : styles.inactive
            }
          >
            FAQ
          </Link>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default ServicesLayout;

import Link from "next/link";
import React from "react";

import styles from "./header.module.css";

const ContactButton = () => {
  return (
    <Link href="#" className={styles["contact-button"]}>
      contact us
    </Link>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>GRETA</div>
        <nav className={styles.nav}>
          <Link href="#">
            <span className={styles["nav-menu"]}>about us</span>
          </Link>
          <Link href="#">
            <span className={styles["nav-menu"]}>services</span>
          </Link>
        </nav>
        <div>
          <ContactButton />
        </div>
      </div>
    </header>
  );
};

export default Header;

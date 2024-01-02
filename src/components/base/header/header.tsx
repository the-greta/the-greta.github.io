import Image from "next/image";
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
        <div>
          <Image
            src="/logo/greta_white.png"
            alt="greta-logo"
            height={60}
            width={158}
          />
        </div>
        <nav className={styles.nav}>
          <Link href="#" className={styles["nav-menu"]}>
            about us
          </Link>
          <Link href="#" className={styles["nav-menu"]}>
            services
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

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import styles from "./header.module.css";

const ContactButton = () => {
  return (
    <Link href="#" className={styles["contact-button"]}>
      contact us
    </Link>
  );
};

const Header = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isActive, setIsActive] = useState(false);
  const handleMouseEnter = (): void => {
    setIsActive(true);
  };
  const handleMouseLeave = (): void => {
    setIsActive(false);
  };

  return (
    <header
      className={[
        styles.header,
        isLandingPage && !isScrolled ? styles.transparent : "",
      ].join(" ")}
    >
      <div className={styles.container}>
        <div>
          <Image
            src={
              isLandingPage && !isScrolled
                ? "/logo/greta_white.png"
                : "/logo/greta_black.png"
            }
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

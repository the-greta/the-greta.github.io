"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button/button";

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

  const [showMobileNav, setShowMobileNav] = useState(false);

  const condition = isLandingPage && !isScrolled;

  const styleClassName = [
    styles.header,
    condition ? styles.transparent : "",
  ].join(" ");

  return (
    <header className={styleClassName}>
      <div className={styles.container}>
        <div>
          <Link href="/" className={styles["nav-menu"]}>
            <Image
              src={
                condition ? "/logo/greta_white.png" : "/logo/greta_black.png"
              }
              alt="greta-logo"
              height={45}
              width={118}
            />
          </Link>
        </div>

        <nav className={styles.nav}>
          <Link href="/about/ceo-message" className={styles["nav-menu"]}>
            about us
          </Link>
          <Link href="/solutions/synthegra" className={styles["nav-menu"]}>
            services
          </Link>
        </nav>

        {/* <div>
          <ContactButton />
        </div> */}
        <div className={[styles["mobile-menu-button"]].join(" ")}>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setShowMobileNav((o) => !o);
            }}
          >
            <Menu width={24} height={24} color={condition ? "#fff" : "#000"} />
          </Button>
        </div>
      </div>
      <div
        className={[
          styles["mobile-menu"],
          showMobileNav ? styles.open : styles.close,
        ].join(" ")}
      >
        <nav className={styles["mobile-nav"]}>
          <Link
            href="/about/ceo-message"
            className={styles["mobile-nav-menu"]}
            onClick={() => setShowMobileNav(false)}
          >
            about us
          </Link>
          <Link
            href="/solutions/synthegra"
            className={styles["mobile-nav-menu"]}
            onClick={() => setShowMobileNav(false)}
          >
            services
          </Link>
          {/* <Link href="#" className={styles["mobile-nav-menu"]}>
            contact us
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;

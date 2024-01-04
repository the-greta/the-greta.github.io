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

  const styleClassName = [
    styles.header,
    isLandingPage && !isScrolled ? styles.transparent : "",
  ].join(" ");

  return (
    <header className={styleClassName}>
      <div className={styles.container}>
        <div>
          <Image
            src={
              isLandingPage && !isScrolled
                ? "/logo/greta_white.png"
                : "/logo/greta_black.png"
            }
            alt="greta-logo"
            height={45}
            width={118}
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
        <div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setShowMobileNav((o) => !o);
            }}
          >
            <Menu className={styles["mobile-menu-button"]} />
          </Button>
        </div>
      </div>
      <div
        className={[
          styles["mobile-menu"],
          showMobileNav ? styles.open : styles.close,
        ].join(" ")}
      >
        <nav>
          <Link href="#" className={styles["nav-menu"]}>
            about us
          </Link>
          <Link href="#" className={styles["nav-menu"]}>
            services
          </Link>
          <ContactButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;

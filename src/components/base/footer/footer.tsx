import Image from "next/image";
import React from "react";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["main-info"]}>
        <div className={styles["logo-address"]}>
          <div>
            <Image
              src="/logo/logo_mini.png"
              alt="greta-logo"
              height={60}
              width={66}
            />
          </div>
          <div>
            <p>Contact</p>
            <p className={styles.copyright}>Email: adm_archer@the-greta.com</p>
            <p className={styles.copyright}>Tel: 070-8648-1024</p>
          </div>
        </div>
      </div>
      <div className={styles["sub-info"]}>
        <div className={styles.copyright}>
          <span>©GRETA Inc. All rights reserved.</span>
          <span>Design by DESIGNART</span>
        </div>
        {/* <div className={styles["footer-menu"]}>
          <Link href="#">이용약관</Link>
          <span className={styles.dot}>·</span>
          <Link href="#">개인정보처리방침</Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;

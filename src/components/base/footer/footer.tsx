import Image from "next/image";
import Link from "next/link";
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
            <p>서울특별시 서대문구 신촌로 141 은하빌딩 302호</p>
            <p className={styles["address-en"]}>
              EunHa Building 302, Sinchon-ro 141, Seodaemun-gu, Seoul-si,
              Republic of Korea
            </p>
          </div>
        </div>
        <div className={styles.tel}>
          <span>Tel. 070-8648-1024</span>
        </div>
      </div>
      <div className={styles["sub-info"]}>
        <div className={styles.copyright}>
          <span>©GRETA Inc. All rights reserved.</span>
          <span>Design by DESIGNART</span>
        </div>
        <div className={styles["footer-menu"]}>
          <Link href="#">이용약관</Link>
          <span className={styles.dot}>·</span>
          <Link href="#">개인정보처리방침</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

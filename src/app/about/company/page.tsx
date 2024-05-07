import React from "react";

import PageTitle from "@/app/about/_components/page-title/page-title";
import CeoInfo from "@/app/about/company/_components/ceo-info/ceo-info";
import History from "@/app/about/company/_components/history/history";
import Partnership from "@/app/about/company/_components/partnership/partnership";

import styles from "./page.module.css";

const CeoMessagePage = () => {
  return (
    <section className={styles.container}>
      <div>
        <PageTitle title={"회사 정보"} />

        <div className={styles.message}>
          그레타는 데이터 사이언스 분야에서 <br />
          국내 최고 수준 전문 인력과 지식을 보유하고 있습니다.
        </div>

        <div className={styles.content}>
          <CeoInfo />
          <History />
          <Partnership />
        </div>
      </div>
    </section>
  );
};

export default CeoMessagePage;

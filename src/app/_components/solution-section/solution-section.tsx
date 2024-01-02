import React from "react";

import {
  SectionDesc,
  SectionHeader,
  SectionTitle,
} from "@/app/_components/section-header/section-title";

import styles from "./solution-section.module.css";

const SolutionCard = ({
  tagList,
  children,
}: {
  tagList: string[];
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        {tagList.map((tag, i) => (
          <span key={i} className={styles.tag}>
            # {tag}
          </span>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};

const SolutionSection = () => {
  return (
    <section className={styles.section}>
      <SectionHeader>
        <SectionTitle>solution</SectionTitle>
        <SectionDesc>
          주식회사 그레타는 고객 맞춤형 솔루션을 제공합니다.
        </SectionDesc>
      </SectionHeader>
      <div className={styles["solution-container"]}>
        <SolutionCard tagList={["합성", "증강"]}>
          <h3 className={styles["solution-card-title"]}>synthegra</h3>
          <p className={styles["solution-card-sub"]}>
            All-in-One 합성데이터 생성 및 평가 솔루션
          </p>
        </SolutionCard>
        <div style={{ paddingTop: "2.5rem" }}>
          <SolutionCard tagList={["수집", "시각화"]}>
            <h3 className={styles["solution-card-title"]}>MVC</h3>
            <p className={styles["solution-card-sub"]}>
              기업 생태계 정보 시각화
            </p>
          </SolutionCard>
        </div>
        <SolutionCard tagList={["분석", "예측"]}>
          <h3 className={styles["solution-card-title"]}>
            Data Analysis Consulting
          </h3>
          <p className={styles["solution-card-sub"]}>데이터 활용 컨설팅</p>
        </SolutionCard>
      </div>
    </section>
  );
};

export default SolutionSection;

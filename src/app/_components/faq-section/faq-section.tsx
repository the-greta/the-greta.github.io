import React from "react";

import {
  SectionDesc,
  SectionHeader,
  SectionTitle,
} from "@/app/_components/section-header/section-title";

import styles from "./faq-section.module.css";

const FaqCard = ({
  tag,
  children,
}: {
  tag: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles["faq-card"]}>
      <div>
        <span className={styles.tag}>{tag}</span>
      </div>
      <div className={styles["faq-card-content"]}>{children}</div>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section className={styles.section}>
      <SectionHeader>
        <SectionTitle>faq</SectionTitle>
        <SectionDesc>자주 묻는 질문을 빠르게 만나보세요.</SectionDesc>
      </SectionHeader>
      <div className={styles["faq-card-container"]}>
        <FaqCard tag={"FAQ 01"}>
          <span className={styles["faq-card-title"]}>합성데이터란?</span>
          <div>아이콘</div>
        </FaqCard>
        <FaqCard tag={"FAQ 01"}>
          <span className={styles["faq-card-title"]}>합성데이터란?</span>
          <div>아이콘</div>
        </FaqCard>
        <FaqCard tag={"FAQ 01"}>
          <span className={styles["faq-card-title"]}>합성데이터란?</span>
          <div>아이콘</div>
        </FaqCard>
        <FaqCard tag={"FAQ 01"}>
          <span className={styles["faq-card-title"]}>합성데이터란?</span>
          <div>아이콘</div>
        </FaqCard>
      </div>
    </section>
  );
};

export default FaqSection;

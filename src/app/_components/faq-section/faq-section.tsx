import React from "react";

import {
  SectionDesc,
  SectionHeader,
  SectionTitle,
} from "@/app/_components/section-header/section-title";

import styles from "./faq-section.module.css";

const FAQ_CARD_LIST = [
  {
    title: "합성데이터란?",
  },
  {
    title: "MVC란?",
  },
  {
    title: "합성데이터의 장단점?",
  },
  {
    title: "합성데이터의 전망?",
  },
];

const FaqCard = ({
  tag,
  title,
  children,
}: {
  tag: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles["faq-card"]}>
      <div>
        <span className={styles.tag}>{tag}</span>
      </div>
      <div className={styles["faq-card-content"]}>
        <span className={styles["faq-card-title"]}>{title}</span>
        {children}
      </div>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section className={styles.section} id="faq">
      <SectionHeader>
        <SectionTitle>faq</SectionTitle>
        <SectionDesc>자주 묻는 질문을 빠르게 만나보세요.</SectionDesc>
      </SectionHeader>
      <div className={styles["faq-card-container"]}>
        {FAQ_CARD_LIST.map((card, i) => (
          <FaqCard key={i} tag={`FAQ 0${i + 1}`} title={card.title}>
            <div>아이콘</div>
          </FaqCard>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;

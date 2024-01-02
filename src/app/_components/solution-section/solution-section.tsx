import React from "react";

import {
  SectionDesc,
  SectionHeader,
  SectionTitle,
} from "@/app/_components/section-header/section-title";

import styles from "./solution-section.module.css";

const SOLUTION_CARD_LIST = [
  {
    title: "SYNTHEGRA",
    desc: "All-in-One 합성데이터 생성 및 평가 솔루션",
    tagList: ["합성", "증강"],
    imgUrl: "",
  },
  {
    title: "MVC",
    desc: "기업 생태계 및 공급망 정보 시각화",
    tagList: ["수집", "시각화"],
    imgUrl: "",
  },
  {
    title: "Data Analysis Consulting",
    desc: "데이터 분석·활용 컨설팅",
    tagList: ["분석", "예측"],
    imgUrl: "",
  },
];

const SolutionCard = ({
  title,
  desc,
  tagList,
}: {
  title: string;
  desc: string;
  tagList: string[];
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
      <div>
        <h3 className={styles["solution-card-title"]}>{title}</h3>
        <p className={styles["solution-card-sub"]}>{desc}</p>
      </div>
    </div>
  );
};

const SolutionSection = () => {
  return (
    <section className={styles.section}>
      <SectionHeader>
        <SectionTitle>solution</SectionTitle>
        <SectionDesc>그레타의 데이터 솔루션</SectionDesc>
      </SectionHeader>
      <div className={styles["solution-container"]}>
        {SOLUTION_CARD_LIST.map((card, i) => (
          <SolutionCard
            key={i}
            title={card.title}
            desc={card.desc}
            tagList={card.tagList}
          />
        ))}
      </div>
    </section>
  );
};

export default SolutionSection;

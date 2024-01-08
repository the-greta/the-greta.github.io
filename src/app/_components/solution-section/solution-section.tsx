import Image from "next/image";
import React from "react";

import {
  SectionDesc,
  SectionHeader,
  SectionTitle,
} from "@/app/_components/section-header/section-title";
import SolutionCard from "@/app/_components/solution-section/_components/solution-card/solution-card";
import { SOLUTION_CARD_LIST } from "@/app/_components/solution-section/_const/const";

import styles from "./solution-section.module.css";

const SolutionSection = () => {
  return (
    <section className={styles.section} id="solution">
      <Image
        src="/solution/solution-bg.jpg"
        alt="solution-bg"
        fill
        quality={100}
        priority={true}
        style={{
          objectFit: "cover",
          objectPosition: "center",
          background:
            "linear-gradient(to bottom, rgb(255 255 255 / 5%), rgb(0 0 0 / 80%) )",
        }}
      />
      <div className={styles["section-container"]}>
        <SectionHeader>
          <SectionTitle theme="dark">solution</SectionTitle>
          <SectionDesc theme="dark">그레타의 데이터 솔루션</SectionDesc>
        </SectionHeader>
        <div className={styles["solution-container"]}>
          {SOLUTION_CARD_LIST.map((card, i) => (
            <SolutionCard
              key={i}
              title={card.title}
              desc={card.desc}
              tagList={card.tagList}
              imgUrl={card.imgUrl}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

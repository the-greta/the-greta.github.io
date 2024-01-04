import { BarChart3, Boxes, DatabaseZap, Lightbulb } from "lucide-react";
import React from "react";

import FaqCard from "@/app/_components/faq-section/_components/faq-card/faq-card";
import {
  SectionDesc,
  SectionHeader,
  SectionTitle,
} from "@/app/_components/section-header/section-title";

import styles from "./faq-section.module.css";

const FaqSection = () => {
  return (
    <section className={styles.section} id="faq">
      <SectionHeader>
        <SectionTitle>faq</SectionTitle>
        <SectionDesc>자주 묻는 질문을 빠르게 만나보세요.</SectionDesc>
      </SectionHeader>
      <div className={styles["faq-card-container"]}>
        <FaqCard tag="FAQ 01" title="합성데이터란?">
          <div className={styles["icon-wrap"]}>
            <span className={styles.circle} />
            <DatabaseZap
              color="#00516f"
              strokeWidth={1.8}
              className={styles.icon}
            />
          </div>
        </FaqCard>
        <FaqCard tag="FAQ 02" title="MVC란?">
          <div className={styles["icon-wrap"]}>
            <span className={styles.circle} />
            <Boxes color="#00516f" strokeWidth={1.5} className={styles.icon} />
          </div>
        </FaqCard>
        <FaqCard tag="FAQ 03" title={`합성데이터의 \n장단점?`}>
          <div className={styles["icon-wrap"]}>
            <span className={styles.circle} />
            <Lightbulb
              color="#00516f"
              strokeWidth={1.8}
              className={styles.icon}
            />
          </div>
        </FaqCard>
        <FaqCard tag="FAQ 04" title="합성데이터의 전망?">
          <div className={styles["icon-wrap"]}>
            <span className={styles.circle} />
            <BarChart3
              color="#00516f"
              strokeWidth={1.8}
              className={styles.icon}
            />
          </div>
        </FaqCard>
      </div>
    </section>
  );
};

export default FaqSection;

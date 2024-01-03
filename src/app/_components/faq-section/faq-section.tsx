import { BarChart3, Boxes, DatabaseZap, Lightbulb } from "lucide-react";
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
    <section className={styles.section} id="faq">
      <SectionHeader>
        <SectionTitle>faq</SectionTitle>
        <SectionDesc>자주 묻는 질문을 빠르게 만나보세요.</SectionDesc>
      </SectionHeader>
      <div className={styles["faq-card-container"]}>
        <FaqCard tag={`FAQ 01`}>
          <span className={styles["faq-card-title"]}>합성데이터란?</span>
          <div className={styles["icon-wrap"]}>
            <span className={styles.circle} />
            <DatabaseZap
              width={56}
              height={56}
              color="#00516f"
              strokeWidth={1.8}
              className={styles.icon}
            />
          </div>
        </FaqCard>
        <FaqCard tag={`FAQ 02`}>
          <span className={styles["faq-card-title"]}>MVC란?</span>
          <div className={styles["icon-wrap"]}>
            <span className={styles.circle} />
            <Boxes
              width={56}
              height={56}
              color="#00516f"
              strokeWidth={1.8}
              className={styles.icon}
            />
          </div>
        </FaqCard>
        <FaqCard tag={`FAQ 03`}>
          <span className={styles["faq-card-title"]}>
            합성데이터의
            <br />
            장단점?
          </span>
          <div className={styles["icon-wrap"]}>
            <span className={styles.circle} />
            <Lightbulb
              width={56}
              height={56}
              color="#00516f"
              strokeWidth={1.8}
              className={styles.icon}
            />
          </div>
        </FaqCard>
        <FaqCard tag={`FAQ 04`}>
          <span className={styles["faq-card-title"]}>합성데이터의 전망?</span>
          <div className={styles["icon-wrap"]}>
            <span className={styles.circle} />
            <BarChart3
              width={56}
              height={56}
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

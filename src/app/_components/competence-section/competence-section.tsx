"use client";

import React from "react";

import CompetenceCarousel from "@/app/_components/competence-carousel/competence-carousel";
import {
  SectionDesc,
  SectionHeader,
  SectionTitle,
} from "@/app/_components/section-header/section-title";

import styles from "./competence-section.module.css";

const CompetenceSection = () => {
  return (
    <section className={styles.section} id="competence">
      <SectionHeader>
        <SectionTitle>competence</SectionTitle>
        <SectionDesc>
          주식회사 그레타는 국내 최고 전문가가 함께합니다.
        </SectionDesc>
      </SectionHeader>
      <div>
        <CompetenceCarousel />
      </div>
    </section>
  );
};

export default CompetenceSection;

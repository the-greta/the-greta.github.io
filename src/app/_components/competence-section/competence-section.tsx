"use client";

import Autoplay from "embla-carousel-autoplay";
import React from "react";

import CarouselCard from "@/app/_components/carousel-card/carousel-card";
import {
  SectionDesc,
  SectionHeader,
  SectionTitle,
} from "@/app/_components/section-header/section-title";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel/carousel";

import styles from "./competence-section.module.css";

const CAROUSEL_CARD_LIST = [
  {
    title: "통계학 전문 인력",
    desc: "당사의 DS팀은 통계학 석박 과정을 이수 중이거나 완료한 전문인력으로 구성돼 있습니다.",
  },
];

const CarouselPlugin = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      style={{ width: "100%", maxWidth: "1200px" }}
    >
      <CarouselContent>
        {CAROUSEL_CARD_LIST.map((card, i) => (
          <CarouselCard key={i} index={i} title={card.title} desc={card.desc} />
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

const CompetenceSection = () => {
  return (
    <section className={styles.section}>
      <SectionHeader>
        <SectionTitle>competence</SectionTitle>
        <SectionDesc>
          주식회사 그레타는 국내 최고 전문가가 함께합니다.
        </SectionDesc>
      </SectionHeader>
      <div>
        <CarouselPlugin />
        {/* <span>통계학 전문 인력</span>
          <p>
            당사의 DS팀은 통계학 석박 과정을 이수 중이거나 완료한 전문인력으로
            구성돼 있습니다.
          </p>
        </CarouselPlugin> */}
      </div>
    </section>
  );
};

export default CompetenceSection;

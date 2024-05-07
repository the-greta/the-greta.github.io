import Link from "next/link";
import React from "react";

import {
  SectionDesc,
  SectionHeader,
  SectionTitle,
} from "@/app/_components/section-header/section-title";

import styles from "./article-section.module.css";

const ARTICLE_LIST = [
  {
    news: "중앙일보",
    title: "그레타, 올인원 합성데이터 상용 솔루션 ‘Synthegra’ 선봬",
    url: "https://www.joongang.co.kr/article/25245384",
    date: "2024.04.26",
  },
  {
    news: "조선비즈",
    title: "그레타, 올인원 합성데이터 상용 솔루션 ‘신테그라’ 선보여",
    url: "https://biz.chosun.com/it-science/ict/2024/04/26/4FTJRVIJIJA5ZCF4OQQ2YKMY7A/",
    date: "2024.04.26",
  },
  {
    news: "동아일보",
    title: "㈜그레타, All-in-one 합성데이터 상용 솔루션 ‘Synthegra’ 선보여",
    url: "https://www.donga.com/news/It/article/all/20240426/124666820/1",
    date: "2024.04.26",
  },
];

const ArticleSection = () => {
  return (
    <section id="articles" className={styles.section}>
      <SectionHeader>
        <SectionTitle>관련 기사</SectionTitle>
        <SectionDesc>그레타의 새로운 소식을 전해드립니다.</SectionDesc>
      </SectionHeader>
      <div className={styles.container}>
        {ARTICLE_LIST.map((article, i) => (
          <div key={i} className={styles.card}>
            <Link href={article.url} className={styles.title} target="_blank">
              {article.title}
            </Link>
            <div>
              <span className={styles.news}>
                {article.news} | {article.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleSection;

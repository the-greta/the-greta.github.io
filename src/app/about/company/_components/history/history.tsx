import React from "react";

import styles from "./history.module.css";

const HistoryCard = ({
  year,
  children,
}: {
  year: number;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.year}>{year}</div>
      <ul className={styles.content}>{children}</ul>
    </div>
  );
};

const History = () => {
  return (
    <div>
      <h3>연혁</h3>
      <div className={styles.history}>
        <HistoryCard year={2021}>
          <li>아이템(Tech Stars) 지원사업 선정</li>
          <li>주식회사 딕스 설립</li>
        </HistoryCard>
        <HistoryCard year={2022}>
          <li>사명 변경: 주식회사 그레타</li>
          <li>합성데이터 솔루션 SYNTHEGRA 베타버전 출시</li>
          <li>현대모비스 부품수요 예측 프로젝트 수행</li>
        </HistoryCard>
        <HistoryCard year={2023}>
          <li>중소벤처기업부 초기창업패키지 선정</li>
        </HistoryCard>
      </div>
    </div>
  );
};

export default History;

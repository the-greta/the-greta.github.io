import React from "react";

import styles from "./ceo-info.module.css";

export const CEO_LIST = [
  {
    name: "김현태",
    careerList: [
      "연세대학교 통계데이터사이언스학과 교수",
      " 한국신용정보원 적정성 평가위원회 평가위원",
      "삼성금융연수원 자문교수",
      "미국 계리사 (FSA)",
      "연세대학교 데이터사이언스연구소 소장(전)",
    ],
  },
  {
    name: "임종호",
    careerList: [
      "연세대학교 통계데이터사이언스학과 부교수",
      "조사연구학회 학술이사",
      "한국신용정보원 적정성 평가위원회 평가위원",
      "중앙선거여론조사심의위원회 자문위원",
      "연세대학교 데이터사이언스연구소 부소장(전)",
      "통계청 표본설계 위원회 자문위원(전)",
    ],
  },
];

const CeoCard = ({ ceo }: { ceo: { name: string; careerList: string[] } }) => {
  return (
    <div className={styles.card}>
      <div className={styles.name}>{ceo.name}</div>
      <ul className={styles.career}>
        {ceo.careerList.map((career, cci) => (
          <li key={cci}>{career}</li>
        ))}
      </ul>
    </div>
  );
};

const CeoInfo = () => {
  return (
    <div>
      <h3>공동대표</h3>
      <div className={styles.wrap}>
        {CEO_LIST.map((ceo, ci) => (
          <CeoCard key={ci} ceo={ceo} />
        ))}
      </div>
    </div>
  );
};

export default CeoInfo;

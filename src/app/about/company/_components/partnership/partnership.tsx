import React from "react";

import styles from "./partnership.module.css";

export const PARTNERSHIP_LIST = [
  {
    name: "의료 및 헬스케어",
    contentList: [
      {
        desc: "(주)심유",
        detailList: [
          "임상시험 수탁기관",
          "합성데이터 SW 판매 및 장기적 파트너십 체결",
        ],
      },
      {
        desc: "(주)엔포마레",
        detailList: ["바이오 정보 플랫폼 회사", "파트너십 체결"],
      },
    ],
  },
  {
    name: "에너지, ICT",
    contentList: [
      { desc: "가천대 산학협력단 MOU 체결" },
      {
        desc: "ITRC 데이터기반 에너지 시스템 혁신 연구센터 협력사 및 참여연구원",
      },
      { desc: "한국스마트그리드사업단 협업 체결" },
    ],
  },
  {
    name: "금융, 보험",
    contentList: [{ desc: "NICE지니데이타(주) 협업체결" }],
  },
];

const Partnership = () => {
  return (
    <div>
      <h3>파트너십</h3>
      <div className={styles.partnership}>
        {PARTNERSHIP_LIST.map((partnership, pi) => (
          <div key={pi}>
            <div className={styles.name}>{partnership.name}</div>
            <div>
              {partnership.contentList.map((content, ci) => (
                <div key={ci}>
                  <div>{content.desc}</div>
                  <div>
                    {content.detailList?.map((detail, di) => (
                      <div key={di}>{detail}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partnership;

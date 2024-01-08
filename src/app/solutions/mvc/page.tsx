import React from "react";

import PageTitle from "@/app/about/_components/page-title/page-title";
import { SolutionDescCard } from "@/app/solutions/_components/solution-desc-card.tsx/solution-desc-card";

import styles from "./page.module.css";

export const MVC_SERVICE_LIST = [
  {
    title: "전체 산업지도의 시각화",
    desc: "국내 다양한 산업들을 투자 관점에서 분류하고 이종 산업들의 관계와 \n상대적 위치를 조망할 수 있는 시각화된 지도를 제공",
  },
  {
    title: "개별 산업 내 공급망과 밸류체인 시각화 및 조망",
    desc: "분류된 개별 산업 안에 존재하는 기업들의 관련성을 공급망과 \n밸류체인 관점에 입각해 시각화하고 다양한 거시적 리스크들의 파급효과 분석",
  },
  {
    title: "개별 기업의 정보를 입체적으로 시각화",
    desc: "개별 기업의 다양한 재무/비재무 정보를 제공하고 \n동종기업들과의 입체적 비교를 통해 투자결정에 새로운 관점 제공",
  },
];

const MVCPage = () => {
  return (
    <section className={styles.container}>
      <div>
        <PageTitle
          title={"MVC"}
          desc={"Map of Value Chain\n기업 생태계 정보 시각화"}
        />

        <div className={styles.content}>
          <div>
            <h3>제공 서비스</h3>
            {/* <p className={styles.p}>
              SYNTHEGRA는 데이터 분석을 위한 자동화된 시스템을 제공하며, 통계 및
              AI 모델을 활용하여 데이터를 생성합니다.
            </p> */}
            <div className={styles.desc}>
              {MVC_SERVICE_LIST.map((solutionDesc, si) => (
                <SolutionDescCard
                  key={si}
                  index={si + 1}
                  title={solutionDesc.title}
                  desc={solutionDesc.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MVCPage;

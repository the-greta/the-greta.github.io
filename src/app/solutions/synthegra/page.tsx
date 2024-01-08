import Image from "next/image";
import React from "react";

import PageTitle from "@/app/about/_components/page-title/page-title";
import { SolutionDescCard } from "@/app/solutions/_components/solution-desc-card.tsx/solution-desc-card";

import styles from "./page.module.css";

const SYNTEHGRA_SERVICE_LIST = [
  {
    title: "데이터 합성",
    desc: "원데이터와 유사한 구조를 가지도록 가상(simulated)의 합성데이터를 생성",
  },
  {
    title: "데이터 평가",
    desc: "자사에서 개발한 DUPI 평가지표 및 그래프 등을 활용해 합성 결과를 평가",
  },
  {
    title: "데이터 재결합",
    desc: "특정한 키로 매핑하거나 유사 변수 탐색과 분석을 통해 두 데이터를 하나의 자료로 결합해 새로운 직관 제공",
  },
  {
    title: "데이터 분석",
    desc: "분석 목적에 따라 자동화된 시스템으로 통계/AI 모형을 이용해 분석하고 예측",
  },
];

const SynthegraPage = () => {
  return (
    <section className={styles.container}>
      <div>
        <PageTitle
          title={"SYNTHEGRA"}
          desc="All-in-One 합성데이터 생성 및 평가 솔루션"
        />

        <div className={styles.content}>
          <div>
            <p className={styles.p}>
              &nbsp;SYNTHEGRA는 데이터 분석, 평가, 결합 기능을 함께 제공하는
              All-in-One 합성데이터 솔루션입니다. <br />
              &nbsp;자동화된 시스템을 통해 데이터를 분석하고 합성데이터를 생성할
              수 있습니다. 생성된 합성데이터는 자체 개발한 평가지표와 그래프를
              통해 평가할 수 있으며, 이를 활용해 다양한 데이터 관련 이슈를
              해결할 수 있습니다.
            </p>
          </div>

          <div className={styles.qna}>
            <h3>합성데이터란?</h3>
            <p className={styles.p}>
              합성데이터는 원본 데이터와 유사한 구조를 가지도록 만들어진 가상의
              데이터입니다. 개인정보 보호, 새로운 시나리오의 테스트, 샘플링,
              데이터 불균형 문제 해결 등에 활용됩니다. 저비용으로 고품질의
              학습데이터를 생성할 수 있으며 규제로부터 자유롭다는 장점이
              있습니다.
            </p>
            <ul>
              <li>민감정보 대체활용</li>
              <li>AI 학습용 데이터 증강</li>
              <li>데이터 수집 비용 절감</li>
            </ul>
          </div>

          <div>
            <h3>제공 서비스</h3>
            <p className={styles.p}>
              SYNTHEGRA는 데이터 분석을 위한 자동화된 시스템을 제공하며, 통계 및
              AI 모델을 활용하여 데이터를 생성합니다.
            </p>
            <div className={styles.desc}>
              {SYNTEHGRA_SERVICE_LIST.map((solutionDesc, si) => (
                <SolutionDescCard
                  key={si}
                  index={si + 1}
                  title={solutionDesc.title}
                  desc={solutionDesc.desc}
                />
              ))}
            </div>
          </div>

          <div>
            <h3>Technical Engine</h3>
            <Image src="/engine.png" alt="engine" width={800} height={420} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SynthegraPage;

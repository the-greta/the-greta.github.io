import React from "react";

import PageTitle from "@/app/about/_components/page-title/page-title";

import styles from "./page.module.css";

const AboutPage = () => {
  return (
    <section className={styles.container}>
      <div>
        <PageTitle title={"CEO 인사"} />
        <div>
          <p className={styles.message}>
            빅데이터 시대의 진정한 도약을 위해, <br />
            혁신적인 합성데이터 솔루션을 제공해 <br />
            데이터의 현실적인 어려움을 극복하고자 합니다.
          </p>

          <p className={styles.content}>
            &nbsp;빅데이터 시대가 이미 다가왔지만 실제 현업에서는 AI 모형이나
            딥러닝 모형에 사용할 수 있는 양질의 데이터를 확보하는 것이 점점 더
            어려워지고 있습니다. 그 이유는 여러 산업영역에서 개인정보보호관련
            규제와 저작권 등의 이슈가 있어 수집이나 접근이 어렵기 때문이기도
            하고, 발생빈도가 극히 낮아 관측 자체가 어렵거나 큰 비용을 들여야만
            데이터 수집이 가능하기 때문이기도 합니다. 또한 방대한 데이터를
            수집하더라도 데이터의 편향이 심하거나 노이즈가 과다하게 포함된
            경우에도 데이터의 질적인 이슈가 생깁니다.
            <br />
            <br />
            &nbsp;저희 (주)그레타는 이러한 문제들을 해결할 수 있는 대안으로서
            합성데이터를 제안하고, 합성데이터를 생성, 평가하는 솔루션인
            ‘신테그라’를 개발해 다양한 기업들이 양질의 데이터를 사용할 수 있는
            길을 열어가고 있습니다. 향후에는 합성데이터와 관련된 데이터 결합과
            BI를 구현해 국내 데이터 시장을 개척해 나갈 계획입니다.
            <br />
            <br />
            &nbsp;데이터의 무한한 잠재력을 실현하고 혁신의 길을 여는
            (주)그레타와 함께하십시오. 미래를 위한 데이터 혁명의 중심에 함께
            서겠습니다.
          </p>
          <p className={styles.signature}>
            <span>주식회사 그레타 공동대표</span>
            <br />
            김현태, 임종호
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

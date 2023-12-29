import React from "react";

import { Card, CardContent, CardHeader } from "@/components/ui/card/card";

const SolutionCard = ({
  tagList,
  children,
}: {
  tagList: string[];
  children: React.ReactNode;
}) => {
  return (
    <Card>
      <CardHeader>
        {tagList.map((tag, i) => (
          <span key={i}># {tag}</span>
        ))}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

const SolutionSection = () => {
  return (
    <section>
      <div>
        <h2>solution</h2>
        <p>주식회사 그레타는 고객 맞춤형 솔루션을 제공합니다.</p>
      </div>
      <div>
        <SolutionCard tagList={["합성", "증강"]}>
          <h3>synthegra</h3>
          <p>All-in-One 합성데이터 생성 및 평가 솔루션</p>
        </SolutionCard>
        <SolutionCard tagList={["수집", "시각화"]}>
          <h3>MVC</h3>
          <p>기업 생태계 정보 시각화</p>
        </SolutionCard>
        <SolutionCard tagList={["분석", "예측"]}>
          <h3>Data </h3>
          <p>클라이언트별 맞춤형 서비스</p>
        </SolutionCard>
      </div>
    </section>
  );
};

export default SolutionSection;

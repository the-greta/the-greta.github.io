import React from "react";

const CarouselItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

const CompetenceSection = () => {
  return (
    <section>
      <div>
        <h2>competence</h2>
        <p>주식회사 그레타는 국내 최고 전문가가 함께합니다.</p>
      </div>
      <div>
        <CarouselItem>
          <span>통계학 전문 인력</span>
          <p>
            당사의 DS팀은 통계학 석박 과정을 이수 중이거나 완료한 전문인력으로
            구성돼 있습니다.
          </p>
        </CarouselItem>
      </div>
    </section>
  );
};

export default CompetenceSection;

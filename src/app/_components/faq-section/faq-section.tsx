import React from "react";

const FaqCard = ({
  tag,
  children,
}: {
  tag: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div>
        <span>{tag}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

const FaqSection = () => {
  return (
    <section>
      <div>
        <h2>faq</h2>
        <p>자주 묻는 질문을 빠르게 만나보세요.</p>
      </div>
      <div>
        <FaqCard tag={"FAQ 01"}>
          <div>합성데이터란?</div>
          <div>아이콘</div>
        </FaqCard>
      </div>
    </section>
  );
};

export default FaqSection;

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

import CarouselCard from "@/app/_components/competence-section/_components/carousel-card/carousel-card";
import { CarouselApi } from "@/components/ui/carousel/carousel";

import styles from "./competence-carousel.module.css";

const CAROUSEL_CARD_LIST = [
  {
    title: "통계학 전문 인력",
    desc: "당사의 DS팀은 데이터사이언스 석박 과정을 이수 중이거나\n완료한 전문인력으로 구성돼 있습니다.",
    imgUrl: "/competence/competence1.jpg",
  },
  {
    title: "In-Housing 역량",
    desc: "분석과제 정의부터 모델 구현까지 모든 단계를\n본사에서 처리할 수 있어 고객 요구에 빠르게 대응할 수 있습니다.",
    imgUrl: "/competence/competence2.jpg",
  },
  {
    title: "최적화 모델 연구개발",
    desc: "고객의 요구를 고려한 최적 솔루션을 직접 연구 개발해\n최상의 성능과 효율을 실현할 수 있습니다.",
    imgUrl: "/competence/competence3.jpg",
  },
  {
    title: "논문 및 연구활동",
    desc: "관련 논문을 다수 발표해 국내 최상위 전문지식을 확보하고 있습니다. \n현장 경험과 학문적 업데이트를 바탕으로 최신 데이터 사이언스 기술을 활용합니다.",
    imgUrl: "/competence/competence4.jpg",
  },
];

const CompetenceCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((emblaApi: CarouselApi) => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className={styles.container} ref={emblaRef}>
        <div className={styles["card-list-container"]}>
          {CAROUSEL_CARD_LIST.map((card, i) => (
            // <div key={i} className={styles["card-container"]}>
            <CarouselCard
              key={i}
              index={i}
              title={card.title}
              desc={card.desc}
              imgUrl={card.imgUrl}
            />
            // </div>
          ))}
        </div>
      </div>
      {/* <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div> */}
    </div>
  );
};
export default CompetenceCarousel;

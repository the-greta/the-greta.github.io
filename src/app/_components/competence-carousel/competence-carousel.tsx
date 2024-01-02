import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React from "react";

import CarouselCard from "@/app/_components/carousel-card/carousel-card";
import { CarouselApi } from "@/components/ui/carousel/carousel";

import styles from "./competence-carousel.module.css";

const CAROUSEL_CARD_LIST = [
  {
    title: "통계학 전문 인력",
    desc: "당사의 DS팀은 통계학 석박 과정을 이수 중이거나 완료한 전문인력으로 구성돼 있습니다.",
    imgUrl: "/test.jpg",
  },
  {
    title: "통계학 전문 인력",
    desc: "당사의 DS팀은 통계학 석박 과정을 이수 중이거나 완료한 전문인력으로 구성돼 있습니다.",
    imgUrl: "/test.jpg",
  },
  {
    title: "통계학 전문 인력",
    desc: "당사의 DS팀은 통계학 석박 과정을 이수 중이거나 완료한 전문인력으로 구성돼 있습니다.",
    imgUrl: "/test.jpg",
  },
  {
    title: "통계학 전문 인력",
    desc: "당사의 DS팀은 통계학 석박 과정을 이수 중이거나 완료한 전문인력으로 구성돼 있습니다.",
    imgUrl: "/test.jpg",
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

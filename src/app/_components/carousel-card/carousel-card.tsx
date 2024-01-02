import Image from "next/image";

import { Card, CardContent, CardHeader } from "@/components/ui/card/card";

import styles from "./carousel-card.module.css";

const CarouselCard = ({
  imgUrl,
  index,
  title,
  desc,
}: {
  imgUrl: string;
  index: number;
  title: string;
  desc: string;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image src={imgUrl} alt="competence" fill objectFit="cover" />
      </div>
      <Card className={styles.card}>
        <CardHeader className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div>
            <span className={styles.index}>0{index + 1}</span> / 04
          </div>
        </CardHeader>
        <CardContent className={styles.content}>{desc}</CardContent>
      </Card>
    </div>
  );
};

export default CarouselCard;

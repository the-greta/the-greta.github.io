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
        <img
          src={imgUrl}
          alt="competence"
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Card className={styles.card}>
          <CardHeader className={styles.header}>
            <div className={styles.title}>{title}</div>
            <div className={styles.index}>
              <span className={styles["current-index"]}>0{index + 1}</span>
              <span className={styles["total-index"]}>/ 04</span>
            </div>
          </CardHeader>
          <CardContent className={styles.content}>{desc}</CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CarouselCard;

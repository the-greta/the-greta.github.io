import { Card, CardContent, CardHeader } from "@/components/ui/card/card";

import styles from "./carousel-card.module.css";

const CarouselCard = ({
  index,
  title,
  desc,
}: {
  index: number;
  title: string;
  desc: string;
}) => {
  return (
    <>
      <div className={styles.background}>bg</div>
      <Card className={styles.container}>
        <CardHeader className={styles.header}>
          <div className={styles.title}>{title}</div>
          <div>
            <span className={styles.index}>{index}</span>
            /04
          </div>
        </CardHeader>
        <CardContent className={styles.content}>{desc}</CardContent>
      </Card>
    </>
  );
};

export default CarouselCard;

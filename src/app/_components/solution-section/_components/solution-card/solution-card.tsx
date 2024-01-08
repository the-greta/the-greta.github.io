import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "./solution-card.module.css";

const SolutionCard = ({
  title,
  desc,
  tagList,
  imgUrl,
  link,
}: {
  title: string;
  desc: string;
  tagList: string[];
  imgUrl: string;
  link?: string;
}) => {
  return (
    <Link className={styles.container} href={link || "#solution"}>
      <Image
        src={imgUrl}
        alt="solution"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className={styles.card}>
        <div className={styles["card-header"]}>
          {tagList.map((tag, i) => (
            <span key={i} className={styles.tag}>
              # {tag}
            </span>
          ))}
        </div>
        <div>
          <h3 className={styles["solution-card-title"]}>{title}</h3>
          <p className={styles["solution-card-sub"]}>{desc}</p>
        </div>
      </div>
    </Link>
  );
};

export default SolutionCard;

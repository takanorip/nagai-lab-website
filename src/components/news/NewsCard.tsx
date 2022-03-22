import React from "react";
import { ArrowUpRight } from "../common/icons/ArrowUpRight";
import styles from "./NewsCard.module.css";

type Props = {
  date: string;
  title: string;
  url?: string;
};

const NewsCard = ({ date, title, url }: Props) => {
  return (
    <a className={styles.card} href={url}>
      <div className={styles.inner}>
        <p className={styles.date}>{date}</p>
        <p className={styles.title}>{title}</p>
      </div>
      <ArrowUpRight className={styles.icon} />
    </a>
  );
};

export default NewsCard;

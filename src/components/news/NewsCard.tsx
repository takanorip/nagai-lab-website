import React, { FC } from "react";
import cx from "classnames";
import { ArrowUpRight } from "../common/icons/ArrowUpRight";
import styles from "./NewsCard.module.css";
import { useBudouX } from "../../utils/useBudoux";

type Props = {
  date: string;
  title: string;
  url?: string;
};

const NewsCard: FC<Props> = ({ date, title, url }) => {
  return (
    <a className={cx(styles.card, !url && styles.noLink)} href={url}>
      <div className={styles.inner}>
        <p className={styles.date}>{date}</p>
        <p className={styles.title}>{useBudouX(title)}</p>
      </div>
      {url ? <ArrowUpRight className={styles.icon} /> : null}
    </a>
  );
};

export default NewsCard;

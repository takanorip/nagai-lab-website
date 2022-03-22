import React from "react";
import { Email } from "./Email";
import styles from "./Footer.module.css";
import { dictionary } from "../../i18n/footer";

type Props = {
  lang?: "en" | "ja";
};

const Footer = ({ lang = "ja" }: Props) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>{dictionary.inquiry[lang]}</p>
      <p className={styles.email}>
        Email:
        <Email email="contact@rlg.sys.es.osaka-u.ac.jp" />
      </p>
      <p className={styles.small}>©2021 Nagai Laboratory</p>
    </footer>
  );
};

export default Footer;

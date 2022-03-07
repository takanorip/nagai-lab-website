import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>お問い合わせ</p>
      <p>Email: <a href="mailto:contact@rlg.sys.es.osaka-u.ac.jp">contact@rlg.sys.es.osaka-u.ac.jp</a></p>
      <p>©2021 Nagai Laboratory</p>
    </footer>
  );
}

export default Footer;

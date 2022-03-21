import React from 'react';
import cx from 'classnames'
import styles from './Header.module.css';

type Props = {
  location: string;
  lang: 'en' | 'ja';
}

const Header = ({ location, lang }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <svg className={styles.icon} width="41" height="48" viewBox="0 0 41 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.0763 2.65166C23.0763 1.18719 21.8891 0 20.4246 0C18.9601 0 17.7729 1.18719 17.7729 2.65166V21.492C17.7729 22.9564 18.9601 24.1436 20.4246 24.1436C21.8891 24.1436 23.0763 22.9564 23.0763 21.492V2.65166Z" fill="#BF2B24"/>
          <path d="M33.6537 48H7.19096C5.2838 48 3.45475 47.2424 2.10618 45.8938C0.757617 44.5453 0 42.7162 0 40.8091V16.7463C0 14.8392 0.757617 13.0101 2.10618 11.6616C3.45475 10.313 5.2838 9.55538 7.19096 9.55538H15.0021V14.607H7.19096C6.62275 14.6094 6.07863 14.8368 5.67769 15.2394C5.27675 15.642 5.05164 16.1871 5.05165 16.7553V40.8091C5.05401 41.3757 5.28016 41.9185 5.68085 42.3192C6.08154 42.7199 6.62431 42.946 7.19096 42.9484H33.6537C34.2219 42.9484 34.767 42.7233 35.1696 42.3223C35.5722 41.9214 35.7996 41.3773 35.802 40.8091V16.7463C35.7996 16.1773 35.5725 15.6322 35.1701 15.2299C34.7678 14.8275 34.2227 14.6004 33.6537 14.598H25.8515V9.54639H33.6537C35.5608 9.54639 37.3899 10.304 38.7385 11.6526C40.087 13.0011 40.8446 14.8302 40.8446 16.7373V40.8091C40.8446 42.7162 40.087 44.5453 38.7385 45.8938C37.3899 47.2424 35.5608 48 33.6537 48Z" fill="#231815"/>
          <path d="M11.4783 38.4896C13.1861 38.4896 14.5705 37.1053 14.5705 35.3975C14.5705 33.6898 13.1861 32.3054 11.4783 32.3054C9.77062 32.3054 8.38623 33.6898 8.38623 35.3975C8.38623 37.1053 9.77062 38.4896 11.4783 38.4896Z" fill="#231815"/>
          <path d="M29.366 38.4896C31.0738 38.4896 32.4582 37.1053 32.4582 35.3975C32.4582 33.6898 31.0738 32.3054 29.366 32.3054C27.6583 32.3054 26.2739 33.6898 26.2739 35.3975C26.2739 37.1053 27.6583 38.4896 29.366 38.4896Z" fill="#231815"/>
        </svg>
        <div className={styles.name}>
          <p className={styles.univ}>大阪大学 基礎工学研究科</p>
          <p className={styles.lab}>長井研究室</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={cx(styles.menuItem, location === '' && styles.active)}>
            <a href="/">TOP</a>
          </li>
          <li className={cx(styles.menuItem, location === 'team' && styles.active)}>
            <a href="/team">TEAM</a>
          </li>
          <li className={cx(styles.menuItem, location === 'research' && styles.active)}>
            <a href="/research">RESEARCH</a>
          </li>
          <li className={cx(styles.menuItem, location === 'publication' && styles.active)}>
            <a href="/publication">PUBLICATION</a>
          </li>
          <li className={cx(styles.menuItem, location === 'news' && styles.active)}>
            <a href="/news">NEWS</a>
          </li>
          <li className={cx(styles.menuItem, location === 'access' && styles.active)}>
            <a href="/access">ACCESS</a>
          </li>
        </ul>
        <div className={styles.langSwitch}>
          <a href="/" className={cx(styles.langSwitchItem, lang === 'ja' && styles.active)}>JA</a>
          <a href="/en" className={cx(styles.langSwitchItem, lang === 'en' && styles.active)}>EN</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;

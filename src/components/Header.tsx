import React from 'react';
import cx from 'classnames'
import styles from './Header.module.css';

type Props = {
  location: string;
  lang: 'en' | 'ja';
}

const Header = ({ location, lang }: Props) => {
  return (
    <header className={cx(styles.header)}>
      <h1>
        <img src="" alt="" />
        <div>
          <p>大阪大学 基礎工学研究科</p>
          <p>長井研究室</p>
        </div>
      </h1>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">TOP</a>
            </li>
            <li>
              <a href="/team">TEAM</a>
            </li>
            <li>
              <a href="/research">RESEARCH</a>
            </li>
            <li>
              <a href="/publication">PUBLICATION</a>
            </li>
            <li>
              <a href="/news">NEWS</a>
            </li>
            <li>
              <a href="/access">ACCESS</a>
            </li>
          </ul>
        </nav>
        <div>
          <a href="/">JA</a>
          <a href="/en">EN</a>
        </div>
      </div>
    </header>
  );
}

export default Header;

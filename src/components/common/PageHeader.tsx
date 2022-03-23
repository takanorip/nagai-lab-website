import React, { FC } from "react";
import styles from "./PageHeader.module.css";

const PageHeader: FC = ({ children }) => {
  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <p className={styles.text}>{children}</p>
      </div>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        width="105"
        height="185"
        fill="none"
        viewBox="0 0 105 185"
      >
        <path
          fill="#CC322B"
          fillRule="evenodd"
          d="M16.877.287c-8.837 0-16 7.164-16 16v152c0 8.837 7.163 16 16 16h88v-184h-88zm24 160c8.836 0 16-7.163 16-16 0-8.836-7.164-16-16-16-8.837 0-16 7.164-16 16 0 8.837 7.163 16 16 16z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

export default PageHeader;

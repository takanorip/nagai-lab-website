import React, { FC, InputHTMLAttributes } from "react";
import styles from "./Select.module.css";

type Props = InputHTMLAttributes<HTMLSelectElement>

const Select: FC<Props> = ({ children, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor="archives">Archives</label>
      <div className={styles.selectWrapper}>
        <select className={styles.select} name="archives" id="archives" {...props}>
          {children}
        </select>
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 9L12 15 18 9"></path>
        </svg>
      </div>
    </div>
  );
};

export default Select;
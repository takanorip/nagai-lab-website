import React from "react";
import styles from "./NotFound.module.css";
import Main from "../common/Main";

const NotFound = () => {
  return (
    <Main>
      <div className={styles.wrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="82"
          height="96"
          fill="none"
          viewBox="0 0 41 48"
        >
          <path
            fill="#BF2B24"
            d="M23.076 2.652a2.652 2.652 0 00-5.303 0v18.84a2.652 2.652 0 005.303 0V2.652z"
          />
          <path
            fill="#231815"
            d="M33.654 48H7.19A7.19 7.19 0 010 40.81V16.745a7.19 7.19 0 017.191-7.19h7.811v5.051H7.191a2.149 2.149 0 00-2.14 2.148V40.81a2.148 2.148 0 002.14 2.14h26.463a2.148 2.148 0 002.148-2.14V16.746a2.157 2.157 0 00-2.148-2.148H25.85V9.546h7.803a7.191 7.191 0 017.19 7.191V40.81A7.191 7.191 0 0133.655 48z"
          />
          <path
            fill="#231815"
            d="M11.478 38.49a3.092 3.092 0 100-6.185 3.092 3.092 0 000 6.185zM29.366 38.49a3.092 3.092 0 100-6.185 3.092 3.092 0 000 6.185z"
          />
        </svg>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.text}>The page could not be found. </p>
        <p className={styles.text}><a href="/">Back to home.</a></p>
      </div>
    </Main>
  );
};

export default NotFound;

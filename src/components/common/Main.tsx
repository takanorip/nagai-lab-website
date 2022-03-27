import React, { FC } from "react";
import cx from "classnames";
import styles from "./Main.module.css";

const Main: FC = ({ children, className }) => {
  return <main className={cx(styles.main, className)}>{children}</main>;
};

export default Main;

import React, { FC } from "react";
import cx from "classnames";
import styles from "./Main.module.css";

type Props = {
  children: React.ReactNode;
  className?: string;
}

const Main: FC<Props> = ({ children, className }) => {
  return <main className={cx(styles.main, className)}>{children}</main>;
};

export default Main;

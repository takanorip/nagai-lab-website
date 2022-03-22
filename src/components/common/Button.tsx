import React, { FC } from "react";
import cx from "classnames";
import styles from "./Button.module.css";

type Props = {
  type?: "normal" | "outlined";
  href: string;
  className?: string;
};

const Button: FC<Props> = ({ type = "normal", href, children, className }) => {
  return (
    <a href={href} className={cx(styles.link, styles[type], className)}>
      {children}
    </a>
  );
};

export default Button;

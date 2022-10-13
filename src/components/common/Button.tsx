import React, { FC } from "react";
import cx from "classnames";
import styles from "./Button.module.css";

type Props = {
  type?: "normal" | "outlined";
  fullWidth?: boolean;
  href: string;
  className?: string;
  children: React.ReactNode;
};

const Button: FC<Props> = ({
  type = "normal",
  fullWidth = false,
  href,
  children,
  className,
}) => {
  return (
    <a
      href={href}
      className={cx(
        styles.link,
        styles[type],
        className,
        fullWidth && styles.fullWidth
      )}
    >
      {children}
    </a>
  );
};

export default Button;

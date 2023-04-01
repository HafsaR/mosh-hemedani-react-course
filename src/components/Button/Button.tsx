import React from "react";
import styles from "./Button.module.css";

interface Props {
  children: string;
}

function Button({ children }: Props) {
  return (
    <button className={[styles.btn, styles.btnPrimary].join(" ")}>
      {children}
    </button>
  );
}

export default Button;

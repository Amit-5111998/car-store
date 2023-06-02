import React from "react";
import styles from "./Button.module.scss";
interface ButtonProps {
  onSubmit: () => void;
  cssClass: string;
  label: string;
}

function Button({ onSubmit, cssClass = "skipButton", label }: ButtonProps) {
  return (
    <button onClick={onSubmit} className={styles[cssClass]}>
      {label}
    </button>
  );
}

export default Button;

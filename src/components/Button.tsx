import { FC } from "react";
import styles from "../styles/Button.module.css";

interface ButtonProps {
  disabled?: boolean;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ disabled, children, onClick }) => {
  return (
    <button
      disabled={disabled}
      className={styles.button}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

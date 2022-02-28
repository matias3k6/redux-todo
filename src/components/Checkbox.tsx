import { FC } from "react";
import styles from "../styles/Checkbox.module.css";

interface CheckboxProps {
  checked?: boolean;
  onChange?: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  return (
    <label className={styles.container}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.checkmark} />
    </label>
  );
};

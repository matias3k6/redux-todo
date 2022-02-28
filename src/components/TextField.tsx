import { ChangeEvent, FC } from "react";
import styles from "../styles/TextField.module.css";

interface TextFieldProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: FC<TextFieldProps> = ({ value, onChange }) => {
  return <input className={styles.textfield} type="text" onChange={onChange} value={value} />;
};

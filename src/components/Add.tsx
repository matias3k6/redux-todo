import { FC, useState } from "react";
import { Button } from "./Button";
import styles from "../styles/Add.module.css";

interface AddItemProps {
  onClick: (text: string) => void;
}

export const AddItem: FC<AddItemProps> = ({ onClick }) => {
  const [inputText, setInputText] = useState("");

  const handleAddText = () => {
    if (inputText) onClick(inputText);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create a task</h2>
      <div className={styles.form}>
        <input
          className={styles.textfield}
          type="text"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <Button onClick={handleAddText}>Add +</Button>
      </div>
    </div>
  );
};

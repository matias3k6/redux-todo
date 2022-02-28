import { FC, useState } from "react";
import { TodoListActionPayload } from "../redux/types/todoList";
import styles from "../styles/ListItem.module.css";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { TextField } from "./TextField";

interface ListItemProps extends TodoListActionPayload {
  onCheckboxClick: () => void;
  onDeleteClick: () => void;
  onUpdateClick: (text?: string) => void;
}
export const ListItem: FC<ListItemProps> = ({
  text,
  completed,
  onCheckboxClick,
  onDeleteClick,
  onUpdateClick,
}) => {
  const [enableUpdate, setEnableUpdate] = useState(false);
  const [textField, setTextField] = useState(text);

  const handleUpdate = () => {
    onUpdateClick(textField);
    setEnableUpdate(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {enableUpdate ? (
          <>
            <TextField
              onChange={(e) => setTextField(e.target.value)}
              value={textField}
            />
            <Button onClick={handleUpdate}>Save</Button>
          </>
        ) : (
          <>
            <h3
              className={`${styles.title} ${completed ? styles.completed : ""}`}
            >
              {text}
            </h3>
            <Button onClick={onDeleteClick}>Delete</Button>
          </>
        )}
        <div className={styles.buttonEditClose}>
          <Button onClick={() => setEnableUpdate((prevState) => !prevState)}>
            {enableUpdate ? "Close" : "Edit"}
          </Button>
        </div>
      </div>
      <div className={styles.checkboxContainer}>
        <span className={styles.label}>Completed</span>
        <Checkbox checked={completed} onChange={onCheckboxClick} />
      </div>
    </div>
  );
};

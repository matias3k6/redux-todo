import { FC, useState } from "react";
import { TodoListActionPayload } from "../redux/types/todoList";

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
  return (
    <div>
      <h3>{text}</h3>
      <input type="checkbox" checked={completed} onChange={onCheckboxClick} />
      <button onClick={onDeleteClick}>delete</button>

      {enableUpdate && (
        <>
          <input
            type="text"
            checked={completed}
            onChange={(e) => setTextField(e.target.value)}
            value={textField}
          />
          <button onClick={() => onUpdateClick(textField)}>Save</button>
        </>
      )}

      <button onClick={() => setEnableUpdate((prevState) => !prevState)}>
        {enableUpdate ? "Close" : "Update"}
      </button>
    </div>
  );
};

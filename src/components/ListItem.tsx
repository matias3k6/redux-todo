import { FC } from "react";
import { TodoListActionPayload } from "../redux/types/todoList";

interface ListItemProps extends TodoListActionPayload {
  onCheckboxClick: () => void;
  onDeleteClick: () => void;
}
export const ListItem: FC<ListItemProps> = ({
  text,
  completed,
  onCheckboxClick,
  onDeleteClick,
}) => {
  return (
    <div>
      <h3>{text}</h3>
      <input type="checkbox" checked={completed} onChange={onCheckboxClick} />
      <button onClick={onDeleteClick}>delete</button>
    </div>
  );
};

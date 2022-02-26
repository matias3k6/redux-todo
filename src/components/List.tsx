import { FC } from "react";
import { Dispatch } from "redux";
import { REMOVE_TODO, TOGGLE_TODO } from "../redux/constants/todoList";
import { TodoListActionPayload } from "../redux/types/todoList";
import { ListItem } from "./ListItem";

export interface ListProps {
  items?: TodoListActionPayload[];
  dispatch?: Dispatch;
}

export const List: FC<ListProps> = ({ items, dispatch, ...rest }) => {
  const handleDispatchAction = (
    type: string,
    payload: TodoListActionPayload
  ) => {
    if (dispatch) {
      dispatch({ type, payload });
    }
  };

  return (
    <div>
      {items &&
        items.length > 0 &&
        items.map((item) => (
          <ListItem
            key={item.id}
            completed={item.completed}
            text={item.text}
            onCheckboxClick={() =>
              handleDispatchAction(TOGGLE_TODO, { id: item.id })
            }
            onDeleteClick={() =>
              handleDispatchAction(REMOVE_TODO, { id: item.id })
            }
          />
        ))}
    </div>
  );
};

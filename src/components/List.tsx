import { FC } from "react";
import { Dispatch } from "redux";
import {
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "../redux/constants/todoList";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_PENDING,
} from "../redux/constants/visibilityFilter";
import { TodoListActionPayload } from "../redux/types/todoList";
import { FilterType } from "../redux/types/visibilityFilter";
import { ListItem } from "./ListItem";
import styles from "../styles/List.module.css";

export interface ListProps {
  items?: TodoListActionPayload[];
  dispatch?: Dispatch;
  currentFilter?: FilterType;
}

export const List: FC<ListProps> = ({ items, currentFilter, dispatch }) => {
  const handleDispatchAction = (
    type: string,
    payload: TodoListActionPayload
  ) => {
    if (dispatch) {
      dispatch({ type, payload });
    }
  };

  if (!items) return <div className={styles.message}>Loading...</div>;
  else if (items.length === 0 && currentFilter === SHOW_ALL)
    return (
      <div className={styles.message}>This looks empty, create a new task</div>
    );
  else if (items.length === 0 && currentFilter === SHOW_COMPLETED)
    return (
      <div className={styles.message}>You don't have completed tasks</div>
    );
  else if (items.length === 0 && currentFilter === SHOW_PENDING)
    return (
      <div className={styles.message}>You don't have pending tasks</div>
    );
  else
    return (
      <div>
        {items.map(({ id, completed, text }) => (
          <ListItem
            key={id}
            completed={completed}
            text={text}
            onCheckboxClick={() => handleDispatchAction(TOGGLE_TODO, { id })}
            onDeleteClick={() => handleDispatchAction(REMOVE_TODO, { id })}
            onUpdateClick={(text) =>
              handleDispatchAction(UPDATE_TODO, { id, text })
            }
          />
        ))}
      </div>
    );
};

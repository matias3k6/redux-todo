import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "../constants/todoList";
import { TodoListAction, TodoListActionPayload } from "../types/todoList";

export function todoListReducer(
  state: TodoListActionPayload[] = [],
  action: TodoListAction
): TodoListActionPayload[] {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { ...action.payload, id: state.length + 1 }];

    case REMOVE_TODO:
      return [...state].filter((item) => item.id !== action.payload.id);

    case TOGGLE_TODO:
      return [...state].map((item) => {
        if (item.id === action.payload.id)
          return { ...item, completed: !item.completed };
        else return item;
      });

    case UPDATE_TODO:
      return [...state].map((item) => {
        if (item.id === action.payload.id)
          return { ...item, text: action.payload.text };
        else return item;
      });

    default:
      return state;
  }
}

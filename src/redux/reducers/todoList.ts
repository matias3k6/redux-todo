import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../constants/todoList";
import { TodoListAction, TodoListAddActionPayload } from "../types/todoList";

export function todoListReducer(
  state: TodoListAddActionPayload[] = [],
  action: TodoListAction
) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case REMOVE_TODO:
      return [...state].filter((_, index) => index !== action.payload);

    case TOGGLE_TODO:
      return [...state].map((item, index) => {
        if (index === action.payload)
          return { ...item, completed: !item.completed };
        else return item;
      });
    default:
      return state;
  }
}

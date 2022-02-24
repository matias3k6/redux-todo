import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../constants/todoList";
import {
  TodoListAddAction,
  TodoListRemoveAction,
  TodoListToggleAction,
} from "../types/todoList";

export function addTodo(text: string): TodoListAddAction {
  return {
    type: ADD_TODO,
    payload: {
      text,
      completed: false,
    },
  };
}

export function removeTodo(index: number): TodoListRemoveAction {
  return {
    type: REMOVE_TODO,
    payload: index,
  };
}

export function toggleTodo(
  index: number,
  completed: boolean
): TodoListToggleAction {
  return {
    type: TOGGLE_TODO,
    payload: {
      index,
      completed,
    },
  };
}

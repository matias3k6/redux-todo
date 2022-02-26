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

export function removeTodo(id: number): TodoListRemoveAction {
  return {
    type: REMOVE_TODO,
    payload: { id },
  };
}

export function toggleTodo(
  id: number,
  completed: boolean
): TodoListToggleAction {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
      completed,
    },
  };
}

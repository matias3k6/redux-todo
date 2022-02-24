import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../constants/todoList";

type ActionType = typeof ADD_TODO | typeof REMOVE_TODO | typeof TOGGLE_TODO;

export interface TodoListAddActionPayload {
  text: string;
  completed: boolean;
}

export interface TodoListToggleActionPayload {
  index: number;
  completed: boolean;
}

export interface TodoListAddAction {
  type: ActionType;
  payload: TodoListAddActionPayload;
}

export interface TodoListRemoveAction {
  type: ActionType;
  payload: number;
}

export interface TodoListToggleAction {
  type: ActionType;
  payload: TodoListToggleActionPayload;
}

export interface TodoListAction {
  type: ActionType;
  payload:
    | TodoListAddAction["payload"]
    | TodoListRemoveAction["payload"]
    | TodoListToggleAction["payload"];
}

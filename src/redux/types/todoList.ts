import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "../constants/todoList";

type ActionType =
  | typeof ADD_TODO
  | typeof REMOVE_TODO
  | typeof TOGGLE_TODO
  | typeof UPDATE_TODO;

export interface TodoListActionPayload {
  id?: number;
  text?: string;
  completed?: boolean;
}

export interface TodoListAddAction {
  type: ActionType;
  payload: TodoListActionPayload;
}

export interface TodoListRemoveAction {
  type: ActionType;
  payload: TodoListActionPayload;
}

export interface TodoListToggleAction {
  type: ActionType;
  payload: TodoListActionPayload;
}

export interface TodoListUpdateAction {
  type: ActionType;
  payload: TodoListActionPayload;
}

export interface TodoListAction {
  type: ActionType;
  payload: TodoListActionPayload;
}

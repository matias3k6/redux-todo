import { combineReducers } from "redux";
import { visibilityFilterReducer } from "./visibilityFilter";
import { todoListReducer } from "./todoList";

export const reducers = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  todoList: todoListReducer,
});

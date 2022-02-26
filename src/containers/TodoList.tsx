import { connect } from "react-redux";
import { List, ListProps } from "../components/List";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_PENDING,
} from "../redux/constants/visibilityFilter";
import { RootState } from "../redux/types/store";

const mapStateToProps = (state: RootState, ownProps: ListProps) => {
  const getTodoList = () => {
    switch (state.visibilityFilter) {
      case SHOW_PENDING:
        return [...state.todoList].filter((item) => !item.completed);
      case SHOW_COMPLETED:
        return [...state.todoList].filter((item) => item.completed);
      case SHOW_ALL:
      default:
        return state.todoList;
    }
  };
  return {
    items: getTodoList(),
    currentFilter: state.visibilityFilter,
  };
};

export const TodoList = connect(mapStateToProps, undefined)(List);

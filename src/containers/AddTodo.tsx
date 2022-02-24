import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AddItem } from "../components/Add";
import { addTodo } from "../redux/actions/todoList";

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onClick: (text: string) => {
      dispatch(addTodo(text));
    },
  };
};

export const AddTodo = connect(undefined, mapDispatchToProps)(AddItem);

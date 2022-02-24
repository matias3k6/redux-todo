import { ReactNode } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Button } from "../components/Button";
import { setVisibilityFilter } from "../redux/actions/visibilityFilter";
import { VisibilityFilterAction } from "../redux/types/visibilityFilter";

interface OwnProps {
  filter: VisibilityFilterAction["payload"];
  children: ReactNode;
}

const mapStateToProps = (state: any, ownProps: OwnProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};

export const ButtonFilter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

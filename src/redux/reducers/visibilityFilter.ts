import { SET_VISIBILITY_FILTER, SHOW_ALL } from "../constants/visibilityFilter";
import { FilterType, VisibilityFilterAction } from "../types/visibilityFilter";

export function visibilityFilterReducer(
  state:FilterType = SHOW_ALL,
  action: VisibilityFilterAction
): FilterType {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;

    default:
      return state;
  }
}

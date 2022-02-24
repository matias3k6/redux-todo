import { SET_VISIBILITY_FILTER, SHOW_ALL } from "../constants/visibilityFilter";
import { VisibilityFilterAction } from "../types/visibilityFilter";

export function visibilityFilterReducer(
  state = SHOW_ALL,
  action: VisibilityFilterAction
): string {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;

    default:
      return state;
  }
}

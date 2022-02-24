import { SET_VISIBILITY_FILTER } from "../constants/visibilityFilter";
import { VisibilityFilterAction } from "../types/visibilityFilter";

export function setVisibilityFilter(
  filter: VisibilityFilterAction["payload"]
): VisibilityFilterAction {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: filter,
  };
}

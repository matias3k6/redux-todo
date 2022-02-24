import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_PENDING,
  SET_VISIBILITY_FILTER,
} from "../constants/visibilityFilter";

type ActionType = typeof SET_VISIBILITY_FILTER;
type FilterProp = typeof SHOW_ALL | typeof SHOW_COMPLETED | typeof SHOW_PENDING;

export interface VisibilityFilterAction {
  type: ActionType;
  payload: FilterProp;
}

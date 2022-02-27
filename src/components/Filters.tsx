import { FC } from "react";
import { FilterButton } from "../containers/FilterButton";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_PENDING } from "../redux/constants/visibilityFilter";

export const Filters: FC = () => {
  return (
    <div>
      <FilterButton filter={SHOW_ALL}>SHOW ALL</FilterButton>
      <FilterButton filter={SHOW_COMPLETED}>SHOW COMPLETED</FilterButton>
      <FilterButton filter={SHOW_PENDING}>SHOW PENDING</FilterButton>
    </div>
  );
};

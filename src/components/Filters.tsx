import { ButtonFilter } from "../containers/FilterButton";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_PENDING } from "../redux/constants/visibilityFilter";

export const Filters = () => {
  return (
    <div className="App">
      <ButtonFilter filter={SHOW_ALL}>SHOW ALL</ButtonFilter>
      <ButtonFilter filter={SHOW_COMPLETED}>SHOW COMPLETED</ButtonFilter>
      <ButtonFilter filter={SHOW_PENDING}>SHOW PENDING</ButtonFilter>
    </div>
  );
};

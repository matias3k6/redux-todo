import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Filters } from "./components/Filters";
import { AddTodo } from "./containers/AddTodo";
import { TodoList } from "./containers/TodoList";

function App() {
  return (
    <Provider store={store}>
      <Filters />
      <AddTodo />
      <TodoList />
    </Provider>
  );
}

export default App;

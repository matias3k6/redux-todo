import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Filters } from "./components/Filters";
import { AddTodo } from "./containers/AddTodo";

function App() {
  console.log(store.getState());
  return (
    <Provider store={store}>
      <Filters />
      <AddTodo />
    </Provider>
  );
}

export default App;

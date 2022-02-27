import { AddTodo } from "../containers/AddTodo";
import { TodoList } from "../containers/TodoList";
import { Filters } from "./Filters";
import styles from "../styles/Todo.module.css";

export const Todo = () => {
  return (
    <main className={styles.container}>
      <article className={styles.wrapper}>
        <header className={styles.filters}>
          <Filters />
          <h1 className={styles.title}>Todo List</h1>
        </header>
        <section className={styles.actions}>
          <AddTodo />
        </section>
        <section className={styles.list}>
          <TodoList />
        </section>
      </article>
    </main>
  );
};

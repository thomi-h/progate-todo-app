import React from "react";
import TodoItem from "./TodoItem";

const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleCompleted={toggleCompleted}
            deleteTodo={deleteTodo}
          />
        );
      })}
      {/* <h1>This is Todos Component</h1> */}
    </div>
  );
};

const styles = {
  container: {
    margin: "0 auto",
    textAlign: "left",
  },
};

export default Todos;

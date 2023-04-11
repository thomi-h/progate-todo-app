import React from "react";
import { useContext } from "react";
import { TodoContext } from "../App";

const TodoItem = ({ todo }) => {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);

  const getTodoTitleStyle = () => {
    if (todo.completed === true) {
      return { textDecoration: "line-through" };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div style={style.todoItem}>
      <input
        type="checkbox"
        style={style.checkbox}
        onChange={() => toggleCompleted(todo.id)}
      />
      <p style={getTodoTitleStyle()}>{todo.title}</p>
      <button style={style.button} onClick={() => deleteTodo(todo.id)}>
        X
      </button>
    </div>
  );
};

const style = {
  todoItem: {
    border: "2px solid #f4f4f4",
    fontSize: "24px",
    display: "flex",
    justidyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "10px",
    height: "18px",
    width: "18px",
  },
  button: {
    backgroundColor: "#bb0000",
    color: "#fff",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    textAlign: "center",
  },
};

export default TodoItem;

import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todos from "./components/todos";
import TodoForm from "./components/TodoForm";

export const TodoContext = createContext();

function App() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "Finish Progate React Course",
      completed: false,
    },
    {
      id: 2,
      title: "Have lunch with Guru Domba",
      completed: false,
    },
    {
      id: 3,
      title: "Study React with Ninja Ken",
      completed: false,
    },
  ]);

  // console.log(todos);
  const toggleCompleted = (todoId) => {
    // console.log(todoId);
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodo(updatedTodos);
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id != todoId);
    // console.log(updatedTodos);
    setTodo(updatedTodos);
  };

  const addTodo = (todoTitle) => {
    if (todoTitle == "") {
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    };

    const updatedTodos = todos.concat(newTodo);
    setTodo(updatedTodos);
  };

  return (
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div className="App" style={style.container}>
        <h1 style={style.title}>My Todo List</h1>
        {/* Gunakan map disini */}
        {/* {todos.map((todo) => {
        return <p key={todo.id}>{todo.title}</p>;
      })} */}
        <TodoForm addTodo={addTodo} />
        <Todos
          todos={todos}
          // toggleCompleted={toggleCompleted}
          // deleteTodo={deleteTodo}
        />
      </div>
    </TodoContext.Provider>
  );
}

const style = {
  container: {
    textAlign: "center",
    padding: "12px",
  },
  title: {
    fontSize: "36px",
  },
};
export default App;

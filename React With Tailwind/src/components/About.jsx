import { useState } from "react";

export default function About() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <div>About Us</div>
      <button
        onClick={() => {
          import("../data").then((module) => setTodos(module.todos));
        }}
      >
        Load Data
      </button>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </>
  );
}

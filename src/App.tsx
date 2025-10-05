import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./App.css";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInputValue("");
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <h1>TypeScript To-Do App ✅</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

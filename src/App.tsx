import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./App.css";
// import { expect, it } from "vitest";
// import type { Expect, Equal } from "./helpers";
import {
  SESSION_EXPIRATION_TIME,
  SESSION_EXPIRATION_TIME_IN_HOURS,
  SESSION_EXPIRATION_TIME_IN_MINUTES,
  SESSION_EXPIRATION_TIME_IN_SECONDS,
} from "./dummy-import";
import {
  MAX_PAGE,
  DEFAULT_COLOR,
  DEFAULT_FILTER,
  DEFAULT_PAGE,
  DEFAULT_SORT,
  DEFAULT_USERNAME,
  FILTER_OPTIONS,
} from "./dummy-import-2";

// REFACTORING TO BE ITS OWN FUNCTION: (video 77)
const func = () => {
  // Refactor this to be its own function
  const randomPercentage = `${(Math.random() * 100).toFixed(2)}%`;
  console.log(randomPercentage);
};

function getRandomPercentage() {
  return `${(Math.random() * 100).toFixed(2)}%`;
}

///// ORGANISING IMPORTS COMMAND: Ctrl + Alt + o
const handlePage = (page: number) => {
  if (page > MAX_PAGE) {
    console.log("Page is too large");
  }
};

type Task = {
  id: number;
  text: string;
};

// const num: number = "some string";
const num: number = 9;

const run = (message: string) => {
  console.log(message);
};

run("Hello!");
// // CODE
// const add = (a: number, b: number) => {
//   return a + b;
// };

// //////////////////////////// FAST IMPORTS IN VS CODE (video 73)

const expirationTimes = [
  SESSION_EXPIRATION_TIME,
  SESSION_EXPIRATION_TIME_IN_SECONDS,
  SESSION_EXPIRATION_TIME_IN_MINUTES,
  SESSION_EXPIRATION_TIME_IN_HOURS,
];

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTask: Task = { id: Date.now(), text: input.trim() };
    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };

  const handleDelete = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleSort = () => {
    setTasks((prev) => [...prev].sort((a, b) => a.text.localeCompare(b.text)));
  };

  const handleClear = () => setTasks([]);

  return (
    <div className="app">
      <h1>TypeScript To-Do App ✅</h1>
      <h2>Total tasks: {tasks.length}</h2>

      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter a new task..."
        />
        <button type="submit">Add</button>
      </form>

      {tasks.length > 1 && (
        <button className="sort-btn" onClick={handleSort}>
          Sort tasks A–Z
        </button>
      )}

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="item-list-element">
            <span>{task.text}</span>
            <button onClick={() => handleDelete(task.id)}>✖</button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={handleClear}>
          Clear all
        </button>
      )}
    </div>
  );
}

export default App;

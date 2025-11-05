import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./App.css";
import { expect, it } from "vitest";
import type { Expect, Equal } from "./helpers";
import type { Task } from "./types";

// ///////////////// video 106

// This function returns never, because it never returns!
const getNever = () => {
  throw new Error("This function never returns");
};

// --------------------------------------------------------------------

const fn = (input: never) => {};

// Nothing is assignable to never!
fn("hello");
fn(42);
fn(true);
fn({});
fn([]);
fn(() => {});

// Except for never itself!

fn(getNever());

// --------------------------------------------------------------------

// But we can assign never to anything

const str: string = getNever();
const num: number = getNever();
const bool: boolean = getNever();
const arr: string = getNever();

// ///////////////// video 104  NARROWING UNKNOWN IN A LARGE CONDITIONAL STATEMENT

const parseValue = (value: unknown) => {
  if (
    typeof value === "object" &&
    value !== null &&
    "data" in value &&
    typeof value.data === "object" &&
    value.data !== null &&
    "id" in value.data &&
    typeof value.data.id === "string"
  ) {
    return value.data.id;
  }

  throw new Error("Parsing error!");
};

it("Should handle a { data: { id: string} } }", () => {
  const result = parseValue({
    data: {
      id: "123",
    },
  });

  type test = Expect<Equal<typeof result, string>>;

  expect(result).toBe("123");
});

// ///////////////// video 102

const somethingDangerous = () => {
  if (Math.random() > 0.5) {
    throw new Error("Something went wrong");
  }

  return "all good";
};

try {
  somethingDangerous();
} catch (error) {
  if (typeof error === "object" && error && "message" in error) {
    console.error(error.message);
  }
}

// ///////////////// video 101

const fn = (input: unknown) => {};

// Anything is assignable to unknown!
fn("hello");
fn(42);
fn(true);
fn({});
fn([]);
fn(() => {});

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

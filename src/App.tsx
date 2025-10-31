import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./App.css";
import { expect, it } from "vitest";
import type { Expect, Equal } from "./helpers";
import type { Task } from "./types";
import { error } from "console";

// ///////////////// video 99

type APIResponse =
  | {
      data: {
        id: string;
      };
      error?: string;
    }
  | {
      data?: undefined;
      error: string;
    };

const handleResponse = (response: APIResponse) => {
  // How do we check if 'data' is in the response?
  if ("data" in response) {
    return response.data.id;
  } else {
    throw new Error(response.error);
  }
};

it("Should handle a response with data", () => {
  const response = {
    data: {
      id: "123",
    },
  };
});

// ///////////////// video 97

const appElement = document.getElementById("app");

// How do I ensure that app Element is defined?

if (!appElement) {
  throw new Error("Could not find app element");
}

console.log(appElement);

type Test = Expect<Equal<typeof appElement, HTMLElement>>;

// ///////////////// video 96

type Event = {
  message: string;
};

const processUserMap = (eventMap: Map<string, Event>) => {
  const event = eventMap.get("error");
  if (event) {
    const message = event.message;

    throw new Error(message);
  }
};

// ///////////////// video 94

function validateUsername(username: string | null): boolean {
  // Why isn't this working?
  const isUsernameOK = !!username;

  if (isUsernameOK) {
    return username.length > 5;
  }

  return false;
}

// ///////////////// video 93

function validateUsername1(username: string | null): boolean {
  // Rewrite this function to make the error go away
  // if (username) {
  //   return username.length > 5;
  // }
  // if (typeof username !== "string") {
  //   return false;
  // }
  // return false;

  // if (typeof username === "object") {
  //   return false;
  // }

  // return username.length > 5;

  const isUsernameOK = typeof username === "string";

  if (isUsernameOK) {
    return username.length > 5;
  }

  return false;
}

it("should return true for valid usernames", () => {
  expect(validateUsername("Matt1234")).toBe(true);

  expect(validateUsername("Alice")).toBe(false);
  expect(validateUsername("Bob")).toBe(false);
});

it("Should return false for null", () => {
  expect(validateUsername(null)).toBe(false);
});

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

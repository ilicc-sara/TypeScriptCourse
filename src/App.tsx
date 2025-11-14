import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./App.css";
import { expect, it } from "vitest";
import type { Expect, Equal } from "./helpers";
import type { Task } from "./types";
// ///////////////// video 113

type Circle = {
  type: "circle";
  radius?: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function calculateArea(shape: Shape) {
  if (shape.kind === "circle") {
    Math.PI * shape.radius * shape.radius;
  } else {
    shape.sideLength * shape.sideLength;
  }
}

it("Should calculate the area of a circle", () => {
  const result = calculateArea({
    kind: "circle",
    radius: 5,
  });

  expect(result).toBe(78.53981633974483);

  type test = Expect<Equal<typeof result, number>>;
});

it("Should calculate the area of a square", () => {
  const result = calculateArea({
    kind: "square",
    sideLength: 5,
  });
});

// ///////////////// video 111

// const findUsersByName = (
//   searchParams: { name?: string },
//   users: {
//     id: string;
//     name: string;
//   }[]
// ) => {
//   if (searchParams.name) {
//     return users.filter((user) => user.name.includes(searchParams.name));
//   }

//   return users;
// };

// it("Should find the exact name", () => {
//   const result = findUsersByName(
//     {
//       name: "Bob",
//     },
//     [
//       {
//         id: "1",
//         name: "Bob",
//       },
//       {
//         id: "2",
//         name: "Alice",
//       },
//     ]
//   );

//   expect(result).toEqual([
//     {
//       id: "1",
//       name: "Bob",
//     },
//   ]);

//   type test = Expect<Equal<typeof result, { id: string; name: string }[]>>;
// });

// ////////////////////////////////////////////////////////////////////////////

const throwError = (message: string): never => {
  throw new Error(message);
};

type Example = string | never;

const handleSearchParams = (params: { id?: string }) => {
  const id = params.id || throwError("No id provided");

  type test = Expect<Equal<typeof id, string>>;

  return id;
};

// ///////////////// video 107

type ShoppingCart = {
  items: string[];
};

const shoppingCart: ShoppingCart = {
  items: [],
};

console.log(shoppingCart.items);

shoppingCart.items.push("Apple");
shoppingCart.items.push("Banana");

// ///////////////// video 106

// This function returns never, because it never returns!
const getNever = () => {
  throw new Error("This function never returns");
};

// --------------------------------------------------------------------

// const fn = (input: never) => {};

// Nothing is assignable to never!
// fn("hello");
// fn(42);
// fn(true);
// fn({});
// fn([]);
// fn(() => {});

// Except for never itself!

// fn(getNever());

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

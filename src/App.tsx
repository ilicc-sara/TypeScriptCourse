import { use, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./App.css";
import type { Equal } from "./types";

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

// // TEST

// const result = add(1, 2);

// type test = Expect<Equal<typeof result, number>>;

// CODE;

// const concatTwoStrings = (a: string, b: string) => {
//   return [a, b].join("");
// };

// // TEST

// const result = concatTwoStrings("Hello", "World");

// type test = Expect<Equal<typeof result, string>>;

// let example1: string = "Hello World!";
// let example2: number = 42;
// let exapmle3: boolean = true;
// let example4: symbol = Symbol();
// let example5: bigint = 123n;

// const concatName = (first: string, last: string = "Pocock") => {
//   if (!last) return first;

//   return `${first} ${last}`;
// };

// const result = concatName("John", "Doe");

// type test = Expect<Equal<typeof result, string>>;

// const result2 = concatName("John");

// type test2 = Expect<Equal<typeof result2, string>>;

// it("should return the full name", () => {
//   const result = concatName("John", "Doe");

//   type test = Expect<Equal<typeof result, string>>;

//   expect(result).toEqual("John Doe");
// });

// const concatName = (user: { first: string; last: string }) => {
//   // return `${user.first} ${user.last}`;
//   return `${user.first} ${user.last}`;
// };

// it("should return the full name", () => {
//   const result = concatName({
//     first: "John",
//     last: "Doe",
//   });

//   type test = Expect<Equal<typeof result, string>>;

//   expect(result).toEqual("John Doe");
// });

// const concatName = (user: { first: string; last?: string }) => {
//   if (!user.last) {
//     return user.first;
//   }

//   return `${user.first} ${user.last}`;
// };

// it("should return the full name", () => {
//   const result = concatName({
//     first: "John",
//     // last: "Doe",
//     last: undefined,
//   });
// });

// type test = Expect<Equal<typeof result, string>>;

// type Rectangle = { width: number; height: number };

// const getRectangleArea = (rectangle: Rectangle) => {
//   return rectangle.width * rectangle.height;
// };

// const getRectangleParameter = (rectangle: Rectangle) => {
//   return 2 * (rectangle.width + rectangle.height);
// };

// it("should return the area of a rectangle", () => {
//   const result = getRectangleArea({
//     width: 10,
//     height: 20,
//   });
// });

// how to type "items" in the ShoppingCart?
type ShoppingCart = {
  userId: string;
  items: string[];
};

const processCart = (cart: ShoppingCart) => {
  // Do something with the cart in here
};

processCart({
  userId: "user123",
  items: ["item1", "item2", "item3"],
});

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
          <li key={task.id}>
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

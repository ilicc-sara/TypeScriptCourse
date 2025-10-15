import { use, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./App.css";
import type { Equal } from "./types";
import { expect, it } from "vitest";

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
  items: Array<string>;
};

const processCart = (cart: ShoppingCart) => {
  // Do something with the cart in here
};

processCart({
  userId: "user123",
  items: ["item1", "item2", "item3"],
});

// ARRAYS OF OBJECT IN TYPE SCRIPT (video 40)

// type Ingredient = {
//   name: string;
//   quantity: string;
// };

type Recipe = {
  title: string;
  instructions: string;
  // ingredients: Ingredient[];
  ingredients: Array<{
    name: string;
    quantity: string;
  }>;
};

const processRecipe = (recipe: Recipe) => {
  // Do something with the reicpe in here
};

processRecipe({
  title: "Chocolate Chip Cookies",
  ingredients: [
    { name: "Flour", quantity: "2 cups" },
    { name: "Sugar", quantity: "1 cups" },
  ],
  instructions: "...",
});

// REST PARAMETERS IN TYPE SCRIPT (video 43)

// export function concatenate(num: number, ...strings: string[]) {
//   return strings.join("");
// }

// it("should concatenate strings", () => {
//   const result = concatenate(1, "Hello", "", "World");
//   expect(result).toEqual("Hello World");

//   type test = Expect<Equal<typeof result, string>>;
// });

// TUPLES FOR PRECISE ARRAY STRUCTURE
// const setRange = (range: [number, number]) => {
//   const x = range[0];
//   const y = range[1];

//   // do something with x and y here

//   // x and y should both be numbers!
//   type tests = [
//     Expect<Equal<typeof x, number>>,
//     Expect<Equal<typeof y, number>>
//   ];
// };

// setRange([0, 10]);

// // @ts-expect-error string is not assignable to number
// setRange([0, "10"]);

// // @ts-expect-error too few arguments
// setRange([0]);

// // @ts-expect-error too many arguments
// setRange([0, 10, 20]);

// const goToLocation = (coordinates: [number, number, number?]) => {
//   const latitude = coordinates[0];
//   const longitude = coordinates[1];
//   const elevation = coordinates[2];

//   // Do something with latitude, longitude, and elevations in here

//   type tests = [
//     Expect<Equal<typeof latitude, number>>,
//     Expect<Equal<typeof longitude, number>>,
//     Expect<Equal<typeof elevation, number | undefined>>
//   ];
// };

// goToLocation([10, 20]);

// // @ts-expect-error string is not assignable to number
// goToLocation([10, "20"]);

// goToLocation([10, 20, 30]);

// type ANY in TYPE SCRIPT (video 48)

const handleFormData = (e: any) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const value = Object.fromEntries(data.entries());
  return value;
};

it("Should handle a form submit", () => {
  const form = document.createElement("form");
  form.innerHTML = `<input name="name value="John Doe />`;

  form.onSubmit = (e: any) => {
    const value = handleFormData(e);
    expect(value).toEqual({ name: "John Doe" });
  };

  form.requestSubmit();

  expect.assertions(1);
});

//  FUNCTION TYPES (video 50)

type User = {
  id: string;
  name: string;
};

type MakeChangeFunc = (user: User) => User;

const modifyUser = (user: User[], id: string, makeChange: MakeChangeFunc) => {
  return user.map((u) => {
    if (u.id === id) {
      return makeChange(u);
    }
    return u;
  });
};

const users: User[] = [
  { id: "1", name: "John" },
  { id: "2", name: "Jane" },
];

modifyUser(users, "1", (user) => {
  return { ...user, name: "Wayne" };
});

modifyUser(
  users,
  "1",
  // @ts-expect-error
  (user) => {
    return { ...user, name: 123 };
  }
);

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

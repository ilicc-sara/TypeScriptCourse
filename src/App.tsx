import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import "./App.css";
import { expect, it } from "vitest";
import type { Expect, Equal, Extends } from "./helpers";
import type { Task } from "./types";
import { serialize } from "v8";

// ///////////////// video 163

type ButtonAttributes = {
  type: "button" | "sumbit" | "reset";
};

const modifyButton = (attributes: ButtonAttributes) => {};

const buttonAttributes = {
  type: "button",
} as const;

modifyButton(buttonAttributes);

// ///////////////// video 161

type SearchParams = {
  q?: string;
  page?: number;
  pageSize?: number;
  sort?: string;
  order?: "asc" | "desc";
};

const handleSearchParams = (search: Readonly<SearchParams>) => {
  // Do something with the search params

  // @ts-expect-error Should not be able to modify readonly
  search.q = "test";

  // @ts-expect-error Should not be able to modify readonly
  search.page = 1;

  // @ts-expect-error Should not be able to modify readonly
  search.pageSize = 10;

  // @ts-expect-error Should not be able to modify readonly
  search.sort = "name";

  // @ts-expect-error Should not be able to modify readonly
  search.order = "asc";
};

// ///////////////// video 159

// type User = {
//   readonly id: number;
//   name: string;
//   age: number;
// };

// const updateUsr = (user: User) => {
//   user.name = "Jane Doe";
//   user.age = 30;

//   // @ts-expect-error Should not be able to modify readonly
//   user.id = 1;
// };

// ///////////////// video 157

// type ButtonAttributes = {
//   type: "button" | "submit" | "reset";
// };

// const modifyButton = (attributes: ButtonAttributes) => {};

// const buttonAttributes: ButtonAttributes = {
//   type: "button",
// };

// modifyButton(buttonAttributes);

// // Example 2

// const modifyButtons = (attributes: ButtonAttributes[]) => {};

// const buttonsToChange = [
//   {
//     type: "button",
//   },
//   {
//     type: "submit",
//   },
// ];

// modifyButtons(buttonsToChange);

// ///////////////// video 155

// type ButtonAttributes = {
//   type: "button" | "submit" | "reset";
// };

// let type: "button" | "submit" | "reset" = "button";

// const buttonAttributes: ButtonAttributes = {
//   type,
// };

// ///////////////// video 153

type User = {
  id: string;
  name: string;
  age: number;
  imageId: string;
};

type Organisation = {
  id: string;
  name: string;
  address: string;
  imageId: string;
};

type Product = {
  id: string;
  name: string;
  price: number;
  imageId: string;
};

const getAvatarImage = (entity: User | Organisation | Product) => {
  {
    // Should not be able to access properties that are
    // not common to both types

    // @ts-expect-error
    entity.age;

    // @ts-expect-error
    entity.address;
  }

  return {
    url: `https://via.placeholder.com/${entity.imageId}`,
    alt: `${entity.name} Avatar`,
  };
};

// ///////////////// video 152

type Coordinates = {
  x?: number;
  y?: number;
};

type CoordinatesRequired = Required<Coordinates>;

type test = Expect<Equal<CoordinatesRequired, { x: number; y: number }>>;

// ///////////////// video 150

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
// }

// const updateProduct = (
//   id: number,
//   productInfo: Partial<Omit<Product, "id">>
// ) => {
//   // Do something with the productInfo
// };

// // Should be able to update individual pieces of information
// updateProduct(1, {
//   name: "Book",
// });

// updateProduct(1, {
//   price: 12.99,
// });

// updateProduct(1, {
//   description: "A book about Dragons",
// });

// ///////////////// video 149

// type User = {
//   id: string;
//   name: string;
//   age: number;
//   imageId: string;
// };

// type Organisation = {
//   id: string;
//   name: string;
//   address: string;
//   imageId: string;
// };

// type Product = {
//   id: string;
//   name: string;
//   price: number;
//   imageId: string;
// };

// type Entity = User | Organisation | Product;

// type EntityWithoutId = Omit<Entity, "id">;
// // ? type EntityWithoutId = {  name: string;  imageId: string;  }

// type test = Expect<
//   Equal<
//     EntityWithoutId,
//     | {
//         name: string;
//         age: number;
//         imageId: string;
//       }
//     | {
//         name: string;
//         address: string;
//         imageId: string;
//       }
//     | {
//         name: string;
//         price: number;
//         imageId: string;
//       }
//   >
// >;

// ///////////////// video 148

// type User = {
//   id: number;
//   name: string;
//   email: string;
// };

// // You can omit properties which don't exist!
// type UserWithoutPhoneNumber = Omit<User, "phoneNumber">;

// // But you CAN'T pick properties which don't exist
// type UserWithOnlyPhoneNumber = Pick<
//   User,
//   // @ts-expect-error
//   "phoneNumber"
// >;

// More information:

// ///////////////// video 146

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   description: string;
// }

// type ProductWithoutId = Omit<Product, "id">;

// const addProduct = (productInfo: Omit<Product, "id">) => {
//   // Do something with the productInfo
// };

// addProduct({
//   name: "Book",
//   price: 12.99,
//   description: "A book about Dragons",
// });

// addProduct({
//   // @ts-expect-error
//   id: 1,
//   name: "Book",
//   price: 12.99,
//   description: "A book about Dragons",
// });

// ///////////////// video 144

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
// }

// const fetchUser = async (): Promise<User> => {
//   const response = await fetch("/api/user");
//   const user = await response.json();
//   return user;
// };

// const example = async () => {
//   const user = await fetchUser();

//   type test = Expect<Equal<typeof user, { name: string; email: string }>>;
// };

// interface NameAndEmail {
//   name: string;
//   email: string;
// }

// interface User extends NameAndEmail {
//   id: string;
//   role: string;
// }

// const fetchUser = async (): Promise<NameAndEmail> => {
//   const response = await fetch("/api/user");
//   const user = await response.json();
//   return user;
// };

// const example = async () => {
//   const user = await fetchUser();

//   type test = Expect<Equal<typeof user, { name: string; email: string }>>;
// };

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
// }

// type PickedUser = Pick<User, "name" | "email">;

// const fetchUser = async (): Promise<PickedUser> => {
//   const response = await fetch("/api/user");
//   const user = await response.json();
//   return user;
// };

// const example = async () => {
//   const user = await fetchUser();

//   type test = Expect<Equal<typeof user, { name: string; email: string }>>;
// };

// ///////////////// video 142

// interface Logger {
//   log(message: string, level: number): void;
// }

// interface Logger {
//   log(message: string): void;
// }

// const myLogger: Logger = {
//   log: (message: string) => {
//     console.log(message);
//   },
// };

// myLogger.log(
//   "My message",
//   // @ts-expect-error level is NOT needed
//   123
// );

// ///////////////// video 140

type Environment = "development" | "production" | "staging" | "qa";

// type Configurations = Record<
//   string,
//   {
//     apiBaseUrl: string;
//     timeout: number;
//   }
// >;

type Configurations = {
  [Env in Environment]: {
    apiBaseUrl: string;
    timeout: number;
  };
};

const configurations: Configurations = {
  development: {
    apiBaseUrl: "http://localhost:8080",
    timeout: 5000,
  },
  production: {
    apiBaseUrl: "https://api.example.com",
    timeout: 10000,
  },
  staging: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
  // @ts-expect-error
  notAllowed: {
    apiBaseUrl: "https://staging.example.com",
    timeout: 8000,
  },
};

// ///////////////// video 138

// const hasKey = (obj: object, key: string | number | symbol) => {
const hasKey = (obj: object, key: PropertyKey) => {
  return obj.hasOwnProperty(key);
};

it("Should work on string keys", () => {
  const obj = {
    foo: "bar",
  };

  expect(hasKey(obj, "foo")).toBe(true);
  expect(hasKey(obj, "bar")).toBe(false);
});

it("Should work on number keys", () => {
  const obj = {
    1: "bar",
  };

  expect(hasKey(obj, 1)).toBe(true);
  expect(hasKey(obj, 2)).toBe(false);
});

it("Should work on symbol keys", () => {
  const fooSymbol = Symbol("foo");
  const barSymbol = Symbol("bar");
});

// ///////////////// video 136

interface Scores {
  [subject: string]: number;
  math: number;
  english: number;
  science: number;
}

// @ts-expect-error science is missing!
const scores: Scores = {
  math: 95,
  english: 90,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;

// ///////////////// video 134

// interface Scores {
//   [subject: string]: number;
// }

// const scores: Scores = {};

// const scores: { [key: string]: number } = {};
// const scores: Record<string, number> = {};

// scores.math = 95;
// scores.english = 90;
// scores.science = 85;

// ///////////////// video 131

// interface UserPart {
//   id: string;
//   name: string;
//   age: number;
// }

// interface UsePart2 {
//   id: number;
//   phone: string;
// }

// interface User extends UserPart, UsePart2 {}

// const user: User = {
//   id: "1",
//   name: "John",
//   age: 20,
//   phone: "123456789",
// };

// ///////////////// video 129

// interface BaseEntity {
//   id: string;
//   createdAt: Date;
// }

// interface User extends BaseEntity {
//   name: string;
//   email: string;
// }

// interface Product extends BaseEntity {
//   name: string;
//   price: number;
// }

// type tests = [
//   Expect<
//     Extends<
//       User,
//       {
//         id: string;
//         createdAt: Date;
//         name: string;
//         email: string;
//       }
//     >
//   >,
//   Expect<
//     Extends<
//       Product,
//       {
//         id: string;
//         createdAt: Date;
//         name: string;
//         price: number;
//       }
//     >
//   >
// ];

// ///////////////// video 127

// type BaseEntity = {
//   id: string;
//   createdAt: Date;
// };

// type User = {
//   name: string;
//   email: string;
// } & BaseEntity;

// type Product = {
//   name: string;
//   price: number;
// } & BaseEntity;

// type tests = [
//   Expect<
//     Extends<
//       User,
//       {
//         id: string;
//         createdAt: Date;
//         name: string;
//         email: string;
//       }
//     >
//   >,
//   Expect<
//     Extends<
//       Product,
//       {
//         id: string;
//         createdAt: Date;
//         name: string;
//         price: number;
//       }
//     >
//   >
// ];

// ///////////////// video 124

// type Circle = {
//   kind: "circle";
//   radius: number
// };

// type Square = {
//   kind: "square";
//   sideLength: number;
// };

// type Shape = Circle | Square;

// function calculateArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     return Math.PI * shape.radius * shape.radius
//   }
// }

// // ///////////////// video 122

// type User = {
//   id: string;
// };

// type ApiResponse = [true, User[] [false, string]];

// async function fetchData(): Promise<ApiResponse>  {
//   try {
//     const response = await fetch("https://api.example.com/data");

//     if (!response.ok) {
//       return [
//         true,
//         // Imagine more detailed error handling here
//         "An error occured",
//       ]
//     }
//   }
// }

// ///////////////// video 113

// type Circle = {
//   kind: "circle";
//   radius?: number;
// };

// type Square = {
//   kind: "square";
//   sideLength: number;
// };

// type Shape = Circle | Square;

// function calculateArea(shape: Shape) {
//   if (shape.kind === "circle") {
//     Math.PI * shape.radius * shape.radius;
//   } else {
//     shape.sideLength * shape.sideLength;
//   }
// }

// it("Should calculate the area of a circle", () => {
//   const result = calculateArea({
//     kind: "circle",
//     radius: 5,
//   });

//   expect(result).toBe(78.53981633974483);

//   type test = Expect<Equal<typeof result, number>>;
// });

// it("Should calculate the area of a square", () => {
//   const result = calculateArea({
//     kind: "square",
//     sideLength: 5,
//   });
// });

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

// const throwError = (message: string): never => {
//   throw new Error(message);
// };

// type Example = string | never;

// const handleSearchParams = (params: { id?: string }) => {
//   const id = params.id || throwError("No id provided");

//   type test = Expect<Equal<typeof id, string>>;

//   return id;
// };

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

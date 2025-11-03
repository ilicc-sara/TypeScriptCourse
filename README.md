# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

```// // TEST

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

//////////////////////////////  FUNCTION TYPES (video 50)

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

////////////////////////// TYPING AN EVENT LISTENER (VIDEO 52)

const addClickEventListener = (listener: () => void) => {
  document.addEventListener("click", listener);
};

const listener = () => {
  console.log("Clicked");
};

// const result = listener();

addClickEventListener(listener);

addClickEventListener(
  // @ts-expect-error
  "abc"
);

//////////////////////////////////// RESTRICTING (video 54)

// const userIds = new Set<number>();
const userIds: Set<number> = new Set();

userIds.add(1);
userIds.add(2);
userIds.add(3);

// @ts-expect-error
userIds.add("123");
// @ts-expect-error
userIds.add({ name: "Max" });

/////////////////////// TYPE CHECKING MAPS

type user = {
  name: string;
  age: number;
};

const userMap = new Map<number, user>();

const result = userMap.get(1);

userMap.set(1, { name: "Max", age: 30 });
userMap.set(2, { name: "Manuel", age: 31 });

// @ts-expect-error
userMap.set("3", { name: "Anna", age: 29 });

// @ts-expect-error
userMap.set(3, "123");

//////////////////////// DEBUGGING JSON PARSING (video 58)

const parseData: {
  name: string;
  age: number;
} = JSON.parse('{"name": "Alice", "age": 30}');

type test = Expect<
  Equal<
    typeof parseData,
    {
      name: string;
      age: number;
    }
  >
>;

//////////////////////////////// TYPING FETCH API RESPONSES IN ASYNC FUNCTIONS (video 60)

async function fetchData(): Promise<number> {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
}

const example = async () => {
  const data = await fetchData();

  type test = Expect<Equal<typeof data, number>>;
};

//   introspecting variables and declarations in type script

let thing = 123;

let otherThing = {
  name: "Alice",
};

const otherObject = {
  ...otherThing,
  thing,
};

otherObject.thing;

const element = document.getElementById("12");

/**
 * Adds two numbers together
 *
 * @example
 *
 * myFunction(1, 2);
 * // adding two numbers
 */
const myFunction = (a: number, b: number) => {
  return a + b;
};
myFunction(1, 2);

type MyObj = {
  foo: string;
  bar: number;
  baz: boolean;
};

const acceptsObj = (obj: MyObj) => {};

acceptsObj({
  // autocomplete in here!
  bar: 12,
  foo: "string",
  baz: false,
});

document.addEventListener(
  // Autocomplete this string!
  "DOMContentLoaded",
  (event) => {
    console.log(event);
  }
);

// /////// type script approact to errors (video 70)

/** typeScript sometimes warns you about  */
/** things which will fail at runtime  */

// const a = null;
// a.toString();

// But not everything et warns you
// about will fail at runtime

const obj: { foo: string } = { foo: "" };

obj.foo = "some string";

// it will try t warn you as close to
// the source of the problem as possible

type MyUser = {
  name: string;
};

const user: MyUser = {
  name: "Katherine",
};

// But sometimes that's not always possible

type FunctionThatReturnsAString = () => string;

const fn: FunctionThatReturnsAString = () => {
  return "123";
};

// //////////////// Quick Renaming in VS code (video 71)

const users1 = [
  { id: "1", name: "Robin" },
  { id: "2", name: "Dennis" },
  { id: "3", name: "Sara" },
];

// Imagine this function was 10x bigger
// with 10x more references to "id"

// How do we change id to userId?

const filterUsersById = (identificationNum: string) => {
  return users1.filter((user) => user.id === identificationNum);
};

// ////////// Navigating Code with _Go to Definition_

// You can use go to definition to jump to the definition of something

// const myFunction = () => {
//   console.log("Hello!");
// };

// myFunction();

// // This can work across files, too:

// import { hiThere } from "./dummy-import";

// hiThere();

// // As well as on types:

// type Example = PropertyKey;
```

```// import { expect, it } from "vitest";
// import type { Expect, Equal } from "./helpers";
import {
  MAX_PAGE,
  DEFAULT_COLOR,
  DEFAULT_FILTER,
  DEFAULT_PAGE,
  DEFAULT_SORT,
  DEFAULT_USERNAME,
  FILTER_OPTIONS,
} from "./dummy-import-2";
```

```import {
  SESSION_EXPIRATION_TIME,
  SESSION_EXPIRATION_TIME_IN_HOURS,
  SESSION_EXPIRATION_TIME_IN_MINUTES,
  SESSION_EXPIRATION_TIME_IN_SECONDS,
} from "./dummy-import";
// import {
//   MAX_PAGE,
//   DEFAULT_COLOR,
//   DEFAULT_FILTER,
//   DEFAULT_PAGE,
//   DEFAULT_SORT,
//   DEFAULT_USERNAME,
//   FILTER_OPTIONS,
// } from "./dummy-import-2";

// ////// Narrowing Unions with (91)

const convertTime = (time: string | number | boolean) => {
  if (typeof time === "string") {
    console.log(time); // string
  } else if (typeof time === "number") {
    console.log(time); // number
  } else {
    console.log(time); // boolean
  }

  console.log(time); // string | number
};

// RESOLVING LITERAL TYPES TO WIDER TYPES (video 90)

const getResolvedIconSize = (
  iconSize: "small" | "medium" | "large" | (string & {})
) => {
  switch (iconSize) {
    case "small":
      return 16;
    case "medium":
      return 32;
    case "large":
      return 48;
    default:
      return iconSize;
  }
};

// It doesn't give you autocomplete for "small", "medium", or "large"!
getResolvedIconSize("medium");

//////////////////////////////////// (video 88 & 89)

type Alphabet =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z";

type TooBig = string;

// COMBINING UNION TYPES IN TYPE SCRIPT

type ErrorCode = "400" | "401" | "404" | "500";

type SuccessCode = "400" | "401" | "404" | "500" | "200" | "201" | "204";

type HttpCode = ErrorCode | SuccessCode;

const handleErrorCase = (code: ErrorCode) => {
  // An imaginary function where we only handle the errors

  type test = Expect<Equal<typeof code, "400" | "401" | "404" | "500">>;
};

const handleSuccessCase = (code: SuccessCode) => {
  // An imaginary function where we only handle the success cases

  type test = Expect<Equal<typeof code, "200" | "201" | "204">>;
};

const handleAllCase = (code: HttpCode) => {
  // An imaginary function where we handle all the cases

  type test = Expect<
    Equal<typeof code, "200" | "201" | "204" | "400" | "401" | "404" | "500">
  >;
};

// RESTRICTING FUNCTION PARAMETERS (video 84)

function move(direction: "up" | "down" | "left" | "right", distance: number) {
  // Move the specified sidtance in the given direction
}

// TESTS
move("up", 10);
move("left", 5);

// move("up-right", 10);

move(
  // @ts-expect-error - "down-left" is not valid direction
  "down-left",
  10
);

///// HANDLING NULL VALUES IN TYPE SCRIPT (video 81)

function getUsername(username: string | null) {
  if (username !== null) {
    return `User: ${username}`;
  } else {
    return "Guest";
  }
}
// TEST
const result = getUsername("Alice");
type test = Expect<Equal<typeof result, string>>;

const result2 = getUsername(null);
type test2 = Expect<Equal<typeof result2, string>>;

// REFACTORING TO BE ITS OWN FUNCTION: (video 77)
function getPercentage() {
  return Math.random() * 100;
}

const func = () => {
  // Refactor this to be its own function
  const randomPercentage = `${getPercentage().toFixed(2)}%`;
  console.log(randomPercentage);
};

///// ORGANISING IMPORTS COMMAND: Ctrl + Alt + o
// const handlePage = (page: number) => {
//   if (page > MAX_PAGE) {
//     console.log("Page is too large");
//   }
// };

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
```

```
// ///////////////// video 99

// type APIResponse =
//   | {
//       data: {
//         id: string;
//       };
//       error?: string;
//     }
//   | {
//       data?: undefined;
//       error: string;
//     };

// const handleResponse = (response: APIResponse) => {
//   // How do we check if 'data' is in the response?
//   if ("data" in response) {
//     return response.data.id;
//   } else {
//     throw new Error(response.error);
//   }
// };

// it("Should handle a response with data", () => {
//   const response = {
//     data: {
//       id: "123",
//     },
//   };
// });

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
```

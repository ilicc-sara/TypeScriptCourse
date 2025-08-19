# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!-- FETCH METHOD POST: -->

// const newUser = {
// name: "Maria",
// job: "Teacher",
// };

// useEffect(() => {
// const fetchUsers = async () => {
// try {
// const res = await fetch("https://reqres.in/api/users/87", {
// method: "POST",
// headers: {
// "Content-Type": "application/json",
// "x-api-key": "reqres-free-v1",
// },
// body: JSON.stringify(newUser),
// });
// if (!res.ok) {
// console.log("Problem");
// return;
// }
// const data = await res.json();
// console.log(data);
// } catch (error) {
// console.error("Error fetching users:", error);
// }
// };

// fetchUsers();
// }, []);

// useEffect(() => {
// const fetchUsers = async () => {
// try {
// const res = await fetch("https://reqres.in/api/users", {
// headers: {
// "x-api-key": "reqres-free-v1",
// },
// });
// if (!res.ok) {
// console.log("Problem");
// return;
// }
// const data = await res.json();
// console.log(data);
// } catch (error) {
// console.error("Error fetching users:", error);
// }
// };

// fetchUsers();
// }, []);

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const newUser = {
    name: "Maria",
    job: "Teacher",
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://reqres.in/api/users/87", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "reqres-free-v1",
          },
          body: JSON.stringify(newUser),
        });
        if (!res.ok) {
          console.log("Problem");
          return;
        }
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <h1>Baklava</h1>
    </>
  );
}

export default App;

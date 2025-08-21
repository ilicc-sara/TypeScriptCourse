"use client";
import { useState, useEffect } from "react";
import "./App.css";
import Item from "./Item";
import { ToastContainer, toast } from "react-toastify";

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(null);

  toast.success("lkmrfnlk");

  useEffect(() => {
    async function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/todos/123", {
        cache: "no-store",
      })
        .then((res) => {
          console.log(res.status);
          if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
          }
          return res.json();
        })
        .then((json) => {
          setTimeout(() => {
            setData(json);
            setLoading(false);
          }, 3000);
        })
        .catch((err) => {
          console.error("Fetch error:", err.message);
          toast.error(err.message);
          throw err;
        });
    }

    fetchData();
  }, []);

  if (loading) return <div className="loading"></div>;

  return (
    <div className="grid">
      {data?.slice(0, 20).map((todo, index) => (
        <Item
          key={index}
          id={todo.id}
          completed={todo.completed}
          title={todo.title}
          userId={todo.userId}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <ToastContainer position="top-center" />

      <DataFetcher />
    </div>
  );
}

export default App;

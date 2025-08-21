"use client";
import { useState, useEffect } from "react";
import "./App.css";
import Item from "./Item";
import { ToastContainer, toast } from "react-toastify";

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    async function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/todos", {
        cache: "no-store",
      })
        .then((res) => {
          console.log(res.status);

          return res.json();
        })
        .then((json) => {
          setTimeout(() => {
            setData(json);
            setLoading(false);
          }, 2000);
        })
        .catch((err) => {
          console.error("Fetch error:", err.message);
          toast.error(err.message);
          throw err;
        });
    }

    fetchData();
  }, []);

  const handleToggle = (id) => {
    setData((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

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
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <ToastContainer position="top-center" />
      <h1 className="title">✅ Todo Dashboard</h1>
      <DataFetcher />
    </div>
  );
}

export default App;

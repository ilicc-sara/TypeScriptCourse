"use client";
import { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Item from "./Item";
import { ToastContainer, toast } from "react-toastify";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="error-box">
      <h2>⚠️ Oops, something went wrong!</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>🔄 Try again</button>
    </div>
  );
}

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeId, setActiveId] = useState(null);

  toast.success("lkmrfnlk");

  useEffect(() => {
    async function fetchData() {
      fetch("https://jsonplaceholder.typicode.com/toos")
        .then((res) => {
          if (!res.ok) throw new Error(`Error: ${res.status}`);
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
      {data.slice(0, 20).map((todo, index) => (
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
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          window.location.reload();
        }}
      >
        <DataFetcher />
      </ErrorBoundary>
    </div>
  );
}

export default App;

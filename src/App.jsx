"use client";
import { useState, useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" style={{ padding: "1rem", color: "red" }}>
      <p>Some page text</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!res.ok) throw new Error(`error: ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("error fetch:", err);
        throw err;
      }
    }
    fetchData();
  }, []);

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      <DataFetcher />
    </ErrorBoundary>
  );
}

export default App;

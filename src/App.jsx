import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://reqres.in/api/users`).then(
          (res) => {
            console.log(res);
          }
        );
        const posts = await response.json();
        console.log(posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  return <></>;
}

export default App;

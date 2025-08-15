import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`https://reqres.in/api/users`)
        .then((res) => {
          res.json();
        })
        .then((data) => {
          console.log(data);
        });
      // const posts = await response.json();
      // console.log(posts);
    };

    fetchPost();
  }, []);

  return <></>;
}

export default App;

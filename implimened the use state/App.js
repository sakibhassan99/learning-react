import React, { useState } from "./React";
import { render } from "./react-dom";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);
  return (
    <>
      <h1
        style={{ textAlign: "center", cursor: "pointer", userSelect: "none" }}
        onclick={() => setCount(count + 1)}
      >
        {count}
      </h1>
      <h1
        style={{ textAlign: "center", cursor: "pointer", userSelect: "none" }}
        onclick={() => setCount2(count2 + 1)}
      >
        {count2}
      </h1>
    </>
  );
}

render(<App />, document.getElementById("root"));

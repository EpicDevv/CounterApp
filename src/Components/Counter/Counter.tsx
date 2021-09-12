import React from "react";
import "./Counter.css";

const { useState } = React;

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter increment
      </button>
    </div>
  );
}

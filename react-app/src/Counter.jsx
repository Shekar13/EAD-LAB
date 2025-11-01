import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <h2>🔢 Counter Example</h2>
      <p className="count-display">
        Current Count: {count}
      </p>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
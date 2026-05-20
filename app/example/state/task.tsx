import React, { useState, useEffect } from "react";

function Counter() {
  // Existing state
  const [count, setCount] = useState(0);

  // New state: count2
  const [count2, setCount2] = useState(0);

  // Alert whenever count2 changes
  useEffect(() => {
    alert(`count2 changed to ${count2}`);
  }, [count2]);

  // Alert if count is greater than 10 or less than 0
  useEffect(() => {
    if (count > 10) {
      alert("Count is greater than 10");
    }

    if (count < 0) {
      alert("Count is less than 0");
    }
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>

      {/* Example buttons for count */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setCount(count - 1)}>Decrease Count</button>
      <button onClick={() => setCount(0)}>Reset Count</button>

      <hr />

      <h1>Count2: {count2}</h1>

      {/* Buttons for count2 */}
      <button onClick={() => setCount2(count2 + 1)}>Increment</button>
      <button onClick={() => setCount2(count2 - 1)}>Decrement</button>
      <button onClick={() => setCount2(0)}>Reset</button>
    </div>
  );
}

export default Counter;
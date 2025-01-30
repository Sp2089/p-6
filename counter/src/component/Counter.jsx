import React, { useState, useEffect } from 'react';

function Counter() {
  // State for the counter
  const [count, setCount] = useState(0);

  // Update the document title every time the counter changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Dependency on count, so it updates when count changes

  // Increment counter
  const increment = () => setCount(count + 1);

  // Decrement counter
  const decrement = () => setCount(count - 1);

  return (
    <div style={styles.container}>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={increment} style={styles.button}>Increment</button>
        <button onClick={decrement} style={styles.button}>Decrement</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  }
};

export default Counter;
